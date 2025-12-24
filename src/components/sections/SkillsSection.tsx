import { 
  Bot, 
  Workflow, 
  Plug, 
  Cog,
  Code2,
  Database,
  Globe,
  Zap,
  Eye,
  Brain,
  Cpu,
  Sparkles,
  Cloud,
  GitBranch,
  Container,
  Webhook
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Automation",
    icon: Bot,
    color: "bg-primary/10 text-primary",
    skills: [
      { name: "n8n", icon: Workflow },
      { name: "Make.com", icon: Cog },
      { name: "AI Agents", icon: Bot },
      { name: "Workflow Automation", icon: Zap },
      { name: "API Integrations", icon: Plug },
    ],
  },
  {
    title: "Backend & Systems",
    icon: Code2,
    color: "bg-accent text-accent-foreground",
    skills: [
      { name: "FastAPI", icon: Zap },
      { name: "Python", icon: Code2 },
      { name: "REST APIs", icon: Globe },
      { name: "WebSockets", icon: Plug },
      { name: "Background Tasks", icon: Cog },
    ],
  },
  {
    title: "AI & Data",
    icon: Brain,
    color: "bg-primary/10 text-primary",
    skills: [
      { name: "Computer Vision", icon: Eye },
      { name: "LLM Integration", icon: Sparkles },
      { name: "Model Inference", icon: Cpu },
      { name: "OpenAI / HuggingFace", icon: Brain },
      { name: "Data Processing", icon: Database },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    color: "bg-accent text-accent-foreground",
    skills: [
      { name: "AWS / Azure", icon: Cloud },
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "Webhooks", icon: Webhook },
      { name: "CI/CD", icon: Cog },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Core Skills</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set spanning AI, automation, backend development, and cloud technologies 
              to deliver end-to-end solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card hover-lift"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg"
                    >
                      <skill.icon size={16} className="text-muted-foreground flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground truncate">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
