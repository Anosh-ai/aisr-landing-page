import { BellRing, ListChecks, Network } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { design3Content } from "@/features/marketing/constants/landingContent"
import { useScrollReveal } from "@/features/marketing/hooks/useScrollReveal"
import { Container } from "@/shared/components/Container"

type HighlightIconName = (typeof design3Content.highlights.items)[number]["icon"]

const highlightIcons: Record<HighlightIconName, LucideIcon> = {
  Network,
  ListChecks,
  BellRing,
}

// Staggered reveal delays as Tailwind utilities so no inline styles are needed.
const highlightRevealDelays = ["delay-[0ms]", "delay-[80ms]", "delay-[160ms]"]

export function Design3Highlights() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={design3Content.highlights.id}
      aria-label={design3Content.highlights.ariaLabel}
      className="scroll-mt-8 border-y border-white/10 bg-[#172b49] py-5 text-white"
    >
      <Container className="!max-w-[1095px]">
        <div ref={ref} className="grid gap-4 sm:grid-cols-3 sm:gap-0">
          {design3Content.highlights.items.map((item, index) => {
            const Icon = highlightIcons[item.icon]
            return (
              <div
                key={item.id}
                className={`flex items-center gap-4 transition-all duration-700 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
                  index > 0 ? "sm:border-l sm:border-white/20 sm:pl-6" : "sm:pr-6"
                } ${index < design3Content.highlights.items.length - 1 ? "sm:pr-6" : ""} ${
                  highlightRevealDelays[index] ?? "delay-[0ms]"
                } ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
              >
                <Icon aria-hidden="true" className="size-8 shrink-0 text-[#86e8f2]" strokeWidth={1.8} />
                <div>
                  <h2 className="font-display text-xl font-bold leading-tight tracking-[-0.02em] text-[#86e8f2]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs leading-[1.4] text-white/90 sm:text-[13px]">
                    {item.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
