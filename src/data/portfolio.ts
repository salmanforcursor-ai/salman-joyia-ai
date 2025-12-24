export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image?: string;
  tags: string[];
  role: string;
  impact: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Email Campaign Automation with n8n",
    shortDescription: "Automated email workflows for SaaS startup",
    description: "Built end-to-end email automation system using n8n, integrating Mailgun, CRM data, and AI-powered content generation. Triggered campaigns based on user behavior with Python FastAPI backend for custom logic.",
    image: "/placeholder.svg", // Replace with actual project screenshot
    tags: ["n8n", "FastAPI", "Mailgun", "Automation"],
    role: "Automation Engineer",
    impact: "40% increase in email open rates, 60% reduction in manual work, $15K annual savings",
    featured: true,
  },
  {
    id: "2",
    title: "Lead Scoring Pipeline with Make.com",
    shortDescription: "Real-time lead qualification automation",
    description: "Designed Make.com workflows to score leads from multiple sources (forms, LinkedIn, website), enrich data with external APIs, and sync to Salesforce. Integrated Python backend for custom scoring algorithm.",
    image: "/placeholder.svg", // Replace with actual project screenshot
    tags: ["Make.com", "Python", "Salesforce", "Lead Gen"],
    role: "Automation Engineer",
    impact: "50% faster lead response, 35% improvement in conversion rate, 25 hours/week saved",
    featured: true,
  },
  {
    id: "3",
    title: "Zapier Multi-App Integration",
    shortDescription: "Connected 8+ SaaS tools for freelance agency",
    description: "Built Zapier workflows connecting Airtable, Slack, Google Sheets, Stripe, and Notion. Automated client onboarding, invoicing, and team notifications with minimal code.",
    image: "/placeholder.svg", // Replace with actual project screenshot
    tags: ["Zapier", "Airtable", "Slack", "Integration"],
    role: "Integration Specialist",
    impact: "20+ hours/week saved, eliminated manual data entry, improved team communication",
  },
  {
    id: "4",
    title: "FastAPI Webhook Handler & Automation Backend",
    shortDescription: "Custom Python backend for complex automation logic",
    description: "Developed FastAPI microservice handling webhooks from n8n and Make.com, processing data, running ML models, and triggering actions. Includes async processing, error handling, and logging.",
    image: "/placeholder.svg", // Replace with actual project screenshot
    tags: ["FastAPI", "Python", "Webhooks", "Async"],
    role: "Backend Engineer",
    impact: "Processed 10K+ events daily, 99.9% uptime, sub-100ms response times",
  },
  {
    id: "5",
    title: "Invoice Processing with Document AI",
    shortDescription: "Automated invoice extraction and processing",
    description: "Combined Make.com for workflow orchestration with Python backend running document AI models. Extracted invoice data, matched to POs, and auto-posted to accounting system.",
    image: "/placeholder.svg", // Replace with actual project screenshot
    tags: ["Make.com", "AI", "Python", "Document Processing"],
    role: "Automation Engineer",
    impact: "Process 500+ invoices/month with 95% accuracy, $30K annual cost savings",
  },
];
