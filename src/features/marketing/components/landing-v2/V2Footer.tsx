import { Link } from "react-router-dom"
import { v2Footer, v2Shell } from "@/features/marketing/constants/landing-v2"
import { Logo } from "@/shared/components/Logo"
import { siteConfig } from "@/shared/config/site"

export function V2Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className={`${v2Shell} grid gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:gap-16`}>
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">{v2Footer.blurb}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end md:pt-2">
          {v2Footer.links.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="text-sm text-white/70 transition hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className={`${v2Shell} py-5`}>
          <p className="text-sm text-white/55">© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
