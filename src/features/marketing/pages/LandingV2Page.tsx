import { lazy, Suspense, useEffect } from "react"
import { V2Footer } from "@/features/marketing/components/landing-v2/V2Footer"
import { V2Navbar } from "@/features/marketing/components/landing-v2/V2Navbar"
import { V2ScrollProgress } from "@/features/marketing/components/landing-v2/V2ScrollProgress"
import { V2Hero } from "@/features/marketing/components/landing-v2/sections/V2Hero"
import { V2Problem } from "@/features/marketing/components/landing-v2/sections/V2Problem"
import { landingV2Meta } from "@/features/marketing/constants/landing-v2"

const V2HowItWorks = lazy(() =>
  import("@/features/marketing/components/landing-v2/sections/V2HowItWorks").then((module) => ({
    default: module.V2HowItWorks,
  })),
)
const V2Capabilities = lazy(() =>
  import("@/features/marketing/components/landing-v2/sections/V2Capabilities").then((module) => ({
    default: module.V2Capabilities,
  })),
)
const V2ProductTour = lazy(() =>
  import("@/features/marketing/components/landing-v2/sections/V2ProductTour").then((module) => ({
    default: module.V2ProductTour,
  })),
)
const V2Audiences = lazy(() =>
  import("@/features/marketing/components/landing-v2/sections/V2Audiences").then((module) => ({
    default: module.V2Audiences,
  })),
)
const V2Responsible = lazy(() =>
  import("@/features/marketing/components/landing-v2/sections/V2Responsible").then((module) => ({
    default: module.V2Responsible,
  })),
)
const V2MobileApp = lazy(() =>
  import("@/features/marketing/components/landing-v2/sections/V2MobileApp").then((module) => ({
    default: module.V2MobileApp,
  })),
)
const V2Faq = lazy(() =>
  import("@/features/marketing/components/landing-v2/sections/V2Faq").then((module) => ({
    default: module.V2Faq,
  })),
)
const V2FinalCta = lazy(() =>
  import("@/features/marketing/components/landing-v2/sections/V2FinalCta").then((module) => ({
    default: module.V2FinalCta,
  })),
)
const V2Contact = lazy(() =>
  import("@/features/marketing/components/landing-v2/sections/V2Contact").then((module) => ({
    default: module.V2Contact,
  })),
)

function SectionFallback() {
  return <div className="min-h-[12rem] bg-transparent" aria-hidden="true" />
}

export function LandingV2Page() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = landingV2Meta.title

    const ensureMeta = (name: string, content: string) => {
      let node = document.querySelector(`meta[name="${name}"]`)
      if (!node) {
        node = document.createElement("meta")
        node.setAttribute("name", name)
        document.head.appendChild(node)
      }
      const previous = node.getAttribute("content")
      node.setAttribute("content", content)
      return () => {
        if (previous === null) {
          node?.remove()
        } else {
          node?.setAttribute("content", previous)
        }
      }
    }

    const restoreDescription = ensureMeta("description", landingV2Meta.description)
    const restoreRobots = ensureMeta("robots", landingV2Meta.robots)

    return () => {
      document.title = previousTitle
      restoreDescription()
      restoreRobots()
    }
  }, [])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#v2-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-control focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary"
      >
        Skip to content
      </a>
      <V2ScrollProgress />
      <V2Navbar />
      <main id="v2-content">
        <V2Hero />
        <V2Problem />
        <Suspense fallback={<SectionFallback />}>
          <V2HowItWorks />
          <V2Capabilities />
          <V2ProductTour />
          <V2Audiences />
          <V2Responsible />
          <V2MobileApp />
          <V2Faq />
          <V2FinalCta />
          <V2Contact />
        </Suspense>
      </main>
      <V2Footer />
    </div>
  )
}
