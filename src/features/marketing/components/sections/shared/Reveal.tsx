import type { ReactNode } from "react"
import { FadeIn } from "@/features/marketing/components/sections/shared/motion"

type RevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
}

/** Backward-compatible reveal wrapper powered by Framer Motion. */
export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  return (
    <FadeIn className={className} delay={delayMs / 1000}>
      {children}
    </FadeIn>
  )
}
