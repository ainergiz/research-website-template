export interface Publication {
  year: string;
  type: "abstract" | "paper";
  conference?: string;
  journal?: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2024",
    conference: "RADIANT AGM",
    type: "abstract",
    title: "Exploring the Potential of Diffusion Models in Radiology Specialty Training: A Scoping Review",
    authors: "Ali Ihsan Nergiz, Yakup Kilic",
    paperUrl: "https://drive.google.com/file/d/1nfJPWFFLgjdKlu5nwZVT5WeFismo5Y8G/view?usp=sharing",
    award: "🏆 Best Oral Presentation Award",
  },
  {
    year: "2023",
    journal: "Clinical Radiology",
    type: "paper",
    title: "Challenges in research opportunities for interventional radiology trainees and interventional radiology in the UK",
    authors: "Y. Kilic, G.K. Weston-Petrides, A. Ihsan Nergiz, R. Morgand, B. Shaygie",
    paperUrl: "https://www.clinicalradiologyonline.net/article/S0009-9260(23)00537-8/abstract",
  },
  {
    year: "2021",
    journal: "Clinical Microbiology and Infection",
    type: "paper",
    title: "The role of asymptomatic and pre-symptomatic infection in SARS-CoV-2 transmission—a living systematic review",
    authors: "Xueting Qiu †,Ali Ihsan Nergiz †,Alberto Enrico Maraolo, Isaac I. Bogoch, Nicola Low, Muge Cevik",
    paperUrl: "https://www.sciencedirect.com/science/article/pii/S1198743X21000380",
    // tldr: "Appraising available data to understand the role of asymptomatic and pre-symptomatic SARS-CoV-2 transmission.",
    award: "🏆 Young Investigator Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2020",
    journal: "Journal of International AIDS Society",
    type: "paper",
    title: "Nothing about us without us: considerations for ensuring rights-affirming index case testing for young people",
    authors: "Lauren E Parmley, Joseph G Rosen, Oğuzhan Nuh, Manuel Venegas, Aaron Sunday, Ali Ihsan Nergiz, Aron Thiim, the AIDS 2020 Youth Force",
    paperUrl: "https://onlinelibrary.wiley.com/doi/10.1002/jia2.25595",
  },
  {
    year: "2019",
    journal: "Journal of Adolescent Health",
    type: "paper",
    title: "The Political, Research, Programmatic, and Social Responses to Adolescent Sexual and Reproductive Health and Rights in the 25 Years Since the International Conference on Population and Development",
    authors: "Chandra-Mouli, Venkatraman et al.",
    paperUrl: "https://www.jahonline.org/article/S1054-139X(19)30469-0/fulltext",
  },
  {
    year: "2019",
    journal: "Journal of Adolescent Health",
    type: "paper",
    title: "Forward, Together: A Collaborative Path to Comprehensive Adolescent Sexual and Reproductive Health and Rights in Our Time",
    authors: "Plesons, Marina et al.",
    paperUrl: "https://www.jahonline.org/article/S1054-139X(19)30467-7/fulltext",
  },


];
