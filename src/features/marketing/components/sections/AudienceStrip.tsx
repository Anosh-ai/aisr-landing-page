import freightexLogo from "@/features/marketing/assets/logos/trusted/freightex.svg"
import loadwiseLogo from "@/features/marketing/assets/logos/trusted/loadwise.svg"
import carrierhubLogo from "@/features/marketing/assets/logos/trusted/carrierhub.svg"
import transmoveLogo from "@/features/marketing/assets/logos/trusted/transmove.svg"
import quicklogisticsLogo from "@/features/marketing/assets/logos/trusted/quicklogistics.svg"
import { trustedBrands, trustedByCopy } from "@/features/marketing/constants/landing"
import { Container } from "@/shared/components/Container"

const brandLogos = {
  freightex: freightexLogo,
  loadwise: loadwiseLogo,
  carrierhub: carrierhubLogo,
  transmove: transmoveLogo,
  quicklogistics: quicklogisticsLogo,
} as const

export function AudienceStrip() {
  return (
    <section
      id="audiences"
      className="scroll-mt-24 border-y border-primary/8 bg-[#eef1f4] py-9 sm:py-11"
      aria-label={trustedByCopy}
    >
      <Container className="max-w-7xl">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
          <p className="shrink-0 font-display text-base font-bold tracking-tight text-primary sm:text-lg">
            {trustedByCopy}
          </p>

          <ul className="flex w-full flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8 lg:flex-1 lg:flex-nowrap lg:justify-between lg:gap-x-4">
            {trustedBrands.map((brand) => (
              <li
                key={brand.id}
                className="inline-flex items-center gap-2 font-display text-sm font-extrabold tracking-tight text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:text-[#12182b] sm:text-[15px]"
              >
                <img
                  src={brandLogos[brand.logo]}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 shrink-0 object-contain"
                  decoding="async"
                />
                <span>{brand.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
