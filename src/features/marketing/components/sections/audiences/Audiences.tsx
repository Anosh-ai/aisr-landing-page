import { Building2, ChevronRight, Shield, Truck, UserRound } from "lucide-react"
import { Link } from "react-router-dom"
import {
  StaggerContainer,
  StaggerItem,
} from "@/features/marketing/components/sections/shared/motion"
import { SectionHeading } from "@/features/marketing/components/sections/shared/SectionHeading"
import { SectionSurface } from "@/features/marketing/components/sections/shared/sectionSurface"
import { audienceContent } from "@/features/marketing/constants/landing"
import { shellContent } from "@/features/marketing/constants/shell"

const icons = {
  drivers: UserRound,
  companies: Building2,
  brokers: Truck,
  agents: Shield,
} as const

export function Audiences() {
  return (
    <SectionSurface
      id={audienceContent.id}
      labelledBy="audiences-title"
      tone="surface"
      glow="right"
      squareGrid
      className="py-20 md:py-28"
    >
      <div className={shellContent}>
        <SectionHeading
          align="center"
          eyebrow={audienceContent.eyebrow}
          title={audienceContent.title}
          titleId="audiences-title"
        />

        <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.09}>
          {audienceContent.audiences.map((audience) => {
            const Icon = icons[audience.id as keyof typeof icons]
            return (
              <StaggerItem key={audience.id} className="h-full">
                <Link
                  to="/#contact"
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line/80 bg-white/90 p-7 shadow-[0_20px_50px_-34px_rgba(25,29,49,0.4)] outline-none backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1.5 hover:border-secondary/50 hover:shadow-[0_28px_60px_-28px_rgba(25,29,49,0.42)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:hover:translate-y-0"
                >
                  <span
                    className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/15 text-primary ring-1 ring-secondary/20 transition-colors duration-300 group-hover:bg-secondary/25">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <span className="mt-1 inline-flex size-9 items-center justify-center rounded-full border border-line bg-surface text-primary/40 transition-[color,border-color,background-color,transform] duration-300 group-hover:translate-x-0.5 group-hover:border-secondary/40 group-hover:bg-secondary/10 group-hover:text-primary">
                      <ChevronRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-primary">
                    {audience.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-ink">{audience.text}</p>
                  <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                    Talk with AISR
                    <ChevronRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </SectionSurface>
  )
}
