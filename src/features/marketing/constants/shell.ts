/**
 * Shared horizontal inset for navbar, footer, and landing sections.
 * Symmetric padding so logo / links / CTAs are not crushed to the viewport edges.
 */
export const shellPad = "w-full px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12"

/** Alias used by landing sections — same inset as navbar/footer. */
export const shellContent = shellPad

/** Vertical section padding: 64px mobile / 96px desktop. */
export const sectionY = "py-16 md:py-24"

/** Space between section heading block and content: 48px. */
export const sectionHeadGap = "mt-12"

/** Card grid gap: 16px mobile / 24px desktop. */
export const sectionGridGap = "gap-4 md:gap-6"

/** Two-column section gap: 24–48px. */
export const sectionSplitGap = "gap-6 lg:gap-12"

/** Equal-height card grid that fills the container. */
export const sectionCardGrid =
  "grid items-stretch gap-4 md:gap-6 [grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr))]"
