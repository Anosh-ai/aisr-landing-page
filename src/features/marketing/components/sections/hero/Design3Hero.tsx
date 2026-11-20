import { ArrowRight, MapPin, ShieldCheck, Truck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import heroHighway from "@/features/marketing/assets/images/hero-highway.jpg"
import { design3Content } from "@/features/marketing/constants/landingContent"
import { shellPad } from "@/features/marketing/constants/shell"
import { Button } from "@/shared/components/ui/Button"
import "./design3-hero.css"

const heroIcons: Record<string, LucideIcon> = {
  Truck,
  ShieldCheck,
  MapPin,
}

export function Design3Hero() {
  return (
    <section
      id={design3Content.hero.id}
      aria-labelledby="design-3-hero-title"
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden bg-[#0b1b31] text-white lg:h-svh"
    >
      <img
        src={heroHighway}
        alt=""
        width={1280}
        height={720}
        className="absolute inset-0 h-full w-full object-cover object-[0%_52%]"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,35,0.97)_0%,rgba(7,18,35,0.91)_46%,rgba(7,18,35,0.57)_75%,rgba(7,18,35,0.16)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,18,35,0.38)_0%,transparent_45%)]"
        aria-hidden="true"
      />

      <div className={`${shellPad} relative z-10 pt-20 pb-7 sm:pt-24 lg:pt-[4.5rem]`}>
        <div className="max-w-[44rem] text-left">
          <p className="design3-hero-enter [--design3-enter-delay:80ms] inline-flex rounded-full border border-cyan-200/55 bg-[#09192e]/55 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.16em] text-cyan-100 sm:text-xs">
            {design3Content.hero.eyebrow}
          </p>
          <h1
            id="design-3-hero-title"
            className="design3-hero-enter [--design3-enter-delay:140ms] mt-4 max-w-[44rem] font-display text-[2.35rem] font-bold leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[2.8rem]"
          >
            {design3Content.hero.headlineBefore}
            <span className="text-[#75e4f2]">{design3Content.hero.headlineAccent}</span>
            {design3Content.hero.headlineAfter}
          </h1>
          <p className="design3-hero-enter [--design3-enter-delay:220ms] mt-3 max-w-[38rem] text-sm leading-6 text-white/90 sm:text-base sm:leading-6">
            {design3Content.hero.description}
          </p>

          <div className="design3-hero-enter [--design3-enter-delay:300ms] mt-5 flex flex-wrap gap-3">
            <Button
              href={design3Content.hero.demoHref}
              className="rounded-lg px-6 py-3.5 text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              {design3Content.hero.demoLabel}
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2.25} />
            </Button>
            <Button
              href={design3Content.hero.featuresHref}
              variant="ghost"
              className="rounded-lg border-white/65 px-6 py-3.5 text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              {design3Content.hero.featuresLabel}
            </Button>
          </div>

          <ul className="design3-hero-enter [--design3-enter-delay:380ms] mt-5 flex flex-col gap-y-3 text-sm font-medium text-white sm:flex-row sm:items-center sm:gap-y-0">
            {design3Content.hero.highlights.map((item, index) => {
              const Icon = heroIcons[item.icon]
              return (
                <li
                  key={item.id}
                  className={`flex items-center gap-2.5 sm:py-1 ${
                    index > 0 ? "sm:border-l sm:border-white/30 sm:pl-5" : "sm:pr-5"
                  } ${index < design3Content.hero.highlights.length - 1 ? "sm:pr-5" : ""}`}
                >
                  <Icon aria-hidden="true" className="size-5 shrink-0 text-[#86e8f2]" strokeWidth={1.8} />
                  {item.label}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
