export function publishedHref(href: string): string | null {
  const value = href.trim()
  return value.length > 0 ? value : null
}
