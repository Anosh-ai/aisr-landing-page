import { Advantage } from "@/features/marketing/components/sections/advantage/Advantage"
import { AudienceStrip } from "@/features/marketing/components/sections/AudienceStrip"
import { BottomCta } from "@/features/marketing/components/sections/BottomCta"
import { Hero } from "@/features/marketing/components/sections/Hero"
import { HowItWorks } from "@/features/marketing/components/sections/how-it-works/HowItWorks"
import { PlatformDeepDive } from "@/features/marketing/components/sections/platform-deep-dive/PlatformDeepDive"
import { usePageTitle } from "@/shared/hooks/usePageTitle"

export function LandingPage() {
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
