import { Container } from "@/components/common/Container"
import { PageHero } from "@/components/common/PageHero"
import { usePageTitle } from "@/hooks/usePageTitle"
import { ContactDetails } from "@/sections/contact/ContactDetails"
import { ContactForm } from "@/sections/contact/ContactForm"

export function ContactPage() {
  usePageTitle("Contact Us")

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Write to AISR."
        description="Send a name, email, and message. The form uses the contact details AISR has published. If no email is published, the message is not sent."
      />
      <section className="bg-canvas py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="rounded-card border border-primary/10 bg-white p-6 sm:p-8">
            <h2 className="text-2xl text-primary">Message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <ContactDetails />
        </Container>
      </section>
    </>
  )
}
