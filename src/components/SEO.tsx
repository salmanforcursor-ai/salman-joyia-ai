import { useEffect } from "react";
import { config } from "@/config/constants";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
}

/**
 * SEO component that injects structured data and updates meta tags
 */
export function SEO({ title, description, image, url, type = "website" }: SEOProps) {
  const siteTitle = title ? `${title} | ${config.site.name}` : `${config.site.name} | Enterprise AI & Automation Architect`;
  const siteDescription = description || "12+ years of experience transforming operations for Fortune 500 companies. Specializing in AI automation, RPA, workflow optimization, and intelligent systems.";
  const siteUrl = url || config.site.url;
  const siteImage = image || `${config.site.url}/og-image.jpg`;

  useEffect(() => {
    // Update document title
    document.title = siteTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Primary meta tags
    updateMetaTag("description", siteDescription);
    updateMetaTag("title", siteTitle);

    // Open Graph tags
    updateMetaTag("og:title", siteTitle, "property");
    updateMetaTag("og:description", siteDescription, "property");
    updateMetaTag("og:type", type, "property");
    updateMetaTag("og:url", siteUrl, "property");
    updateMetaTag("og:image", siteImage, "property");

    // Twitter tags
    updateMetaTag("twitter:title", siteTitle);
    updateMetaTag("twitter:description", siteDescription);
    updateMetaTag("twitter:image", siteImage);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = siteUrl;
  }, [siteTitle, siteDescription, siteUrl, siteImage, type]);

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.site.name,
    jobTitle: "Enterprise AI & Automation Architect",
    description: siteDescription,
    url: config.site.url,
    sameAs: [
      config.social.linkedin,
      config.social.github,
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Process Automation",
      "Robotic Process Automation",
      "Workflow Automation",
      "Python Programming",
      "FastAPI",
      "n8n",
      "Make.com",
      "Zapier",
      "Cloud Architecture",
    ],
    offers: {
      "@type": "Service",
      serviceType: "AI Automation Consulting",
      areaServed: "Worldwide",
      description: "Enterprise AI automation, RPA implementation, and workflow optimization services",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

