import { useId, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { HelpCircle, Minus, Plus } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/features/marketing/components/sections/shared/motion"
import { SectionHeading } from "@/features/marketing/components/sections/shared/SectionHeading"
import { SectionSurface } from "@/features/marketing/components/sections/shared/sectionSurface"
import { faqsContent } from "@/features/marketing/constants/landing"
import { shellContent } from "@/features/marketing/constants/shell"

export function Faqs() {
  const [openId, setOpenId] = useState<string | null>(faqsContent.items[0]?.id ?? null)
  const baseId = useId()
  const reduced = useReducedMotion()

  return (
    <SectionSurface
      id={faqsContent.id}
      labelledBy="faqs-title"
      tone="canvas"
      glow="both"
      className="py-20 md:py-28"
    >
      <div className={shellContent}>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:gap-14">
          <FadeIn>
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow={faqsContent.eyebrow}
                title={faqsContent.title}
                description={faqsContent.description}
                titleId="faqs-title"
              />

              <div className="mt-8 flex items-start gap-3 rounded-3xl border border-secondary/30 bg-secondary/10 px-4 py-4 backdrop-blur-md shadow-[0_14px_36px_-28px_rgba(25,29,49,0.25)]">
                <HelpCircle className="mt-0.5 shrink-0 text-secondary" size={18} aria-hidden="true" />
                <p className="text-sm leading-6 text-primary/80">
                  Still deciding? Jump to{" "}
                  <a
                    href="/#contact"
                    className="font-semibold text-primary underline decoration-secondary/60 underline-offset-4 hover:decoration-secondary"
                  >
                    Contact
                  </a>{" "}
                  and tell us what you need reviewed.
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-3" stagger={0.06}>
            {faqsContent.items.map((item, index) => {
              const open = openId === item.id
              const panelId = `${baseId}-panel-${item.id}`
              const buttonId = `${baseId}-button-${item.id}`

              return (
                <StaggerItem key={item.id}>
                  <article
                    className={`overflow-hidden rounded-3xl border bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
                      open
                        ? "border-secondary/50 shadow-[0_20px_48px_-28px_rgba(15,26,51,0.35)]"
                        : "border-line/80 shadow-[0_12px_32px_-28px_rgba(25,29,49,0.22)] hover:border-secondary/35"
                    }`}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        className="flex w-full items-start gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenId(open ? null : item.id)}
                      >
                        <span
                          className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold tabular-nums ${
                            open ? "bg-secondary text-primary" : "bg-secondary/15 text-primary"
                          }`}
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/55">
                            {item.category}
                          </span>
                          <span className="mt-1 block text-sm font-semibold text-primary md:text-base">
                            {item.question}
                          </span>
                        </span>
                        <span className="mt-1 shrink-0 text-primary/45" aria-hidden="true">
                          {open ? <Minus size={18} strokeWidth={2.25} /> : <Plus size={18} strokeWidth={2.25} />}
                        </span>
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
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-line px-5 pb-5 pt-0 md:px-6 md:pb-6">
                            <p className="pt-4 text-sm leading-7 text-ink md:pl-12">{item.answer}</p>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </article>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </div>
    </SectionSurface>
  )
}
