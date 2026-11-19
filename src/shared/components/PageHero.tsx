import { Container } from "@/shared/components/Container"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-primary text-white">
      <Container className="py-14 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full bg-secondary align-middle"
            aria-hidden="true"
          />
          {eyebrow}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-white md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{description}</p>
      </Container>
    </section>
  )
}
