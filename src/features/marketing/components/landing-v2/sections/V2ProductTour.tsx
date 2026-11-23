import { useId, useState } from "react"
import { V2Reveal } from "@/features/marketing/components/landing-v2/V2Reveal"
import { V2SectionHeading } from "@/features/marketing/components/landing-v2/V2SectionHeading"
import { V2TourPanels } from "@/features/marketing/components/landing-v2/visuals/V2TourPanels"
import { v2ProductTour, v2SectionY, v2Shell } from "@/features/marketing/constants/landing-v2"

type TabId = (typeof v2ProductTour.tabs)[number]["id"]

export function V2ProductTour() {
  const [active, setActive] = useState<TabId>("overview")
  const baseId = useId()

  return (
    <section
      id={v2ProductTour.id}
      className={`bg-canvas ${v2SectionY}`}
      aria-labelledby="v2-tour-title"
    >
      <div className={v2Shell}>
        <V2Reveal>
          <V2SectionHeading
            eyebrow={v2ProductTour.eyebrow}
            title={v2ProductTour.title}
            description={v2ProductTour.description}
            titleId="v2-tour-title"
            align="center"
          />
        </V2Reveal>

        <V2Reveal delay={0.08} className="mx-auto mt-10 max-w-4xl">
          <div
            role="tablist"
            aria-label="Product tour views"
            className="mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-surface p-1"
          >
            {v2ProductTour.tabs.map((tab) => {
              const selected = tab.id === active
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-${tab.id}-tab`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={`min-h-11 rounded-full px-5 text-sm font-bold transition ${
                    selected
                      ? "bg-primary text-white"
                      : "text-primary/70 hover:text-primary"
                  }`}
                  onClick={() => setActive(tab.id)}
                  onKeyDown={(event) => {
                    const ids = v2ProductTour.tabs.map((item) => item.id)
                    const index = ids.indexOf(tab.id)
                    if (event.key === "ArrowRight") {
                      event.preventDefault()
                      setActive(ids[(index + 1) % ids.length] as TabId)
                    }
                    if (event.key === "ArrowLeft") {
                      event.preventDefault()
                      setActive(ids[(index - 1 + ids.length) % ids.length] as TabId)
                    }
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-${active}-tab`} className="mt-8">
            <V2TourPanels active={active} />
          </div>
        </V2Reveal>
      </div>
    </section>
  )
}
