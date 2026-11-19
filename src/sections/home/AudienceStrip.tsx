import { Container } from "@/components/common/Container"
import { audienceStrip } from "@/constants/landing"

export function AudienceStrip() {
  return (
    <section id="audiences" className="scroll-mt-24 border-b border-primary/5 bg-surface py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary/55">
          Built for the freight network
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {audienceStrip.map((audience) => (
            <li
              key={audience}
              className="font-display text-lg font-semibold tracking-wide text-primary/35 sm:text-xl"
            >
              {audience}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
