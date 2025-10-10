export interface ExperienceBullet {
  label?: string;
  text: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  bullets: ExperienceBullet[];
}

export const experienceData: Experience[] = [
  {
    date: "March 2025 – Present",
    title: "Full Stack Software Engineer",
    company: "GenomeKey",
    companyUrl: "https://genomekey.com",
    location: "London, United Kingdom",
    bullets: [
      {
        text: "I build end-to-end internal tools for scientists and collaborate with ML engineers.",
      },
      {
        label: "Tech stack",
        text: "React, Django, Dagster, RabbitMQ, PostgreSQL, GCP",
      },
    ],
  },
  {
    date: "November 2023 – Present",
    title: "Founder and Software Engineer",
    company: "Job Clerk",
    companyUrl: "https://jobclerk.com",
    location: "London, United Kingdom",
    bullets: [
      {
        text: "I built an AI-powered job application website with a chrome extension to automate workflows.",
      },
      {
        label: "Tech stack",
        text: "React, Next.js, Azure Functions, Redis, MongoDB",
      },
    ],
  },
  {
    date: "November 2021 – November 2023",
    title: "Resident Medical Doctor",
    company: "National Health Service (NHS)",
    companyUrl: "https://www.nhs.uk",
    location: "United Kingdom",
    bullets: [
      {
        text: "I worked at medical and surgical specialities at some of the most prestigious research hospitals.",
      },
      {
        text: "Performed under immense pressure in collaboration with multidisciplinary teams, serving patients.",
      },
    ],
  },
];
