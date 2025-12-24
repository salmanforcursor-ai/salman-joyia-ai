import { Mail, Linkedin, Github, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@salmanjoyia.com",
    href: "mailto:contact@salmanjoyia.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/salmanjoyia",
    href: "https://linkedin.com/in/salmanjoyia",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/salmanjoyia",
    href: "https://github.com/salmanjoyia",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree - replace with your form ID
      const formspreeId = "YOUR_FORMSPREE_ID"; // Get this from formspree.io
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Fallback to mailto if Formspree fails
      const mailtoLink = `mailto:contact@salmanjoyia.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
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
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how AI automation can streamline your operations and drive measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Name *</label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Company</label>
                  <Input
                    name="company"
                    placeholder="Your company (optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-secondary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Message *</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or challenge..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight size={16} />}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              {/* Quick Links */}
              <div className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-6">Connect Directly</h3>
                <div className="space-y-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary hover:border-primary/50 transition-colors border border-transparent group"
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
