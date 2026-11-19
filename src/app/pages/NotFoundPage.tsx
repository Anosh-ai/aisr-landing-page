import { Container } from "@/shared/components/Container"
import { Button } from "@/shared/components/ui/Button"
import { usePageTitle } from "@/shared/hooks/usePageTitle"

export function NotFoundPage() {
  usePageTitle("Page not found")

  return (
    <section className="bg-canvas py-20">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">404</p>
        <h1 className="font-display mt-4 text-4xl text-primary">This page is not part of the site.</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink">
          The address does not match Home, About Us, Contact Us, Terms, or Privacy.
        </p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  )
}
