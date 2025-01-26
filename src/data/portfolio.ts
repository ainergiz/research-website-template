export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "Uterio",
    description:
      "Advancing women's health education through innovative learning solutions.",
    technologies: ["React", "Typescript", "React Native", "Tailwind"],
    projectUrl: "https://www.uterio.com",
    imageUrl:
      "/uterio-02.png",
  },
  {
    title: "Job Clerk",
    description:
      "A better way to find NHS jobs for healthcare professionals.",
    technologies: ["Vue", "Typescript", "Python", "Express"],
    projectUrl: "https://www.jobclerk.com",
    imageUrl:
      "/jobclerk-02.png",
  },
];
