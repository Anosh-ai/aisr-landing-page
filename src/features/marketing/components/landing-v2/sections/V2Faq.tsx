import { useId, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import { V2Reveal } from "@/features/marketing/components/landing-v2/V2Reveal"
import { V2SectionHeading } from "@/features/marketing/components/landing-v2/V2SectionHeading"
import { v2Faq, v2SectionY, v2Shell } from "@/features/marketing/constants/landing-v2"

export function V2Faq() {
  const [openId, setOpenId] = useState<string | null>(v2Faq.items[0]?.id ?? null)
  const baseId = useId()
  const reduced = useReducedMotion()

  return (
    <section id={v2Faq.id} className={`bg-canvas ${v2SectionY}`} aria-labelledby="v2-faq-title">
      <div className={v2Shell}>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <V2Reveal>
            <V2SectionHeading
              eyebrow={v2Faq.eyebrow}
              title={v2Faq.title}
              titleId="v2-faq-title"
            />
          </V2Reveal>

          <V2Reveal delay={0.08}>
            <div className="space-y-3">
              {v2Faq.items.map((item) => {
                const open = openId === item.id
                const buttonId = `${baseId}-${item.id}-button`
                const panelId = `${baseId}-${item.id}-panel`
                return (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-xl border border-line bg-white"
                  >
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        className="flex min-h-11 w-full items-center justify-between gap-4 px-4 py-4 text-left text-base font-semibold text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-secondary"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenId(open ? null : item.id)}
                      >
                        <span>{item.question}</span>
                        {open ? (
                          <Minus size={18} className="shrink-0 text-secondary" aria-hidden="true" />
                        ) : (
                          <Plus size={18} className="shrink-0 text-secondary" aria-hidden="true" />
                        )}
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-line px-4 py-4 text-sm leading-7 text-ink">
                            {item.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </V2Reveal>
        </div>
      </div>
    </section>
  )
}
