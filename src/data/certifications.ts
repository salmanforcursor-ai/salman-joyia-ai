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
    title: "Bachelor's in Artificial Intelligence",
    issuer: "University",
    date: "2022",
    category: "AI/ML",
  },
  {
    id: "2",
    title: "Python Programming Specialist",
    issuer: "Google",
    date: "2024",
    credentialUrl: "https://www.coursera.org/professional-certificates/google-python",
    category: "Other",
  },
  {
    id: "3",
    title: "FastAPI & Advanced Python Backend",
    issuer: "Udemy",
    date: "2024",
    credentialUrl: "https://udemy.com",
    category: "Other",
  },
  {
    id: "4",
    title: "n8n Automation Professional",
    issuer: "n8n",
    date: "2024",
    credentialUrl: "https://n8n.io/",
    category: "Automation",
  },
  {
    id: "5",
    title: "Make.com Certified Professional",
    issuer: "Make",
    date: "2024",
    credentialUrl: "https://make.com/",
    category: "Automation",
  },
  {
    id: "6",
    title: "Zapier Expert Certification",
    issuer: "Zapier",
    date: "2023",
    credentialUrl: "https://zapier.com/",
    category: "Automation",
  },
  {
    id: "7",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    category: "Cloud",
  },
  {
    id: "8",
    title: "LLM Integration & Prompt Engineering",
    issuer: "DeepLearning.AI",
    date: "2024",
    credentialUrl: "https://www.deeplearning.ai/",
    category: "AI/ML",
  },
];
