import { Brain, Code2, Cpu, Zap } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Deep expertise in reinforcement learning (Q-Learning, DQN, PPO, SAC, A3C), computer vision, and LLM fine-tuning for production systems.",
  },
  {
    icon: Cpu,
    title: "AI Agents & Automation",
    description: "Specializing in building intelligent automation workflows using n8n, Make.com, and custom AI agents that understand context and take action.",
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    description: "Building scalable FastAPI backends with REST APIs, WebSockets, background task processing, and seamless cloud integrations.",
  },
  {
    icon: Zap,
    title: "Workflow Optimization",
    description: "Designing end-to-end automation solutions that reduce manual work, improve operational efficiency, and integrate AI into business processes.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Engineering Intelligence Into Workflows
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm Salman Joyia, an AI Automation Engineer specializing in building intelligent automation systems 
              that transform how businesses operate. With a strong foundation in AI/ML and backend engineering, 
              I bridge the gap between cutting-edge AI and practical business solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-4">My Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in building practical, deployable solutions that deliver real business value. 
                  Every automation I create is designed with scalability, reliability, and maintainability in mind. 
                  Whether it's a simple workflow or a complex AI-powered system, I focus on understanding 
                  the business problem first and engineering the right solution.
                </p>
              </div>
              <div className="w-full lg:w-px h-px lg:h-32 bg-border" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-4">Working Style</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I thrive in collaborative environments where I can work closely with stakeholders to 
                  understand their needs. My experience spans freelance projects to SaaS development, 
                  giving me a unique perspective on building solutions that work for both small businesses 
                  and growing enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
