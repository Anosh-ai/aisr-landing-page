import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { V2HeroPreview } from "@/features/marketing/components/landing-v2/visuals/V2HeroPreview"
import { v2Hero, v2SectionY, v2Shell } from "@/features/marketing/constants/landing-v2"

const ease = [0.22, 1, 0.36, 1] as const

function Item({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduced = useReducedMotion()
  if (reduced) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function V2Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="top"
      className={`relative overflow-hidden bg-[linear-gradient(165deg,#191d31_0%,#1a1f38_46%,#121528_100%)] text-white ${v2SectionY}`}
      aria-labelledby="v2-hero-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(104,207,247,0.22),transparent_42%),radial-gradient(circle_at_80%_10%,rgba(104,207,247,0.12),transparent_36%)]" />
        {!reduced ? (
          <>
            <motion.span
              className="absolute left-[12%] top-[30%] size-40 rounded-full bg-secondary/10 blur-3xl"
              animate={{ x: [0, 24, 0], y: [0, -16, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="absolute bottom-[18%] right-[10%] size-48 rounded-full bg-secondary/10 blur-3xl"
              animate={{ x: [0, -18, 0], y: [0, 14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        ) : null}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #68cff7 1px, transparent 1px), linear-gradient(to bottom, #68cff7 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className={`${v2Shell} relative pt-20 md:pt-24`}>
        <div className="mx-auto max-w-3xl text-center">
          <Item>
            <p className="inline-flex items-center gap-2 rounded-full border border-secondary/35 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
              <span className="size-1.5 rounded-full bg-secondary" aria-hidden="true" />
              {v2Hero.eyebrow}
            </p>
          </Item>
          <Item delay={0.08} className="mt-6">
            <h1
              id="v2-hero-title"
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.4rem]"
            >
              {v2Hero.title}
            </h1>
          </Item>
          <Item delay={0.16} className="mt-5">
            <p className="text-base leading-8 text-white/78 md:text-lg md:leading-8">{v2Hero.subline}</p>
          </Item>
          <Item delay={0.24} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={v2Hero.primaryCta.href}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-button border border-secondary bg-secondary px-6 text-[15px] font-bold text-on-secondary shadow-[0_10px_24px_-6px_rgba(104,207,247,0.5)] transition hover:-translate-y-0.5 hover:bg-[#7ad6f8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transform-none"
            >
              {v2Hero.primaryCta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={v2Hero.secondaryCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-button border border-white/35 px-6 text-[15px] font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {v2Hero.secondaryCta.label}
            </a>
          </Item>
        </div>

        <Item delay={0.32} className="mx-auto mt-14 max-w-5xl md:mt-16">
          <V2HeroPreview />
        </Item>
      </div>
    </section>
  )
}
