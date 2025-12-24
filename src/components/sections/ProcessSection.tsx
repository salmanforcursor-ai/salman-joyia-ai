import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description: "Deep dive into your business processes, pain points, and goals. I analyze existing workflows to identify automation opportunities with the highest impact.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description: "Architect the optimal automation workflow, selecting the right tools and AI capabilities. Create clear specifications before any code is written.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description: "Develop the automation solution with clean, maintainable code. Integrate AI components, APIs, and testing to ensure reliability at scale.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    description: "Launch the automation with proper monitoring and documentation. Provide ongoing optimization based on real-world performance data.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Methodology</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How I Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven process that ensures successful automation projects, 
              from initial discovery to production deployment and beyond.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative p-6 bg-card rounded-2xl border border-border/50 shadow-card hover-lift group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-4 mb-5 group-hover:bg-primary/20 transition-colors">
                    <step.icon size={24} className="text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
