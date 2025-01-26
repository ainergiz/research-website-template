import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { ToggleableSection } from "@/components/toggleable-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
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
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
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
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <ToggleableSection key={sectionName} title="Medical Employment">
                        {experienceData.map((experience, index) => (
                          <ExperienceEntry
                            key={index}
                            experience={experience}
                          />
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
    </div>
  );
}
