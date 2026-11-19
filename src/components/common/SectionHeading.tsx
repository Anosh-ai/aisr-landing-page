type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  tone?: "light" | "dark"
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  id,
}: SectionHeadingProps) {
  const dark = tone === "dark"

  return (
    <div className="max-w-2xl">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          dark ? "text-secondary" : "text-primary"
        }`}
      >
        <span
          className="mr-2 inline-block h-2 w-2 rounded-full bg-secondary align-middle"
          aria-hidden="true"
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 text-3xl leading-tight md:text-4xl ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${dark ? "text-white/75" : "text-ink"}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
