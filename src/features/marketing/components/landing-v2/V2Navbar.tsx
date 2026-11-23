import { useEffect, useId, useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { v2Nav, v2Shell } from "@/features/marketing/constants/landing-v2"
import { Logo } from "@/shared/components/Logo"

export function V2Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ${
        solid
          ? "border-b border-white/10 bg-primary/90 text-white backdrop-blur-md"
          : "border-b border-transparent bg-transparent text-white"
      }`}
    >
      <div className={`${v2Shell} flex h-16 items-center justify-between gap-4 md:h-[4.5rem]`}>
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {v2Nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-control px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-button border border-white/30 px-4 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Contact
          </Link>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-button border border-secondary bg-secondary px-4 text-sm font-bold text-on-secondary shadow-[0_8px_20px_-8px_rgba(104,207,247,0.55)] transition hover:bg-[#7ad6f8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Request early access
          </a>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-control text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      {open ? (
        <nav
          id={menuId}
          className="border-t border-white/10 bg-primary/95 backdrop-blur-md lg:hidden"
          aria-label="Mobile"
        >
          <div className={`${v2Shell} flex flex-col gap-1 py-4`}>
            {v2Nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-control px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-button bg-secondary px-4 text-sm font-bold text-on-secondary"
              onClick={() => setOpen(false)}
            >
              Request early access
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
