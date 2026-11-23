import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import type { LucideIcon } from "lucide-react"
import { Activity, ChevronRight, Link2, Network, ScanFace, SearchCheck } from "lucide-react"
import { Reveal } from "@/features/marketing/components/sections/shared/Reveal"
import { SectionHeading } from "@/features/marketing/components/sections/shared/SectionHeading"
import { SectionSurface } from "@/features/marketing/components/sections/shared/sectionSurface"
import { howItWorksContent } from "@/features/marketing/constants/landing"
import { shellContent } from "@/features/marketing/constants/shell"

const stepIcons: Record<(typeof howItWorksContent.steps)[number]["icon"], LucideIcon> = {
  verify: ScanFace,
  connect: Link2,
  monitor: Activity,
  anomalies: SearchCheck,
  picture: Network,
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function HowItWorksSteps() {
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)
  const ref = useRef<HTMLOListElement | null>(null)
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
    <div className="relative mt-12">
      <div
        className="pointer-events-none absolute left-0 right-0 top-[2.85rem] hidden h-px bg-secondary/35 lg:block"
        aria-hidden="true"
      >
        {!reducedMotion ? <span className="aisr-hiw-dot absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-secondary" /> : null}
      </div>
      <div
        className="pointer-events-none absolute bottom-6 left-5 top-6 w-px bg-secondary/35 lg:hidden"
        aria-hidden="true"
      >
        {!reducedMotion ? (
          <span className="aisr-hiw-dot-v absolute left-1/2 size-2 -translate-x-1/2 rounded-full bg-secondary" />
        ) : null}
      </div>

      <ol ref={ref} className="relative grid items-stretch gap-4 lg:grid-cols-5">
        {howItWorksContent.steps.map((step, index) => {
          const Icon = stepIcons[step.icon]
          return (
            <li
              key={step.id}
              className={`aisr-hiw-card relative ml-8 flex h-full flex-col rounded-3xl border border-line/80 bg-white/90 p-5 shadow-[0_18px_48px_-30px_rgba(25,29,49,0.34)] backdrop-blur-md transition-[transform,border-color,opacity,box-shadow] duration-500 ease-out hover:border-secondary/50 hover:shadow-[0_26px_56px_-24px_rgba(25,29,49,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:ml-0 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1.5 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } ${reducedMotion ? "" : "aisr-hiw-card-glow"}`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                ["--aisr-hiw-i" as string]: String(index),
              }}
            >
              <div className="flex items-center gap-2">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/70">{step.number}</p>
                <span className="flex size-7 items-center justify-center rounded-lg bg-secondary/15 text-primary">
                  <Icon size={15} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink">{step.text}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

function ConnectionChain() {
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Connected record chain">
      {howItWorksContent.chain.map((item, index) => (
        <div key={item} className="flex items-center gap-2">
          <span
            className={`rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold text-primary ${
              reducedMotion ? "" : "aisr-hiw-pill"
            }`}
            style={reducedMotion ? undefined : { ["--aisr-hiw-pill-delay" as string]: `${index * 0.4}s` }}
          >
            {item}
          </span>
          {index < howItWorksContent.chain.length - 1 ? (
            <ChevronRight className="shrink-0 text-secondary" size={14} aria-hidden="true" />
          ) : null}
        </div>
      ))}
    </div>
  )
}

export function HowItWorks() {
  return (
    <SectionSurface
      id={howItWorksContent.id}
      labelledBy="how-it-works-title"
      tone="surface"
      glow="left"
      squareGrid
      className="py-20 md:py-28"
    >
      <div className={shellContent}>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={howItWorksContent.eyebrow}
            title={howItWorksContent.title}
            titleId="how-it-works-title"
          />
        </Reveal>

        <HowItWorksSteps />
        <ConnectionChain />
      </div>
    </SectionSurface>
  )
}
