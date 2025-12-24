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
    title: "Enterprise RPA Transformation",
    shortDescription: "Automated document processing for Fortune 500 company",
    description: "Designed and implemented comprehensive RPA solution using UiPath for a multinational corporation, automating 50+ manual processes across finance and HR departments.",
    tags: ["RPA", "UiPath", "Process Mining", "Enterprise"],
    role: "Lead Automation Architect",
    impact: "Reduced processing time by 85%, saved 2,000+ hours annually, improved accuracy to 99.8%",
    link: "https://example.com/project1",
    github: "https://github.com/salman-joyia/rpa-transformation",
    featured: true,
  },
  {
    id: "2",
    title: "AI-Powered Customer Intelligence Platform",
    shortDescription: "Real-time customer insights using Machine Learning",
    description: "Built AI/ML pipeline for predicting customer churn and automating retention campaigns. Integrated Azure Cognitive Services with customer data platform.",
    tags: ["AI", "Machine Learning", "Azure", "Python"],
    role: "AI Solutions Architect",
    impact: "Increased customer retention by 34%, identified 5,000+ at-risk customers, generated $2.1M in retained revenue",
    link: "https://example.com/project2",
    github: "https://github.com/salman-joyia/ai-customer-intelligence",
    featured: true,
  },
  {
    id: "3",
    title: "Intelligent Document Classification System",
    shortDescription: "OCR + AI system processing 100K+ documents daily",
    description: "Developed end-to-end document automation solution using Azure Form Recognizer and AI Builder, reducing manual data entry by 90%.",
    tags: ["Azure AI", "OCR", "Automation", "Power Platform"],
    role: "Automation Engineer",
    impact: "Processed 100K+ documents monthly, 90% reduction in data entry time, 45 FTE hours saved weekly",
    github: "https://github.com/salman-joyia/doc-classification",
  },
  {
    id: "4",
    title: "Real-time Business Analytics Dashboard",
    shortDescription: "Power BI dashboards with live data refresh and AI insights",
    description: "Created self-service analytics platform with real-time dashboards, automated alerts, and predictive analytics using Power BI and Azure Synapse.",
    tags: ["Power BI", "Azure", "Analytics", "Data Engineering"],
    role: "BI Solutions Architect",
    impact: "Enabled self-service reporting for 200+ users, reduced reporting time by 12 hours/week, improved decision-making speed by 60%",
  },
  {
    id: "5",
    title: "Workflow Optimization Consulting",
    shortDescription: "Process improvement for 15+ enterprise clients",
    description: "Conducted workflow analysis and designed automation strategies for multiple clients across finance, healthcare, and manufacturing sectors.",
    tags: ["Process Mining", "Consulting", "Optimization"],
    role: "Automation Consultant",
    impact: "Average ROI delivered: 340%, Average cycle time reduction: 62%, Average cost savings: $800K per client",
  },
];
