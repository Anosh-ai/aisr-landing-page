import { useEffect, useState, useSyncExternalStore } from "react"
import { AlertTriangle, Gauge, MapPin, Truck } from "lucide-react"
import { CapabilityPreviewStage } from "@/features/marketing/components/sections/capabilities/CapabilityPreviewStage"
import { FeatureWindow } from "@/features/marketing/components/sections/capabilities/FeatureWindow"

const dutyModes = ["Driving", "On-duty", "Off-duty"] as const

const DUTY_PATH =
  "M0 54 H30 V8 H100 V24 H140 V8 H210 V40 H250 V54 H290"
const DUTY_PATH_LENGTH = 414

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function EldIntegrationPreview() {
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)
  const [dutyIndex, setDutyIndex] = useState(0)

  useEffect(() => {
    if (reducedMotion) {
      return
    }

    const id = window.setInterval(() => {
      setDutyIndex((current) => (current + 1) % dutyModes.length)
    }, 3000)

    return () => window.clearInterval(id)
  }, [reducedMotion])

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="ELD integration">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#2a4a85] bg-[#16264a] text-[#38bdf8]">
              <Truck size={18} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-100">Truck #TRK-328</p>
              <p className="text-[11px] text-sky-300">Assigned to Jordan Miles</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5" role="tablist" aria-label="Duty status">
            {dutyModes.map((mode, index) => {
              const active = index === dutyIndex
              return (
                <span
                  key={mode}
                  role="tab"
                  aria-selected={active}
                  className={`rounded-lg border px-2 py-1.5 text-center text-[11px] font-medium transition-[color,background-color,border-color] duration-300 motion-reduce:transition-none ${
                    active
                      ? "border-[#38bdf8] bg-[#1b3566] text-[#38bdf8]"
                      : "border-[#2a4a85] bg-[#16264a] text-slate-400"
                  }`}
                >
                  {mode}
                </span>
              )
            })}
          </div>

          <div className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
            <div className="flex items-center justify-between gap-2 text-xs text-slate-100">
              <span>Hours of service</span>
              <span className="text-[#38bdf8]">6h 20m left</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#1b3566]" aria-hidden="true">
              <div
                className={`h-full rounded-full bg-[#38bdf8] ${
                  reducedMotion
                    ? "w-[62%]"
                    : "aisr-eld-hos-bar group-hover:[animation-play-state:paused]"
                }`}
              />
            </div>
          </div>

          <div className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
            <p className="mb-1 px-0.5 text-[11px] text-slate-400">Duty log</p>
            <svg viewBox="0 0 290 56" className="h-14 w-full overflow-visible" aria-hidden="true">
              {[14, 28, 42].map((y) => (
                <line
                  key={y}
                  x1="0"
                  x2="290"
                  y1={y}
                  y2={y}
                  stroke="#22386a"
                  strokeWidth="1"
                />
              ))}
              <line x1="0" x2="290" y1="54" y2="54" stroke="#22386a" strokeWidth="1" />
              <path
                d={DUTY_PATH}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={DUTY_PATH_LENGTH}
                className={
                  reducedMotion
                    ? undefined
                    : "aisr-eld-duty-path group-hover:[animation-play-state:paused]"
                }
                style={
                  reducedMotion
                    ? undefined
                    : {
                        strokeDasharray: DUTY_PATH_LENGTH,
                        strokeDashoffset: DUTY_PATH_LENGTH,
                      }
                }
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: "speed", label: "Speed", value: "62 mph", Icon: Gauge },
              { id: "brake", label: "Hard braking", value: "0", Icon: AlertTriangle },
              { id: "loc", label: "Location", value: "I-40 W", Icon: MapPin },
            ].map((metric) => (
              <div
                key={metric.id}
                className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]"
              >
                <div className="flex items-center gap-1 text-[#38bdf8]">
                  <metric.Icon size={12} aria-hidden="true" />
                  <span className="truncate text-[10px] text-slate-400">{metric.label}</span>
                </div>
                <p className="mt-1 truncate text-xs font-medium text-slate-100">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}
