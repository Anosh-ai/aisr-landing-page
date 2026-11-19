import { Container } from "@/shared/components/Container"
import { PageHero } from "@/shared/components/PageHero"
import { usePageTitle } from "@/shared/hooks/usePageTitle"

export function PrivacyPage() {
  usePageTitle("Privacy Policy")

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page describes the public AISR website. A full privacy policy has not been published yet."
      />
      <section className="bg-canvas py-16 md:py-20">
        <Container>
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-base leading-7 text-ink">
            This marketing site does not create an account and does not ask visitors to sign in.
            Pages for Home, About, Contact, Terms, and Privacy are static.
          </p>
          <p className="text-base leading-7 text-ink">
            The contact form checks that a name, email, and message are present. If AISR has not
            published a contact email, the message remains in the browser and is not sent to a
            server. If an email is published, the form opens the visitor’s email application with
            that message.
          </p>
          <p className="text-base leading-7 text-ink">
            A complete privacy policy for the AISR platform has not been published yet. This notice is
            not that policy.
          </p>
        </div>
        </Container>
      </section>
    </>
  )
}
