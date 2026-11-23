import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

export function V2ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? doc.scrollTop / max : 0)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full origin-left bg-secondary"
        style={{
          transform: `scaleX(${progress})`,
          transition: reduced ? undefined : "transform 80ms linear",
        }}
      />
    </div>
  )
}
