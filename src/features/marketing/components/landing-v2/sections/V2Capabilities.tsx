import { useId, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  Building2,
  Database,
  Shield,
  Truck,
  UserRound,
} from "lucide-react"
import { V2Reveal } from "@/features/marketing/components/landing-v2/V2Reveal"
import { V2SectionHeading } from "@/features/marketing/components/landing-v2/V2SectionHeading"
import {
  v2CapabilityClusters,
  v2SectionY,
  v2Shell,
} from "@/features/marketing/constants/landing-v2"

const icons = {
  "identity-drivers": UserRound,
  "vehicles-safety": Shield,
  "freight-carriers": Truck,
  "insurance-risk": Building2,
  "data-admin": Database,
} as const

type ClusterId = (typeof v2CapabilityClusters.clusters)[number]["id"]

export function V2Capabilities() {
  const [activeId, setActiveId] = useState<ClusterId>(v2CapabilityClusters.clusters[0].id)
  const baseId = useId()
  const reduced = useReducedMotion()
  const active =
    v2CapabilityClusters.clusters.find((cluster) => cluster.id === activeId) ??
    v2CapabilityClusters.clusters[0]

  return (
    <section
      id={v2CapabilityClusters.id}
      className={`bg-surface ${v2SectionY}`}
      aria-labelledby="v2-capabilities-title"
    >
      <div className={v2Shell}>
        <V2Reveal>
          <V2SectionHeading
            eyebrow={v2CapabilityClusters.eyebrow}
            title={v2CapabilityClusters.title}
            description={v2CapabilityClusters.description}
            titleId="v2-capabilities-title"
          />
        </V2Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div
            role="tablist"
            aria-label="Capability clusters"
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible"
          >
            {v2CapabilityClusters.clusters.map((cluster) => {
              const Icon = icons[cluster.id]
              const selected = cluster.id === active?.id
              return (
                <button
                  key={cluster.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-${cluster.id}-tab`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-${cluster.id}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={`min-h-11 shrink-0 rounded-xl border px-4 py-3 text-left transition ${
                    selected
                      ? "border-secondary/50 bg-white shadow-[0_12px_28px_-20px_rgba(25,29,49,0.4)]"
                      : "border-line bg-white/60 hover:border-secondary/30"
                  }`}
                  onClick={() => setActiveId(cluster.id)}
                  onKeyDown={(event) => {
                    const ids = v2CapabilityClusters.clusters.map((item) => item.id)
                    const index = ids.indexOf(cluster.id)
                    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                      event.preventDefault()
                      setActiveId(ids[(index + 1) % ids.length] ?? ids[0]!)
                    }
                    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                      event.preventDefault()
                      setActiveId(ids[(index - 1 + ids.length) % ids.length] ?? ids[0]!)
                    }
                  }}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-secondary/15 text-primary">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-primary">{cluster.label}</span>
                      <span className="mt-0.5 hidden text-xs leading-5 text-ink lg:block">
                        {cluster.summary}
                      </span>
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                role="tabpanel"
                id={`${baseId}-${active.id}-panel`}
                aria-labelledby={`${baseId}-${active.id}-tab`}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="rounded-xl border border-line bg-white p-5 shadow-[0_20px_44px_-28px_rgba(25,29,49,0.35)] md:p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary/60">
                  {active.label}
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {active.items.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-lg border border-line/80 bg-surface/70 p-4 transition hover:border-secondary/40"
                    >
                      <h3 className="font-display text-base font-bold text-primary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-ink">{item.text}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-6 overflow-hidden rounded-lg border border-line bg-primary p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                    Mini view · illustrative
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {active.items.slice(0, 3).map((item) => (
                      <div key={item.id} className="rounded-md bg-white/5 px-3 py-3">
                        <p className="text-xs font-semibold text-white/90">{item.title}</p>
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                          <span className="block h-full w-2/3 rounded-full bg-secondary" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-[11px] text-white/55">Illustrative sample data</p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
