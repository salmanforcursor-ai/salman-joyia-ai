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
    title: "90% Faster Invoice Processing for Global Manufacturer",
    category: "RPA & AI",
    shortDescription:
      "Automated invoice-to-payment cycle using RPA and AI document classification",
    industry: "Manufacturing",
    client: "Global Manufacturing Corp",
    challenge:
      "Company was processing 50,000+ invoices monthly through manual data entry, resulting in 40-day payment cycles, high error rates (15%), and 8 FTE resources dedicated to data entry. Their legacy ERP system couldn't handle high-volume input efficiently.",
    solution:
      "Implemented UiPath RPA bots integrated with Azure Form Recognizer for intelligent invoice parsing. System automatically extracted invoice data (vendor, amount, line items), matched with POs, and posted to ERP. Added exception handling for edge cases with human-in-the-loop workflow.",
    results: [
      {
        metric: "Processing Time",
        value: "40 days → 3 days",
        impact: "92% reduction in payment cycle",
      },
      {
        metric: "Accuracy",
        value: "85% → 99.2%",
        impact: "Virtually eliminated data entry errors",
      },
      {
        metric: "Cost Savings",
        value: "$1.2M annually",
        impact: "6 FTE resources redirected to strategic work",
      },
      {
        metric: "Vendor Satisfaction",
        value: "+34%",
        impact: "Faster payments improved relationships",
      },
    ],
    timeline: "4 months",
    technologies: [
      "UiPath",
      "Azure Form Recognizer",
      "Azure DevOps",
      "Python",
      "SQL Server",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "Predictive Churn Model Saved $2.1M in Revenue",
    category: "AI/ML",
    shortDescription:
      "Machine learning model identifying at-risk customers with 87% accuracy",
    industry: "SaaS / B2B Software",
    client: "Enterprise Software Platform",
    challenge:
      "Customer churn was increasing 5% YoY with no early warning system. Sales team reacted only after cancellation requests. Company had no data-driven approach to identify at-risk accounts or optimize retention spending.",
    solution:
      "Built end-to-end ML pipeline using historical customer data, behavioral metrics, and engagement signals. Trained model using Azure ML with features including: usage patterns, support tickets, feature adoption, and payment history. Model predicted churn 60 days in advance with 87% accuracy.",
    results: [
      {
        metric: "Accuracy",
        value: "87%",
        impact: "Reliably identified at-risk customers",
      },
      {
        metric: "Revenue Retained",
        value: "$2.1M",
        impact: "Applied targeted retention efforts to 5,000+ identified accounts",
      },
      {
        metric: "Retention Rate",
        value: "+34%",
        impact: "From 78% to 94% in identified segments",
      },
      {
        metric: "ROI",
        value: "520%",
        impact: "Project costs recovered in 6 months",
      },
    ],
    timeline: "3 months",
    technologies: [
      "Azure ML",
      "Python",
      "Pandas",
      "Scikit-learn",
      "Power BI",
      "Databricks",
    ],
    featured: true,
  },
  {
    id: "3",
    title: "End-to-End Healthcare Claims Automation",
    category: "RPA & AI",
    shortDescription:
      "Automated insurance claims processing from receipt to payment",
    industry: "Healthcare Insurance",
    client: "Regional Health Insurance Provider",
    challenge:
      "Processing medical claims involved 12 manual steps, 8 different systems, and 3-week turnaround time. Denials due to missing information were 22%, causing customer frustration and revenue leakage.",
    solution:
      "Designed multi-layer automation: RPA bots extracted claim data from PDFs using OCR, validated against insurance rules, checked eligibility real-time, and submitted to payer systems. AI-driven pre-check identified missing information before submission.",
    results: [
      {
        metric: "Processing Time",
        value: "21 days → 2 days",
        impact: "90% faster claims resolution",
      },
      {
        metric: "Denial Rate",
        value: "22% → 4%",
        impact: "Improved first-pass accuracy dramatically",
      },
      {
        metric: "Throughput",
        value: "2,000 → 8,000 claims/day",
        impact: "4x volume capacity without staff increase",
      },
      {
        metric: "Annual Impact",
        value: "$850K saved",
        impact: "Reduced manual effort & denials",
      },
    ],
    timeline: "5 months",
    technologies: [
      "UiPath",
      "Azure Cognitive Services",
      "Power Automate",
      "SQL",
    ],
  },
];
