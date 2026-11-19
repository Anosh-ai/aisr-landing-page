import {
  BadgeCheck,
  ChartColumnIncreasing,
  MapPinned,
  ShieldCheck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Container } from "@/components/common/Container"
import { advantageFeatures } from "@/constants/landing"

const icons: Record<(typeof advantageFeatures)[number]["id"], LucideIcon> = {
  "driver-verification": BadgeCheck,
  "eld-safety": ChartColumnIncreasing,
  "carrier-insurance": ShieldCheck,
  "freight-risk": MapPinned,
}

export function Advantage() {
  return (
    <section id="product" className="scroll-mt-24 bg-canvas py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
          <p className="inline-flex rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            The AISR Advantage
          </p>
          <h2 className="mt-5 text-3xl leading-tight text-primary md:text-4xl">
            Everything You Need for a Safer, More Reliable Freight Network
          </h2>
          <p className="mt-4 text-base leading-7 text-ink">
            AISR connects driver identity, ELD activity, trucks, insurance, and freight so
            inconsistencies are easier to see and review.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {advantageFeatures.map((feature) => {
            const Icon = icons[feature.id]
            return (
              <li
                key={feature.id}
                className="rounded-card border border-primary/8 bg-card p-5 shadow-[0_12px_28px_-18px_rgba(104,207,247,0.55),0_4px_12px_-8px_rgba(104,207,247,0.28)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-control bg-secondary/15 text-primary">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3 className="mt-4 text-lg text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink">{feature.text}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
