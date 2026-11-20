import { useEffect, useState } from "react"
import { Design3Cta } from "@/features/marketing/components/sections/cta/Design3Cta"
import { Design3Features } from "@/features/marketing/components/sections/features/Design3Features"
import { Design3Footer } from "@/features/marketing/components/sections/footer/Design3Footer"
import { Design3Hero } from "@/features/marketing/components/sections/hero/Design3Hero"
import { Design3Highlights } from "@/features/marketing/components/sections/highlights/Design3Highlights"
import { Design3HowItWorks } from "@/features/marketing/components/sections/how-it-works/Design3HowItWorks"
import { Design3Navbar } from "@/features/marketing/components/sections/navbar/Design3Navbar"
import { BRAND_NAME, design3Content } from "@/features/marketing/constants/landingContent"
import { RoadMark } from "@/shared/components/RoadMark"
import { usePageTitle } from "@/shared/hooks/usePageTitle"
import "@/features/marketing/components/sections/hero/design3-hero.css"

export function LandingDesign3() {
  const [introComplete, setIntroComplete] = useState(false)

  usePageTitle(design3Content.pageTitle)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const timer = window.setTimeout(() => setIntroComplete(true), reducedMotion ? 0 : 1100)
    return () => window.clearTimeout(timer)
  }, [])

  if (!introComplete) {
    return (
      <div
        className="design3-intro-screen"
        role="status"
        aria-label={`Loading ${BRAND_NAME}`}
      >
        <div className="design3-intro-brand" aria-hidden="true">
          <RoadMark className="h-7 w-auto shrink-0 object-contain" />
          <span className="-ml-1.5 font-display text-xl font-semibold tracking-[0.12em] text-secondary">
            {BRAND_NAME}
          </span>
        </div>
      </div>
    )
  }

  return (
    <>
      <Design3Navbar />
      <main id="content" className="flex-1">
        <Design3Hero />
        <Design3Features />
        <Design3HowItWorks />
        <Design3Highlights />
        <Design3Cta />
      </main>
      <Design3Footer />
    </>
  )
}
