import { Fragment } from "react"
import { BellRing, ChevronRight, Database, ScanSearch } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { design3Content } from "@/features/marketing/constants/landingContent"
import { useScrollReveal } from "@/features/marketing/hooks/useScrollReveal"
import { Container } from "@/shared/components/Container"

type StepIconName = (typeof design3Content.howItWorks.steps)[number]["icon"]

const stepIcons: Record<StepIconName, LucideIcon> = {
  Database,
  ScanSearch,
  BellRing,
}

// Staggered reveal delays as Tailwind utilities so no inline styles are needed.
const stepRevealDelays = ["delay-[0ms]", "delay-[80ms]", "delay-[160ms]"]

export function Design3HowItWorks() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={design3Content.howItWorks.id}
      aria-labelledby="design-3-how-title"
      className="scroll-mt-8 bg-white py-16 md:py-20"
    >
      <Container className="!max-w-[1095px]">
        <div
          ref={ref}
          className={`transition-all duration-700 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <div className="text-center">
            <h2
              id="design-3-how-title"
              className="font-display text-[2rem] font-bold leading-tight tracking-[-0.025em] text-[#142039] sm:text-[2.25rem]"
            >
              {design3Content.howItWorks.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-[#37465d] sm:text-lg">
              {design3Content.howItWorks.description}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 items-center gap-4 md:mt-14 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-5">
            {design3Content.howItWorks.steps.map((step, index) => {
              const Icon = stepIcons[step.icon]
              return (
                <Fragment key={step.id}>
                  <article
                    className={`flex min-h-[16rem] flex-col items-center rounded-2xl border border-[#e2e6ec] bg-gradient-to-b from-[#fafbfc] to-white px-6 py-8 text-center shadow-[0_8px_24px_-18px_rgba(26,48,78,0.42)] transition-all duration-200 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-[0_16px_30px_-18px_rgba(0,120,160,0.36)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none md:min-h-[17rem] lg:min-h-[18rem] ${
                      stepRevealDelays[index] ?? "delay-[0ms]"
                    } ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                  >
                    <span className="text-sm font-bold tracking-[0.1em] text-[#55c5ef]">
                      {step.number}
                    </span>
                    <span className="mt-4 inline-flex size-14 shrink-0 items-center justify-center rounded-[1.1rem] bg-[#191d34] text-secondary shadow-[0_8px_18px_-10px_rgba(17,29,53,0.65)]">
                      <Icon aria-hidden="true" size={25} strokeWidth={1.9} />
                    </span>
                    <div className="mt-6">
                      <h3 className="text-[17px] font-semibold leading-6 tracking-[-0.01em] text-[#111d35]">
                        {step.title}
                      </h3>
                      <p className="mx-auto mt-3 max-w-[20rem] text-[15px] leading-6 text-[#515b69]">
                        {step.text}
                      </p>
                    </div>
                  </article>
                  {index < design3Content.howItWorks.steps.length - 1 ? (
                    <ChevronRight
                      aria-hidden="true"
                      className="hidden text-[#54b8cb] lg:block"
                      size={22}
                      strokeWidth={2}
                    />
                  ) : null}
                </Fragment>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
