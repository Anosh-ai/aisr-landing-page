import { ArrowRight, Check } from "lucide-react"
import { Container } from "@/components/common/Container"
import { Button } from "@/components/ui/Button"
import { platformPoints } from "@/constants/landing"
import platformDashboard from "@/assets/images/platform-dashboard.webp"
import "./platform-deep-dive.css"

export function PlatformDeepDive() {
  return (
    <section id="platform" className="scroll-mt-24 overflow-hidden bg-white py-16 md:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-2 mx-auto w-full max-w-xl [perspective:1400px] lg:order-1 lg:mx-0 lg:max-w-none">
          {/* Soft cyan glow plate behind the tilted frame */}
          <div
            aria-hidden="true"
            className="aisr-dash-glow absolute -inset-x-4 -inset-y-6 rounded-[1.75rem] bg-secondary/30 blur-2xl sm:-inset-x-6"
          />
          <div
            aria-hidden="true"
            className="absolute -left-3 top-8 h-[76%] w-[90%] rounded-[1.35rem] bg-secondary/40 sm:-left-5"
          />

          <div className="aisr-dash-frame relative origin-center">
            <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#121212] shadow-[0_32px_80px_-28px_rgba(25,29,49,0.7),0_0_0_1px_rgba(104,207,247,0.22),0_0_40px_-8px_rgba(104,207,247,0.35)]">
              <img
                src={platformDashboard}
                alt="AISR platform dashboard showing cargo layout, delivery performance, and vehicle status"
                width={1280}
                height={800}
                className="block h-auto w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Overlapping risk score card — floats off the right edge */}
            <div className="aisr-dash-risk absolute -right-3 bottom-[16%] z-10 w-[8.5rem] rounded-2xl border border-white/10 bg-primary/95 px-3.5 py-3.5 shadow-[0_18px_40px_-16px_rgba(11,18,32,0.75)] backdrop-blur-sm sm:-right-5 sm:bottom-[20%] sm:w-40 sm:px-4 sm:py-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/55">
                Risk Score
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Check aria-hidden="true" size={14} strokeWidth={3} />
                </span>
                <p className="text-sm font-semibold text-white">Low Risk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="inline-flex rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Powerful Platform
          </p>
          <h2 className="mt-5 max-w-md text-3xl leading-tight text-primary md:text-4xl">
            Real-Time Visibility. Lower Risk. Greater Control.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-ink">
            AISR keeps identity, ELD activity, insurance, and freight relationships connected so
            brokers and carriers can review the full picture before and during a shipment.
          </p>
          <ul className="mt-6 space-y-3">
            {platformPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-6 text-ink">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-primary">
                  <Check aria-hidden="true" size={13} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/#product">
              Explore the Platform
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
