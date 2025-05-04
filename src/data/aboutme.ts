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
  // Note that links work in the description
  description:
    "I'm a medical doctor and software engineer, currently working as a full stack SWE at <a href='https://www.genomekey.com'>GenomeKey</a>. On the side, I'm building <a href='https://www.uterio.com'>Uterio</a>, medical education platform to advance women's health education, and <a href='https://www.jobclerk.com'>Job Clerk</a>, better way of searching NHS jobs for healthcare professionals. <br> <br> I was a writer (some examples <a href='https://bianet.org/yazar/ali-ihsan-nergiz-6828'>bianet</a>), political activist, and professional e-sports player in different times of my life. I'm always curious about learning and developing new tools to make biology understandable and modifiable with computing tools. <br> <br> You can reach out to me at <a href='mailto:aihsannergiz@gmail.com'>aihsannergiz@gmail.com</a> to talk about new projects and collaborations.  ",
  email: "aihsannergiz@gmail.com",
  imageUrl:
    "/portrait.jpg",
  imageDescription: "London, Bankside, 2024",
  googleScholarUrl: "https://scholar.google.com/citations?user=baHmrQ8AAAAJ&hl",
  githubUsername: "ainergiz",
  linkedinUsername: "ali-ihsan-nergiz",
  twitterUsername: "aihsannergiz",
  // blogUrl: "https://",
  // cvUrl: "https://",
  secretDescription: "Fun fact: I have read Robert Jordan's The Wheel of Time series (14 books, over 10000 pages) more than 4 times.",
};
