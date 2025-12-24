import { ExternalLink, Github, Bot, Zap, Camera, MessageSquare, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Bot,
    title: "AI-Powered Automation Hub",
    description: "A comprehensive automation platform integrating n8n workflows with AI agents for intelligent task processing. Handles document analysis, data extraction, and automated decision-making.",
    techStack: ["n8n", "Python", "OpenAI API", "FastAPI", "PostgreSQL"],
    outcome: "Reduced manual processing time by 85% for enterprise clients.",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: Zap,
    title: "FastAPI AI Backend",
    description: "Scalable backend infrastructure powering AI services including model inference, real-time predictions, and webhook-based integrations with multiple third-party platforms.",
    techStack: ["FastAPI", "Python", "Redis", "Docker", "AWS"],
    outcome: "Handles 10,000+ API requests per minute with 99.9% uptime.",
    color: "from-accent/20 to-primary/10",
  },
  {
    icon: Camera,
    title: "AI Passport Photo SaaS",
    description: "Intelligent photo processing application using computer vision for automatic background removal, face detection, and compliance checking for passport photos across multiple countries.",
    techStack: ["Python", "OpenCV", "TensorFlow", "React", "Stripe"],
    outcome: "Processes photos in under 3 seconds with 98% compliance accuracy.",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: MessageSquare,
    title: "AI Analytics Chatbot",
    description: "Natural language interface for business intelligence, allowing non-technical users to query databases and generate reports through conversational interactions.",
    techStack: ["LangChain", "OpenAI", "FastAPI", "PostgreSQL", "React"],
    outcome: "Empowered 50+ business users with self-service analytics.",
    color: "from-accent/20 to-primary/10",
  },
  {
    icon: Bell,
    title: "Intelligent Monitoring & Alerting",
    description: "Real-time monitoring system using AI to detect anomalies in business metrics, infrastructure, and operational data, with smart alerting that reduces noise.",
    techStack: ["Python", "n8n", "Grafana", "Slack API", "PagerDuty"],
    outcome: "Reduced alert fatigue by 70% while catching 95% of critical issues.",
    color: "from-primary/20 to-accent/20",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in AI automation, 
              backend development, and intelligent systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card hover-lift group ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
                
                <div className={`flex flex-col ${index === 0 ? "lg:flex-row lg:gap-8" : ""}`}>
                  {/* Icon */}
                  <div className={`${index === 0 ? "lg:w-1/3 lg:flex lg:items-center lg:justify-center" : ""}`}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <project.icon size={28} className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index === 0 ? "lg:w-2/3" : ""}`}>
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Outcome */}
                    <div className="flex items-start gap-2 p-3 bg-accent/50 rounded-lg">
                      <span className="text-sm font-medium text-accent-foreground">
                        📈 {project.outcome}
                      </span>
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
