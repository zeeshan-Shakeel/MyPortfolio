export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    id: "enopio-software-engineer",
    company: "Enopio Solutions",
    role: "Software Engineer",
    duration: "May 2021 – March 2023",
    location: "Delhi, India",
    description:
      "Developed scalable, maintainable web applications to solve core business problems. Focused on high performance, reliability, and building enterprise-grade solutions that support long-term growth.",
    achievements: [
      "Built multiple full-stack web applications with scalable architecture",
      "Optimized system performance to handle high traffic and large request volumes",
      "Implemented best practices for maintainable and reusable code",
      "Collaborated with cross-functional teams to deliver business-driven solutions"
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Agile Development"
    ],
    type: "full-time"
  },
  {
    id: "devline-sr-fullstack",
    company: "Devline Solutions",
    role: "Sr. Full Stack Developer",
    duration: "May 2023 – Present",
    location: "Delhi, India",
    description:
      "Designing and developing enterprise-grade, scalable web applications. Focused on automation and AI-driven solutions to optimize workflows, reduce operational costs, and enhance business efficiency.",
    achievements: [
      "Reduced operational costs by up to 50% through automation and AI integration",
      "Increased business efficiency by 200% with scalable system design",
      "Led development of full-stack applications with modern technologies",
      "Turned complex business requirements into maintainable, high-performance solutions"
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI Integration",
      "Cloud Deployment",
      "REST APIs"
    ],
    type: "full-time"
  }
];

