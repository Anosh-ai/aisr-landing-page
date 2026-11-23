import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import type { LucideIcon } from "lucide-react"
import {
  ArrowLeftRight,
  Building2,
  CheckCircle2,
  Cpu,
  FileCheck,
  Hash,
  Link2,
  Package,
  ShieldCheck,
  Truck,
  Unlink,
  User,
} from "lucide-react"
import { Reveal } from "@/features/marketing/components/sections/shared/Reveal"
import { SectionHeading } from "@/features/marketing/components/sections/shared/SectionHeading"
import { SectionSurface } from "@/features/marketing/components/sections/shared/sectionSurface"
import { challengeContent } from "@/features/marketing/constants/landing"
import { shellContent } from "@/features/marketing/constants/shell"

const pillIcons = {
  "driver-truck": { LeftIcon: User, RightIcon: Truck },
  "eld-safety": { LeftIcon: Cpu, RightIcon: ShieldCheck },
  "freight-carrier": { LeftIcon: Package, RightIcon: Building2 },
  "insurance-vin": { LeftIcon: FileCheck, RightIcon: Hash },
} as const

function IconBox({ Icon }: { Icon: LucideIcon }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-[#38bdf8]">
      <Icon size={20} aria-hidden="true" />
    </span>
  )
}

function RelationshipPill({
  left,
  right,
  icons,
  index,
  visible,
}: {
  left: string
  right: string
  icons: keyof typeof pillIcons
  index: number
  visible: boolean
}) {
  const { LeftIcon, RightIcon } = pillIcons[icons]

  return (
    <div
      className={`aisr-pill-row group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      style={{
        transitionDelay: visible ? `${index * 100}ms` : "0ms",
        ["--aisr-pill-delay" as string]: `${index * 0.35}s`,
      }}
    >
      <div className="flex min-w-0 items-center gap-3">
        <IconBox Icon={LeftIcon} />
        <span className="text-sm font-medium text-sky-300">{left}</span>
      </div>

      <div className="relative mx-4 flex min-w-[4.5rem] flex-1 items-center justify-center">
        <span
          className="absolute inset-x-0 top-1/2 border-t border-dashed border-sky-400/40"
          aria-hidden="true"
        />
        <ArrowLeftRight
          className="relative z-[1] shrink-0 bg-primary px-1 text-[#38bdf8]"
          size={16}
          aria-hidden="true"
        />
        <span className="aisr-pill-travel-dot" aria-hidden="true" />
      </div>

      <div className="flex min-w-0 items-center gap-3">
        <span className="text-sm font-medium text-sky-300">{right}</span>
        <IconBox Icon={RightIcon} />
      </div>
    </div>
  )
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)")
  media.addEventListener("change", onStoreChange)
  return () => media.removeEventListener("change", onStoreChange)
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function RelationshipPills() {
  const ref = useRef<HTMLDivElement | null>(null)
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false)
  const [visible, setVisible] = useState(false)
  const isVisible = reducedMotion || visible

  useEffect(() => {
    if (reducedMotion) {
      return
    }

    const node = ref.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div ref={ref} className="mt-8 flex flex-1 flex-col justify-evenly gap-3">
      {challengeContent.connectedPills.map((pill, index) => (
        <RelationshipPill
          key={pill.id}
          left={pill.left}
          right={pill.right}
          icons={pill.icons}
          index={index}
          visible={isVisible}
        />
      ))}
    </div>
  )
}

export function Challenge() {
  return (
    <SectionSurface
      id={challengeContent.id}
      labelledBy="challenge-title"
      tone="surface"
      glow="both"
      className="relative z-0 pb-20 pt-48 md:pb-28 md:pt-60 lg:pt-72"
    >
      <div className={shellContent}>
        <Reveal>
          <SectionHeading
            eyebrow={challengeContent.eyebrow}
            title={challengeContent.title}
            description={challengeContent.description}
            titleId="challenge-title"
          />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-3xl border border-line/80 bg-white/90 p-7 shadow-[0_24px_60px_-36px_rgba(25,29,49,0.35)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-primary/20 motion-reduce:hover:translate-y-0 md:p-8">
              <div className="flex items-center gap-3 text-primary">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Unlink size={18} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">Disconnected systems</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {challengeContent.disconnected.map((item, index) => (
                  <li
                    key={item.id}
                    className="group flex gap-3 rounded-2xl border border-dashed border-primary/12 bg-surface/90 p-4 transition-colors hover:border-primary/25 hover:bg-white"
                  >
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-[11px] font-bold tabular-nums text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-primary">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-ink">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="h-full" delayMs={120}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-secondary/35 bg-[linear-gradient(165deg,#191d31_0%,#1a1f38_55%,#152038_100%)] p-7 text-white shadow-[0_30px_70px_-28px_rgba(25,29,49,0.6)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-secondary/60 motion-reduce:hover:translate-y-0 md:p-8">
              <div
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-secondary/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-3 text-secondary">
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <Link2 size={18} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {challengeContent.connectedTitle}
                </h3>
              </div>
              <p className="relative mt-5 text-base leading-7 text-white/80">
                {challengeContent.connectedText}
              </p>
              <ul className="relative mt-6 space-y-3">
                {challengeContent.connectedPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-white/85">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-secondary"
                      size={18}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="relative">
                <RelationshipPills />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionSurface>
  )
}
