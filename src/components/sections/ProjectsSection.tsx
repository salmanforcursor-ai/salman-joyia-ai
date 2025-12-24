import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";

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
                key={project.id}
                className={`p-6 lg:p-8 bg-card rounded-2xl border-2 border-border shadow-card card-hover ${
                  project.featured && index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary font-semibold uppercase tracking-widest">{project.role}</p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="p-4 bg-primary/5 rounded-lg mb-4 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                    <p className="text-sm font-semibold text-foreground">
                      <span className="text-primary mr-2">📈</span> 
                      <span className="text-primary font-bold">{project.impact}</span>
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-semibold bg-secondary text-secondary-foreground rounded-full border border-border/50 hover:border-primary/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border/50">
                    {project.github && (
                      <Button variant="outline" size="sm" className="gap-2 flex-1 font-semibold" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.link && (
                      <Button size="sm" className="gap-2 flex-1 font-semibold" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View project">
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      </Button>
                    )}
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
