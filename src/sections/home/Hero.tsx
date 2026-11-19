import { ArrowRight } from "lucide-react"
import { Container } from "@/components/common/Container"
import { Button } from "@/components/ui/Button"
import { heroBadge, heroChecks, heroCopy } from "@/constants/landing"
import heroImage from "@/assets/images/hero-truck-port.jpg"

export function Hero() {
  return (
    <section className="relative h-svh overflow-hidden bg-[#070b16] text-white">
      <img
        src={heroImage}
        alt=""
        width={1280}
        height={720}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-center"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,22,0.9)_0%,rgba(7,11,22,0.72)_32%,rgba(7,11,22,0.28)_55%,rgba(7,11,22,0.12)_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex h-full items-center pt-14 pb-8 md:pt-16 md:pb-10">
        <div className="max-w-xl">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/85 backdrop-blur-sm sm:text-sm">
            {heroBadge}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.2rem]">
            {heroCopy.title}
          </h1>

          <p className="mt-3 max-w-lg text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
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
              <li key={item.id} className="flex items-center gap-2.5 text-sm text-white/85">
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
      </Container>
    </section>
  )
}
