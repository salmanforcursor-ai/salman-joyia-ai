import { Award, BookOpen, TrendingUp } from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "Microsoft AI-900",
    description: "Azure AI Fundamentals certification demonstrating understanding of AI and machine learning concepts on Azure.",
    type: "Certification",
  },
];

const learningAreas = [
  "Reinforcement Learning (Q-Learning, DQN, PPO, SAC, A3C)",
  "Large Language Model Fine-tuning",
  "Computer Vision & Image Processing",
  "Cloud Architecture & DevOps",
  "Automation Platform Best Practices",
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Credentials</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Certifications & Learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Committed to continuous learning and staying current with the latest 
              in AI, automation, and software engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Certifications */}
            <div className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
              </div>

              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <cert.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{cert.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Learning */}
            <div className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <TrendingUp size={24} className="text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Continuous Learning</h3>
              </div>

              <div className="space-y-3">
                {learningAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <BookOpen size={16} className="text-muted-foreground flex-shrink-0" />
                    <span className="text-sm text-foreground">{area}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-muted-foreground italic">
                "I believe in project-based learning and staying hands-on with emerging technologies."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
