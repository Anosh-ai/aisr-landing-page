import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { MarketingPageShell } from "@/features/marketing/components/layout/MarketingPageShell"

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
    <MarketingPageShell contentClassName={isHome ? "" : "pt-20"}>
      <Outlet />
    </MarketingPageShell>
  )
}
