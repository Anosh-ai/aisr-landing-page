import { useId, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { V2Reveal } from "@/features/marketing/components/landing-v2/V2Reveal"
import { V2SectionHeading } from "@/features/marketing/components/landing-v2/V2SectionHeading"
import { v2Audiences, v2SectionY, v2Shell } from "@/features/marketing/constants/landing-v2"

type RoleId = (typeof v2Audiences.roles)[number]["id"]

export function V2Audiences() {
  const [activeId, setActiveId] = useState<RoleId>(v2Audiences.roles[0].id)
  const baseId = useId()
  const reduced = useReducedMotion()
  const active = v2Audiences.roles.find((role) => role.id === activeId) ?? v2Audiences.roles[0]

  return (
    <section
      id={v2Audiences.id}
      className={`bg-primary text-white ${v2SectionY}`}
      aria-labelledby="v2-audiences-title"
    >
      <div className={v2Shell}>
        <V2Reveal>
          <V2SectionHeading
            eyebrow={v2Audiences.eyebrow}
            title={v2Audiences.title}
            titleId="v2-audiences-title"
            tone="dark"
          />
        </V2Reveal>

        <div className="mt-10">
          <div
            role="tablist"
            aria-label="Audience roles"
            className="flex flex-wrap gap-2"
          >
            {v2Audiences.roles.map((role) => {
              const selected = role.id === active?.id
              return (
                <button
                  key={role.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-${role.id}-tab`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={`min-h-11 rounded-full border px-4 text-sm font-bold transition ${
                    selected
                      ? "border-secondary bg-secondary text-on-secondary"
                      : "border-white/20 bg-transparent text-white/80 hover:border-white/40"
                  }`}
                  onClick={() => setActiveId(role.id)}
                >
                  {role.label}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                id={`${baseId}-panel`}
                role="tabpanel"
                aria-labelledby={`${baseId}-${active.id}-tab`}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 md:p-8"
              >
                <h3 className="font-display text-2xl font-bold text-white">{active.label}</h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">{active.outcome}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                  Capabilities used
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {active.uses.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5 text-xs font-semibold text-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
