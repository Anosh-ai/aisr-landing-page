import type { ReactNode } from "react"
import { useScrollReveal } from "@/features/marketing/hooks/useScrollReveal"

type FeatureWindowProps = {
  title: string
  children: ReactNode
  className?: string
}

export function FeatureWindow({ title, children, className = "" }: FeatureWindowProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`aisr-feature-window group w-full overflow-hidden rounded-xl border-[0.5px] border-[#2a4a85] bg-[#0f1a33] shadow-[0_20px_50px_rgba(15,26,51,0.25)] transition-[transform,border-color,box-shadow,background-color,opacity] duration-300 ease-out hover:border-sky-400/60 hover:shadow-[0_30px_70px_rgba(15,26,51,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1.5 ${
        visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.97] opacity-0"
      } ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[#22386a] px-3 py-2.5">
        <span className="size-2 rounded-full bg-[#e24b4a]" aria-hidden="true" />
        <span className="size-2 rounded-full bg-[#EF9F27]" aria-hidden="true" />
        <span className="size-2 rounded-full bg-[#38bdf8]" aria-hidden="true" />
        <p className="ml-1.5 min-w-0 flex-1 truncate text-[11px] text-slate-400">{title}</p>
        <span className="shrink-0 rounded border border-sky-400/30 bg-sky-400/10 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-sky-300">
          Illustrative
        </span>
      </div>
      <div className="p-3">{children}</div>
    </div>
  )
}

export function FeatureRow({
  icon,
  label,
  trailing,
}: {
  icon: ReactNode
  label: string
  trailing?: ReactNode
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-[#2a4a85] bg-[#16264a] px-2.5 py-1.5 text-xs text-slate-100 transition-colors duration-200 hover:border-sky-400/50 hover:bg-[#1b3566]">
      <span className="shrink-0 text-[#38bdf8]" aria-hidden="true">
        {icon}
      </span>
      <span className="min-w-0 flex-1 truncate">{label}</span>
      {trailing}
    </div>
  )
}
