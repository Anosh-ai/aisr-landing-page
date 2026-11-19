export const mainNavigation = [
  { id: "product", label: "Product", href: "/#product" },
  { id: "solutions", label: "Solutions", href: "/#audiences" },
  { id: "industries", label: "Industries", href: "/#audiences" },
  { id: "resources", label: "Resources", href: "/about" },
  { id: "pricing", label: "Pricing", href: "/contact" },
] as const

export const footerGroups = [
  {
    id: "product",
    title: "Product",
    links: [
      { id: "driver-verification", label: "Driver Verification", href: "/#product" },
      { id: "eld", label: "ELD Integration", href: "/#product" },
      { id: "insurance", label: "Insurance Verification", href: "/#product" },
      { id: "freight", label: "Freight Monitoring", href: "/#platform" },
    ],
  },
  {
    id: "solutions",
    title: "Solutions",
    links: [
      { id: "drivers", label: "For Drivers", href: "/#audiences" },
      { id: "carriers", label: "For Trucking Companies", href: "/#audiences" },
      { id: "brokers", label: "For Freight Brokers", href: "/#audiences" },
      { id: "agents", label: "For Insurance Agents", href: "/#audiences" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { id: "about", label: "About AISR", href: "/about" },
      { id: "contact", label: "Contact Us", href: "/contact" },
      { id: "privacy", label: "Privacy Policy", href: "/privacy" },
      { id: "terms", label: "Terms and Conditions", href: "/terms" },
    ],
  },
] as const

export const legalLinks = [
  { id: "terms", label: "Terms and Conditions", href: "/terms" },
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
] as const

export const socialChannels = [
  { id: "linkedin", label: "LinkedIn", href: "" },
  { id: "youtube", label: "YouTube", href: "" },
  { id: "twitter", label: "X", href: "" },
] as const
