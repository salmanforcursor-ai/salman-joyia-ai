import { 
  Camera, 
  FileSpreadsheet, 
  MessageSquareText, 
  PenTool, 
  Workflow, 
  Plug,
  AlertTriangle,
  CheckCircle2,
  Lightbulb
} from "lucide-react";

const useCases = [
  {
    icon: Camera,
    title: "AI Camera Monitoring & Alerts",
    problem: "Manual security monitoring is expensive, error-prone, and impossible to scale across multiple locations.",
    solution: "AI agents that analyze camera feeds in real-time, detect anomalies, and automatically send alerts to the right people.",
    benefit: "24/7 automated surveillance with instant notifications, reducing security costs by up to 70%.",
  },
  {
    icon: FileSpreadsheet,
    title: "Automated Data Extraction & Reporting",
    problem: "Teams spend hours manually collecting data from multiple sources and creating reports.",
    solution: "Automated pipelines that extract, transform, and compile data from various sources into structured reports.",
    benefit: "Save 20+ hours weekly on reporting tasks while improving data accuracy and consistency.",
  },
  {
    icon: MessageSquareText,
    title: "AI Chatbots for Analytics & Insights",
    problem: "Business users struggle to access and interpret data without technical knowledge or SQL skills.",
    solution: "LLM-powered chatbots that understand natural language queries and provide instant data insights.",
    benefit: "Democratize data access across your organization and accelerate decision-making.",
  },
  {
    icon: PenTool,
    title: "AI Content Automation Pipelines",
    problem: "Content creation is time-consuming and difficult to maintain consistency at scale.",
    solution: "End-to-end content workflows using AI for generation, editing, formatting, and publishing.",
    benefit: "Produce 10x more content while maintaining quality and brand consistency.",
  },
  {
    icon: Workflow,
    title: "Business Workflow Automation",
    problem: "Repetitive manual tasks drain productivity and introduce human errors into business processes.",
    solution: "Custom n8n and Make.com workflows that automate repetitive tasks and connect your tools.",
    benefit: "Eliminate manual work, reduce errors, and free your team to focus on high-value activities.",
  },
  {
    icon: Plug,
    title: "API-to-API Automation Systems",
    problem: "Disconnected systems create data silos and require manual data transfer between platforms.",
    solution: "Intelligent middleware that connects any APIs, syncs data in real-time, and handles edge cases.",
    benefit: "Unified data flow across all your tools with zero manual intervention.",
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Solutions</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Automation Use-Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-world automation solutions that solve common business challenges. 
              Each solution is designed to deliver measurable ROI and scale with your needs.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card hover-lift group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground pt-2">{useCase.title}</h3>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Problem */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle size={14} className="text-destructive" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground">{useCase.problem}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Lightbulb size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Solution</p>
                      <p className="text-sm text-muted-foreground">{useCase.solution}</p>
                    </div>
                  </div>

                  {/* Benefit */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Business Benefit</p>
                      <p className="text-sm text-muted-foreground">{useCase.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
