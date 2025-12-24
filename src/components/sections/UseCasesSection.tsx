import { 
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Target,
  Mail,
  FileText,
  MessageSquare,
  Repeat,
  Bell
} from "lucide-react";
import { useCases } from "@/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Target: Target,
  Mail: Mail,
  FileText: FileText,
  MessageSquare: MessageSquare,
  Repeat: Repeat,
  Bell: Bell,
};

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Solutions</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Proven Automation Solutions
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real-world automation solutions addressing common business challenges. 
              Each solution is tailored to maximize ROI and scale with your organization's needs.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-lg hover:border-primary/50 transition-all group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20 transition-all group-hover:bg-primary/15 group-hover:border-primary/30 group-hover:scale-105">
                    {iconMap[useCase.icon] ? (
                      (() => {
                        const IconComponent = iconMap[useCase.icon];
                        return <IconComponent size={24} className="text-primary transition-transform group-hover:scale-110" />;
                      })()
                    ) : (
                      <FileText size={24} className="text-primary transition-transform group-hover:scale-110" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{useCase.title}</h3>
                    {useCase.industry && (
                      <p className="text-xs text-primary font-medium mt-1">{useCase.industry}</p>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Problem */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle size={14} className="text-destructive" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1 uppercase tracking-wide">Challenge</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{useCase.problem}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Lightbulb size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1 uppercase tracking-wide">Solution</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{useCase.solution}</p>
                    </div>
                  </div>

                  {/* Benefit */}
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-1 uppercase tracking-wide">Business Benefit</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{useCase.benefit}</p>
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
