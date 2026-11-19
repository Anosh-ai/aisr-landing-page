import { Link } from "react-router-dom"
import { RoadMark } from "@/components/common/RoadMark"
import { siteConfig } from "@/config/site"

type LogoProps = {
  tone?: "light" | "dark"
}

export function Logo({ tone = "light" }: LogoProps) {
  const textClass = tone === "dark" ? "text-primary" : "text-white"

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 rounded-control focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary ${textClass}`}
      aria-label={`${siteConfig.name} home`}
    >
      <RoadMark className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9" />
      <span className="font-display text-xl font-semibold tracking-[0.12em] sm:text-2xl">
        {siteConfig.name}
      </span>
    </Link>
  )
}
