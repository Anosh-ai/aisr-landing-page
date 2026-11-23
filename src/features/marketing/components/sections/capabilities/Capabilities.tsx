import { CheckCircle2 } from "lucide-react"
import { CapabilityVisual } from "@/features/marketing/components/sections/capabilities/CapabilityVisual"
import { FadeIn } from "@/features/marketing/components/sections/shared/motion"
import { SectionHeading } from "@/features/marketing/components/sections/shared/SectionHeading"
import { SectionSurface } from "@/features/marketing/components/sections/shared/sectionSurface"
import { capabilities, capabilitiesContent } from "@/features/marketing/constants/landing"
import { shellContent } from "@/features/marketing/constants/shell"

export function Capabilities() {
  return (
    <SectionSurface
      id={capabilitiesContent.id}
      labelledBy="capabilities-title"
      tone="canvas"
      glow="both"
      className="py-20 md:py-28"
    >
      <div className={shellContent}>
        <SectionHeading
          eyebrow={capabilitiesContent.eyebrow}
          title={capabilitiesContent.title}
          description={capabilitiesContent.description}
          titleId="capabilities-title"
        />

        <div className="mt-14 space-y-8 md:mt-16 md:space-y-12">
          {capabilities.map((capability, index) => {
            const reverse = index % 2 === 1
            return (
              <FadeIn key={capability.id} delay={(index % 4) * 0.05} y={28}>
                <article
                  id={capability.id}
                  className="aisr-capability-card group relative overflow-hidden rounded-[1.75rem] border border-line/70 bg-white/80 p-5 shadow-[0_22px_55px_-38px_rgba(25,29,49,0.4)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-500 md:p-8"
                >
                  <span
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-80"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-secondary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-70"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute -bottom-20 -left-10 size-48 rounded-full bg-primary/[0.06] blur-3xl"
                    aria-hidden="true"
                  />

                  <div className="relative grid items-center gap-7 md:gap-10 lg:grid-cols-2">
                    <div className={`min-w-0 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-3">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-sm font-bold tabular-nums text-primary ring-1 ring-secondary/30 shadow-[0_0_0_4px_rgba(104,207,247,0.08)]">
                          {capability.number}
                        </span>
                        <span
                          className="h-px flex-1 bg-gradient-to-r from-secondary/40 to-transparent"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-primary md:text-[1.75rem] md:leading-snug">
                        {capability.title}
                      </h3>
                      <p className="mt-3 text-[0.95rem] leading-7 text-ink">{capability.summary}</p>
                      <ul className="mt-6 space-y-2.5">
                        {capability.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 rounded-xl border border-transparent bg-surface/60 px-3 py-2.5 text-sm leading-6 text-ink transition-colors duration-300 group-hover:border-secondary/15 group-hover:bg-white/80"
                          >
                            <CheckCircle2
                              className="mt-0.5 shrink-0 text-secondary"
                              size={16}
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`relative min-w-0 w-full ${reverse ? "lg:order-1" : "lg:order-2"}`}>
                      <div
                        className="pointer-events-none absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-secondary/20 via-transparent to-primary/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                      <div className="relative overflow-hidden rounded-2xl ring-1 ring-primary/10 transition-[transform,box-shadow] duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_60px_-28px_rgba(25,29,49,0.45)] motion-reduce:group-hover:translate-y-0">
                        <CapabilityVisual visual={capability.visual} title={capability.title} />
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </SectionSurface>
  )
}
