import { Link } from "react-router-dom"
import { footerGroups, legalLinks, socialChannels } from "@/features/marketing/constants/navigation"
import { Logo } from "@/shared/components/Logo"
import { shellPad } from "@/features/marketing/constants/shell"
import { siteConfig } from "@/shared/config/site"
import { publishedHref } from "@/shared/utils/links"

function SocialMark({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className: "size-4 shrink-0",
    fill: "currentColor",
  }

  if (id === "linkedin") {
    return (
      <svg {...common}>
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.84v2.12h.05c.53-1.01 1.84-2.12 3.79-2.12 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.73c0-1.84-.03-4.21-2.56-4.21-2.57 0-2.96 2-2.96 4.07V24h-4V8.5z" />
      </svg>
    )
  }

  if (id === "youtube") {
    return (
      <svg {...common}>
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.38.45A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.5 20.4 12 20.4 12 20.4s7.5 0 9.38-.45a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.57V8.43L15.84 12l-6.09 3.57z" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.24 5.45-6.24zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className={`${shellPad} py-14 md:py-16`}>
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
                  "inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-secondary/50 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"

                return href ? (
                  <a
                    key={channel.id}
                    href={href}
                    className={className}
                    aria-label={channel.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialMark id={channel.id} />
                  </a>
                ) : (
                  <span key={channel.id} className={className} role="img" aria-label={channel.label}>
                    <SocialMark id={channel.id} />
                  </span>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.id}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
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
      </div>

      <div className="border-t border-white/10">
        <div className={`${shellPad} flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between`}>
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
        </div>
      </div>
    </footer>
  )
}
