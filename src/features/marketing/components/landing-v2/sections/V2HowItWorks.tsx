import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { V2Reveal } from "@/features/marketing/components/landing-v2/V2Reveal"
import { V2SectionHeading } from "@/features/marketing/components/landing-v2/V2SectionHeading"
import { v2HowItWorks, v2SectionY, v2Shell } from "@/features/marketing/constants/landing-v2"

export function V2HowItWorks() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (reduced) return
    const node = ref.current
    if (!node) return

    const onScroll = () => {
      const rect = node.getBoundingClientRect()
      const total = Math.max(1, rect.height - window.innerHeight * 0.35)
      const progress = Math.min(1, Math.max(0, -rect.top / total))
      const index = Math.min(
        v2HowItWorks.steps.length - 1,
        Math.floor(progress * v2HowItWorks.steps.length),
      )
      setActive(index)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [reduced])

  return (
    <section
      id={v2HowItWorks.id}
      className={`bg-primary text-white ${v2SectionY}`}
      aria-labelledby="v2-how-title"
    >
      <div className={v2Shell}>
        <V2Reveal>
          <V2SectionHeading
            eyebrow={v2HowItWorks.eyebrow}
            title={v2HowItWorks.title}
            titleId="v2-how-title"
            tone="dark"
          />
        </V2Reveal>

        <div ref={ref} className="mt-12 lg:mt-16">
          <div className="lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
            <ol className="space-y-4 lg:sticky lg:top-28">
              {v2HowItWorks.steps.map((step, index) => {
                const isActive = reduced || active === index
                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      className={`w-full rounded-xl border px-4 py-4 text-left transition ${
                        isActive
                          ? "border-secondary/50 bg-white/10 shadow-[0_0_0_1px_rgba(104,207,247,0.2)]"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                      onClick={() => setActive(index)}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                        {step.number}
                      </p>
                      <p className="mt-2 font-display text-lg font-bold text-white">{step.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/70">{step.text}</p>
                    </button>
                  </li>
                )
              })}
            </ol>

            <div className="mt-8 hidden min-h-[22rem] rounded-xl border border-white/10 bg-primary-soft p-6 lg:mt-0 lg:block">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                Step {v2HowItWorks.steps[active]?.number}
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold text-white">
                {v2HowItWorks.steps[active]?.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-white/75">
                {v2HowItWorks.steps[active]?.text}
              </p>
              <div className="mt-10 flex flex-wrap gap-2">
                {v2HowItWorks.steps.map((step, index) => (
                  <span
                    key={step.id}
                    className={`h-1.5 w-10 rounded-full transition ${
                      index <= active ? "bg-secondary" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
