import { ArrowRight } from "lucide-react"
import { V2Reveal } from "@/features/marketing/components/landing-v2/V2Reveal"
import { v2FinalCta, v2Shell } from "@/features/marketing/constants/landing-v2"

export function V2FinalCta() {
  return (
    <section
      id={v2FinalCta.id}
      className="bg-[linear-gradient(135deg,#191d31_0%,#1a1f38_55%,#191d31_100%)] py-16 md:py-20"
      aria-labelledby="v2-final-cta-title"
    >
      <div className={v2Shell}>
        <V2Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="v2-final-cta-title"
              className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              {v2FinalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/75">
              {v2FinalCta.text}
            </p>
            <a
              href={v2FinalCta.cta.href}
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-button border border-secondary bg-secondary px-6 text-[15px] font-bold text-on-secondary transition hover:-translate-y-0.5 hover:bg-[#7ad6f8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transform-none"
            >
              {v2FinalCta.cta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </V2Reveal>
      </div>
    </section>
  )
}
