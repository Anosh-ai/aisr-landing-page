import { Link } from "react-router-dom"
import { Container } from "@/components/common/Container"
import { Logo } from "@/components/common/Logo"
import { siteConfig } from "@/config/site"
import { footerGroups, legalLinks, socialChannels } from "@/constants/navigation"
import { publishedHref } from "@/utils/links"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            A smarter, safer, and more connected freight network.
          </p>
          <ul className="mt-6 flex flex-wrap gap-4">
            {socialChannels.map((channel) => {
              const href = publishedHref(channel.href)
              return (
                <li key={channel.id} className="text-sm text-white/70">
                  {href ? (
                    <a
                      href={href}
                      className="hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {channel.label}
                    </a>
                  ) : (
                    <span>{channel.label}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.id}>
              <h2 className="text-sm font-semibold tracking-wide text-white">{group.title}</h2>
              <ul className="mt-4 space-y-2">
                {group.links.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.href}
                      className="text-sm text-white/70 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">© 2026 {siteConfig.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {legalLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className="text-sm text-white/55 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
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
