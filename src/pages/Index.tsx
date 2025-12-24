import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

// Lazy load sections for code splitting
const HeroSection = lazy(() => import("@/components/sections/HeroSection").then(m => ({ default: m.HeroSection })));
const AboutSection = lazy(() => import("@/components/sections/AboutSection").then(m => ({ default: m.AboutSection })));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection").then(m => ({ default: m.SkillsSection })));
const UseCasesSection = lazy(() => import("@/components/sections/UseCasesSection").then(m => ({ default: m.UseCasesSection })));
const CaseStudiesSection = lazy(() => import("@/components/sections/CaseStudiesSection").then(m => ({ default: m.CaseStudiesSection })));
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const CertificationsSection = lazy(() => import("@/components/sections/CertificationsSection").then(m => ({ default: m.CertificationsSection })));
const ContactSection = lazy(() => import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection })));

// Loading fallback component
const SectionSkeleton = () => (
  <div className="py-20 lg:py-32">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-secondary rounded w-1/4 mb-4"></div>
        <div className="h-12 bg-secondary rounded w-1/2 mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-secondary rounded"></div>
          <div className="h-4 bg-secondary rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <main id="main" className="scroll-smooth">
        <Suspense fallback={<SectionSkeleton />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <UseCasesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CaseStudiesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CertificationsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
