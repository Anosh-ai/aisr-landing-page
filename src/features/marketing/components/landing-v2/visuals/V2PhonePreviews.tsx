import type { ReactNode } from "react"
import { v2Mobile } from "@/features/marketing/constants/landing-v2"

function PhoneShell({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="mx-auto w-full max-w-[17rem]">
      <div className="overflow-hidden rounded-[1.75rem] border border-primary/15 bg-primary shadow-[0_28px_50px_-24px_rgba(25,29,49,0.55)]">
        <div className="flex items-center justify-center bg-primary-soft px-4 py-3">
          <span className="h-1.5 w-16 rounded-full bg-white/25" aria-hidden="true" />
        </div>
        <div className="min-h-[28rem] bg-surface px-3 pb-4 pt-3">{children}</div>
      </div>
      <p className="mt-3 text-center text-sm font-semibold text-primary">{title}</p>
      <p className="text-center text-xs text-ink">Illustrative preview</p>
    </div>
  )
}

export function V2PhonePreviews() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 sm:gap-8" aria-label="Illustrative mobile app previews">
      <PhoneShell title="Driver home">
        <div className="space-y-3">
          <div className="rounded-xl bg-primary px-3 py-4 text-white">
            <p className="text-[11px] uppercase tracking-[0.14em] text-secondary">Good morning</p>
            <p className="mt-1 font-display text-lg font-bold">Alex Driver</p>
            <p className="mt-2 text-xs text-white/70">Assigned unit · sample VIN</p>
          </div>
          <div className="rounded-xl border border-line bg-white p-3">
            <p className="text-xs font-semibold text-primary">Today</p>
            <div className="mt-2 space-y-2">
              {["On-duty window", "Next pickup concept", "Safety summary"].map((item) => (
                <div key={item} className="rounded-lg bg-surface px-3 py-2 text-xs text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-[11px] text-ink/70">{v2Mobile.sampleNote}</p>
        </div>
      </PhoneShell>

      <PhoneShell title="Shipment detail">
        <div className="space-y-3">
          <div className="rounded-xl border border-line bg-white p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/70">
              Load · sample
            </p>
            <p className="mt-1 font-display text-lg font-bold text-primary">CHI → DEN</p>
            <p className="mt-2 text-xs leading-5 text-ink">Pickup verification concept · OTP flow</p>
          </div>
          <div className="rounded-xl border border-line bg-white p-3">
            <p className="text-xs font-semibold text-primary">Checkpoints</p>
            <ol className="mt-2 space-y-2">
              {["Arrive at shipper", "Confirm identity", "Begin haul"].map((step, index) => (
                <li key={step} className="flex items-center gap-2 text-xs text-ink">
                  <span className="flex size-6 items-center justify-center rounded-full bg-secondary/20 text-[11px] font-bold text-primary">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-xl bg-primary px-3 py-3 text-center text-xs font-semibold text-secondary">
            Status: illustrative in-transit
          </div>
        </div>
      </PhoneShell>
    </div>
  )
}
