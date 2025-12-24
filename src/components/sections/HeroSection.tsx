import { ArrowRight, Bot, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/10 mb-8 animate-fade-in">
            <Bot size={16} className="text-primary" />
            <span className="text-sm font-medium text-accent-foreground">AI Automation Engineer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Salman Joyia
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI Automation Engineer | FastAPI Backend Developer | AI Agents & Workflow Specialist
          </p>

          {/* Value Proposition */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            I build <span className="text-gradient">AI-powered automation systems</span> that save time, reduce cost, and scale operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="gap-2 text-base px-8" asChild>
              <a href="#use-cases">
                <Workflow size={20} />
                View Automations
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8" asChild>
              <a href="#contact">
                Contact Me
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground mt-1">Automations Built</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-foreground">1000+</p>
              <p className="text-sm text-muted-foreground mt-1">Hours Saved</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-foreground">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
