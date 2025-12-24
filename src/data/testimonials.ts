export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  image?: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    title: "VP of Operations",
    company: "Global Tech Solutions",
    content:
      "Salman automated our invoice processing workflow using n8n and Python. What previously took our accounting team 3 days of manual data entry now completes in 3 hours with 98% accuracy. His ability to understand our business processes and translate them into efficient automation was impressive. The ROI was evident within the first month.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    title: "Finance Director",
    company: "Financial Services Group",
    content:
      "We needed to streamline our month-end financial close process. Salman designed an AI-powered solution using Make.com that integrated our ERP, accounting software, and reporting tools. The close time dropped from 10 days to 2 days, and our finance team can now focus on analysis instead of data entry. His documentation and knowledge transfer were excellent.",
    rating: 5,
  },
  {
    id: "3",
    name: "Lisa Rodriguez",
    title: "Chief Digital Officer",
    company: "Manufacturing Corp",
    content:
      "Salman implemented RPA solutions across our HR and Finance departments, automating employee onboarding, payroll processing, and vendor management. We've saved over 2,000 hours annually, and the error rate dropped to near zero. His strategic thinking about process optimization and change management helped ensure smooth adoption across our organization.",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael Thompson",
    title: "Operations Manager",
    company: "Healthcare Services Inc",
    content:
      "We started with a single audit automation project, but Salman's work was so effective that we expanded to 15 workflows across compliance, claims processing, and patient data management. His expertise in combining RPA with AI for intelligent document processing has been transformative. He's responsive, professional, and delivers on time.",
    rating: 5,
  },
];
