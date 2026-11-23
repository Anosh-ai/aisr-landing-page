type ShapeSide = "left" | "right"

type ShapeConfig = {
  id: string
  kind: "outline-circle" | "rounded-square" | "solid-dot" | "dashed-circle"
  size: number
  top: string
  inset: string
  opacity: number
  motion: "pulse" | "rotate-cw" | "rotate-ccw" | "drift"
  duration: string
  delay: string
}

const leftShapes: ShapeConfig[] = [
  {
    id: "l-circle",
    kind: "outline-circle",
    size: 58,
    top: "18%",
    inset: "3.5rem",
    opacity: 0.55,
    motion: "pulse",
    duration: "5s",
    delay: "0ms",
  },
  {
    id: "l-square",
    kind: "rounded-square",
    size: 27,
    top: "42%",
    inset: "5.5rem",
    opacity: 0.7,
    motion: "rotate-ccw",
    duration: "22s",
    delay: "150ms",
  },
  {
    id: "l-dot",
    kind: "solid-dot",
    size: 8,
    top: "62%",
    inset: "2.75rem",
    opacity: 0.8,
    motion: "drift",
    duration: "8s",
    delay: "300ms",
  },
  {
    id: "l-dashed",
    kind: "dashed-circle",
    size: 35,
    top: "78%",
    inset: "6.5rem",
    opacity: 0.45,
    motion: "rotate-cw",
    duration: "24s",
    delay: "450ms",
  },
]

const rightShapes: ShapeConfig[] = [
  {
    id: "r-circle",
    kind: "outline-circle",
    size: 56,
    top: "22%",
    inset: "4rem",
    opacity: 0.5,
    motion: "pulse",
    duration: "5s",
    delay: "80ms",
  },
  {
    id: "r-square",
    kind: "rounded-square",
    size: 28,
    top: "46%",
    inset: "2.5rem",
    opacity: 0.65,
    motion: "rotate-cw",
    duration: "20s",
    delay: "220ms",
  },
  {
    id: "r-dot",
    kind: "solid-dot",
    size: 8,
    top: "58%",
    inset: "6rem",
    opacity: 0.75,
    motion: "drift",
    duration: "9s",
    delay: "360ms",
  },
  {
    id: "r-dashed",
    kind: "dashed-circle",
    size: 36,
    top: "74%",
    inset: "3.25rem",
    opacity: 0.4,
    motion: "rotate-ccw",
    duration: "26s",
    delay: "500ms",
  },
]

function shapeClass(kind: ShapeConfig["kind"]) {
  switch (kind) {
    case "outline-circle":
      return "rounded-full border border-[#38bdf8] bg-transparent"
    case "rounded-square":
      return "rounded-[6px] border border-[#38bdf8] bg-transparent"
    case "solid-dot":
      return "rounded-full border-0 bg-[#38bdf8]"
    case "dashed-circle":
      return "rounded-full border border-dashed border-[#38bdf8] bg-transparent"
  }
}

function motionClass(motion: ShapeConfig["motion"]) {
  switch (motion) {
    case "pulse":
      return "aisr-shape-pulse"
    case "rotate-cw":
      return "aisr-shape-spin-cw"
    case "rotate-ccw":
      return "aisr-shape-spin-ccw"
    case "drift":
      return "aisr-shape-drift"
  }
}

function ShapeCluster({ side, shapes }: { side: ShapeSide; shapes: ShapeConfig[] }) {
  return (
    <div className={`absolute inset-y-0 ${side === "left" ? "left-0" : "right-0"} w-[140px]`}>
      {shapes.map((shape) => (
        <span
          key={shape.id}
          className="aisr-shape-fade absolute"
          style={{
            top: shape.top,
            [side === "left" ? "left" : "right"]: shape.inset,
            width: shape.size,
            height: shape.size,
            animationDelay: shape.delay,
          }}
        >
          <span
            className={`block h-full w-full ${shapeClass(shape.kind)} ${motionClass(shape.motion)}`}
            style={{
              opacity: shape.opacity,
              animationDuration: shape.duration,
            }}
          />
        </span>
      ))}
    </div>
  )
}

export function HeroShapes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden md:block"
      aria-hidden="true"
    >
      <ShapeCluster side="left" shapes={leftShapes} />
      <ShapeCluster side="right" shapes={rightShapes} />
    </div>
  )
}
