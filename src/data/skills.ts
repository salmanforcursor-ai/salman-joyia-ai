export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: "expert" | "advanced" | "intermediate";
  yearsOfExperience: number;
}

export const skills: Skill[] = [
  // AI & Machine Learning
  {
    id: "1",
    name: "Azure AI & ML",
    category: "AI & Machine Learning",
    proficiency: "expert",
    yearsOfExperience: 4,
  },
  {
    id: "2",
    name: "Python",
    category: "AI & Machine Learning",
    proficiency: "expert",
    yearsOfExperience: 5,
  },
  {
    id: "3",
    name: "Machine Learning Pipelines",
    category: "AI & Machine Learning",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    id: "4",
    name: "LLMs & Prompt Engineering",
    category: "AI & Machine Learning",
    proficiency: "advanced",
    yearsOfExperience: 2,
  },

  // RPA & Automation
  {
    id: "5",
    name: "UiPath RPA",
    category: "RPA & Automation",
    proficiency: "expert",
    yearsOfExperience: 6,
  },
  {
    id: "6",
    name: "Power Automate",
    category: "RPA & Automation",
    proficiency: "expert",
    yearsOfExperience: 5,
  },
  {
    id: "7",
    name: "Process Mining",
    category: "RPA & Automation",
    proficiency: "advanced",
    yearsOfExperience: 4,
  },
  {
    id: "8",
    name: "Blue Prism",
    category: "RPA & Automation",
    proficiency: "intermediate",
    yearsOfExperience: 2,
  },

  // Cloud Platforms
  {
    id: "9",
    name: "Microsoft Azure",
    category: "Cloud Platforms",
    proficiency: "expert",
    yearsOfExperience: 5,
  },
  {
    id: "10",
    name: "Google Cloud Platform",
    category: "Cloud Platforms",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    id: "11",
    name: "AWS",
    category: "Cloud Platforms",
    proficiency: "advanced",
    yearsOfExperience: 3,
  },
  {
    id: "12",
    name: "Azure Cognitive Services",
    category: "Cloud Platforms",
    proficiency: "expert",
    yearsOfExperience: 4,
  },

  // Data & Analytics
  {
    id: "13",
    name: "Power BI",
    category: "Data & Analytics",
    proficiency: "expert",
    yearsOfExperience: 5,
  },
  {
    id: "14",
    name: "SQL",
    category: "Data & Analytics",
    proficiency: "expert",
    yearsOfExperience: 6,
  },
  {
    id: "15",
    name: "Databricks",
    category: "Data & Analytics",
    proficiency: "advanced",
    yearsOfExperience: 2,
  },
  {
    id: "16",
    name: "Apache Spark",
    category: "Data & Analytics",
    proficiency: "advanced",
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
