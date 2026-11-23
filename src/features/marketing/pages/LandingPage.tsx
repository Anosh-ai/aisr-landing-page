import { Audiences } from "@/features/marketing/components/sections/audiences/Audiences"
import { Capabilities } from "@/features/marketing/components/sections/capabilities/Capabilities"
import { Challenge } from "@/features/marketing/components/sections/challenge/Challenge"
import { ContactSection } from "@/features/marketing/components/sections/contact/ContactSection"
import { Faqs } from "@/features/marketing/components/sections/faqs/Faqs"
import { Hero } from "@/features/marketing/components/sections/hero/Hero"
import { HowItWorks } from "@/features/marketing/components/sections/how-it-works/HowItWorks"
import { ResponsibleByDesign } from "@/features/marketing/components/sections/responsible/ResponsibleByDesign"
import { usePageTitle } from "@/shared/hooks/usePageTitle"

export function LandingPage() {
  usePageTitle()

  return (
    <>
      <Hero />
      <Challenge />
      <Capabilities />
      <HowItWorks />
      <ResponsibleByDesign />
      <Audiences />
      <Faqs />
      <ContactSection />
    </>
  )
}
