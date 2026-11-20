import { ArrowRight } from "lucide-react"
import heroHighway from "@/features/marketing/assets/images/hero-highway.jpg"
import { design3Content } from "@/features/marketing/constants/landingContent"
import { useScrollReveal } from "@/features/marketing/hooks/useScrollReveal"
import { Button } from "@/shared/components/ui/Button"
import { Container } from "@/shared/components/Container"

export function Design3Cta() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id={design3Content.cta.id}
      aria-labelledby="design-3-cta-title"
      className="relative isolate overflow-hidden bg-[#122541] py-8 text-center text-white md:py-9"
    >
      <img
        src={heroHighway}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_86%]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#102441]/80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,24,46,0.26),rgba(9,24,46,0.58),rgba(9,24,46,0.26))]"
        aria-hidden="true"
      />

      <Container className="relative z-10 !max-w-[1095px]">
        <div
          ref={ref}
          className={`transition-all duration-700 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <h2
            id="design-3-cta-title"
            className="font-display text-2xl font-bold leading-tight tracking-[-0.025em] sm:text-[1.8rem]"
          >
            {design3Content.cta.heading}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/90 sm:text-[15px]">
            {design3Content.cta.description}
          </p>
          <div className="mt-4 flex justify-center">
            <Button
              href={design3Content.cta.buttonHref}
              className="rounded-lg px-6 py-3 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              {design3Content.cta.buttonLabel}
              <ArrowRight aria-hidden="true" size={17} strokeWidth={2.25} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
