import { Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "@/features/marketing/components/ContactForm"
import { Reveal } from "@/features/marketing/components/sections/shared/Reveal"
import { SectionHeading } from "@/features/marketing/components/sections/shared/SectionHeading"
import { SectionSurface } from "@/features/marketing/components/sections/shared/sectionSurface"
import { contactSectionContent } from "@/features/marketing/constants/landing"
import { shellContent } from "@/features/marketing/constants/shell"
import { siteConfig } from "@/shared/config/site"

function DetailRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string | null
}) {
  const published = value.trim().length > 0

  return (
    <div className="flex gap-3 rounded-2xl border border-line/80 bg-white/90 px-4 py-3.5 shadow-[0_10px_30px_-22px_rgba(25,29,49,0.3)] backdrop-blur-md transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-[0_16px_36px_-22px_rgba(25,29,49,0.35)] motion-reduce:hover:translate-y-0">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-primary ring-1 ring-secondary/20">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/55">{label}</p>
        {published && href ? (
          <a
            href={href}
            className="mt-1 block truncate text-sm font-medium text-primary underline decoration-secondary/50 underline-offset-4 hover:decoration-secondary"
          >
            {value.trim()}
          </a>
        ) : published ? (
          <p className="mt-1 text-sm font-medium text-primary">{value.trim()}</p>
        ) : (
          <p className="mt-1 text-sm text-ink">Not published yet</p>
        )}
      </div>
    </div>
  )
}

export function ContactSection() {
  const address = siteConfig.address.trim()
  const mapHref = address ? `https://maps.google.com/?q=${encodeURIComponent(address)}` : null

  return (
    <SectionSurface
      id={contactSectionContent.id}
      labelledBy="contact-section-title"
      tone="surface"
      glow="left"
      className="py-20 md:py-28"
    >
      <div className={shellContent}>
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:gap-12">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow={contactSectionContent.eyebrow}
                title={contactSectionContent.title}
                description={contactSectionContent.description}
                titleId="contact-section-title"
              />

              <div className="mt-8 space-y-3">
                <p className="text-sm font-semibold text-primary">{contactSectionContent.detailsTitle}</p>
                <p className="text-sm leading-6 text-ink">{contactSectionContent.detailsText}</p>
                <DetailRow
                  icon={Mail}
                  label="Email"
                  value={siteConfig.email}
                  href={siteConfig.email.trim() ? `mailto:${siteConfig.email.trim()}` : null}
                />
                <DetailRow icon={Phone} label="Phone" value={siteConfig.phone} />
                <DetailRow icon={MapPin} label="Address" value={siteConfig.address} href={mapHref} />
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="rounded-3xl border border-line/80 bg-white/90 p-6 shadow-[0_24px_60px_-32px_rgba(25,29,49,0.38)] backdrop-blur-md md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-primary">
                    {contactSectionContent.formTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink">{contactSectionContent.formNote}</p>
                </div>
                <span className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-primary ring-1 ring-secondary/20 sm:flex">
                  <Mail size={20} aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionSurface>
  )
}
