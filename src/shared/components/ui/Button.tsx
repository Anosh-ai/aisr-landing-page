import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "framer-motion"
import {
  buttonVariants,
  type ButtonVariant,
} from "@/shared/components/ui/buttonVariants"

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-button px-6 py-3.5 text-center text-[15px] font-bold leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-60"

type Shared = {
  variant?: ButtonVariant
  className?: string
  style?: CSSProperties
  children: ReactNode
}

type ButtonProps = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type LinkProps = Shared & {
  href: string
}

function classes(variant: ButtonVariant | undefined, className: string | undefined) {
  return `${baseClass} ${buttonVariants[variant ?? "primary"]} ${className ?? ""}`
}

function isLink(props: ButtonProps | LinkProps): props is LinkProps {
  return typeof props.href === "string"
}

const MotionLink = motion.create(Link)
const spring = { type: "spring" as const, stiffness: 420, damping: 28 }

export function Button(props: ButtonProps | LinkProps) {
  const reduced = useReducedMotion()
  const hover = reduced ? undefined : { scale: 1.03 }
  const tap = reduced ? undefined : { scale: 0.98 }

  if (isLink(props)) {
    const { href, variant, className, style, children } = props
    const classNames = classes(variant, className)

    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <MotionLink
          to={href}
          className={classNames}
          style={style}
          whileHover={hover}
          whileTap={tap}
          transition={spring}
        >
          {children}
        </MotionLink>
      )
    }

    const external = href.startsWith("http")

    return (
      <motion.a
        href={href}
        className={classNames}
        style={style}
        whileHover={hover}
        whileTap={tap}
        transition={spring}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </motion.a>
    )
  }

  const { variant, className, children, type = "button", disabled, onClick, style } = props

  return (
    <motion.button
      type={type}
      className={classes(variant, className)}
      style={style}
      disabled={disabled}
      onClick={onClick}
      whileHover={hover}
      whileTap={tap}
      transition={spring}
    >
      {children}
    </motion.button>
  )
}
