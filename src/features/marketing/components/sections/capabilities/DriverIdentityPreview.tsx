import {
  CalendarCheck,
  CheckCircle2,
  CopyCheck,
  Cpu,
  IdCard,
  ScanFace,
  Smartphone,
  User,
} from "lucide-react"
import { useSyncExternalStore } from "react"
import { CapabilityPreviewStage } from "@/features/marketing/components/sections/capabilities/CapabilityPreviewStage"
import {
  FeatureRow,
  FeatureWindow,
} from "@/features/marketing/components/sections/capabilities/FeatureWindow"

const checks = [
  { id: "license", label: "License scanned", Icon: IdCard },
  { id: "dob", label: "Date of birth matched", Icon: CalendarCheck },
  { id: "face", label: "Face check concept", Icon: ScanFace },
  { id: "phone", label: "Phone and device linked", Icon: Smartphone },
  { id: "eld", label: "ELD identity linked", Icon: Cpu },
] as const

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function DriverIdentityPreview() {
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)

  return (
    <CapabilityPreviewStage>
      <FeatureWindow title="Driver identity workspace">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#16264a]">
              <span className="pointer-events-none absolute inset-1 border border-[#38bdf8]/50" aria-hidden="true" />
              <span
                className="pointer-events-none absolute left-0.5 top-0.5 h-2.5 w-2.5 border-l-2 border-t-2 border-[#38bdf8]"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute right-0.5 top-0.5 h-2.5 w-2.5 border-r-2 border-t-2 border-[#38bdf8]"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute bottom-0.5 left-0.5 h-2.5 w-2.5 border-b-2 border-l-2 border-[#38bdf8]"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute bottom-0.5 right-0.5 h-2.5 w-2.5 border-b-2 border-r-2 border-[#38bdf8]"
                aria-hidden="true"
              />
              <User className="relative z-[1] text-[#38bdf8]" size={22} aria-hidden="true" />
              {!reducedMotion ? (
                <span
                  className="aisr-identity-scan-line absolute inset-x-1 h-0.5 bg-[#38bdf8] group-hover:[animation-play-state:paused]"
                  aria-hidden="true"
                />
              ) : null}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-slate-100">Jordan Miles</p>
              <p className="text-[11px] text-sky-300">License, DOB match, face check concept</p>
            </div>
          </div>

          <div className="h-1 overflow-hidden rounded-full bg-[#1b3566]" aria-hidden="true">
            <div
              className={`h-full rounded-full bg-[#38bdf8] ${
                reducedMotion
                  ? "w-full"
                  : "aisr-identity-progress group-hover:[animation-play-state:paused]"
              }`}
            />
          </div>

          <div className="space-y-1.5">
            {checks.map((check, index) => (
              <FeatureRow
                key={check.id}
                icon={<check.Icon size={14} />}
                label={check.label}
                trailing={
                  <CheckCircle2
                    className={
                      reducedMotion
                        ? "shrink-0 text-[#5DCAA5]"
                        : "aisr-identity-check shrink-0 text-[#5DCAA5] group-hover:[animation-play-state:paused]"
                    }
                    style={
                      reducedMotion
                        ? undefined
                        : { ["--aisr-check-delay" as string]: `${index * 0.6}s` }
                    }
                    size={14}
                    aria-hidden="true"
                  />
                }
              />
            ))}
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0b3b32] px-2.5 py-1 text-[11px] text-[#5DCAA5]">
            <CopyCheck size={12} aria-hidden="true" />
            <span>Duplicate check: none found</span>
          </div>
        </div>
      </FeatureWindow>
    </CapabilityPreviewStage>
  )
}
