import { V2Reveal } from "@/features/marketing/components/landing-v2/V2Reveal"
import { V2SectionHeading } from "@/features/marketing/components/landing-v2/V2SectionHeading"
import { V2ProblemVisual } from "@/features/marketing/components/landing-v2/visuals/V2ProblemVisual"
import { v2Problem, v2SectionY, v2Shell } from "@/features/marketing/constants/landing-v2"

export function V2Problem() {
  return (
    <section
      id={v2Problem.id}
      className={`bg-canvas ${v2SectionY}`}
      aria-labelledby="v2-problem-title"
    >
      <div className={v2Shell}>
        <V2Reveal>
          <V2SectionHeading
            eyebrow={v2Problem.eyebrow}
            title={v2Problem.title}
            description={v2Problem.description}
            titleId="v2-problem-title"
            align="center"
          />
        </V2Reveal>
        <V2Reveal delay={0.1} className="mt-12">
          <V2ProblemVisual />
        </V2Reveal>
        <V2Reveal delay={0.15} className="mx-auto mt-12 max-w-2xl text-center">
          <h3 className="font-display text-xl font-bold text-primary md:text-2xl">
            {v2Problem.afterTitle}
          </h3>
          <p className="mt-3 text-base leading-7 text-ink">{v2Problem.afterText}</p>
        </V2Reveal>
      </div>
    </section>
  )
}
