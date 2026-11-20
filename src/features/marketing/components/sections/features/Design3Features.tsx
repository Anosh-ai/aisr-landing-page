import { MapPin, ShieldCheck, Truck, UserRoundCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { design3Content } from "@/features/marketing/constants/landingContent"
import { Container } from "@/shared/components/Container"
import { useScrollReveal } from "@/features/marketing/hooks/useScrollReveal"

type FeatureIconName = (typeof design3Content.features.items)[number]["icon"]

const featureIcons: Record<FeatureIconName, LucideIcon> = {
  UserRoundCheck,
  Truck,
  MapPin,
  ShieldCheck,
}

// Staggered reveal delays as Tailwind utilities so no inline styles are needed.
const featureRevealDelays = ["delay-[0ms]", "delay-[70ms]", "delay-[140ms]", "delay-[210ms]"]

export function Design3Features() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={design3Content.features.id}
      aria-labelledby="design-3-features-title"
      className="scroll-mt-8 bg-gradient-to-br from-[#edf4ff] via-[#f5f8fd] to-[#eaf3fc] py-20 md:py-24"
    >
      <Container className="!max-w-[1095px]">
        <div
          ref={ref}
          className={`text-center transition-all duration-700 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <h2
            id="design-3-features-title"
            className="font-display text-2xl font-bold leading-tight tracking-[-0.025em] text-[#142039] sm:text-[1.75rem]"
          >
            {design3Content.features.heading}
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-[#37465d] sm:text-[15px]">
            {design3Content.features.description}
          </p>

          <div className="mt-5 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {design3Content.features.items.map((item, index) => {
              const Icon = featureIcons[item.icon]
              return (
                <article
                  key={item.id}
                  className={`group min-h-[12rem] rounded-xl border border-[#d7e0ec] bg-white/90 p-5 shadow-[0_8px_22px_-19px_rgba(26,48,78,0.45)] transition-all duration-200 hover:-translate-y-2 hover:scale-[1.02] hover:border-secondary/70 hover:bg-white hover:shadow-[0_22px_36px_-16px_rgba(0,120,160,0.42)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none md:p-6 ${
                    featureRevealDelays[index] ?? "delay-[0ms]"
                  } ${visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[#dff4fa] text-[#173956] transition-all duration-200 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-[#c9eff6] motion-reduce:transform-none motion-reduce:transition-none">
                    <Icon aria-hidden="true" size={22} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-2.5 text-[15px] font-bold leading-5 tracking-[-0.01em] text-[#111d35]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-[1.42] text-[#29364a]">
                    {item.text}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
