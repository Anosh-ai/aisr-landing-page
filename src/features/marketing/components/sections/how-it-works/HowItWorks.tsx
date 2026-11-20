import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react"
import {
  Building2,
  Check,
  Handshake,
  ShieldCheck,
  Truck,
  UserRound,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import journeyTruck from "@/features/marketing/assets/images/journey-truck.png"
import { howItWorksCopy, journeySteps } from "@/features/marketing/constants/landing"
import { Container } from "@/shared/components/Container"
import "./how-it-works.css"

type StepId = (typeof journeySteps)[number]["id"]
type Side = "above" | "below" | "left" | "right"
type Point = { x: number; y: number }

const icons: Record<StepId, LucideIcon> = {
  "aisr-company": Building2,
  driver: UserRound,
  truck: Truck,
  broker: Handshake,
  insurance: ShieldCheck,
}

/**
 * Horizontal left → right S-curve.
 * Ends with padding on the right so the road never clips.
 */
const ROAD_PATH =
  "M 60 340 C 160 300, 230 200, 340 175 C 450 150, 510 255, 580 380 C 650 490, 760 470, 870 350 C 980 230, 1070 165, 1190 185 C 1300 205, 1380 250, 1460 280"

const ROAD_STEPS: { id: StepId; progress: number; side: Side }[] = [
  { id: "aisr-company", progress: 0.08, side: "above" },
  { id: "driver", progress: 0.28, side: "above" },
  { id: "truck", progress: 0.45, side: "below" },
  /* Broker stays on the lower road curve with card + line below */
  { id: "broker", progress: 0.62, side: "below" },
  { id: "insurance", progress: 0.88, side: "above" },
]

const TRUCK_DURATION_MS = 20000

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [query])

  return matches
}

function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}

function samplePath(path: SVGPathElement, progress: number): Point & { angle: number } {
  const length = path.getTotalLength()
  const distance = Math.max(0, Math.min(1, progress)) * length
  const point = path.getPointAtLength(distance)
  const ahead = path.getPointAtLength(Math.min(length, distance + 4))
  const angle = (Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180) / Math.PI
  return { x: point.x, y: point.y, angle }
}

function usePathPoints(
  pathRef: RefObject<SVGPathElement | null>,
  steps: { id: StepId; progress: number; side: Side }[],
  ready: boolean,
) {
  const [points, setPoints] = useState<Record<StepId, Point>>({} as Record<StepId, Point>)
  const [start, setStart] = useState<Point | null>(null)
  const [end, setEnd] = useState<Point | null>(null)

  useEffect(() => {
    if (!ready) return
    const path = pathRef.current
    if (!path) return

    const next = {} as Record<StepId, Point>
    for (const step of steps) {
      const sample = samplePath(path, step.progress)
      next[step.id] = { x: sample.x, y: sample.y }
    }
    setPoints(next)
    const begin = samplePath(path, 0)
    const finish = samplePath(path, 1)
    setStart({ x: begin.x, y: begin.y })
    setEnd({ x: finish.x, y: finish.y })
  }, [pathRef, ready, steps])

  return { points, start, end }
}

function usePathTruck(
  pathRef: RefObject<SVGPathElement | null>,
  enabled: boolean,
  steps: { id: StepId; progress: number }[],
) {
  const [truck, setTruck] = useState({ x: 0, y: 0, angle: 0, progress: 0, ready: false })
  const [verified, setVerified] = useState<Set<StepId>>(new Set())
  const [currentId, setCurrentId] = useState<StepId | null>(null)

  useEffect(() => {
    if (!enabled) return
    const path = pathRef.current
    if (!path) return

    let frame = 0
    let startTime = performance.now()

    const tick = (now: number) => {
      const progress = ((now - startTime) % TRUCK_DURATION_MS) / TRUCK_DURATION_MS
      const sample = samplePath(path, progress)

      const done = new Set<StepId>()
      let current: StepId | null = null
      let nearestDelta = 0.06

      for (const step of steps) {
        if (progress >= step.progress) done.add(step.id)
        const delta = Math.abs(step.progress - progress)
        if (delta < nearestDelta) {
          nearestDelta = delta
          current = step.id
        }
      }

      if (progress < 0.02) {
        done.clear()
        current = null
      }

      setTruck({
        x: sample.x,
        y: sample.y,
        angle: sample.angle,
        progress,
        ready: true,
      })
      setVerified(done)
      setCurrentId(current)
      frame = requestAnimationFrame(tick)
    }

    const initial = samplePath(path, 0)
    setTruck({ x: initial.x, y: initial.y, angle: initial.angle, progress: 0, ready: true })

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [enabled, pathRef, steps])

  return { truck, verified, currentId }
}

function RoadLayers({ d, glowId }: { d: string; glowId: string }) {
  return (
    <g aria-hidden="true">
      <path
        d={d}
        fill="none"
        stroke="rgba(25,29,49,0.14)"
        strokeWidth={68}
        strokeLinecap="round"
        transform="translate(0 10)"
      />
      <path
        d={d}
        fill="none"
        stroke={`url(#${glowId})`}
        strokeWidth={64}
        strokeLinecap="round"
        opacity={0.5}
        filter={`url(#${glowId}-blur)`}
      />
      <path d={d} fill="none" stroke="#00ecf5" strokeWidth={52} strokeLinecap="round" />
      <path d={d} fill="none" stroke="#101425" strokeWidth={38} strokeLinecap="round" />
      <path d={d} fill="none" stroke="#1c2338" strokeWidth={30} strokeLinecap="round" opacity={0.7} />
      <path
        d={d}
        fill="none"
        stroke="#ffffff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray="20 16"
        opacity={0.92}
      />
    </g>
  )
}

function JourneyTruckImage({ x, y, angle }: { x: number; y: number; angle: number }) {
  // Keep wheels sitting on the road centerline.
  const width = 92
  const height = 50

  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`} aria-hidden="true">
      <ellipse cx={2} cy={8} rx={28} ry={4.5} fill="rgba(25,29,49,0.18)" />
      <image
        href={journeyTruck}
        x={-width / 2}
        y={-height + 10}
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  )
}

function MilestoneCard({
  step,
  index,
  active,
  onActivate,
  onClear,
  style,
}: {
  step: (typeof journeySteps)[number]
  index: number
  active: boolean
  onActivate: () => void
  onClear: () => void
  style?: CSSProperties
}) {
  const Icon = icons[step.id]

  return (
    <article
      className={`aisr-milestone-card ${active ? "is-active" : ""}`}
      style={style}
      tabIndex={0}
      onMouseEnter={onActivate}
      onMouseLeave={onClear}
      onFocus={onActivate}
      onBlur={onClear}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="aisr-card-icon inline-flex h-7 w-7 items-center justify-center rounded-md bg-secondary/15 text-primary">
          <Icon aria-hidden="true" size={14} strokeWidth={1.8} />
        </span>
        <span className="font-display text-[0.68rem] font-semibold tracking-[0.14em] text-secondary">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="font-display mt-1.5 text-sm font-medium leading-snug text-primary">{step.title}</h3>
      <p className="mt-0.5 text-[0.72rem] leading-4 text-ink">{step.text}</p>
    </article>
  )
}

function JourneyBoard({
  visible,
  hoverId,
  setHoverId,
}: {
  visible: boolean
  hoverId: StepId | null
  setHoverId: (id: StepId | null) => void
}) {
  const pathRef = useRef<SVGPathElement>(null)
  const glowId = useId().replace(/:/g, "")
  const reducedMotion = usePrefersReducedMotion()
  const enabled = visible && !reducedMotion

  const steps = ROAD_STEPS
  const pathD = ROAD_PATH
  const viewBox = "0 0 1560 680"
  const vbW = 1560
  const vbH = 680

  const { points, start, end } = usePathPoints(pathRef, steps, visible)
  const { truck, verified, currentId } = usePathTruck(pathRef, enabled, steps)

  const verifiedSet = reducedMotion ? new Set(steps.map((s) => s.id)) : verified
  const highlightId = hoverId ?? currentId

  const toPercent = (point: Point) => ({
    left: `${(point.x / vbW) * 100}%`,
    top: `${(point.y / vbH) * 100}%`,
  })

  return (
    <div className="aisr-journey-stage relative mx-auto mt-10 w-full min-w-[72rem] pb-8 pt-40 sm:pt-44 md:pt-48">
      <svg
        viewBox={viewBox}
        className="relative z-[1] h-auto w-full overflow-visible"
        role="img"
        aria-label="AISR ecosystem journey connecting company, driver, truck, broker, and insurance"
      >
        <defs>
          <linearGradient id={glowId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ecf5" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#00ecf5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00ecf5" stopOpacity="0.3" />
          </linearGradient>
          <filter id={`${glowId}-blur`} x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <RoadLayers d={pathD} glowId={glowId} />
        <path ref={pathRef} d={pathD} fill="none" stroke="transparent" strokeWidth={1} />

        {start ? (
          <g transform={`translate(${start.x} ${start.y})`} aria-hidden="true">
            <circle r={10} fill="#00ecf5" opacity={0.25} />
            <circle r={5.5} fill="#00ecf5" stroke="#fff" strokeWidth={2.2} />
          </g>
        ) : null}

        {truck.ready || reducedMotion ? (
          <JourneyTruckImage
            x={reducedMotion ? (start?.x ?? 60) : truck.x}
            y={reducedMotion ? (start?.y ?? 340) : truck.y}
            angle={reducedMotion ? 0 : truck.angle}
          />
        ) : null}

        {end ? (
          <g transform={`translate(${end.x} ${end.y})`} aria-hidden="true">
            <circle r={20} fill="#191d31" />
            <circle r={13} fill="#00ecf5" opacity={0.22} />
            <path
              d="M-4.5 0 L-1 3.5 L5 -3"
              fill="none"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ) : null}
      </svg>

      {/* HTML nodes anchored to the same road point: connector always meets the circle */}
      {steps.map((layout, index) => {
        const point = points[layout.id]
        const step = journeySteps[index]
        if (!point) return null
        const isVerified = verifiedSet.has(layout.id)
        const isCurrent = highlightId === layout.id && !isVerified
        const active = highlightId === layout.id
        const pos = toPercent(point)

        return (
          <div
            key={layout.id}
            className="aisr-node"
            data-side={layout.side}
            style={{ left: pos.left, top: pos.top }}
          >
            <div
              className={`aisr-node-connector ${isVerified ? "is-verified" : ""}`}
              aria-hidden="true"
            />

            <div
              className={`aisr-node-marker ${isVerified ? "is-verified" : ""} ${
                isCurrent ? "is-current" : ""
              }`}
              aria-hidden="true"
            >
              {isVerified ? (
                <Check size={12} strokeWidth={3} className="text-white" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
              )}
            </div>

            <div className="aisr-card-shell">
              <MilestoneCard
                step={step}
                index={index}
                active={active}
                onActivate={() => setHoverId(layout.id)}
                onClear={() => setHoverId(null)}
                style={{ ["--aisr-delay" as string]: 120 + index * 110 }}
              />
            </div>
          </div>
        )
      })}

      <div className="pointer-events-none absolute bottom-3 right-6 z-[5] inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-white/95 px-3.5 py-2 text-[0.75rem] font-medium text-primary shadow-[0_10px_24px_-14px_rgba(0,236,245,0.45)]">
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Check aria-hidden="true" size={10} strokeWidth={3} />
        </span>
        {howItWorksCopy.finale}
      </div>
    </div>
  )
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoverId, setHoverId] = useState<StepId | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.14 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className={`aisr-journey scroll-mt-24 bg-white py-14 pb-8 md:py-16 md:pb-10 ${
        visible ? "is-visible" : ""
      }`}
    >
      <Container>
        <div className="relative z-[1] mx-auto max-w-3xl text-center">
          <p className="aisr-journey-label">{howItWorksCopy.eyebrow}</p>
          <h2 className="font-display mt-4 text-3xl leading-tight text-primary md:text-4xl">
            {howItWorksCopy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink md:text-lg">
            {howItWorksCopy.description}
          </p>
        </div>
      </Container>

      <div className="relative z-[1] mx-auto w-full max-w-[86rem] overflow-x-auto px-5 sm:px-6 lg:px-8">
        <JourneyBoard visible={visible} hoverId={hoverId} setHoverId={setHoverId} />
      </div>

      <ol className="sr-only">
        {journeySteps.map((step, index) => (
          <li key={step.id}>
            {index + 1}. {step.title}: {step.text}
          </li>
        ))}
      </ol>
    </section>
  )
}
