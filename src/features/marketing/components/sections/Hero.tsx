import { ArrowRight } from "lucide-react"
import heroBanner from "@/features/marketing/assets/images/hero-banner.png"
import { heroBadge, heroChecks, heroCopy } from "@/features/marketing/constants/landing"
import { Button } from "@/shared/components/ui/Button"

export function Hero() {
  return (
    <section className="relative h-svh overflow-hidden bg-[#070b16] text-white">
      <img
        src={heroBanner}
        alt=""
        width={1023}
        height={576}
        decoding="async"
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 size-full object-cover object-[right_top] [image-rendering:auto]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,22,0.82)_0%,rgba(7,11,22,0.5)_28%,rgba(7,11,22,0.18)_52%,transparent_76%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-[linear-gradient(180deg,rgba(7,11,22,0.65)_0%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full min-h-0 items-start sm:items-center pl-5 pr-5 pt-28 pb-8 sm:pl-8 sm:pr-6 md:pt-32 md:pb-10 lg:pl-12 xl:pl-16">
        <div className="mr-auto w-full max-w-lg text-left lg:max-w-xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 sm:text-sm">
            {heroBadge}
          </p>

          <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.2rem]">
            {heroCopy.title}
          </h1>

          <p className="mt-3 max-w-lg text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {heroCopy.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="/contact" className="rounded-xl px-6 py-3 text-sm sm:text-[15px]">
              Access your dashboard
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
            <Button
              href="/#product"
              variant="ghost"
              className="rounded-xl border-white/20 px-6 py-3 text-sm sm:text-[15px]"
            >
              Explore features
            </Button>
          </div>

          <ul className="mt-6 grid max-w-md grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {heroChecks.map((item) => (
              <li key={item.id} className="flex items-center gap-2.5 text-sm text-white/90">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                  <img
                    src={item.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                    decoding="async"
                    aria-hidden="true"
                  />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
