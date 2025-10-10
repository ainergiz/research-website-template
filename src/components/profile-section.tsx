import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  GraduationCap,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:gap-0 md:space-y-8">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4]">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
          {aboutMe.imageDescription && (
            <p className="mt-1 text-xs text-zinc-500 italic text-center md:w-[65%]">
              {aboutMe.imageDescription}
            </p>
          )}
        </div>
      )}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-2xl md:text-3xl font-light tracking-wide mb-3">
          {aboutMe.name}
        </h1>
        <div className="space-y-4 mb-6">
          <p className="text-zinc-700 text-sm leading-relaxed tracking-wide uppercase">
            {aboutMe.title}
          </p>
          <div className="text-zinc-600 text-xs leading-relaxed tracking-wide uppercase">
            {aboutMe.institutionUrl1 ? (
              <a
                href={aboutMe.institutionUrl1}
                className="hover:text-zinc-900 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {aboutMe.institution1}
              </a>
            ) : (
              aboutMe.institution1
            )}
            {aboutMe.institution2 && (
              <>
                <span className="mx-2 text-zinc-400">•</span>
                {aboutMe.institutionUrl2 ? (
                  <a
                    href={aboutMe.institutionUrl2}
                    className="hover:text-zinc-900 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {aboutMe.institution2}
                  </a>
                ) : (
                  aboutMe.institution2
                )}
              </>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={14} />
            {aboutMe.email}
          </a>
          {aboutMe.githubUsername && (
            <>
              <br />
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                github.com/{aboutMe.githubUsername}
              </a>
            </>
          )}
          {aboutMe.googleScholarUrl && (
            <>
              <br />
              <a
                href={aboutMe.googleScholarUrl}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={14} />
                Google Scholar
              </a>
            </>
          )}
          {aboutMe.twitterUsername && (
            <>
              <br />
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={14} />@{aboutMe.twitterUsername}
              </a>
            </>
          )}
          {aboutMe.linkedinUsername && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
                linkedin.com/in/{aboutMe.linkedinUsername}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
