import { Design2Hero } from "@/features/marketing/components/sections/design2-hero/Design2Hero"
import { usePageTitle } from "@/shared/hooks/usePageTitle"

export function LandingDesign2() {
  usePageTitle("A Safer, Smarter Way to Move Freight")

  return <Design2Hero />
}
