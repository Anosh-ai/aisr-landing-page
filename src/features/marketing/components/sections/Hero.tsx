import { ArrowRight, Play } from "lucide-react"
import heroBanner from "@/features/marketing/assets/images/hero-banner.png"
import { heroBadge, heroChecks, heroCopy } from "@/features/marketing/constants/landing"
import { Button } from "@/shared/components/ui/Button"

export function Hero() {
  return (
    <section className="relative h-svh overflow-hidden bg-[#031020] text-white">
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

      <div className="relative z-10 flex h-full min-h-0 items-start sm:items-center pl-5 pr-5 pt-28 pb-10 sm:pl-8 sm:pr-6 md:pt-32 md:pb-12 lg:pl-12 xl:pl-16">
        <div className="mr-auto w-full max-w-lg text-left lg:max-w-xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 font-sans text-[13px] font-medium tracking-wide text-white/90 sm:text-sm">
            {heroBadge}
          </p>

          <h1 className="font-display mt-5 text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            {heroCopy.title}
          </h1>

          <p className="mt-4 max-w-lg font-sans text-lg leading-7 text-white/80 sm:text-xl sm:leading-8">
            {heroCopy.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
            <Button href="/contact" className="rounded-lg px-6 py-3.5 text-[15px]">
              Access your dashboard
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2.25} />
            </Button>
            <Button
              href="/#how-it-works"
              variant="ghost"
              className="rounded-lg border-white/40 px-6 py-3.5 text-[15px]"
            >
              See How It Works
              <Play aria-hidden="true" size={16} strokeWidth={2.25} fill="currentColor" />
            </Button>
          </div>

          <ul className="mt-7 grid max-w-md grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {heroChecks.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2.5 font-sans text-sm font-medium text-white"
              >
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
