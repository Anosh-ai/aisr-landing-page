import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 24,
  once = true,
}: FadeInProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px", amount: 0.16 }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

type StaggerContainerProps = {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  stagger = 0.08,
  once = true,
}: StaggerContainerProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Soft glass card surface used across marketing sections. */
export const glassCardClass =
  "rounded-2xl border border-line/80 bg-card/80 shadow-[0_18px_50px_-32px_rgba(25,29,49,0.35)] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-secondary/45 hover:bg-card hover:shadow-[0_28px_60px_-28px_rgba(25,29,49,0.4)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
