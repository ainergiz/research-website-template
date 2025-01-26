export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2023-Present",
    title: "Locum Resident Doctor",
    company: "Barts Health NHS Trust",
    description:
      "I continue to work as a ad-hoc locum doctor in different departments of Royal London Hospital to keep up my medical skills.",
  },
  {
    date: "2022-2023",
    title: "Junior Clinical Fellow in Gynaecological Oncology",
    company: "Barts Health NHS Trust",
    description:
      "I worked as a junior clinical fellow within the amazing gynaecological oncology department of Royal London Hospital.",
  },
  {
    date: "2021-2022",
    title: "Trust Grade Senior House Officer",
    company: "University Hospitals of Leicester NHS Trust",
    description:
      "This was my first ever job as a medical doctor. I mainly worked in gastroenterology and infectious diseases wards.",
  },
];
