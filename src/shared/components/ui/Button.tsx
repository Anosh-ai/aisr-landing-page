import type { ButtonHTMLAttributes, ReactNode } from "react"
import { Link } from "react-router-dom"

const variants = {
  primary:
    "border border-secondary bg-secondary text-on-secondary shadow-[0_10px_24px_-4px_rgba(0,236,245,0.35)] hover:bg-secondary hover:shadow-[0_14px_30px_-4px_rgba(0,236,245,0.5)]",
  secondaryDark:
    "border border-white/25 bg-white/5 text-white hover:bg-white/10",
  secondaryLight:
    "border border-primary/10 bg-white text-primary hover:border-secondary",
  ghost:
    "border border-white/40 bg-transparent text-white hover:bg-white/10",
} as const

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-button px-6 py-3.5 text-center text-[15px] font-semibold leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-60"

type Variant = keyof typeof variants

type Shared = {
  variant?: Variant
  className?: string
  children: ReactNode
}

type ButtonProps = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type LinkProps = Shared & {
  href: string
}

function classes(variant: Variant | undefined, className: string | undefined) {
  return `${baseClass} ${variants[variant ?? "primary"]} ${className ?? ""}`
}

function isLink(props: ButtonProps | LinkProps): props is LinkProps {
  return typeof props.href === "string"
}

export function Button(props: ButtonProps | LinkProps) {
  if (isLink(props)) {
    const { href, variant, className, children } = props
    const classNames = classes(variant, className)

    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link to={href} className={classNames}>
          {children}
        </Link>
      )
    }

    const external = href.startsWith("http")

    return (
      <a
        href={href}
        className={classNames}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }

  const { variant, className, children, type = "button", ...rest } = props

  return (
    <button type={type} className={classes(variant, className)} {...rest}>
      {children}
    </button>
  )
}
