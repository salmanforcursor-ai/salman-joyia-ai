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
      "Working with Salman transformed how we handle document processing. What took our team 3 days now takes 3 hours. His attention to detail and understanding of enterprise needs was exceptional.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    title: "Finance Director",
    company: "Financial Services Group",
    content:
      "The AI solution Salman built reduced our month-end close time from 10 days to 2 days. Beyond the technical excellence, his communication made complex AI concepts understandable to our entire team.",
    rating: 5,
  },
  {
    id: "3",
    name: "Lisa Rodriguez",
    title: "Chief Digital Officer",
    company: "Manufacturing Corp",
    content:
      "Salman's RPA implementation saved us 2,000+ hours annually across HR and Finance. His strategic approach to process optimization and change management was crucial to our success.",
    rating: 5,
  },
  {
    id: "4",
    name: "Michael Thompson",
    title: "Operations Manager",
    company: "Healthcare Services Inc",
    content:
      "We engaged Salman for an audit automation project and ended up expanding it to 15 workflows. His expertise in combining RPA with AI is unmatched in the market.",
    rating: 5,
  },
];
