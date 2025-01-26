export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021—Present",
    institution: "London School of Hygiene & Tropical Medicine",
    degree: "M.Sc. in Epidemiology",
    // advisor: "Prof. Sarah Johnson",
  },
  {
    year: "2015—2021",
    institution: "Istanbul University, Cerrahpaşa Medical Faculty",
    degree: "Doctor of Medicine (MD)",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
