import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { AboutDescription } from "@/components/about-description";
import { NewsEntry } from "@/components/news-entry";
import { aboutMe } from "@/data/aboutme";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { ToggleableSection } from "@/components/toggleable-section";
import { OpenSourceEntry } from "@/components/open-source-entry";
import { openSourceProjects } from "@/data/open-source";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#FFFCF8] flex flex-col">
      <main className="flex-1">
        {/* Don't have a great call on whether max-w-screen-xl is better */}
        <div className="max-w-screen-lg mx-auto px-8 py-24">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
            {/* Left Column - Fixed Info */}
            <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
              {/* Profile */}
              <div className="md:sticky top-12 space-y-8">
                <ProfileSection aboutMe={aboutMe} />
              </div>
            </div>

            {/* Right Column - Scrolling Content */}
            <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-8">
              {/* About section is typically first */}
              {aboutMe.description && (
                <AboutDescription html={aboutMe.description} />
              )}

              {/* Map through sectionOrder to render sections in correct order */}
              {sectionOrder.map((sectionName) => {
                // Most of this is redundant... but in case it needs to be unique.
                switch (sectionName) {
                  case Section.Experience:
                    return (
                      experienceData.length > 0 && (
                        <ToggleableSection key={sectionName} title="Experience">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </ToggleableSection>
                      )
                    );
                  case Section.OpenSource:
                    return (
                      openSourceProjects.length > 0 && (
                        <ToggleableSection key={sectionName} title="Open Source">
                          <div className="space-y-4">
                            {openSourceProjects.map((project) => (
                              <OpenSourceEntry
                                key={project.repoUrl}
                                project={project}
                              />
                            ))}
                          </div>
                        </ToggleableSection>
                      )
                    );
                  case Section.News:
                    return (
                      newsData.length > 0 && (
                        <ToggleableSection key={sectionName} title="News">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </ToggleableSection>
                      )
                    );
                  case Section.Publication:
                    return (
                      publicationData.length > 0 && (
                        <ToggleableSection key={sectionName} title="Selected Publications">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                            </div>
                          ))}
                        </ToggleableSection>
                      )
                    );
                  case Section.Education:
                    return (
                      educationData.length > 0 && (
                        <ToggleableSection key={sectionName} title="Education">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </ToggleableSection>
                      )
                    );
                  case Section.Portfolio:
                    return (
                      portfolioData.length > 0 && (
                        <ToggleableSection key={sectionName} title="Portfolio">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </ToggleableSection>
                      )
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8]">
        <div className="flex flex-col mx-auto max-w-7xl px-6 py-12 md:flex-row md:items-start md:justify-between">
          <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            <p>
              © {currentYear} {aboutMe.name}.
            </p>
            {aboutMe.secretDescription && (
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                {aboutMe.secretDescription}
              </p>
            )}
          </div>
          <div className="mb-4">
            <p className="text-sm text-neutral-500 dark:text-neutral-500 justify">
              Built with{" "}
              <a
                href="https://github.com/tovacinni/research-website-template"
                className="underline hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
              >
                research-website-template
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
