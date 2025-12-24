import { Award, ExternalLink, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data";

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-primary/20 text-primary border-primary/30",
  Cloud: "bg-accent/20 text-accent-foreground border-accent/30",
  Automation: "bg-orange-500/20 text-orange-600 border-orange-500/30",
  Data: "bg-purple-500/20 text-purple-600 border-purple-500/30",
  Other: "bg-secondary/50 text-secondary-foreground",
};

export function CertificationsSection() {
  const certsByCategory = certifications.reduce(
    (acc, cert) => {
      if (!acc[cert.category]) acc[cert.category] = [];
      acc[cert.category].push(cert);
      return acc;
    },
    {} as Record<string, typeof certifications>
  );

  return (
    <section id="certifications" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Credentials</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Certifications & Expertise
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Industry-recognized certifications from Microsoft, AWS, Google Cloud, UiPath, and Databricks 
              validating expertise across AI, cloud, and automation platforms.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {Object.entries(certsByCategory).map(([category, certs]) => (
              <div
                key={category}
                className="p-6 lg:p-8 bg-card rounded-2xl border-2 border-border shadow-card card-hover"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category}</h3>
                </div>

                {/* Certificates List */}
                <div className="space-y-4">
                  {certs.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 bg-secondary/40 rounded-lg border-2 border-border/50 hover:border-primary/40 hover:bg-secondary/60 transition-all"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm md:text-base">{cert.title}</p>
                          <p className="text-xs md:text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-xs whitespace-nowrap ${categoryColors[cert.category]}`}
                        >
                          {cert.date}
                        </Badge>
                      </div>
                      {cert.credentialUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2 h-auto p-0 text-xs text-primary hover:text-primary/80 mt-2"
                          asChild
                        >
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <Globe size={14} />
                            View Credential
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-12 border-t border-border/50">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">{certifications.length}+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">Active Certifications</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">{Object.keys(certsByCategory).length}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">Technology Areas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">12+</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">100%</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2">Commitment to Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
