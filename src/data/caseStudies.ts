export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  industry: string;
  client: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    impact: string;
  }[];
  timeline: string;
  technologies: string[];
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "SaaS Startup: 40% Email Engagement Boost with n8n",
    category: "Automation",
    shortDescription:
      "Automated personalized email campaigns using n8n and Python",
    industry: "SaaS",
    client: "Growth-Stage SaaS (Anonymized)",
    challenge:
      "Email marketing team sent generic blasts with 12% open rate and 1.2% CTR. Manual segmentation was time-consuming. No way to trigger emails based on user behavior. Limited personalization meant low engagement and high unsubscribe rates.",
    solution:
      "Built n8n workflow to capture user behavior events (login, feature usage, support tickets). Triggered personalized emails dynamically based on segments. Created Python FastAPI backend to generate AI-powered email subject lines and body copy using OpenAI API. Integrated with Mailgun for delivery and analytics.",
    results: [
      {
        metric: "Email Open Rate",
        value: "12% → 40%+",
        impact: "3.3x improvement in engagement",
      },
      {
        metric: "Click-Through Rate",
        value: "1.2% → 4.8%",
        impact: "4x higher conversion to product",
      },
      {
        metric: "Time Saved",
        value: "30 hours/month",
        impact: "Team focused on strategy vs. execution",
      },
      {
        metric: "Revenue Impact",
        value: "$120K annual uplift",
        impact: "Higher engagement → retention & upsell",
      },
    ],
    timeline: "3 weeks",
    technologies: ["n8n", "FastAPI", "Python", "Mailgun", "OpenAI"],
    featured: true,
  },
  {
    id: "2",
    title: "Agency: Lead Scoring Automation with Make.com",
    category: "Integration",
    shortDescription:
      "Real-time lead qualification and CRM sync for B2B agency",
    industry: "B2B Marketing Agency",
    client: "Digital Marketing Agency (Anonymized)",
    challenge:
      "Agency received 200+ leads daily from campaigns but lacked qualification process. Salespeople wasted hours on unqualified prospects. Many leads fell through cracks. No way to prioritize high-value opportunities.",
    solution:
      "Built Make.com workflows to capture leads from multiple sources (forms, social, ads). Enriched with external data (company size, tech stack) via API calls. Created Python scoring algorithm evaluating 15+ criteria (budget, timeline, fit). Auto-synced qualified leads to Salesforce with smart routing to sales team.",
    results: [
      {
        metric: "Sales Response Time",
        value: "2 hours → 15 mins",
        impact: "5x faster follow-up on hot leads",
      },
      {
        metric: "Conversion Rate",
        value: "3% → 8.5%",
        impact: "Higher quality leads, better qualification",
      },
      {
        metric: "Time Saved",
        value: "25 hours/week",
        impact: "Sales team focused on closing deals",
      },
      {
        metric: "Revenue Impact",
        value: "$250K additional pipeline",
        impact: "6-month payback on automation investment",
      },
    ],
    timeline: "2 weeks",
    technologies: ["Make.com", "Python", "Salesforce", "APIs"],
    featured: true,
  },
  {
    id: "3",
    title: "E-commerce: Invoice & Payment Automation with Zapier",
    category: "Integration",
    shortDescription:
      "Automated invoice generation, tracking, and reconciliation",
    industry: "E-commerce",
    client: "Online Retailer (Anonymized)",
    challenge:
      "Manual invoice creation after each order = error-prone and time-consuming. Payment reconciliation across 5 payment gateways took 8 hours/week. Late payment follow-ups were inconsistent.",
    solution:
      "Built Zapier workflows triggered on order completion. Automatically generated invoices in Wave Accounting, sent to customer via email, logged in Airtable database. Added reconciliation workflow comparing actual payments to invoices using Python backend logic. Triggered reminder emails for overdue payments.",
    results: [
      {
        metric: "Invoicing Time",
        value: "1 hour → 5 mins/day",
        impact: "99% time savings, eliminate errors",
      },
      {
        metric: "Average Payment Days",
        value: "35 days → 18 days",
        impact: "Faster cash flow from reminder automation",
      },
      {
        metric: "Processing Cost",
        value: "-$2,400/year",
        impact: "Reduced manual labor for accounting",
      },
      {
        metric: "Payment Reconciliation",
        value: "100% accuracy",
        impact: "Zero discrepancies vs. 8 hrs manual work",
      },
    ],
    timeline: "1.5 weeks",
    technologies: ["Zapier", "Wave Accounting", "Airtable", "Python"],
    featured: false,
  },
];
