import { usePageTitle } from "@/hooks/usePageTitle"
import { Advantage } from "@/sections/home/Advantage"
import { AudienceStrip } from "@/sections/home/AudienceStrip"
import { BottomCta } from "@/sections/home/BottomCta"
import { Hero } from "@/sections/home/Hero"
import { HowItWorks } from "@/sections/home/HowItWorks"
import { PlatformDeepDive } from "@/sections/home/PlatformDeepDive"

export function HomePage() {
  usePageTitle()

  return (
    <>
      <Hero />
      <AudienceStrip />
      <Advantage />
      <HowItWorks />
      <PlatformDeepDive />
      <BottomCta />
    </>
  )
}
