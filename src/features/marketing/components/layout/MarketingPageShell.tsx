import type { ReactNode } from "react"
import { Footer } from "@/features/marketing/components/Footer"
import { Navbar } from "@/features/marketing/components/Navbar"

type MarketingPageShellProps = {
  children: ReactNode
  contentClassName?: string
}

export function MarketingPageShell({
  children,
  contentClassName = "",
}: MarketingPageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-40 focus:rounded-control focus:bg-secondary focus:px-4 focus:py-2 focus:text-primary"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content" className={`flex-1 ${contentClassName}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
