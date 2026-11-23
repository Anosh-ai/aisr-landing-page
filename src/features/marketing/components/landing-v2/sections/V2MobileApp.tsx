import { ArrowRight } from "lucide-react"
import { V2Reveal } from "@/features/marketing/components/landing-v2/V2Reveal"
import { V2SectionHeading } from "@/features/marketing/components/landing-v2/V2SectionHeading"
import { V2PhonePreviews } from "@/features/marketing/components/landing-v2/visuals/V2PhonePreviews"
import { v2Mobile, v2SectionY, v2Shell } from "@/features/marketing/constants/landing-v2"

export function V2MobileApp() {
  return (
    <section
      id={v2Mobile.id}
      className={`bg-surface ${v2SectionY}`}
      aria-labelledby="v2-mobile-title"
    >
      <div className={v2Shell}>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <V2Reveal>
            <V2SectionHeading
              eyebrow={v2Mobile.eyebrow}
              title={v2Mobile.title}
              description={v2Mobile.description}
              titleId="v2-mobile-title"
            />
            <a
              href={v2Mobile.cta.href}
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-button border border-secondary bg-secondary px-6 text-[15px] font-bold text-on-secondary transition hover:-translate-y-0.5 hover:bg-[#7ad6f8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transform-none"
            >
              {v2Mobile.cta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </V2Reveal>
          <V2Reveal delay={0.1}>
            <V2PhonePreviews />
          </V2Reveal>
        </div>
      </div>
    </section>
  )
}
