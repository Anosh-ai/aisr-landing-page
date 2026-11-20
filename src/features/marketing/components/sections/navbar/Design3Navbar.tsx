import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { BRAND_NAME, design3Content } from "@/features/marketing/constants/landingContent"
import { shellPad } from "@/features/marketing/constants/shell"
import { RoadMark } from "@/shared/components/RoadMark"
import { Button } from "@/shared/components/ui/Button"

function navClass(isActive: boolean) {
  return `relative inline-flex items-center gap-1 rounded-none px-3 py-2 text-sm font-medium shadow-none outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-full after:transition-colors ${
    isActive
      ? "text-secondary after:bg-secondary"
      : "text-white/85 after:bg-transparent hover:text-white hover:after:bg-secondary/50"
  }`
}

export function Design3Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  const solidNav = scrolled || open
  const navigationLinks = design3Content.nav.links.map((item) => (
    <Link
      key={item.id}
      to={item.href}
      onClick={() => setOpen(false)}
      className={navClass(
        location.pathname === "/design-3" &&
          location.hash === item.href.slice("/design-3".length),
      )}
      aria-current={
        location.pathname === "/design-3" &&
        location.hash === item.href.slice("/design-3".length)
          ? "page"
          : undefined
      }
    >
      {item.label}
    </Link>
  ))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-[background-color,border-color,backdrop-filter] duration-200 ${
        solidNav
          ? "border-white/10 bg-primary/95 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className={`${shellPad} flex h-20 items-center justify-between gap-4`}>
        <Link
          to="/design-3"
          aria-label={design3Content.nav.homeLabel}
          className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
        >
          <RoadMark className="h-7 w-auto shrink-0 object-contain sm:h-8" />
          <span className="-ml-1.5 font-display text-xl font-semibold tracking-[0.12em] sm:-ml-2 sm:text-2xl">
            {BRAND_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label={design3Content.nav.primaryLabel}>
          {navigationLinks}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={design3Content.nav.signInHref}
            className="inline-flex items-center justify-center rounded-lg border border-white/40 px-3.5 py-1.5 text-sm font-bold text-white shadow-none outline-none hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary active:shadow-none"
          >
            {design3Content.nav.signInLabel}
          </a>
          <Button
            href={design3Content.nav.demoHref}
            className="rounded-lg px-3.5 py-1.5 text-sm shadow-none transition-colors duration-200 hover:shadow-none"
          >
            {design3Content.nav.demoLabel}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-control text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary xl:hidden"
          aria-expanded={open}
          aria-controls="design-3-mobile-navigation"
          aria-label={open ? design3Content.nav.closeMenuLabel : design3Content.nav.openMenuLabel}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {open ? (
        <nav
          id="design-3-mobile-navigation"
          className="border-t border-white/10 bg-primary/95 backdrop-blur-md xl:hidden"
          aria-label={design3Content.nav.mobileLabel}
        >
          <div className={`${shellPad} flex flex-col gap-1 py-4`}>
            {navigationLinks}
            <div className="mt-3 flex flex-col items-start gap-2 border-t border-white/15 pt-4">
              <a
                href={design3Content.nav.signInHref}
                onClick={() => setOpen(false)}
                className="inline-flex w-fit items-center justify-center rounded-lg border border-white/40 px-3.5 py-1.5 text-sm font-bold text-white shadow-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                {design3Content.nav.signInLabel}
              </a>
              <Button
                href={design3Content.nav.demoHref}
                className="w-fit rounded-lg px-3.5 py-1.5 text-sm shadow-none hover:shadow-none"
              >
                {design3Content.nav.demoLabel}
              </Button>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
