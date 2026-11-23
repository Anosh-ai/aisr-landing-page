/** All copy for the /2 landing experience. Edit here — not in JSX. */

export const landingV2Meta = {
  title: "AISR — Transportation Intelligence (Preview)",
  description:
    "AISR is designed to bring related transportation records into one view for drivers, carriers, brokers, and insurance teams — for review, not automatic verdicts.",
  robots: "noindex, nofollow",
} as const

export const v2Nav = [
  { id: "problem", label: "Problem", href: "#problem" },
  { id: "how", label: "How it works", href: "#how-it-works" },
  { id: "platform", label: "Platform", href: "#capabilities" },
  { id: "tour", label: "Product", href: "#product-tour" },
  { id: "roles", label: "Roles", href: "#audiences" },
  { id: "faq", label: "FAQ", href: "#faq" },
] as const

export const v2Hero = {
  eyebrow: "Transportation intelligence",
  title: "See related freight records in one operational picture.",
  subline:
    "AISR is designed to connect driver identity, vehicles, ELD context, carriers, freight, and risk indicators — where data is available — so teams can review what belongs together.",
  primaryCta: { label: "Request early access", href: "#contact" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
  sampleNote: "Illustrative sample data",
} as const

export const v2Problem = {
  id: "problem",
  eyebrow: "The problem",
  title: "Critical records still live apart.",
  description:
    "Identity, ELD activity, carrier files, insurance, and freight often sit in separate tools. When pieces stay disconnected, inconsistencies are harder to notice in time.",
  items: [
    { id: "identity", label: "Driver identity" },
    { id: "eld", label: "ELD activity" },
    { id: "carrier", label: "Carrier files" },
    { id: "insurance", label: "Insurance" },
    { id: "freight", label: "Freight" },
    { id: "incidents", label: "Incidents" },
  ],
  afterTitle: "Designed to bring related pieces into view",
  afterText:
    "AISR is intended to associate available records so reviewers can examine relationships with historical context.",
} as const

export const v2HowItWorks = {
  id: "how-it-works",
  eyebrow: "How it works",
  title: "A clear path from identity to connected review.",
  steps: [
    {
      id: "connect",
      number: "01",
      title: "Connect records",
      text: "Link available driver, device, vehicle, and organization information into a shared profile concept.",
    },
    {
      id: "relate",
      number: "02",
      title: "Link relationships",
      text: "Associate trucks, VINs, carriers, insurance, and freight assignments where those links exist.",
    },
    {
      id: "monitor",
      number: "03",
      title: "Monitor activity",
      text: "Bring together movement, hours, and shipment context to support day-to-day awareness.",
    },
    {
      id: "signals",
      number: "04",
      title: "Review signals",
      text: "Surface potential mismatches and unusual patterns as indicators for human review.",
    },
    {
      id: "history",
      number: "05",
      title: "Keep history",
      text: "Preserve associations over time so investigations can look beyond the latest event.",
    },
  ],
} as const

export const v2CapabilityClusters = {
  id: "capabilities",
  eyebrow: "Platform capabilities",
  title: "Thirteen areas, grouped for faster scanning.",
  description:
    "Each cluster strengthens the same idea: related transportation information can be reviewed together instead of in isolation.",
  clusters: [
    {
      id: "identity-drivers",
      label: "Identity & drivers",
      summary: "Establish who is operating and how identity stays attached to work.",
      items: [
        {
          id: "driver-identity",
          title: "Driver Registration and Identity Verification",
          text: "Designed to connect license, face check concepts, phone, device, and ELD identity with duplicate indicators for review.",
        },
        {
          id: "eld",
          title: "ELD Integration",
          text: "Bring available ELD status, hours, and movement into context with the assigned vehicle.",
        },
        {
          id: "safety",
          title: "Driver Safety Monitoring and Scoring",
          text: "Illustrative safety profiles from driving history and related events — not a published scoring formula.",
        },
      ],
    },
    {
      id: "vehicles-safety",
      label: "Vehicles & safety",
      summary: "Operational visibility around units, routes, and safety-related activity.",
      items: [
        {
          id: "location",
          title: "Location and Route Monitoring",
          text: "Show position, corridor context, and deviation visibility where movement data exists.",
        },
        {
          id: "fraud",
          title: "Fraud and Anomaly Detection",
          text: "Potential indicators for review from identity, device, ELD, and location relationships — not automatic proof.",
        },
        {
          id: "company",
          title: "Trucking Company Management",
          text: "Organization workspace concepts for people, units, and operational records.",
        },
      ],
    },
    {
      id: "freight-carriers",
      label: "Freight & carriers",
      summary: "Support load workflows and carrier context for brokers and fleets.",
      items: [
        {
          id: "broker",
          title: "Freight Broker and Carrier Vetting",
          text: "Carrier, driver, truck, safety, and insurance context where data is available.",
        },
        {
          id: "freight",
          title: "Freight and Load Management",
          text: "Connect load records with assignments, pickup concepts, and shipment activity.",
        },
        {
          id: "incidents",
          title: "Incident and Freight Risk Intelligence",
          text: "Link freight incidents to related parties and historical movement for investigation support.",
        },
      ],
    },
    {
      id: "insurance-risk",
      label: "Insurance & risk",
      summary: "Coverage associations and alert concepts for monitoring teams.",
      items: [
        {
          id: "insurance",
          title: "Insurance Management and Verification",
          text: "Associate policy information with drivers and VINs, including status and expiration visibility.",
        },
        {
          id: "alerts",
          title: "Notifications and Risk Alerts",
          text: "Potential notification categories across verification, safety, location, and freight workflows.",
        },
      ],
    },
    {
      id: "data-admin",
      label: "Data & admin",
      summary: "Integrations and oversight areas described only as confirmed.",
      items: [
        {
          id: "external",
          title: "External Data Integrations",
          text: "Intended to connect relevant transportation sources; providers are named only when published.",
        },
        {
          id: "admin",
          title: "Admin Dashboard and Analytics",
          text: "Administrative visibility concepts; detailed permissions remain pending confirmation.",
        },
      ],
    },
  ],
} as const

export const v2ProductTour = {
  id: "product-tour",
  eyebrow: "Product tour",
  title: "Explore an illustrative operations view.",
  description:
    "Switch between overview, fleet map, and alerts. Values are sample data for demonstration only.",
  tabs: [
    { id: "overview", label: "Overview" },
    { id: "map", label: "Fleet map" },
    { id: "alerts", label: "Alerts" },
  ],
  metrics: [
    { id: "drivers", label: "Active Drivers", value: 1248 },
    { id: "vehicles", label: "Tracked Vehicles", value: 892 },
    { id: "shipments", label: "Active Shipments", value: 736 },
  ],
  sampleNote: "Illustrative sample data",
} as const

export const v2Audiences = {
  id: "audiences",
  eyebrow: "Who it is for",
  title: "Outcomes by role, with the capabilities they use.",
  roles: [
    {
      id: "drivers",
      label: "Drivers",
      outcome:
        "Keep identity, device, assigned truck, and safety-related context attached to the person doing the work.",
      uses: ["Driver Registration and Identity Verification", "ELD Integration", "Driver Safety Monitoring and Scoring"],
    },
    {
      id: "companies",
      label: "Trucking Companies",
      outcome:
        "Review fleet people, units, compliance items, and operational records in one company-oriented workspace concept.",
      uses: ["Trucking Company Management", "Location and Route Monitoring", "Notifications and Risk Alerts"],
    },
    {
      id: "brokers",
      label: "Freight Brokers",
      outcome:
        "Examine carrier, driver, truck, insurance, and shipment context when deciding who moves a load.",
      uses: ["Freight Broker and Carrier Vetting", "Freight and Load Management", "Incident and Freight Risk Intelligence"],
    },
    {
      id: "agents",
      label: "Insurance Agents",
      outcome:
        "Associate coverage information with the drivers and vehicles that matter for monitoring and review.",
      uses: ["Insurance Management and Verification", "Fraud and Anomaly Detection", "Admin Dashboard and Analytics"],
    },
  ],
} as const

export const v2Responsible = {
  id: "responsible",
  eyebrow: "Responsible by design",
  title: "Built to support review, not replace judgment.",
  principles: [
    {
      id: "indicators",
      title: "Indicators for review, not verdicts",
      text: "Signals are shown so people can investigate. They are not proof of wrongdoing.",
    },
    {
      id: "history",
      title: "Historical context",
      text: "Relationships are designed to stay connected over time when records exist.",
    },
    {
      id: "access",
      title: "Controlled access",
      text: "Access is intended around roles and responsibilities.",
    },
    {
      id: "claims",
      title: "Claims only when confirmed",
      text: "Integrations and capabilities are described only once confirmed and published.",
    },
  ],
} as const

export const v2Mobile = {
  id: "mobile",
  eyebrow: "Mobile app",
  title: "Driver-facing screens, shown as concepts.",
  description:
    "Illustrative previews of a driver home and shipment detail. Store availability is not claimed here.",
  cta: { label: "Request early access", href: "#contact" },
  screens: [
    {
      id: "home",
      label: "Driver home",
      caption: "Illustrative preview",
    },
    {
      id: "shipment",
      label: "Shipment detail",
      caption: "Illustrative preview",
    },
  ],
  sampleNote: "Illustrative sample data",
} as const

export const v2Faq = {
  id: "faq",
  eyebrow: "FAQ",
  title: "Straight answers before a deeper conversation.",
  items: [
    {
      id: "what",
      question: "What is AISR?",
      answer:
        "AISR is being developed as a transportation intelligence platform designed to connect related driver, vehicle, ELD, carrier, insurance, freight, and risk information in one view — where data is available.",
    },
    {
      id: "who",
      question: "Who is it for?",
      answer:
        "It is designed around roles that keep freight moving: drivers, trucking companies, freight brokers, and insurance agents.",
    },
    {
      id: "connected",
      question: "How is data connected?",
      answer:
        "AISR is intended to associate related records and preserve those relationships over time. Exact sources depend on confirmed access and published integrations.",
    },
    {
      id: "numbers",
      question: "Are the numbers on this page real?",
      answer:
        "No. Metrics and interface values shown here are illustrative sample data for product demonstration.",
    },
    {
      id: "mobile",
      question: "Is a mobile app available?",
      answer:
        "Mobile screens on this page are illustrative previews. Availability and store listings are not claimed until published.",
    },
    {
      id: "integrations",
      question: "Which integrations are live?",
      answer:
        "AISR is designed to connect relevant transportation data sources. Specific providers are named only when confirmed.",
    },
    {
      id: "fraud",
      question: "Does AISR confirm fraud automatically?",
      answer:
        "No. AISR is designed to surface potential indicators for review. People remain responsible for decisions.",
    },
    {
      id: "demo",
      question: "How do we get a demo?",
      answer:
        "Use the contact form below to request a conversation. If a published email exists, your message can open in your email client.",
    },
  ],
} as const

export const v2FinalCta = {
  id: "final-cta",
  title: "Ready to review AISR with your team?",
  text: "Share your operation and questions. We respond through published contact channels when available.",
  cta: { label: "Request early access", href: "#contact" },
} as const

export const v2Contact = {
  id: "contact",
  eyebrow: "Contact",
  title: "Start a conversation",
  description:
    "Tell us what you want to review. Required fields are marked. Delivery uses mailto when a published email is configured.",
  formTitle: "Request early access",
  successMailto: "Your email application should open with this message.",
  blockedNoEmail:
    "A published contact email is not configured yet, so this message stays in the browser and is not sent.",
} as const

export const v2Footer = {
  blurb:
    "AISR is designed as a transportation intelligence platform for review-focused teams across drivers, carriers, brokers, and insurance.",
  links: [
    { id: "v1", label: "Main site", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "privacy", label: "Privacy", href: "/privacy" },
    { id: "terms", label: "Terms", href: "/terms" },
  ],
} as const

/** Shared horizontal shell — mirrors v1 spacing rhythm with Tailwind classes. */
export const v2Shell = "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8"
export const v2SectionY = "py-16 md:py-24"
