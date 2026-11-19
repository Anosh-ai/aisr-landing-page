import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { footerGroups, legalLinks, socialChannels } from "@/features/marketing/constants/navigation"
import { Container } from "@/shared/components/Container"
import { Logo } from "@/shared/components/Logo"
import { siteConfig } from "@/shared/config/site"
import { publishedHref } from "@/shared/utils/links"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              A smarter, safer, and more connected freight network for drivers, carriers,
              brokers, and insurance teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialChannels.map((channel) => {
                const href = publishedHref(channel.href)
                const className =
                  "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/75 transition hover:border-secondary/50 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"

                return (
                  <span key={channel.id}>
                    {href ? (
                      <a
                        href={href}
                        className={className}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {channel.label}
                        <ArrowUpRight aria-hidden="true" size={14} />
                      </a>
                    ) : (
                      <span className={className}>{channel.label}</span>
                    )}
                  </span>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.id}>
                <h2 className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.href}
                        className="text-sm text-white/70 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className="text-sm text-white/55 transition hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  )
}
