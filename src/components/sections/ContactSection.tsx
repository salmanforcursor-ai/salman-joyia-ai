import { Mail, Linkedin, Github, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative overflow-hidden p-8 lg:p-12 bg-card rounded-3xl border border-border/50 shadow-soft">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
                  <MessageSquare size={16} className="text-primary" />
                  <span className="text-sm font-medium text-primary">Available for Projects</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Let's automate your workflow.
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Ready to transform your business with AI-powered automation? 
                  Let's discuss how I can help streamline your operations.
                </p>
              </div>

              {/* Contact Links */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon size={20} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{link.label}</p>
                      <p className="text-sm font-medium text-foreground truncate">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button size="lg" className="gap-2 text-base px-8" asChild>
                  <a href="mailto:contact@salmanjoyia.com">
                    Send a Message
                    <ArrowRight size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
