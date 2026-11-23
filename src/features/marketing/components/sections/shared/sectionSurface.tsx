import type { ReactNode } from "react"

type SectionSurfaceProps = {
  children: ReactNode
  className?: string
  glow?: "left" | "right" | "both" | "none"
  id?: string
  labelledBy?: string
  /** Animated square-box grid — use only on How AISR Works & Who Uses AISR. */
  squareGrid?: boolean
  tone?: "canvas" | "surface" | "navy"
}

const glowMap = {
  none: "",
  left: "radial-gradient(ellipse 48% 42% at 0% 18%, rgba(104,207,247,0.14), transparent 58%)",
  right:
    "radial-gradient(ellipse 42% 38% at 100% 70%, rgba(104,207,247,0.12), transparent 55%)",
  both: "radial-gradient(ellipse 48% 42% at 0% 12%, rgba(104,207,247,0.13), transparent 55%), radial-gradient(ellipse 40% 36% at 100% 88%, rgba(25,29,49,0.05), transparent 52%)",
} as const

const toneMap = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  navy: "bg-primary text-white",
} as const

export function SectionSurface({
  children,
  className = "",
  glow = "both",
  id,
  labelledBy,
  squareGrid = false,
  tone = "canvas",
}: SectionSurfaceProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${toneMap[tone]} ${className}`}
      aria-labelledby={labelledBy}
    >
      {glow !== "none" ? (
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ backgroundImage: glowMap[glow] }}
        />
      ) : null}
      {squareGrid ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
        >
          <div
            className="aisr-square-grid h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              color: tone === "navy" ? "#68cff7" : "#191d31",
            }}
          />
        </div>
      ) : null}
      <div className="relative">{children}</div>
    </section>
  )
}
