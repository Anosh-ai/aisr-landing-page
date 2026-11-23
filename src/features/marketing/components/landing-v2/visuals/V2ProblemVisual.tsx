import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { v2Problem } from "@/features/marketing/constants/landing-v2"

export function V2ProblemVisual() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const [joined, setJoined] = useState(false)
  const isJoined = Boolean(reduced) || joined

  useEffect(() => {
    if (reduced) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setJoined(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <div ref={ref} className="relative mx-auto max-w-3xl" aria-hidden="true">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {v2Problem.items.map((item, index) => {
          const angle = (index / v2Problem.items.length) * Math.PI * 2
          const scatterX = Math.cos(angle) * 18
          const scatterY = Math.sin(angle) * 14
          return (
            <div
              key={item.id}
              className="rounded-card border border-line bg-white px-3 py-4 text-center shadow-[0_12px_28px_-20px_rgba(25,29,49,0.35)] transition-[transform,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: isJoined
                  ? "translate(0, 0)"
                  : `translate(${scatterX}px, ${scatterY}px)`,
                borderColor: isJoined ? "rgba(104,207,247,0.55)" : undefined,
                boxShadow: isJoined
                  ? "0 0 0 1px rgba(104,207,247,0.25), 0 16px 36px -22px rgba(25,29,49,0.35)"
                  : undefined,
              }}
            >
              <p className="text-sm font-semibold text-primary">{item.label}</p>
            </div>
          )
        })}
      </div>
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          isJoined ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M20 25 L50 50 L80 25 M20 75 L50 50 L80 75 M50 20 L50 80"
            fill="none"
            stroke="#68cff7"
            strokeWidth="0.4"
            strokeOpacity="0.45"
          />
        </svg>
      </div>
    </div>
  )
}
