import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import type { LucideIcon } from "lucide-react"
import { BadgeCheck, Flag, History, Lock } from "lucide-react"
import { SectionHeading } from "@/features/marketing/components/sections/shared/SectionHeading"
import { SectionSurface } from "@/features/marketing/components/sections/shared/sectionSurface"
import { responsibleContent } from "@/features/marketing/constants/landing"
import { shellContent } from "@/features/marketing/constants/shell"

const iconMap: Record<(typeof responsibleContent.cards)[number]["icon"], LucideIcon> = {
  flag: Flag,
  history: History,
  lock: Lock,
  badge: BadgeCheck,
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function ResponsibleByDesign() {
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  const isVisible = reducedMotion || visible

  useEffect(() => {
    if (reducedMotion) {
      return
    }

    const node = ref.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <SectionSurface
      id={responsibleContent.id}
      labelledBy="responsible-title"
      tone="canvas"
      glow="both"
      className="py-20 md:py-28"
    >
      <div className={shellContent}>
        <SectionHeading
          align="center"
          eyebrow={responsibleContent.eyebrow}
          title={responsibleContent.title}
          description={responsibleContent.description}
          titleId="responsible-title"
        />

        <div ref={ref} className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {responsibleContent.cards.map((card, index) => {
            const Icon = iconMap[card.icon]
            return (
              <article
                key={card.id}
                className={`rounded-3xl border border-line/80 bg-white/90 p-6 shadow-[0_18px_48px_-30px_rgba(25,29,49,0.3)] backdrop-blur-md transition-[transform,border-color,opacity,box-shadow] duration-500 ease-out hover:border-secondary/50 hover:shadow-[0_26px_56px_-24px_rgba(25,29,49,0.38)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1.5 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary/15 text-primary ring-1 ring-secondary/20">
                  <Icon
                    size={20}
                    className={reducedMotion ? undefined : "aisr-responsible-pulse"}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-primary">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink">{card.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </SectionSurface>
  )
}
