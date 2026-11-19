import { ArrowRight, Check } from "lucide-react"
import { Container } from "@/components/common/Container"
import { Button } from "@/components/ui/Button"
import { platformPoints } from "@/constants/landing"

export function PlatformDeepDive() {
  return (
    <section id="platform" className="scroll-mt-24 bg-surface py-16 md:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[1.4rem] border border-primary/10 bg-white shadow-[0_30px_80px_-40px_rgba(11,18,32,0.55)]">
            <div className="border-b border-primary/8 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/50">
                Shipment Tracking
              </p>
              <p className="mt-1 text-lg font-semibold text-primary">Active load monitoring</p>
            </div>
            <div className="relative h-56 bg-[linear-gradient(160deg,#e8eef7,#d7e4f3)] sm:h-64">
              <svg viewBox="0 0 480 260" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <path
                  d="M40 180C110 150 160 90 230 100C300 110 330 160 420 140"
                  stroke="#191D31"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.35"
                />
                <path
                  d="M40 180C110 150 160 90 230 100C300 110 330 160 420 140"
                  stroke="#68CFF7"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  fill="none"
                />
                <circle cx="230" cy="100" r="8" fill="#68CFF7" />
                <circle cx="420" cy="140" r="7" fill="#191D31" />
              </svg>
              <div className="absolute left-5 top-5 rounded-control bg-white px-3 py-2 text-xs font-semibold text-primary shadow-sm">
                Pickup
              </div>
              <div className="absolute bottom-5 right-5 rounded-control bg-white px-3 py-2 text-xs font-semibold text-primary shadow-sm">
                Delivery
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 left-6 rounded-card border border-primary/10 bg-white px-4 py-3 shadow-[0_18px_40px_-24px_rgba(11,18,32,0.55)] sm:left-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/50">
              Risk indicator
            </p>
            <p className="mt-1 text-sm font-semibold text-primary">Route match under review</p>
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
