type RouteMapProps = {
  className?: string
  compact?: boolean
}

export function RouteMap({ className = "", compact = false }: RouteMapProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-control border border-white/10 bg-[linear-gradient(160deg,#132038_0%,#191d31_55%,#0f1524_100%)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 640 360" className="h-full w-full" role="presentation">
        <defs>
          <pattern id="aisr-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(104,207,247,0.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="640" height="360" fill="url(#aisr-grid)" />
        <path
          d="M70 280 C 160 240, 210 210, 280 190 S 420 150, 500 120 S 580 90, 600 70"
          fill="none"
          stroke="rgba(104,207,247,0.35)"
          strokeWidth="3"
          strokeDasharray="8 10"
          className="aisr-route-dash"
        />
        <path
          d="M90 300 C 180 250, 240 220, 310 200 S 450 160, 520 130"
          fill="none"
          stroke="#68cff7"
          strokeWidth="2.5"
        />
        <circle cx="90" cy="300" r="7" fill="#68cff7" />
        <circle cx="310" cy="200" r="6" fill="#fff" />
        <circle cx="520" cy="130" r="8" fill="#68cff7" />
        {!compact ? (
          <>
            <rect x="48" y="48" width="150" height="58" rx="10" fill="rgba(15,21,36,0.88)" stroke="rgba(104,207,247,0.35)" />
            <text x="64" y="72" fill="#68cff7" fontSize="11" fontFamily="Inter, sans-serif">
              Origin • Dallas, TX
            </text>
            <text x="64" y="90" fill="rgba(255,255,255,0.75)" fontSize="11" fontFamily="Inter, sans-serif">
              Load AISR-1048
            </text>
            <rect x="430" y="220" width="170" height="70" rx="10" fill="rgba(15,21,36,0.88)" stroke="rgba(104,207,247,0.35)" />
            <text x="446" y="246" fill="#68cff7" fontSize="11" fontFamily="Inter, sans-serif">
              Destination • Atlanta
            </text>
            <text x="446" y="264" fill="rgba(255,255,255,0.75)" fontSize="11" fontFamily="Inter, sans-serif">
              ETA illustrative
            </text>
          </>
        ) : null}
      </svg>
    </div>
  )
}
