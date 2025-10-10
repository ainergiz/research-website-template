import { Github } from "lucide-react";
import { OpenSourceProject } from "@/data/open-source";

export function OpenSourceEntry({
  project,
}: {
  project: OpenSourceProject;
}) {
  return (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_10px_40px_-20px_rgba(16,185,129,0.7)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),90%,transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-zinc-800 px-6 py-3 font-mono text-[0.7rem] text-zinc-500">
        {project.owner && (
          <span className="transition-colors duration-300 group-hover:text-emerald-300">
            {project.owner}
          </span>
        )}
        {project.language && (
          <span className="text-zinc-500/80">
            {project.language}
          </span>
        )}
        <span className="ml-auto text-zinc-600">
          {project.lastUpdated ? project.lastUpdated : "Just now"}
        </span>
      </div>
      <div className="relative flex flex-col gap-4 px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
            <Github className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 font-mono text-sm text-emerald-300">
              <span>{project.name}</span>
            </div>
            <p className="text-sm text-zinc-400">
              {project.description}
            </p>
          </div>
        </div>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-zinc-800 bg-zinc-900/70 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-zinc-400 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:text-emerald-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
