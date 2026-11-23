import type { ReactNode } from "react"
import { useSyncExternalStore } from "react"

type CapabilityPreviewStageProps = {
  children: ReactNode
  videoSrc?: string
  className?: string
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function CapabilityPreviewStage({
  children,
  videoSrc,
  className = "",
}: CapabilityPreviewStageProps) {
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className}`}>
      {!reducedMotion && videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60 [filter:brightness(1.35)_saturate(0.8)]"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : null}

      <div className="relative z-[1] p-4 sm:p-6">{children}</div>
    </div>
  )
}
