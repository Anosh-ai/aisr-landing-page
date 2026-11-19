import { ArrowRight, IdCard, LineChart, Shield, Truck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Container } from "@/components/common/Container"
import { howItWorksSteps } from "@/constants/landing"

const icons: Record<(typeof howItWorksSteps)[number]["id"], LucideIcon> = {
  verify: IdCard,
  connect: Truck,
  monitor: LineChart,
  protect: Shield,
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/60">
            How it works
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-primary md:text-4xl">
            From Verification to Real-Time Monitoring.
          </h2>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {howItWorksSteps.map((step, index) => {
            const Icon = icons[step.id]
            return (
              <li key={step.id} className="relative">
                <div className="h-full rounded-card border border-primary/8 bg-canvas p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-control bg-secondary/15 text-primary">
                      <Icon aria-hidden="true" size={22} />
                    </span>
                    <span className="font-display text-sm font-semibold text-secondary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink">{step.text}</p>
                </div>
                {index < howItWorksSteps.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-secondary xl:block"
                    size={18}
                  />
                ) : null}
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
