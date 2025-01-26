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
  title: "Medical Doctor, Developer",
  institution1: "Uterio",
  institutionUrl1: "https://www.uterio.com",
  institution2: "Job Clerk",
  institutionUrl2: "https://www.jobclerk.com",
  // Note that links work in the description
  description:
    "I'm a medical doctor with technical background in software development and artificial intelligence. I'm currently building <a href='https://www.uterio.com'>Uterio</a>, medical education platform to advance women's health education, and <a href='https://www.jobclerk.com'>Job Clerk</a>, better way of searching NHS jobs for healthcare professionals. <br> <br> I was a writer (some examples <a href='https://bianet.org/yazar/ali-ihsan-nergiz-6828'>bianet</a>), political activist, and professional e-sports player in different times of my life. Apart from working on startups I'm building, I'm also focusing on understanding diffusions models and their applications in radiology. <br> <br> You can always reach out to me at <a href='mailto:aihsannergiz@gmail.com'>aihsannergiz@gmail.com</a> to talk about new projects and collaborations.  ",
  email: "aihsannergiz@gmail.com",
  imageUrl:
    "/portrait.JPG",
  imageDescription: "London, Bankside, 2024",
  googleScholarUrl: "https://scholar.google.com/citations?user=baHmrQ8AAAAJ&hl",
  githubUsername: "nergizihsan",
  linkedinUsername: "ali-ihsan-nergiz",
  twitterUsername: "aihsannergiz",
  // blogUrl: "https://",
  // cvUrl: "https://",
  secretDescription: "Fun fact: I have read Robert Jordan's The Wheel of Time series (14 books, over 10000 pages) 4 times.",
};
