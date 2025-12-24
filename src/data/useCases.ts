export interface UseCase {
  id: string;
  title: string;
  icon: string;
  description: string;
  problem: string;
  solution: string;
  benefit: string;
  industry?: string;
}

export const useCases: UseCase[] = [
  {
    id: "1",
    title: "Lead Scoring & Qualification",
    icon: "Target",
    description: "Automate lead capture, scoring, and CRM sync with n8n/Make",
    problem:
      "Manual lead qualification wastes hours. Leads fall through cracks. Sales team drowns in unqualified prospects.",
    solution:
      "Use n8n or Make to capture leads from forms, websites, and ads. Score automatically based on behavior. Sync qualified leads to Salesforce instantly with custom Python logic.",
    benefit:
      "50% faster sales response, 35% higher conversion, 25+ hours/week saved for sales team",
    industry: "SaaS, B2B",
  },
  {
    id: "2",
    title: "Email & SMS Automation Campaigns",
    icon: "Mail",
    description: "Triggered campaigns at scale using Zapier and Python",
    problem:
      "Manual email sending = low engagement. One-size-fits-all blasts don't convert. Limited personalization.",
    solution:
      "Build Zapier workflows for event-triggered emails (signup, purchase, abandoned cart). Add Python backend for dynamic content and A/B testing. Integrate with analytics for optimization.",
    benefit:
      "40% improvement in open rates, 3x higher click-through, unlimited scale without extra headcount",
    industry: "E-commerce, SaaS, Marketing",
  },
  {
    id: "3",
    title: "Invoice & Receipt Processing",
    icon: "FileText",
    description: "Extract data from docs and auto-post to accounting",
    problem:
      "Manual invoice entry = expensive and error-prone. Months of AP backlog. Poor vendor relationships due to slow payments.",
    solution:
      "Use Make.com with document AI to extract invoice data. Match to POs automatically. Post to QuickBooks/Xero via API. Route exceptions for human review.",
    benefit:
      "95%+ accuracy, 90% time reduction in AP processing, improve vendor relationships, catch fraud early",
    industry: "Finance, Operations",
  },
  {
    id: "4",
    title: "Customer Support Ticket Automation",
    icon: "MessageSquare",
    description: "Auto-categorize, route, and respond to support tickets",
    problem:
      "Support team manually reads every ticket. Takes hours to categorize and route. Simple questions clog the system.",
    solution:
      "Use n8n to intercept tickets. Route based on AI classification. Use ChatGPT for instant responses to FAQs. Route complex issues to right team. Integrate with help desk API.",
    benefit:
      "70% of tickets resolved instantly, 80% faster resolution for human issues, happier customers",
    industry: "SaaS, Support",
  },
  {
    id: "5",
    title: "Data Synchronization Between Apps",
    icon: "Repeat",
    description: "Keep data in sync across 5+ tools with Zapier/n8n",
    problem:
      "Data in multiple tools (CRM, email, ads, analytics) = duplicates, conflicts, stale data everywhere.",
    solution:
      "Build n8n workflows that sync data bidirectionally between tools. Real-time webhooks for instant updates. Conflict resolution with Python backend logic.",
    benefit:
      "Single source of truth, eliminate manual copy-paste, real-time insights across tools",
    industry: "All",
  },
  {
    id: "6",
    title: "Slack Bot & Team Notifications",
    icon: "Bell",
    description: "Real-time alerts and automations in team communication",
    problem:
      "Important events get missed. Team doesn't know about critical issues until too late. Manual status updates waste time.",
    solution:
      "Build Zapier/n8n workflows that post to Slack on events (errors, new leads, low inventory). Add interactive buttons for quick actions. Integrate with backend via webhooks.",
    benefit:
      "Real-time team awareness, faster incident response, reduced context-switching, automated action triggering",
    industry: "All",
  },
];
