import { Mail, MapPin, Phone } from "lucide-react"
import { V2ContactForm } from "@/features/marketing/components/landing-v2/V2ContactForm"
import { V2Reveal } from "@/features/marketing/components/landing-v2/V2Reveal"
import { V2SectionHeading } from "@/features/marketing/components/landing-v2/V2SectionHeading"
import { v2Contact, v2SectionY, v2Shell } from "@/features/marketing/constants/landing-v2"
import { siteConfig } from "@/shared/config/site"

export function V2Contact() {
  const email = siteConfig.email.trim()
  const phone = siteConfig.phone.trim()
  const address = siteConfig.address.trim()
  const hasDetails = Boolean(email || phone || address)

  return (
    <section
      id={v2Contact.id}
      className={`bg-surface ${v2SectionY}`}
      aria-labelledby="v2-contact-title"
    >
      <div className={v2Shell}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <V2Reveal>
            <V2SectionHeading
              eyebrow={v2Contact.eyebrow}
              title={v2Contact.title}
              description={v2Contact.description}
              titleId="v2-contact-title"
            />
            {hasDetails ? (
              <ul className="mt-8 space-y-3">
                {email ? (
                  <li className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3">
                    <Mail size={18} className="text-secondary" aria-hidden="true" />
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-semibold text-primary underline decoration-secondary/50 underline-offset-4"
                    >
                      {email}
                    </a>
                  </li>
                ) : null}
                {phone ? (
                  <li className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3">
                    <Phone size={18} className="text-secondary" aria-hidden="true" />
                    <span className="text-sm font-semibold text-primary">{phone}</span>
                  </li>
                ) : null}
                {address ? (
                  <li className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3">
                    <MapPin size={18} className="text-secondary" aria-hidden="true" />
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                      className="text-sm font-semibold text-primary underline decoration-secondary/50 underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {address}
                    </a>
                  </li>
                ) : null}
              </ul>
            ) : null}
          </V2Reveal>

          <V2Reveal delay={0.08}>
            <div className="rounded-xl border border-line bg-white p-6 shadow-[0_20px_44px_-28px_rgba(25,29,49,0.35)] md:p-8">
              <h3 className="font-display text-xl font-bold text-primary">{v2Contact.formTitle}</h3>
              <div className="mt-6">
                <V2ContactForm />
              </div>
            </div>
          </V2Reveal>
        </div>
      </div>
    </section>
  )
}
