export const mainNavigation = [
  { id: "home", label: "Home", href: "/" },
  { id: "platform", label: "Platform", href: "/#capabilities" },
  { id: "solutions", label: "Solutions", href: "/#audiences" },
  { id: "how-it-works", label: "How It Works", href: "/#how-it-works" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const

export const footerGroups = [
  {
    id: "product",
    title: "Product",
    links: [
      { id: "driver-verification", label: "Driver Verification", href: "/#driver-identity" },
      { id: "eld", label: "ELD Integration", href: "/#eld" },
      { id: "fraud", label: "Fraud & Anomaly Detection", href: "/#fraud" },
      { id: "freight", label: "Freight Monitoring", href: "/#freight" },
      { id: "insurance", label: "Insurance Verification", href: "/#insurance-mgmt" },
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
      { id: "faqs", label: "FAQs", href: "/#faqs" },
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
