import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Real Results</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Case Studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep-dive into enterprise projects showing measurable impact, from invoice automation to AI-powered churn prediction.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-8">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`overflow-hidden border border-border/50 rounded-2xl shadow-card hover:shadow-lg transition-shadow ${
                  index % 2 === 0 ? "bg-card" : "bg-secondary/20"
                }`}
              >
                <div className="grid lg:grid-cols-2">
                  {/* Left: Info */}
                  <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                            {caseStudy.industry}
                          </span>
                          <span className="text-xs text-muted-foreground">{caseStudy.timeline}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                          {caseStudy.title}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-3">{caseStudy.client}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {caseStudy.shortDescription}
                        </p>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Challenge:</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {caseStudy.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Solution:</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {caseStudy.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className={`p-6 md:p-8 lg:p-10 flex items-center ${
                    index % 2 === 0
                      ? "bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"
                      : "bg-gradient-to-br from-accent/10 via-transparent to-primary/5"
                  }`}>
                    <div className="w-full">
                      <div className="flex items-center gap-2 mb-6">
                        <TrendingUp size={20} className="text-primary" />
                        <h4 className="text-lg font-semibold text-foreground">Key Results</h4>
                      </div>

                      <div className="space-y-4">
                        {caseStudy.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-background rounded-lg border border-border/50"
                          >
                            <p className="text-xs text-muted-foreground mb-1">{result.metric}</p>
                            <p className="text-lg md:text-2xl font-bold text-primary mb-1">
                              {result.value}
                            </p>
                            <p className="text-xs md:text-sm text-foreground font-medium">
                              {result.impact}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-border/50 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your operations?
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="#contact">
                Start Your Project
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
