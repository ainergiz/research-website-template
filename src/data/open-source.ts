export interface OpenSourceProject {
  name: string;
  repoUrl: string;
  description: string;
  language?: string;
  owner?: string;
  lastUpdated?: string;
  tags: string[];
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "vibe-board",
    repoUrl: "https://github.com/ainergiz/vibe-board",
    description:
      "Social planning ChatGPT App built with Cloudflare Workers, Durable Objects, and the OpenAI Apps SDK.",
    language: "TypeScript",
    owner: "ainergiz",
    lastUpdated: "Oct 2025",
    tags: [
      "Cloudflare Workers",
      "Durable Objects",
      "MCP",
      "React",
      "Tailwind",
    ],
  },
];
