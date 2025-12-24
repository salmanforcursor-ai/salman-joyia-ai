import { ArrowRight, Bot, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28">
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
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent/50 border border-primary/10 mb-8 animate-fade-in shadow-sm">
            <Bot size={16} className="text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-accent-foreground whitespace-nowrap">AI Automation Engineer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Muhammad Salman Iqbal
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Enterprise AI & Automation Architect
          </p>

          {/* Value Proposition */}
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-foreground mb-6 sm:mb-8 leading-relaxed animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.3s" }}>
            I transform business processes into <span className="text-gradient">intelligent, automated workflows</span> — delivering millions in value and freeing teams to focus on strategy.
          </p>

          {/* Trust Statement */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.35s" }}>
            Trusted by Fortune 500 companies to architect RPA, AI/ML, and cloud solutions that eliminate manual work at scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in mb-12 sm:mb-16" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="gap-2 text-base px-6 sm:px-8 w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow" asChild>
              <a href="#case-studies">
                <Workflow size={20} />
                See Case Studies
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-6 sm:px-8 w-full sm:w-auto border-2 hover:bg-primary/5 transition-colors" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-12 sm:pt-16 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">$15M+</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Client Value Created</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">100+</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Workflows Deployed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">50+</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">12+</p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
