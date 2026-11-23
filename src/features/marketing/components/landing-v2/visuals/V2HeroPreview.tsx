import { motion, useReducedMotion } from "framer-motion"
import { Bell, MapPin, ShieldCheck, Truck } from "lucide-react"
import { v2Hero, v2ProductTour } from "@/features/marketing/constants/landing-v2"
import { V2CountUp } from "@/features/marketing/components/landing-v2/visuals/V2CountUp"

export function V2HeroPreview() {
  const reduced = useReducedMotion()

  return (
    <div className="relative w-full" aria-label="Illustrative AISR product preview">
      <motion.div
        className="overflow-hidden rounded-xl border border-white/10 bg-primary-soft shadow-[0_28px_64px_-28px_rgba(0,0,0,0.55)]"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex min-h-[18rem] md:min-h-[22rem]">
          <aside className="hidden w-14 shrink-0 flex-col items-center gap-4 border-r border-white/10 bg-primary py-5 sm:flex">
            <span className="size-8 rounded-lg bg-secondary/20 ring-1 ring-secondary/40" aria-hidden="true" />
            {[ShieldCheck, Truck, MapPin, Bell].map((Icon, index) => (
              <span
                key={Icon.displayName ?? index}
                className={`flex size-9 items-center justify-center rounded-lg ${
                  index === 0 ? "bg-secondary/20 text-secondary" : "text-white/45"
                }`}
              >
                <Icon size={16} aria-hidden="true" />
              </span>
            ))}
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-primary px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                  Operations overview
                </p>
                <p className="mt-0.5 text-sm text-white/70">Connected transportation view</p>
              </div>
              <span className="rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-1 text-[11px] font-semibold text-secondary">
                Live concept
              </span>
            </div>

            <div className="grid gap-3 bg-[#f4f6fa] p-4 sm:grid-cols-3">
              {v2ProductTour.metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="rounded-lg border border-line bg-white px-3.5 py-3 shadow-[0_10px_24px_-18px_rgba(25,29,49,0.35)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/70">
                    {metric.label}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold tabular-nums text-primary">
                    <V2CountUp value={metric.value} />
                  </p>
                </div>
              ))}
            </div>

            <div className="grid flex-1 gap-3 bg-[#f4f6fa] px-4 pb-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-lg border border-line bg-white p-3">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-semibold text-primary">Corridor activity</p>
                  <p className="text-xs text-ink">I-80 · sample</p>
                </div>
                <svg viewBox="0 0 360 140" className="h-auto w-full" aria-hidden="true">
                  <rect width="360" height="140" rx="8" fill="#eef3f8" />
                  <path
                    d="M20 110 C 70 90, 90 40, 140 55 S 210 120, 260 70 S 320 30, 340 45"
                    fill="none"
                    stroke="#d7e3ef"
                    strokeWidth="2"
                  />
                  <motion.path
                    d="M20 110 C 70 90, 90 40, 140 55 S 210 120, 260 70 S 320 30, 340 45"
                    fill="none"
                    stroke="#68cff7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={reduced ? false : { pathLength: 0 }}
                    animate={reduced ? undefined : { pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {[
                    [140, 55],
                    [260, 70],
                    [340, 45],
                  ].map(([cx, cy], index) => (
                    <circle key={index} cx={cx} cy={cy} r="5" fill="#191d31" stroke="#68cff7" strokeWidth="2" />
                  ))}
                </svg>
              </div>

              <div className="space-y-2 rounded-lg border border-line bg-white p-3">
                <p className="text-sm font-semibold text-primary">Signals for review</p>
                {[
                  { label: "Device change indicator", tone: "Watch" },
                  { label: "Route deviation concept", tone: "Review" },
                  { label: "Coverage expiration soon", tone: "Monitor" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-2 rounded-md border border-line/80 bg-surface px-3 py-2"
                  >
                    <p className="text-xs leading-5 text-ink">{row.label}</p>
                    <span className="shrink-0 rounded-full bg-secondary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
                      {row.tone}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <p className="mt-3 text-center text-xs text-white/55">{v2Hero.sampleNote}</p>
    </div>
  )
}
