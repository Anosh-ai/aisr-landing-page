import { Link } from "react-router-dom"
import { aboutContent } from "@/features/marketing/constants/about"
import { Container } from "@/shared/components/Container"
import { PageHero } from "@/shared/components/PageHero"
import { usePageTitle } from "@/shared/hooks/usePageTitle"

export function AboutPage() {
  usePageTitle("About Us")

  return (
    <>
      <PageHero
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        description={aboutContent.lead}
      />
      <section className="bg-canvas py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
          {aboutContent.sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-2xl text-primary md:text-3xl">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-ink">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
          <p className="text-base leading-7 text-ink">
            The thirteen capability areas are listed on the{" "}
            <Link
              to="/#product"
              className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4"
            >
              home page
            </Link>
            .
          </p>
          </div>
        </Container>
      </section>
    </>
  )
}
