export const design2Actions = {
  requestDemo: { label: "Request a Demo", href: "/contact" },
  explorePlatform: { label: "Explore Platform", href: "/#platform" },
} as const

export const design2Hero = {
  titleLead: "A Safer, Smarter",
  titleRest: "Way to Move Freight.",
  description:
    "Connect verified drivers, trucks, carriers, insurance and freight in one intelligent security platform.",
  proof: "One connected view of every driver, vehicle and shipment.",
} as const

export const design2Features = [
  {
    id: "driver-verification",
    title: "Driver Verification",
    text: "Verify driver identity and license with face matching.",
  },
  {
    id: "eld-safety",
    title: "ELD & Safety Insights",
    text: "Connect ELDs and track driver safety performance.",
  },
  {
    id: "carrier-insurance",
    title: "Carrier & Insurance Vetting",
    text: "Validate carriers and insurance coverage in real time.",
  },
  {
    id: "freight-risk",
    title: "Freight Risk Intelligence",
    text: "Monitor shipments, routes and risks with intelligent alerts.",
  },
] as const

export const BRAND_NAME = "AISR" as const

export const design3Content = {
  pageTitle: `${BRAND_NAME} | Trucking Safety & Driver Verification`,
  nav: {
    primaryLabel: "Primary navigation",
    mobileLabel: "Mobile navigation",
    homeLabel: `${BRAND_NAME} home`,
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
    links: [
      { id: "product", label: "Product", href: "/design-3#features" },
      { id: "solutions", label: "Solutions", href: "/design-3#highlights" },
      { id: "industries", label: "Industries", href: "/design-3#features" },
      { id: "resources", label: "Resources", href: "/design-3#how-it-works" },
      { id: "pricing", label: "Pricing", href: "/design-3#cta" },
    ],
    signInLabel: "Sign In",
    demoLabel: "Request a Demo",
    signInHref: `mailto:?subject=${BRAND_NAME}%20sign-in%20inquiry`,
    demoHref: `mailto:?subject=${BRAND_NAME}%20demo%20request`,
  },
  hero: {
    id: "top",
    eyebrow: "TRUCKING SAFETY & FREIGHT MONITORING",
    headlineBefore: "Trucking safety and ",
    headlineAccent: "driver verification",
    headlineAfter: " in one place",
    description: `${BRAND_NAME} connects drivers, trucks, carriers, brokers, insurers and shipments, then flags what doesn't match before it becomes fraud or risk.`,
    demoLabel: "Request a demo",
    demoHref: `mailto:?subject=${BRAND_NAME}%20demo%20request`,
    featuresLabel: "Explore features",
    featuresHref: "/design-3#features",
    highlights: [
      { id: "verification", label: "Driver & truck verification", icon: "Truck" },
      { id: "fraud", label: "Fraud detection", icon: "ShieldCheck" },
      { id: "monitoring", label: "Freight monitoring", icon: "MapPin" },
    ],
  },
  features: {
    id: "features",
    heading: "Built for real-world trucking operations",
    description: "Data that lives in separate systems, brought together to find what doesn't match.",
    items: [
      {
        id: "driver-verification",
        title: "Driver verification",
        text: "Confirm the driver is the registered person, and match the license and selfie to the license photo.",
        icon: "UserRoundCheck",
      },
      {
        id: "truck-eld",
        title: "Truck & ELD matching",
        text: "Link the driver to the correct ELD account and verify they are driving the assigned truck.",
        icon: "Truck",
      },
      {
        id: "location-route",
        title: "Location & route checks",
        text: "Compare the driver's phone location with truck GPS and follow the assigned freight route.",
        icon: "MapPin",
      },
      {
        id: "insurance-alerts",
        title: "Insurance & alerts",
        text: "Check the truck has valid insurance and get an alert for investigation when anything doesn't match.",
        icon: "ShieldCheck",
      },
    ],
  },
  howItWorks: {
    id: "how-it-works",
    heading: "How it works",
    description: `${BRAND_NAME} connects driver, truck and shipment data, checks each assignment, and flags mismatches for your team to review.`,
    steps: [
      {
        id: "connect-data",
        number: "01",
        title: "Connect your data",
        text: "Bring driver identity, licenses, ELD, truck, insurance, freight and location data into one shared view.",
        icon: "Database",
      },
      {
        id: "cross-check",
        number: "02",
        title: "Verify every assignment",
        text: `${BRAND_NAME} checks the driver, license, selfie, ELD and truck, then compares GPS location, insurance and freight route.`,
        icon: "ScanSearch",
      },
      {
        id: "act-on-alerts",
        number: "03",
        title: "Investigate alerts",
        text: `When assignment details don't match, ${BRAND_NAME} flags the issue so your team can review and investigate.`,
        icon: "BellRing",
      },
    ],
  },
  highlights: {
    id: "highlights",
    ariaLabel: "Platform highlights",
    items: [
      {
        id: "connected",
        title: "Connected",
        text: "Drivers, trucks, carriers, brokers and insurers in one record",
        icon: "Network",
      },
      {
        id: "checks",
        title: "8 checks",
        text: "Run on every driver and truck assignment",
        icon: "ListChecks",
      },
      {
        id: "alerts",
        title: "Alerts",
        text: "Raised when information doesn't match",
        icon: "BellRing",
      },
    ],
  },
  cta: {
    id: "cta",
    heading: `Ready to see ${BRAND_NAME} in action?`,
    description: "Request a demo to see how driver, truck and freight checks work together.",
    buttonLabel: "Request a demo",
    buttonHref: `mailto:?subject=${BRAND_NAME}%20demo%20request`,
  },
  footer: {
    tagline: `${BRAND_NAME} connects driver verification, trucking safety and freight monitoring in one place.`,
    groups: [
      {
        id: "product",
        title: "Product",
        links: [
          { id: "driver-verification", label: "Driver verification", href: "/design-3#features" },
          { id: "truck-eld", label: "Truck & ELD matching", href: "/design-3#features" },
          { id: "location-route", label: "Location & route checks", href: "/design-3#features" },
          { id: "insurance-alerts", label: "Insurance & alerts", href: "/design-3#features" },
        ],
      },
      {
        id: "solutions",
        title: "Solutions",
        links: [
          { id: "drivers", label: "For drivers", href: "/design-3#features" },
          { id: "carriers", label: "For trucking companies", href: "/design-3#features" },
          { id: "brokers", label: "For freight brokers", href: "/design-3#features" },
          { id: "insurers", label: "For insurance teams", href: "/design-3#features" },
        ],
      },
      {
        id: "resources",
        title: "Resources",
        links: [
          { id: "how-it-works", label: "How it works", href: "/design-3#how-it-works" },
          { id: "checks", label: "Assignment checks", href: "/design-3#highlights" },
          { id: "contact", label: "Contact", href: "/contact" },
        ],
      },
      {
        id: "company",
        title: "Company",
        links: [
          { id: "about", label: `About ${BRAND_NAME}`, href: "/about" },
          { id: "privacy", label: "Privacy Policy", href: "/privacy" },
          { id: "terms", label: "Terms of Service", href: "/terms" },
          { id: "cookies", label: "Cookies", href: "/privacy#cookies" },
        ],
      },
    ],
    copyright: `© 2026 ${BRAND_NAME}. All rights reserved.`,
    legalLinks: [
      { id: "privacy", label: "Privacy Policy", href: "/privacy" },
      { id: "terms", label: "Terms of Service", href: "/terms" },
      { id: "cookies", label: "Cookies", href: "/privacy#cookies" },
    ],
  },
} as const
