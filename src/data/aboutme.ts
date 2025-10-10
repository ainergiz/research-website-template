export interface AboutMe {
  name: string;
  title: string;
  institution1: string;
  institutionUrl1: string;
  institution2?: string;
  institutionUrl2?: string;
  description: string;
  email: string;
  imageUrl?: string;
  imageDescription?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Ali Ihsan Nergiz",
  title: "Medical Doctor, Software Engineer",
  institution1: "Uterio",
  institutionUrl1: "https://www.uterio.com",
  institution2: "Job Clerk",
  institutionUrl2: "https://www.jobclerk.com",
  description:
    "I'm a software engineer and medical doctor, currently working as a full stack SWE at <a href='https://www.genomekey.com' target='_blank' rel='noopener noreferrer'>GenomeKey</a>.  I was a writer (some examples <a href='https://bianet.org/yazar/ali-ihsan-nergiz-6828' target='_blank' rel='noopener noreferrer'>bianet</a>), political activist, and professional e-sports player in different times of my life. I'm always curious about learning and developing new tools to make artificial intelligence more helpful and accessible. <br /><br /> You can reach out to me at <a href='mailto:aihsannergiz@gmail.com'>aihsannergiz@gmail.com</a> to talk about new projects and collaborations.",  email: "aihsannergiz@gmail.com",
  imageUrl: "/portrait.jpg",
  imageDescription: "London, Bankside, 2024",
  googleScholarUrl: "https://scholar.google.com/citations?user=baHmrQ8AAAAJ&hl",
  githubUsername: "ainergiz",
  linkedinUsername: "ali-ihsan-nergiz",
  twitterUsername: "aihsannergiz",
  // blogUrl: "https://",
  // cvUrl: "https://",
  secretDescription:
    "Fun fact: I have read Robert Jordan's The Wheel of Time series (14 books, over 10000 pages) more than 4 times.",
};
