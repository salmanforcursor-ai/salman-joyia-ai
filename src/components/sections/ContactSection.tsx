import { Mail, Linkedin, Github, ArrowRight, MessageSquare, Phone, AlertCircle } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { config } from "@/config/constants";
import { validateContactForm, sanitizeInput } from "@/lib/form-validation";
import { checkRateLimit, recordSubmission, getTimeUntilReset } from "@/lib/rate-limiter";
import { trackFormSubmission, trackCTAClick } from "@/lib/analytics";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: config.contactEmail,
    href: `mailto:${config.contactEmail}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: config.social.linkedin.replace("https://", ""),
    href: config.social.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: config.social.github.replace("https://", ""),
    href: config.social.github,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    honeypot: "", // Hidden field for spam protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);
  const [timeUntilReset, setTimeUntilReset] = useState(0);

  // Check rate limit on mount and periodically
  useEffect(() => {
    const checkLimit = () => {
      const exceeded = checkRateLimit();
      setRateLimitExceeded(exceeded);
      if (exceeded) {
        setTimeUntilReset(getTimeUntilReset());
      }
    };

    checkLimit();
    const interval = setInterval(() => {
      checkLimit();
      if (rateLimitExceeded) {
        setTimeUntilReset(getTimeUntilReset());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [rateLimitExceeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Sanitize input
    const sanitized = name === "honeypot" ? value : sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    // Check rate limit
    if (checkRateLimit()) {
      const timeRemaining = getTimeUntilReset();
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      toast({
        title: "Rate limit exceeded",
        description: `Please wait ${minutes}m ${seconds}s before submitting again.`,
        variant: "destructive",
      });
      setRateLimitExceeded(true);
      setTimeUntilReset(timeRemaining);
      return;
    }

    // Check honeypot (spam protection)
    if (formData.honeypot) {
      // Bot detected - silently fail
      console.warn("Spam detected via honeypot");
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "", honeypot: "" });
      return;
    }

    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.success) {
      setErrors(validation.errors || {});
      toast({
        title: "Validation error",
        description: "Please check the form and fix any errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      if (!config.formspreeId) {
        throw new Error("Form configuration missing");
      }

      const response = await fetch(`https://formspree.io/f/${config.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: validation.data!.name,
          email: validation.data!.email,
          company: validation.data!.company || "",
          message: validation.data!.message,
          _subject: `Contact Form: ${validation.data!.name}`,
        }),
      });

      if (response.ok) {
        recordSubmission();
        trackFormSubmission("contact", true);
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", company: "", message: "", honeypot: "" });
        setErrors({});
      } else {
        trackFormSubmission("contact", false);
        const errorData = await response.json().catch(() => ({}));
        toast({
          title: "Error",
          description: errorData.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Fallback to mailto if Formspree fails
      const mailtoLink = `mailto:${config.contactEmail}?subject=Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      toast({
        title: "Opening email client...",
        description: "Your default email client should open shortly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Ready to transform your business?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's discuss how AI automation can streamline your operations and drive measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card card-hover">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
                  aria-hidden="true"
                />

                {/* Rate limit warning */}
                {rateLimitExceeded && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
                    <AlertCircle size={20} className="text-destructive flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-destructive">Rate limit exceeded</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Please wait {Math.floor(timeUntilReset / 60)}m {timeUntilReset % 60}s before submitting again.
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-foreground block mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`input-enhanced ${errors.name ? "border-destructive" : ""}`}
                    aria-required="true"
                    aria-label="Full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-foreground block mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`input-enhanced ${errors.email ? "border-destructive" : ""}`}
                    aria-required="true"
                    aria-label="Email address"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-semibold text-foreground block mb-2">
                    Company <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className={`input-enhanced ${errors.company ? "border-destructive" : ""}`}
                    aria-label="Company name"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.company}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-foreground block mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project, challenge, or automation need..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`input-enhanced resize-none ${errors.message ? "border-destructive" : ""}`}
                    aria-required="true"
                    aria-label="Your message"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || rateLimitExceeded}
                  className="w-full gap-2 font-semibold"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight size={16} />}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              {/* Quick Links */}
              <div className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card card-hover">
                <h3 className="text-xl font-semibold text-foreground mb-6">Connect Directly</h3>
                <div className="space-y-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-primary/10 hover:border-primary/40 transition-all border border-border/50 group"
                      aria-label={`Contact via ${link.label}`}
                      onClick={() => trackCTAClick(`contact_${link.label.toLowerCase()}`, "contact_section")}
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <link.icon size={20} className="text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">{link.label}</p>
                        <p className="text-sm font-medium text-foreground truncate">{link.value}</p>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 lg:p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Currently Available</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      I'm actively taking on new enterprise automation projects. Typical response time: 24 hours.
                    </p>
                    <p className="text-xs text-primary font-medium">✓ Quick turnaround on project proposals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
