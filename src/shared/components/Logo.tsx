import { Link } from "react-router-dom"
import { RoadMark } from "@/shared/components/RoadMark"
import { siteConfig } from "@/shared/config/site"

type LogoProps = {
  tone?: "light" | "dark"
}

export function Logo({ tone = "light" }: LogoProps) {
  const textClass = tone === "dark" ? "text-primary" : "text-white"

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-0 rounded-control focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary ${textClass}`}
      aria-label={`${siteConfig.name} home`}
    >
      <RoadMark className="h-7 w-auto shrink-0 object-contain sm:h-8" />
      <span className="-ml-1.5 font-display text-xl font-semibold tracking-[0.12em] sm:-ml-2 sm:text-2xl">
        {siteConfig.name}
      </span>
    </Link>
  )
}
