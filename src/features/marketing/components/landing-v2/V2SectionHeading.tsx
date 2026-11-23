type V2SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  titleId: string
  tone?: "light" | "dark"
  align?: "left" | "center"
}

export function V2SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  tone = "light",
  align = "left",
}: V2SectionHeadingProps) {
  const isDark = tone === "dark"
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left"

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${
          isDark ? "text-secondary" : "text-primary/70"
        }`}
      >
        <span className="size-1.5 rounded-full bg-secondary" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={`mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl ${
          isDark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 md:text-lg md:leading-8 ${
            isDark ? "text-white/75" : "text-ink"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
