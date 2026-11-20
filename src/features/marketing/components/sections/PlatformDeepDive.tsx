import { ArrowRight, Check } from "lucide-react"
import { platformPoints } from "@/features/marketing/constants/landing"
import platformDashboard from "@/features/marketing/assets/images/platform-dashboard.png"
import { Button } from "@/shared/components/ui/Button"
import "./platform-deep-dive.css"

export function PlatformDeepDive() {
  return (
    <section id="platform" className="scroll-mt-24 overflow-x-clip bg-white pb-14 pt-10 md:pb-20 md:pt-14">
      <div className="flex w-full min-w-0 flex-col items-stretch gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-start lg:gap-16 lg:px-12 xl:gap-24 xl:px-16 2xl:gap-32">
        <div className="relative order-2 min-w-0 w-full py-2 text-left lg:order-1 lg:w-[min(40rem,calc(100%-26rem-4rem))] xl:w-[min(44rem,calc(100%-28rem-6rem))] 2xl:w-[min(46rem,calc(100%-28rem-8rem))]">
          <div className="relative w-full [perspective:1400px]">
            {/* Soft cyan plates behind the tilted dashboard — match reference depth */}
            <div
              aria-hidden="true"
              className="aisr-dash-glow absolute -inset-x-4 -inset-y-6 rounded-[1.75rem] bg-[#d2fcfb]/80 blur-2xl sm:-inset-x-6"
            />
            <div
              aria-hidden="true"
              className="absolute -left-2 top-6 h-[78%] w-[92%] rounded-[1.35rem] bg-[#b8f4f8]/70 sm:-left-4"
            />
            <div
              aria-hidden="true"
              className="absolute -left-5 top-12 h-[70%] w-[86%] rounded-[1.2rem] bg-[#92bcd5]/35 sm:-left-7"
            />

            <div className="aisr-dash-frame relative origin-left">
              <div aria-hidden="true" className="aisr-dash-shade" />
              <img
                src={platformDashboard}
                alt="AISR platform dashboard showing shipment tracking, route monitoring, and risk score"
                width={941}
                height={399}
                className="relative z-[1] block h-auto w-full rounded-none object-contain object-left [clip-path:none]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div className="order-1 w-full min-w-0 max-w-md font-sans text-left lg:order-2 lg:w-[26rem] lg:max-w-[26rem] lg:shrink-0 xl:w-[28rem] xl:max-w-[28rem]">
          <p className="inline-flex rounded-full bg-[#bcf4fd] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Powerful Platform
          </p>
          <h2 className="aisr-platform-title mt-5 text-3xl font-bold leading-tight tracking-tight text-primary md:text-4xl">
            Real-Time Visibility. Lower Risk. Greater Control.
          </h2>
          <ul className="mt-6 space-y-3.5">
            {platformPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 font-sans text-sm leading-6 text-ink sm:text-[0.95rem]">
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
      </div>
    </section>
  )
}
