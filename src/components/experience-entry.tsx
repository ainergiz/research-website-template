import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-4">
      <span className="text-xs uppercase tracking-wide text-zinc-500 mt-1">
        {experience.date}
      </span>
      <div className="col-span-3 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-serif text-zinc-900">
            {experience.title}
          </h3>
          <p className="text-sm text-zinc-700">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                className="underline decoration-dotted underline-offset-4 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
            {experience.location && ` — ${experience.location}`}
          </p>
        </div>
        {experience.bullets.length > 0 && (
          <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-2">
            {experience.bullets.map((bullet, index) => (
              <li key={index}>
                {bullet.label ? (
                  <span className="font-semibold text-zinc-700">
                    {bullet.label}: {" "}
                  </span>
                ) : null}
                {bullet.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
