import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

type V2CountUpProps = {
  value: number
  className?: string
}

export function V2CountUp({ value, className = "" }: V2CountUpProps) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (reduced) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  useEffect(() => {
    if (!started || reduced) return

    const duration = 900
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setDisplay(Math.round(value * eased))
      if (t < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, reduced, value])

  if (reduced) {
    return <span className={className}>{value.toLocaleString()}</span>
  }

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
    </span>
  )
}
