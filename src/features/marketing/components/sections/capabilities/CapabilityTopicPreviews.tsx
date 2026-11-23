import { useSyncExternalStore } from "react"
import {
  Activity,
  AlertOctagon,
  AlertTriangle,
  ArrowRightLeft,
  Building2,
  ClipboardCheck,
  Database,
  FileWarning,
  Gauge,
  HardDrive,
  Link2,
  MapPin,
  Package,
  PlugZap,
  Radar,
  Route,
  Shield,
  ShieldAlert,
  Siren,
  Timer,
  Unplug,
  Users,
} from "lucide-react"
import { CapabilityPreviewStage } from "@/features/marketing/components/sections/capabilities/CapabilityPreviewStage"
import {
  FeatureRow,
  FeatureWindow,
} from "@/features/marketing/components/sections/capabilities/FeatureWindow"
import { RouteMap } from "@/features/marketing/components/sections/shared/RouteMap"

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function useReducedMotion() {
  return useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)
}

/** 03 — score dial + event chips (pulse), not a check-list */
export function SafetyPreview() {
  const reducedMotion = useReducedMotion()

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Driver safety profile">
        <div className="flex gap-3">
          <div className="relative flex h-[88px] w-[88px] shrink-0 items-center justify-center">
            <svg viewBox="0 0 88 88" className="absolute inset-0" aria-hidden="true">
              <circle cx="44" cy="44" r="36" fill="none" stroke="#1b3566" strokeWidth="6" />
              <circle
                cx="44"
                cy="44"
                r="36"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="226"
                strokeDashoffset={reducedMotion ? "52" : undefined}
                className={reducedMotion ? undefined : "aisr-safety-ring group-hover:[animation-play-state:paused]"}
                transform="rotate(-90 44 44)"
              />
            </svg>
            <div className="relative text-center">
              <p className="text-lg font-semibold text-slate-100">82</p>
              <p className="text-[9px] uppercase tracking-wide text-sky-300">Score</p>
            </div>
          </div>
          <div className="min-w-0 flex-1 space-y-1.5">
            <p className="text-sm font-medium text-slate-100">Alex Rivera</p>
            <p className="text-[11px] text-sky-300">12 mo driving history concept</p>
            <div className="flex flex-wrap gap-1 pt-1">
              {["Speeding 2", "Hard brake 1", "Harsh turn 0", "Crash 0"].map((chip) => (
                <span
                  key={chip}
                  className="rounded border border-[#2a4a85] bg-[#16264a] px-1.5 py-0.5 text-[10px] text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <div className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
            <p className="text-[10px] text-slate-400">Inspections</p>
            <p className="text-xs font-medium text-slate-100">3 clear / 1 note</p>
          </div>
          <div className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
            <p className="text-[10px] text-slate-400">HOS flags</p>
            <p className="text-xs font-medium text-slate-100">None open</p>
          </div>
        </div>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 04 — anomaly signal cards (slide), unique fraud wording */
export function FraudPreview() {
  const reducedMotion = useReducedMotion()
  const signals = [
    { id: "dup", Icon: Users, label: "Possible duplicate license #D-448291", tone: "for review" },
    { id: "eld", Icon: Unplug, label: "ELD unplug gap · 18 min", tone: "device signal" },
    { id: "jump", Icon: ArrowRightLeft, label: "Location jump vs last ping", tone: "mismatch" },
  ] as const

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Anomaly signals">
        <div className="space-y-1.5">
          {signals.map((signal, index) => (
            <div
              key={signal.id}
              className={`flex items-start gap-2.5 rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566] ${
                reducedMotion ? "" : "aisr-fraud-slide group-hover:[animation-play-state:paused]"
              }`}
              style={reducedMotion ? undefined : { ["--aisr-fraud-delay" as string]: `${index * 0.35}s` }}
            >
              <signal.Icon className="mt-0.5 shrink-0 text-[#EF9F27]" size={14} aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-xs text-slate-100">{signal.label}</p>
                <p className="text-[10px] text-sky-300">{signal.tone}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-slate-400">
          Values are illustrative and represent potential indicators for review, not confirmed fraud.
        </p>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 05 — fleet roster snapshot (highlight sweep) */
export function CompanyPreview() {
  const reducedMotion = useReducedMotion()
  const rows = [
    { unit: "Fleet drivers", value: "46 active" },
    { unit: "Trucks / VIN", value: "38 assigned" },
    { unit: "Open compliance", value: "2 items" },
    { unit: "Maintenance due", value: "5 units" },
  ]

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Carrier workspace · Northline Hauling">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2a4a85] bg-[#16264a] text-[#38bdf8]">
            <Building2 size={16} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-100">Northline Hauling LLC</p>
            <p className="text-[11px] text-sky-300">MC-918402 · company view</p>
          </div>
        </div>
        <div className="space-y-1.5">
          {rows.map((row, index) => (
            <div
              key={row.unit}
              className={`relative flex items-center justify-between overflow-hidden rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-1.5 text-xs text-slate-100 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566] ${
                reducedMotion ? "" : "aisr-company-row group-hover:[animation-play-state:paused]"
              }`}
              style={reducedMotion ? undefined : { ["--aisr-company-delay" as string]: `${index * 0.4}s` }}
            >
              <span>{row.unit}</span>
              <span className="text-sky-300">{row.value}</span>
            </div>
          ))}
        </div>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 06 — broker vetting scorecard (meter fill), not check-ticks */
export function BrokerPreview() {
  const reducedMotion = useReducedMotion()

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Carrier vetting card">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-slate-100">Summit Freight Co.</p>
            <p className="text-[11px] text-sky-300">Broker review · DOT-772184</p>
          </div>
          <span className="rounded-full border border-sky-400/40 bg-[#1b3566] px-2 py-0.5 text-[10px] text-sky-300">
            Consistency OK
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { label: "Safety history", pct: 78 },
            { label: "Insurance on file", pct: 92 },
            { label: "Inspection record", pct: 64 },
          ].map((meter) => (
            <div key={meter.label}>
              <div className="mb-1 flex justify-between text-[11px] text-slate-300">
                <span>{meter.label}</span>
                <span className="text-sky-300">{meter.pct}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[#1b3566]">
                <div
                  className={`h-full rounded-full bg-[#38bdf8] ${
                    reducedMotion ? "" : "aisr-broker-meter group-hover:[animation-play-state:paused]"
                  }`}
                  style={{
                    width: reducedMotion ? `${meter.pct}%` : undefined,
                    ["--aisr-meter-pct" as string]: `${meter.pct}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <FeatureRow
          icon={<ClipboardCheck size={14} />}
          label="Carrier info consistency check"
          trailing={<span className="text-[10px] text-[#5DCAA5]">Passed concept</span>}
        />
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 07 — load pipeline (step advance), not route map */
export function FreightPreview() {
  const reducedMotion = useReducedMotion()
  const steps = ["Request", "Assigned", "Pickup", "In transit"] as const
  const active = 2

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Load board · FR-20491">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2a4a85] bg-[#16264a] text-[#38bdf8]">
            <Package size={16} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-slate-100">Refrigerated · Chicago → Memphis</p>
            <p className="text-[11px] text-sky-300">Carrier: Blue Ridge Logistics</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1">
          {steps.map((step, index) => (
            <div key={step} className="flex min-w-0 flex-1 flex-col items-center gap-1">
              <div
                className={`h-1.5 w-full rounded-full ${
                  index <= active ? "bg-[#38bdf8]" : "bg-[#1b3566]"
                } ${
                  !reducedMotion && index === active
                    ? "aisr-freight-step group-hover:[animation-play-state:paused]"
                    : ""
                }`}
              />
              <span className={`truncate text-[9px] ${index <= active ? "text-sky-300" : "text-slate-500"}`}>
                {step}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <div className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
            <p className="text-[10px] text-slate-400">Assigned unit</p>
            <p className="text-xs text-slate-100">TRK-881 · Sam Okonkwo</p>
          </div>
          <div className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
            <p className="text-[10px] text-slate-400">Pickup concept</p>
            <p className="text-xs text-[#5DCAA5]">Gate verified</p>
          </div>
        </div>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 08 — policy card with expiration countdown */
export function InsurancePreview() {
  const reducedMotion = useReducedMotion()

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Policy coverage panel">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-medium text-slate-100">Liability · POL-55-8821</p>
            <p className="text-[11px] text-sky-300">Linked VIN 1HGCM… · driver Dana Cho</p>
          </div>
          <Shield className="shrink-0 text-[#38bdf8]" size={18} aria-hidden="true" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[
            { label: "Limit", value: "$1M" },
            { label: "Status", value: "Active" },
            { label: "Accept", value: "Pending" },
          ].map((tile) => (
            <div
              key={tile.label}
              className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]"
            >
              <p className="text-[10px] text-slate-400">{tile.label}</p>
              <p className="text-xs font-medium text-slate-100">{tile.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2">
          <div className="mb-1.5 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1 text-slate-300">
              <Timer size={12} className="text-[#38bdf8]" aria-hidden="true" />
              Days to expiration
            </span>
            <span className="text-sky-300">24 days</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[#1b3566]">
            <div
              className={`h-full rounded-full bg-[#EF9F27] ${
                reducedMotion ? "w-[35%]" : "aisr-insurance-expire group-hover:[animation-play-state:paused]"
              }`}
            />
          </div>
          <p className="mt-1.5 text-[10px] text-slate-400">Cancellation watch: none on file</p>
        </div>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 09 — route map with location-only chips (unique labels) */
export function LocationPreview() {
  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Live route monitor">
        <RouteMap className="h-36" compact />
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2 py-1.5 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
            <div className="flex items-center gap-1 text-[#38bdf8]">
              <MapPin size={11} aria-hidden="true" />
              <span className="text-[10px] text-slate-400">Ping</span>
            </div>
            <p className="mt-0.5 text-[11px] text-slate-100">2 min ago</p>
          </div>
          <div className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2 py-1.5 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
            <div className="flex items-center gap-1 text-[#38bdf8]">
              <Route size={11} aria-hidden="true" />
              <span className="text-[10px] text-slate-400">Deviation</span>
            </div>
            <p className="mt-0.5 text-[11px] text-[#5DCAA5]">None</p>
          </div>
          <div className="rounded-lg border border-[#2a4a85] bg-[#16264a] px-2 py-1.5 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
            <div className="flex items-center gap-1 text-[#38bdf8]">
              <Gauge size={11} aria-hidden="true" />
              <span className="text-[10px] text-slate-400">Mileage</span>
            </div>
            <p className="mt-0.5 text-[11px] text-slate-100">418 mi</p>
          </div>
        </div>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 10 — incident timeline (grow), not fraud alert list */
export function IncidentPreview() {
  const reducedMotion = useReducedMotion()
  const events = [
    { t: "Mar 12", label: "Cargo theft report filed", meta: "Broker: Apex Loads" },
    { t: "Mar 13", label: "Linked unit TRK-552", meta: "Driver: M. Hassan" },
    { t: "Mar 14", label: "Prior stop corridor match", meta: "I-20 west segment" },
  ]

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Freight incident timeline">
        <div className="mb-2 flex items-center gap-2">
          <Radar className="text-[#EF9F27]" size={16} aria-hidden="true" />
          <p className="text-sm font-medium text-slate-100">Case INC-3901 · theft concept</p>
        </div>
        <div className="relative space-y-2 pl-3">
          <span className="absolute bottom-1 left-[7px] top-1 w-px bg-[#22386a]" aria-hidden="true" />
          {events.map((event, index) => (
            <div
              key={event.t}
              className={`relative flex gap-2 ${
                reducedMotion ? "" : "aisr-incident-node group-hover:[animation-play-state:paused]"
              }`}
              style={reducedMotion ? undefined : { ["--aisr-incident-delay" as string]: `${index * 0.45}s` }}
            >
              <span className="relative z-[1] mt-1.5 size-2 shrink-0 rounded-full bg-[#38bdf8]" aria-hidden="true" />
              <div className="min-w-0 flex-1 rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-1.5 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-slate-100">{event.label}</p>
                  <span className="shrink-0 text-[10px] text-sky-300">{event.t}</span>
                </div>
                <p className="text-[10px] text-slate-400">{event.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 11 — integration connection tiles (pulse dots) */
export function ExternalPreview() {
  const reducedMotion = useReducedMotion()
  const sources = [
    { id: "hos", label: "HOS archive feed", state: "Connected", Icon: PlugZap },
    { id: "vin", label: "VIN registry lookup", state: "Connected", Icon: Database },
    { id: "insp", label: "Inspection exchange", state: "Pending access", Icon: HardDrive },
  ] as const

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="External data links">
        <div className="space-y-1.5">
          {sources.map((source) => (
            <div
              key={source.id}
              className="flex items-center gap-2.5 rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]"
            >
              <source.Icon className="shrink-0 text-[#38bdf8]" size={14} aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-100">{source.label}</p>
                <p className="text-[10px] text-slate-400">{source.state}</p>
              </div>
              <span
                className={`size-2 shrink-0 rounded-full ${
                  source.state === "Connected" ? "bg-[#5DCAA5]" : "bg-[#EF9F27]"
                } ${reducedMotion ? "" : "aisr-external-pulse group-hover:[animation-play-state:paused]"}`}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
        <p className="mt-2 text-[10px] text-slate-400">Providers shown only as concepts until published.</p>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 12 — admin KPI tiles (unique metrics), not grey bars */
export function AdminPreview() {
  const reducedMotion = useReducedMotion()
  const kpis = [
    { label: "Active profiles", value: "1,284", Icon: Users },
    { label: "Open reviews", value: "37", Icon: FileWarning },
    { label: "Fleet orgs", value: "92", Icon: Building2 },
    { label: "Alert queue", value: "14", Icon: Siren },
  ] as const

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Admin oversight board">
        <div className="grid grid-cols-2 gap-1.5">
          {kpis.map((kpi, index) => (
            <div
              key={kpi.label}
              className={`rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566] ${
                reducedMotion ? "" : "aisr-admin-fade group-hover:[animation-play-state:paused]"
              }`}
              style={reducedMotion ? undefined : { ["--aisr-admin-delay" as string]: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-1 text-[#38bdf8]">
                <kpi.Icon size={12} aria-hidden="true" />
                <span className="text-[10px] text-slate-400">{kpi.label}</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-100">{kpi.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2">
          <Activity className="shrink-0 text-[#38bdf8]" size={14} aria-hidden="true" />
          <p className="text-[11px] text-slate-300">Analytics scope pending client documentation.</p>
        </div>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}

/** 13 — notification feed with severity (stack), unique from 04/10 */
export function AlertsPreview() {
  const reducedMotion = useReducedMotion()
  const alerts = [
    {
      id: "a1",
      Icon: ShieldAlert,
      title: "Face re-check requested",
      channel: "Verification",
      severity: "Medium",
      color: "text-[#EF9F27]",
    },
    {
      id: "a2",
      Icon: AlertTriangle,
      title: "Route corridor left early",
      channel: "Location",
      severity: "High",
      color: "text-[#e24b4a]",
    },
    {
      id: "a3",
      Icon: AlertOctagon,
      title: "Policy nearing cancel window",
      channel: "Insurance",
      severity: "Low",
      color: "text-[#38bdf8]",
    },
  ] as const

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Risk notification feed">
        <div className="space-y-1.5">
          {alerts.map((alert, index) => (
            <div
              key={alert.id}
              className={`flex items-start gap-2.5 rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-2 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566] ${
                reducedMotion ? "" : "aisr-alert-stack group-hover:[animation-play-state:paused]"
              }`}
              style={reducedMotion ? undefined : { ["--aisr-alert-delay" as string]: `${index * 0.4}s` }}
            >
              <alert.Icon className={`mt-0.5 shrink-0 ${alert.color}`} size={14} aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-100">{alert.title}</p>
                <p className="text-[10px] text-slate-400">{alert.channel}</p>
              </div>
              <span className="shrink-0 rounded border border-[#2a4a85] px-1.5 py-0.5 text-[9px] text-sky-300">
                {alert.severity}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
          <Link2 size={10} aria-hidden="true" />
          Channels and severity levels not claimed as final.
        </p>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}
