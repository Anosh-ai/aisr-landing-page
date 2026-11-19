import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { mainNavigation } from "@/features/marketing/constants/navigation"
import { Logo } from "@/shared/components/Logo"

const shellPad =
  "w-full pl-5 pr-5 sm:pl-8 sm:pr-6 lg:pl-12 lg:pr-8 xl:pl-16 xl:pr-10"

function navClass(isActive: boolean) {
  return `inline-flex items-center gap-1 rounded-control px-3 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
    isActive ? "text-secondary" : "text-white/85 hover:text-white"
  }`
}

function isItemActive(pathname: string, hash: string, href: string) {
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === href.slice(1)
  }
  if (href === "/") {
    return pathname === "/" && hash === ""
  }
  return pathname === href
}

export function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === "/"
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openPath, setOpenPath] = useState(location.pathname + location.hash)

  if (openPath !== location.pathname + location.hash) {
    setOpenPath(location.pathname + location.hash)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [location.pathname])

  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  const solidNav = !isHome || scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 text-white transition-[background-color,border-color,backdrop-filter] duration-200 ${
        solidNav
          ? "border-b border-white/10 bg-primary/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className={`${shellPad} flex h-20 items-center justify-between gap-4`}>
        <Logo />
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {mainNavigation.map((item) => {
            const active = isItemActive(location.pathname, location.hash, item.href)
            return (
              <Link
                key={item.id}
                to={item.href}
                className={navClass(active)}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="px-2 text-sm font-medium text-white/85 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Sign In
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-secondary px-3.5 py-1.5 text-sm font-semibold text-primary transition-shadow hover:shadow-[0_8px_18px_-4px_rgba(104,207,247,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Sign Up
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-control text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-primary/95 backdrop-blur-md xl:hidden"
          aria-label="Mobile"
        >
          <div className={`${shellPad} flex flex-col gap-1 py-4`}>
            {mainNavigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={navClass(
                  isItemActive(location.pathname, location.hash, item.href),
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Link
                to="/contact"
                className="rounded-control py-2 text-sm font-medium text-white/85"
              >
                Sign In
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-fit items-center justify-center rounded-lg bg-secondary px-3.5 py-1.5 text-sm font-semibold text-primary transition-shadow hover:shadow-[0_8px_18px_-4px_rgba(104,207,247,0.55)]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
