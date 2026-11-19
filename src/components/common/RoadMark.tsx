import aisrRoad from "@/assets/logos/aisr-road.png"

type RoadMarkProps = {
  className?: string
}

/** Exact provided highway road logo mark. */
export function RoadMark({ className }: RoadMarkProps) {
  return (
    <img
      src={aisrRoad}
      alt=""
      width={40}
      height={40}
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  )
}
