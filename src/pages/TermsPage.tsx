import { Container } from "@/components/common/Container"
import { PageHero } from "@/components/common/PageHero"
import { usePageTitle } from "@/hooks/usePageTitle"

export function TermsPage() {
  usePageTitle("Terms and Conditions")

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        description="This page is reserved for AISR’s terms. Those terms have not been published yet."
      />
      <section className="bg-canvas py-16 md:py-20">
        <Container>
          <p className="mx-auto max-w-3xl text-base leading-7 text-ink">
            No terms and conditions have been supplied for publication. This page does not create an
            agreement. When AISR provides the terms, they will replace this notice.
          </p>
        </Container>
      </section>
    </>
  )
}
