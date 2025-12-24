import { Brain, Code2, Cpu, Zap, CheckCircle2 } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Enterprise AI Architecture",
    description: "Designing and deploying AI/ML systems at scale. From predictive models to intelligent automation, I architect solutions that drive measurable business impact.",
  },
  {
    icon: Cpu,
    title: "RPA & Process Automation",
    description: "Specializing in enterprise RPA using UiPath and Power Automate. I optimize workflows, eliminate manual work, and integrate disparate systems seamlessly.",
  },
  {
    icon: Code2,
    title: "Cloud & Backend Engineering",
    description: "Building scalable solutions on Azure, AWS, and GCP. From data pipelines to real-time APIs, I engineer infrastructure that handles enterprise workloads.",
  },
  {
    icon: Zap,
    title: "Business Impact Focused",
    description: "Every project is measured by ROI. I work backwards from business goals to engineer solutions that deliver cost savings, efficiency gains, and revenue growth.",
  },
];

const expertise = [
  "Reduced manual processes by 80-90% across 50+ enterprise clients",
  "Architected AI solutions delivering $15M+ in measurable value",
  "Led digital transformation initiatives for Fortune 500 companies",
  "Expert in RPA, AI/ML, Process Mining, and Cloud Architecture",
  "Specialized in end-to-end solution design and implementation",
  "Track record of 340% average ROI on automation projects",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Enterprise AI & Automation Specialist
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm Salman Joyia, an Enterprise AI Architect with 12+ years of experience transforming operations 
              for Fortune 500 companies. I specialize in designing and deploying enterprise-scale automation solutions 
              that eliminate manual work, drive measurable results, and unlock organizational efficiency.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-lg hover:border-primary/50 transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Expertise Highlights */}
          <div className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Track Record</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
