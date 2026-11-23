import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { V2CountUp } from "@/features/marketing/components/landing-v2/visuals/V2CountUp"
import { v2ProductTour } from "@/features/marketing/constants/landing-v2"

type PanelId = (typeof v2ProductTour.tabs)[number]["id"]

export function V2TourPanels({ active }: { active: PanelId }) {
  const reduced = useReducedMotion()

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_50px_-28px_rgba(25,29,49,0.35)]">
      <div className="flex items-center gap-3 border-b border-line bg-primary px-4 py-3 text-white">
        <span className="size-2.5 rounded-full bg-secondary" aria-hidden="true" />
        <p className="text-sm font-semibold">AISR operations</p>
      </div>
      <div className="relative min-h-[20rem] bg-surface p-4 md:min-h-[22rem] md:p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {active === "overview" ? <OverviewPanel /> : null}
            {active === "map" ? <MapPanel /> : null}
            {active === "alerts" ? <AlertsPanel /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="border-t border-line px-4 py-2 text-xs text-ink/70">{v2ProductTour.sampleNote}</p>
    </div>
  )
}

function OverviewPanel() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {v2ProductTour.metrics.map((metric) => (
          <div key={metric.id} className="rounded-lg border border-line bg-white px-3 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/70">
              {metric.label}
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-primary">
              <V2CountUp value={metric.value} />
            </p>
          </div>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-white p-3">
          <p className="text-sm font-semibold text-primary">Verification queue</p>
          <div className="mt-3 space-y-2">
            {["License check concept", "Face match concept", "Device association"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-md bg-surface px-3 py-2 text-xs text-ink">
                <span>{item}</span>
                <span className="font-semibold text-primary">For review</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-line bg-white p-3">
          <p className="text-sm font-semibold text-primary">Relationship strip</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-primary">
            {["Driver", "Device", "ELD", "VIN", "Carrier"].map((node, index) => (
              <span key={node} className="inline-flex items-center gap-2">
                <span className="rounded-full border border-secondary/40 bg-secondary/10 px-2.5 py-1">
                  {node}
                </span>
                {index < 4 ? <span className="text-secondary">→</span> : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MapPanel() {
  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-primary">Fleet map</p>
        <p className="text-xs text-ink">Sample corridor</p>
      </div>
      <svg viewBox="0 0 520 240" className="h-auto w-full" role="img" aria-label="Illustrative fleet map">
        <rect width="520" height="240" rx="10" fill="#e8eef5" />
        <path d="M0 140 H520" stroke="#d0dbe8" strokeWidth="8" />
        <path d="M0 90 H520" stroke="#d7e3ef" strokeWidth="3" />
        <path d="M180 0 V240" stroke="#d7e3ef" strokeWidth="3" />
        <path d="M340 0 V240" stroke="#d7e3ef" strokeWidth="3" />
        <path
          d="M40 170 C 120 150, 160 80, 240 95 S 340 170, 400 120 S 480 90, 500 100"
          fill="none"
          stroke="#68cff7"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {[
          [240, 95],
          [400, 120],
          [500, 100],
        ].map(([cx, cy], index) => (
          <g key={index}>
            <circle cx={cx} cy={cy} r="9" fill="#191d31" />
            <circle cx={cx} cy={cy} r="4" fill="#68cff7" />
          </g>
        ))}
      </svg>
    </div>
  )
}

function AlertsPanel() {
  const rows = [
    { title: "Potential duplicate identity", detail: "Indicator for review — not a verdict." },
    { title: "ELD unplug concept", detail: "Shown when related signals are available." },
    { title: "Coverage window ending", detail: "Policy association visibility concept." },
    { title: "Route mismatch sample", detail: "Compare planned corridor to observed movement." },
  ]

  return (
    <div className="space-y-2">
      {rows.map((row) => (
        <div key={row.title} className="rounded-lg border border-line bg-white px-4 py-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-primary">{row.title}</p>
              <p className="mt-1 text-xs leading-5 text-ink">{row.detail}</p>
            </div>
            <span className="shrink-0 rounded-full bg-secondary/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
              Review
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
