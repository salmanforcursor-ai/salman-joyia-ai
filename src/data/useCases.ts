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
    title: "Document Automation",
    icon: "FileText",
    description: "Intelligent document processing and classification at scale",
    problem:
      "Manual document processing slows down operations and introduces human error. Employees spend hours on data entry instead of high-value work.",
    solution:
      "Deploy AI-powered OCR and document classification to automatically extract, validate, and route documents to appropriate systems. RPA handles the post-processing workflows.",
    benefit:
      "80-90% reduction in manual processing time, 99%+ accuracy, immediate ROI through staff cost savings",
    industry: "Finance, Healthcare, Insurance",
  },
  {
    id: "2",
    title: "Process Automation",
    icon: "Zap",
    description: "End-to-end workflow automation for repetitive tasks",
    problem:
      "Repetitive, rule-based processes consume 30-40% of operational staff time. Multiple system integrations create manual data handoffs and errors.",
    solution:
      "Map workflows using process mining, identify automation opportunities, build RPA bots to execute tasks 24/7 without human intervention. Integrate with legacy and modern systems.",
    benefit:
      "50-70% cost reduction, 24/7 operation, improved compliance, employees focus on strategy",
    industry: "Finance, HR, Procurement",
  },
  {
    id: "3",
    title: "AI-Powered Analytics",
    icon: "BarChart3",
    description: "Predictive insights and intelligent decision-making",
    problem:
      "Decision-makers rely on historical dashboards, not forward-looking insights. Missed growth opportunities and slow response to market changes.",
    solution:
      "Build ML models to predict customer churn, demand forecasting, anomaly detection, and trend analysis. Integrate into real-time dashboards with automated alerts.",
    benefit:
      "Proactive decisions, 20-40% improvement in targeting efficiency, early detection of risks",
    industry: "Retail, SaaS, Manufacturing",
  },
  {
    id: "4",
    title: "Customer Data Intelligence",
    icon: "Users",
    description: "Unified customer insights from fragmented data sources",
    problem:
      "Customer data lives in multiple systems (CRM, ERP, support tickets). No single source of truth leads to inconsistent customer experiences and missed upsell opportunities.",
    solution:
      "Implement customer data platform (CDP) to consolidate data, build 360 customer profiles using AI enrichment, enable real-time personalization and targeting.",
    benefit:
      "34%+ increase in customer retention, 2x improvement in marketing ROI, faster deal cycles",
    industry: "SaaS, B2B, Financial Services",
  },
  {
    id: "5",
    title: "Intelligent Process Mining",
    icon: "Network",
    description: "Deep process analysis to uncover hidden automation opportunities",
    problem:
      "Organizations don't know where time and money are actually being spent in their processes. Traditional process mapping is outdated before completion.",
    solution:
      "Use process mining tools to analyze event logs in real-time. Identify bottlenecks, deviations, redundancies, and automation opportunities with data-driven precision.",
    benefit:
      "15-20% efficiency gain, identify $500K+ savings opportunities, data-driven prioritization",
    industry: "Enterprise",
  },
  {
    id: "6",
    title: "Workflow Optimization",
    icon: "GitBranch",
    description: "Redesign processes for speed, cost, and compliance",
    problem:
      "Processes evolved over years with workarounds and technical debt. Changes require months of planning and create business disruption.",
    solution:
      "Conduct end-to-end workflow assessment, redesign with lean principles, implement automation and new tools, manage change through training and support.",
    benefit:
      "40-60% cycle time reduction, $300K-1M+ annual savings, improved compliance",
    industry: "All",
  },
];
