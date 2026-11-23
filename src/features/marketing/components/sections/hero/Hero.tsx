import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { HeroDashboard } from "@/features/marketing/components/sections/hero/HeroDashboard"
import { HeroShapes } from "@/features/marketing/components/sections/hero/HeroShapes"
import { heroContent } from "@/features/marketing/constants/landing"
import { Button } from "@/shared/components/ui/Button"
import { shellContent } from "@/features/marketing/constants/shell"

const ease = [0.22, 1, 0.36, 1] as const

function HeroItem({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotion()
  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 overflow-visible bg-[linear-gradient(160deg,#191d31_0%,#1a1f38_48%,#191d31_100%)] text-white"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 12%, rgba(104,207,247,0.28), transparent 36%), radial-gradient(circle at 18% 70%, rgba(104,207,247,0.1), transparent 32%), radial-gradient(circle at 82% 55%, rgba(104,207,247,0.08), transparent 34%)",
        }}
      />
      <HeroShapes />
      <div className={`${shellContent} relative z-[2] flex flex-col items-center overflow-visible pb-16 pt-32 text-center md:pb-20 md:pt-36`}>
        <HeroItem>
          <p className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.18em] text-secondary shadow-[0_0_0_4px_rgba(104,207,247,0.08)] backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-secondary" aria-hidden="true" />
            {heroContent.eyebrow}
          </p>
        </HeroItem>

        <HeroItem delay={0.08} className="mt-6 max-w-4xl">
          <h1
            id="hero-title"
            className="font-display text-[2.35rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]"
          >
            <span className="block">{heroContent.titleLead}</span>
            <span className="mt-1.5 block bg-gradient-to-r from-secondary via-[#9fe3fb] to-secondary bg-clip-text text-transparent">
              {heroContent.titleAccent}
            </span>
          </h1>
        </HeroItem>

        <HeroItem delay={0.16} className="mx-auto mt-6 max-w-2xl">
          <p className="text-base leading-8 text-white/78 sm:text-lg sm:leading-8">{heroContent.description}</p>
        </HeroItem>

        <HeroItem delay={0.24} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={heroContent.primaryCta.href} className="aisr-cta-shimmer">
            {heroContent.primaryCta.label}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button href={heroContent.secondaryCta.href} variant="ghost">
            {heroContent.secondaryCta.label}
          </Button>
        </HeroItem>

        <HeroItem delay={0.3} className="mx-auto mt-20 max-w-xl md:mt-14">
          <p className="text-xs leading-5 text-white/55">{heroContent.note}</p>
        </HeroItem>

        <HeroDashboard />
      </div>
    </section>
  )
}
