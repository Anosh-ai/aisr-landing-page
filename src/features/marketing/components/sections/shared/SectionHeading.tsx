import { FadeIn } from "@/features/marketing/components/sections/shared/motion"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  tone?: "light" | "dark"
  align?: "left" | "center"
  titleId?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  titleId,
}: SectionHeadingProps) {
  const isDark = tone === "dark"
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left"
  const eyebrowRow = align === "center" ? "justify-center" : "justify-start"

  return (
    <FadeIn className={`max-w-3xl ${alignClass}`}>
      <p className={`inline-flex items-center gap-2.5 ${eyebrowRow} w-full`}>
        <span
          className={`size-1.5 shrink-0 rounded-full ${isDark ? "bg-secondary" : "bg-secondary"}`}
          aria-hidden="true"
        />
        <span
          className={`text-[0.7rem] font-bold uppercase tracking-[0.2em] ${
            isDark ? "text-secondary" : "text-secondary"
          }`}
        >
          {eyebrow}
        </span>
      </p>
      <h2
        id={titleId}
        className={`mt-4 font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.65rem] ${
          isDark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 md:text-lg md:leading-8 ${
            isDark ? "text-white/72" : "text-ink"
          }`}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  )
}
