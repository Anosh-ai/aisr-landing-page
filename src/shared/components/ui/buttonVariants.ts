/** Shared CTA fills — keep hover + shadow identical across marketing surfaces. */
export const buttonVariants = {
  primary:
    "border border-secondary bg-secondary text-on-secondary shadow-[0_10px_24px_-4px_rgba(104,207,247,0.45)] transition-[color,background-color,box-shadow,border-color] hover:bg-[#7ad6f8] hover:shadow-[0_14px_30px_-4px_rgba(104,207,247,0.55)]",
  /** Compact nav CTAs: same colors/hover, tighter shadow so size stays even with ghost. */
  primaryCompact:
    "border border-secondary bg-secondary text-on-secondary shadow-[0_6px_14px_-8px_rgba(104,207,247,0.45)] transition-[color,background-color,box-shadow,border-color] hover:bg-[#7ad6f8] hover:shadow-[0_8px_18px_-8px_rgba(104,207,247,0.55)]",
  secondaryDark:
    "border border-white/25 bg-white/5 text-white shadow-none transition-[color,background-color,border-color] hover:bg-white/10",
  secondaryLight:
    "border border-primary/10 bg-white text-primary shadow-none transition-[color,background-color,border-color] hover:border-secondary hover:bg-secondary/10",
  ghost:
    "border border-white/40 bg-transparent text-white shadow-none transition-[color,background-color,border-color] hover:bg-white/10",
} as const

export type ButtonVariant = keyof typeof buttonVariants

/** Fixed compact size for navbar Sign In / Sign Up. */
export const navButtonSize =
  "inline-flex h-9 min-w-[5.75rem] items-center justify-center rounded-button px-3.5 text-sm font-bold leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
