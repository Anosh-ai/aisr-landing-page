import { MapPin } from "lucide-react"
import { siteConfig } from "@/shared/config/site"

function Detail({ label, value }: { label: string; value: string }) {
  const published = value.trim().length > 0

  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-ink">
        {published ? (
          label === "Email" ? (
            <a
              href={`mailto:${value.trim()}`}
              className="font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4"
            >
              {value.trim()}
            </a>
          ) : (
            value.trim()
          )
        ) : (
          "Not published yet."
        )}
      </dd>
    </div>
  )
}

export function ContactDetails() {
  const address = siteConfig.address.trim()
  const mapHref = address
    ? `https://maps.google.com/?q=${encodeURIComponent(address)}`
    : null

  return (
    <aside className="rounded-card border border-primary/10 bg-card p-6">
      <h2 className="text-2xl text-primary">Company details</h2>
      <p className="mt-3 text-sm leading-6 text-ink">
        Email, phone, address, and a map are shown here when AISR publishes them.
      </p>
      <dl className="mt-6 space-y-5">
        <Detail label="Email" value={siteConfig.email} />
        <Detail label="Phone" value={siteConfig.phone} />
        <Detail label="Address" value={siteConfig.address} />
      </dl>
      <div className="mt-6 overflow-hidden rounded-control border border-primary/10 bg-surface">
        <div className="flex items-start gap-3 px-4 py-5">
          <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-secondary" size={20} />
          {mapHref ? (
            <a
              href={mapHref}
              className="text-sm font-semibold text-primary underline decoration-secondary decoration-2 underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              Open the published address in a map
            </a>
          ) : (
            <p className="text-sm leading-6 text-ink">
              A location map will be added when AISR publishes an address.
            </p>
          )}
        </div>
      </div>
    </aside>
  )
}
