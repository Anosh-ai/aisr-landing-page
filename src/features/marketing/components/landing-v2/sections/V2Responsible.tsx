import { BadgeCheck, Flag, History, Lock } from "lucide-react"
import {
  V2Reveal,
  V2Stagger,
  V2StaggerItem,
} from "@/features/marketing/components/landing-v2/V2Reveal"
import { V2SectionHeading } from "@/features/marketing/components/landing-v2/V2SectionHeading"
import { v2Responsible, v2SectionY, v2Shell } from "@/features/marketing/constants/landing-v2"

const icons = [Flag, History, Lock, BadgeCheck]

export function V2Responsible() {
  return (
    <section
      id={v2Responsible.id}
      className={`bg-canvas ${v2SectionY}`}
      aria-labelledby="v2-responsible-title"
    >
      <div className={v2Shell}>
        <V2Reveal>
          <V2SectionHeading
            eyebrow={v2Responsible.eyebrow}
            title={v2Responsible.title}
            titleId="v2-responsible-title"
            align="center"
          />
        </V2Reveal>

        <V2Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {v2Responsible.principles.map((item, index) => {
            const Icon = icons[index] ?? Flag
            return (
              <V2StaggerItem key={item.id}>
                <article className="h-full rounded-xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-[0_16px_36px_-24px_rgba(25,29,49,0.35)] motion-reduce:transform-none">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-secondary/15 text-primary">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink">{item.text}</p>
                </article>
              </V2StaggerItem>
            )
          })}
        </V2Stagger>
      </div>
    </section>
  )
}
