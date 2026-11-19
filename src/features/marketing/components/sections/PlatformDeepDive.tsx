import { ArrowRight, Check } from "lucide-react"
import { platformPoints } from "@/features/marketing/constants/landing"
import platformDashboard from "@/features/marketing/assets/images/platform-dashboard.png"
import { Button } from "@/shared/components/ui/Button"
import "./platform-deep-dive.css"

export function PlatformDeepDive() {
  return (
    <section id="platform" className="scroll-mt-24 overflow-x-clip bg-white pb-10 pt-6 md:pb-16 md:pt-8">
      <div className="flex w-full flex-col items-start gap-4 pl-3 pr-3 sm:gap-5 sm:pl-5 sm:pr-4 lg:flex-row lg:items-center lg:justify-start lg:gap-5 lg:pl-6 lg:pr-6 xl:gap-6 xl:pl-8 xl:pr-8">
        <div className="relative order-2 w-fit max-w-full shrink-0 overflow-visible py-1 pe-3 text-left [perspective:1400px] lg:order-1 lg:pe-4">
          <div className="aisr-dash-frame relative origin-left">
            <img
              src={platformDashboard}
              alt="AISR platform dashboard showing shipment tracking, route monitoring, and risk score"
              width={1024}
              height={528}
              className="relative z-[1] ml-0 block h-auto w-[680px] max-w-full rounded-none object-contain object-left [clip-path:none] sm:w-[740px] lg:w-[780px] xl:w-[840px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="order-1 w-full max-w-md shrink-0 text-left lg:order-2 lg:-ml-1 lg:max-w-[22rem] xl:max-w-[26rem]">
          <p className="inline-flex rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Powerful Platform
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight text-primary md:text-4xl">
            Real-Time Visibility. Lower Risk. Greater Control.
          </h2>
          <ul className="mt-5 space-y-3">
            {platformPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm leading-6 text-ink sm:text-[0.95rem]">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-primary">
                  <Check aria-hidden="true" size={13} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href="/#product">
              Explore the Platform
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
