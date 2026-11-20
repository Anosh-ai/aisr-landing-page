import { ArrowRight, ChartColumnIncreasing, MapPin, ShieldCheck, Truck, UserRoundCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import heroBanner from "@/features/marketing/assets/images/hero-banner.png"
import {
  design2Actions,
  design2Features,
  design2Hero,
} from "@/features/marketing/constants/landingContent"
import { shellPad } from "@/features/marketing/constants/shell"
import { Button } from "@/shared/components/ui/Button"

const featureIcons: Record<(typeof design2Features)[number]["id"], LucideIcon> = {
  "driver-verification": UserRoundCheck,
  "eld-safety": ChartColumnIncreasing,
  "carrier-insurance": ShieldCheck,
  "freight-risk": MapPin,
}

export function Design2Hero() {
  return (
    <section
      className="relative flex min-h-svh flex-col overflow-hidden bg-[#041020] text-white lg:h-svh"
      aria-labelledby="design2-hero-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={heroBanner}
          alt=""
          width={1023}
          height={576}
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover object-[right_top]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,22,0.78)_0%,rgba(7,11,22,0.45)_30%,rgba(7,11,22,0.14)_55%,transparent_78%)]"
        aria-hidden="true"
      />

      <div className={`${shellPad} relative z-10 mt-4 pt-28 pb-8 lg:mt-[10vh] lg:max-w-3xl lg:pt-24 lg:pb-4`}>
        <h1
          id="design2-hero-title"
          className="max-w-[11em] text-[1.85rem] font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:max-w-none lg:text-[clamp(2rem,3.2vw,3.5rem)] lg:leading-[0.98]"
        >
          <span className="block">{design2Hero.titleLead}</span>
          <span className="block lg:whitespace-nowrap">{design2Hero.titleRest}</span>
        </h1>
        <span className="mt-4 block h-[3px] w-12 rounded-full bg-secondary lg:mt-5 lg:w-16" aria-hidden="true" />
        <p className="mt-4 max-w-md text-base leading-relaxed text-[#c5d0e0] lg:mt-5 lg:max-w-lg lg:text-lg">
          {design2Hero.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            href={design2Actions.requestDemo.href}
            className="w-full rounded-lg px-6 py-3.5 text-[15px] sm:w-auto sm:justify-self-start"
          >
            {design2Actions.requestDemo.label}
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2.25} />
          </Button>
          <Button
            href={design2Actions.explorePlatform.href}
            variant="ghost"
            className="h-11 px-5 py-0! shadow-none!"
          >
            {design2Actions.explorePlatform.label}
          </Button>
        </div>
        <p className="mt-5 flex items-center gap-2 text-sm text-[#c3ceda] sm:text-[0.95rem]">
          <Truck aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.75} />
          {design2Hero.proof}
        </p>
      </div>

      <ul className={`${shellPad} relative z-10 mt-auto grid grid-cols-1 gap-5 pb-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:pb-8`}>
        {design2Features.map((feature, index) => {
          const Icon = featureIcons[feature.id]
          return (
            <li
              key={feature.id}
              className={`flex items-start gap-3 ${index > 0 ? "lg:border-l lg:border-white/20 lg:pl-6" : ""} ${index < design2Features.length - 1 ? "lg:pr-6" : ""}`}
            >
              <Icon aria-hidden="true" className="mt-0.5 size-12 shrink-0 text-secondary" strokeWidth={1.75} />
              <div>
                <h2 className="text-[0.95rem] font-semibold leading-tight tracking-tight text-white lg:whitespace-nowrap">
                  {feature.title}
                </h2>
                <p className="mt-1 max-w-[16rem] text-[0.8125rem] leading-snug text-white/70">
                  {feature.text}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
