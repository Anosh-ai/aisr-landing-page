import { ArrowRight } from "lucide-react"
import heroHighway from "@/features/marketing/assets/images/hero-highway.jpg"
import { Container } from "@/shared/components/Container"
import { Button } from "@/shared/components/ui/Button"

export function BottomCta() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-white md:py-20">
      <img
        src={heroHighway}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
      <Container className="relative text-center">
        <h2 className="font-display mx-auto max-w-3xl text-3xl leading-tight md:text-4xl">
          Ready to Make Your Freight Operations Safer?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">
          Connect driver verification, ELD activity, insurance, and freight monitoring in one place.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">
            Request a Demo
            <ArrowRight aria-hidden="true" size={18} />
          </Button>
        </div>
      </Container>
    </section>
  )
}
