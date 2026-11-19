import aisrMark from "@/features/marketing/assets/logos/aisr-mark.png"

type RoadMarkProps = {
  className?: string
}

/** AISR highway road logo mark. */
export function RoadMark({ className }: RoadMarkProps) {
  return (
    <img
      src={aisrMark}
      alt=""
      width={643}
      height={274}
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  )
}
