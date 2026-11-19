import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { SiteFooter } from "@/components/common/SiteFooter"
import { SiteHeader } from "@/components/common/SiteHeader"

export function SiteLayout() {
  const location = useLocation()
  const isHome = location.pathname === "/"

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
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-40 focus:rounded-control focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className={`flex-1 ${isHome ? "" : "pt-20"}`}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
