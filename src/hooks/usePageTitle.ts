import { useEffect } from "react"
import { siteConfig } from "@/config/site"

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | ${siteConfig.name}` : siteConfig.name
  }, [page])
}
