import { Badge } from "@/components/ui/badge";
import { skillsByCategory } from "@/data";

const categoryIcons: Record<string, string> = {
  "AI & Machine Learning": "🤖",
  "RPA & Automation": "⚡",
  "Cloud Platforms": "☁️",
  "Data & Analytics": "📊",
};

const proficiencyColors: Record<string, string> = {
  expert: "bg-primary/20 text-primary border-primary/30",
  advanced: "bg-accent/20 text-accent-foreground border-accent/30",
  intermediate: "bg-secondary/50 text-secondary-foreground",
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Expertise</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Technical Skills & Proficiency
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert-level knowledge across AI, RPA, cloud platforms, and modern data technologies.
            </p>
          </div>

          {/* Skills Grid by Category */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div
                key={category}
                className="p-6 lg:p-8 bg-card rounded-2xl border border-border/50 shadow-card hover:shadow-lg transition-shadow"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{categoryIcons[category] || "📚"}</span>
                  <h3 className="text-xl font-semibold text-foreground">{category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-foreground">{skill.name}</p>
                          <Badge
                            variant="outline"
                            className={`text-xs ${proficiencyColors[skill.proficiency]}`}
                          >
                            {skill.proficiency}
                          </Badge>
                        </div>
                        <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              skill.proficiency === "expert"
                                ? "bg-primary w-full"
                                : skill.proficiency === "advanced"
                                  ? "bg-accent w-4/5"
                                  : "bg-muted-foreground w-3/5"
                            }`}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {skill.yearsOfExperience}y
                      </span>
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
