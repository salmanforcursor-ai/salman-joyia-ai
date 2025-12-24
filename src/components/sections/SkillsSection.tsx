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
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Expertise</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Technical Skills & Proficiency
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Expert-level knowledge across AI, RPA, cloud platforms, and modern data technologies.
            </p>
          </div>

          {/* Skills Grid by Category */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div
                key={category}
                className="p-6 lg:p-8 bg-card rounded-2xl border-2 border-border shadow-card card-hover"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">{categoryIcons[category] || "📚"}</span>
                  <h3 className="text-xl font-bold text-foreground">{category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="flex items-start justify-between gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-semibold text-foreground text-sm md:text-base">{skill.name}</p>
                          <Badge
                            variant="outline"
                            className={`text-xs font-bold uppercase tracking-widest ${proficiencyColors[skill.proficiency]}`}
                          >
                            {skill.proficiency}
                          </Badge>
                        </div>
                        <div className="h-2 bg-secondary/50 rounded-full overflow-hidden border border-border/50">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              skill.proficiency === "expert"
                                ? "bg-gradient-to-r from-primary to-accent w-full"
                                : skill.proficiency === "advanced"
                                  ? "bg-gradient-to-r from-accent to-primary w-4/5"
                                  : "bg-muted-foreground w-3/5"
                            }`}
                          />
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap bg-secondary/50 px-2 py-1 rounded">
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
