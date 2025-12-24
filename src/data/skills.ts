export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: "expert" | "advanced" | "intermediate";
  yearsOfExperience: number;
}

export const skills: Skill[] = [
  // Low-Code Automation Platforms
  {
    id: "1",
    name: "n8n",
    category: "Low-Code Platforms",
    proficiency: "expert",
    yearsOfExperience: 2,
  },
  {
    id: "2",
    name: "Make.com",
    category: "Low-Code Platforms",
    proficiency: "expert",
    yearsOfExperience: 2,
  },
  {
    id: "3",
    name: "Zapier",
    category: "Low-Code Platforms",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    id: "4",
    name: "Automation.io",
    category: "Low-Code Platforms",
    proficiency: "advanced",
    yearsOfExperience: 1,
  },

  // Python & Backend Engineering
  {
    id: "5",
    name: "Python",
    category: "Python & Backend",
    proficiency: "expert",
    yearsOfExperience: 3,
  },
  {
    id: "6",
    name: "FastAPI",
    category: "Python & Backend",
    proficiency: "expert",
    yearsOfExperience: 2,
  },
  {
    id: "7",
    name: "Async Python",
    category: "Python & Backend",
    proficiency: "advanced",
    yearsOfExperience: 2,
  },
  {
    id: "8",
    name: "REST API Integration",
    category: "Python & Backend",
    proficiency: "expert",
    yearsOfExperience: 3,
  },

  // AI & Automation Strategy
  {
    id: "9",
    name: "Workflow Design & Optimization",
    category: "AI & Automation",
    proficiency: "expert",
    yearsOfExperience: 3,
  },
  {
    id: "10",
    name: "LLM Integration",
    category: "AI & Automation",
    proficiency: "advanced",
    yearsOfExperience: 2,
  },
  {
    id: "11",
    name: "Prompt Engineering",
    category: "AI & Automation",
    proficiency: "advanced",
    yearsOfExperience: 2,
  },
  {
    id: "12",
    name: "Process Automation",
    category: "AI & Automation",
    proficiency: "expert",
    yearsOfExperience: 3,
  },

  // Cloud & Deployment
  {
    id: "13",
    name: "AWS",
    category: "Cloud & Deployment",
    proficiency: "advanced",
    yearsOfExperience: 2,
  },
  {
    id: "14",
    name: "Docker",
    category: "Cloud & Deployment",
    proficiency: "advanced",
    yearsOfExperience: 2,
  },
  {
    id: "15",
    name: "Serverless Architecture",
    category: "Cloud & Deployment",
    proficiency: "intermediate",
    yearsOfExperience: 1,
  },
  {
    id: "16",
    name: "Git & Version Control",
    category: "Cloud & Deployment",
    proficiency: "expert",
    yearsOfExperience: 3,
  },
];

export const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<string, Skill[]>
);
