import { motion, useReducedMotion } from "framer-motion"
import adminDashboard from "@/features/marketing/assets/images/aisr-admin-dashboard.png"

const DASHBOARD_WIDTH = 1024
const DASHBOARD_HEIGHT = 512

export function HeroDashboard() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className="relative z-10 mx-auto mt-10 w-[92%] max-w-[1200px] md:mt-12"
      initial={reduced ? false : { opacity: 0, y: 28, scale: 0.985 }}
      animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={adminDashboard}
        alt="AISR Admin Overview dashboard showing fleet tracking, alerts, verification, and compliance insights. Sample interface for demonstration."
        width={DASHBOARD_WIDTH}
        height={DASHBOARD_HEIGHT}
        className="relative z-10 mx-auto block h-auto w-full object-contain"
        style={{
          aspectRatio: `${DASHBOARD_WIDTH} / ${DASHBOARD_HEIGHT}`,
          marginBottom: `calc(-50% * ${DASHBOARD_HEIGHT} / ${DASHBOARD_WIDTH})`,
        }}
        animate={
          reduced
            ? undefined
            : {
                y: [0, -10, 0],
              }
        }
        transition={
          reduced
            ? undefined
            : {
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              }
        }
        whileHover={reduced ? undefined : { scale: 1.01 }}
        decoding="async"
        fetchPriority="high"
      />
      <div
        className="pointer-events-none absolute inset-x-[8%] bottom-[18%] top-[8%] -z-0 rounded-[28px] bg-secondary/20 blur-3xl"
        aria-hidden="true"
      />
    </motion.div>
  )
}
