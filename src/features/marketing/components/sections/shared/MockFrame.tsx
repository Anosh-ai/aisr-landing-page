import type { ReactNode } from "react"

type MockFrameProps = {
  title: string
  children: ReactNode
  className?: string
  dark?: boolean
}

export function MockFrame({ title, children, className = "", dark = true }: MockFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-card border shadow-[0_24px_60px_-28px_rgba(25,29,49,0.55)] ${
        dark ? "border-white/10 bg-primary text-white" : "border-line bg-card text-primary"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2 border-b px-4 py-3 ${
          dark ? "border-white/10 bg-primary-soft/80" : "border-line bg-surface"
        }`}
      >
        <span className="size-2.5 rounded-full bg-[#ff6b6b]/80" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-[#ffd166]/80" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-[#68cff7]/90" aria-hidden="true" />
        <p className={`ml-2 text-xs font-medium ${dark ? "text-white/65" : "text-ink"}`}>{title}</p>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}
