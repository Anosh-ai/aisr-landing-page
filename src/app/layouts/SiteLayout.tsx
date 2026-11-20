import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "@/features/marketing/components/Footer"
import { Navbar } from "@/features/marketing/components/Navbar"

export function SiteLayout() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const isDesign2 = location.pathname === "/design-2"
  const isDesign3 = location.pathname === "/design-3"
  const isOverlay = isHome || isDesign2 || isDesign3

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView()
        return
      }
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div
      className={`flex min-h-screen flex-col ${isDesign2 ? "bg-[#041020] text-white" : "bg-canvas text-ink"}`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-40 focus:rounded-control focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary"
      >
        Skip to content
      </a>
      {isDesign3 ? null : <Navbar />}
      {isDesign3 ? (
        <Outlet />
      ) : (
        <main id="content" className={`flex-1 ${isOverlay ? "" : "pt-20"}`}>
          <Outlet />
        </main>
      )}
      {isDesign2 || isDesign3 ? null : <Footer />}
    </div>
  )
}
