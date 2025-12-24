export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  category: "AI/ML" | "Cloud" | "Automation" | "Data" | "Other";
}

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
    category: "AI/ML",
  },
  {
    id: "2",
    title: "Azure Administrator Associate (AZ-104)",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",
    category: "Cloud",
  },
  {
    id: "3",
    title: "Azure Solutions Architect Expert (AZ-305)",
    issuer: "Microsoft",
    date: "2024",
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-solutions-architect-expert/",
    category: "Cloud",
  },
  {
    id: "4",
    title: "UiPath RPA Developer",
    issuer: "UiPath",
    date: "2023",
    credentialUrl: "https://www.uipath.com/learning/certification",
    category: "Automation",
  },
  {
    id: "5",
    title: "Certified Data Engineer Associate",
    issuer: "Databricks",
    date: "2024",
    credentialUrl: "https://academy.databricks.com/",
    category: "Data",
  },
  {
    id: "6",
    title: "Microsoft Power Platform Functional Consultant (PL-200)",
    issuer: "Microsoft",
    date: "2023",
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/power-platform-functional-consultant-core/",
    category: "Automation",
  },
  {
    id: "7",
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2024",
    credentialUrl: "https://cloud.google.com/certification/data-engineer",
    category: "Cloud",
  },
  {
    id: "8",
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://aws.amazon.com/certification/certified-solutions-architect-professional/",
    category: "Cloud",
  },
];
