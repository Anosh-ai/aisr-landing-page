export const heroContent = {
  eyebrow: "Transportation Intelligence Ecosystem",
  titleLead: "One Connected Platform.",
  titleAccent: "Greater Transportation Intelligence.",
  description:
    "Connect driver identity, vehicle intelligence, safety monitoring, carrier information, freight visibility, and risk insights through one unified transportation ecosystem.",
  primaryCta: { label: "Explore AISR", href: "/#challenge" },
  secondaryCta: { label: "Discover the Platform", href: "/#capabilities" },
  note: "Interface values shown below are illustrative sample data for product demonstration.",
} as const

export const challengeContent = {
  id: "challenge",
  eyebrow: "The industry challenge",
  title: "Transportation Data Is Connected. The Industry Needs One Connected View.",
  description:
    "Critical transportation records often live in separate systems. When those pieces stay apart, inconsistencies and risk signals are harder to see.",
  disconnected: [
    { id: "drivers", label: "Driver identity", text: "Held in registration and credential workflows." },
    { id: "eld", label: "ELD & vehicle records", text: "Maintained in separate operational systems." },
    { id: "carriers", label: "Carrier & broker data", text: "Scattered across vetting and load tools." },
    { id: "insurance", label: "Insurance coverage", text: "Tracked apart from driver and VIN records." },
    { id: "freight", label: "Freight & incidents", text: "Difficult to connect across history." },
    { id: "history", label: "Historical relationships", text: "Hard to reconstruct during investigations." },
  ],
  connectedTitle: "With AISR",
  connectedText:
    "Related driver, vehicle, ELD, carrier, insurance, freight, and incident information can be viewed together — where data is available — to support a more complete picture of transportation activity.",
  connectedPoints: [
    "Bring related transportation records into one connected view.",
    "Help surface potential inconsistencies and unusual patterns for review.",
    "Preserve historical relationships to support informed decisions.",
  ],
  connectedPills: [
    { id: "driver-truck", left: "Driver", right: "Truck", icons: "driver-truck" },
    { id: "eld-safety", left: "ELD", right: "Safety", icons: "eld-safety" },
    { id: "freight-carrier", left: "Freight", right: "Carrier", icons: "freight-carrier" },
    { id: "insurance-vin", left: "Insurance", right: "VIN", icons: "insurance-vin" },
  ],
} as const

export const capabilitiesContent = {
  id: "capabilities",
  eyebrow: "Platform capabilities",
  title: "Thirteen Capability Areas in One Connected Platform",
  description:
    "Each area strengthens the same platform idea: related transportation records can be reviewed together instead of in isolation.",
} as const

export const capabilities = [
  {
    id: "driver-identity",
    number: "01",
    title: "Driver Registration & Identity Verification",
    summary:
      "Establish a driver profile designed to connect license, date of birth, face verification, phone, device, and ELD identity — with indicators that help surface potential duplicates for review.",
    points: [
      "Driver registration and identity information",
      "License scanning and verification concept",
      "Date of birth matching and face verification concept",
      "Phone, device, and ELD identity association",
      "Duplicate driver indicators for investigation",
    ],
    visual: "identity",
  },
  {
    id: "eld",
    number: "02",
    title: "ELD Integration",
    summary:
      "Bring available ELD activity into context with the assigned vehicle so teams can review status, hours, movement, and safety-related events in one place.",
    points: [
      "Driving, on-duty, and off-duty status",
      "Hours of Service, speed, and hard braking",
      "Crash alerts and truck location",
      "Mileage, engine hours, VIN, and assignment",
    ],
    visual: "eld",
  },
  {
    id: "safety",
    number: "03",
    title: "Driver Safety Monitoring & Scoring",
    summary:
      "Build a safety profile from available driving history, inspections, and related activity. Scoring concepts are illustrative and do not represent a published formula.",
    points: [
      "Driver safety profiles and driving history",
      "Speeding, hard braking, harsh turning, and crashes",
      "HOS-related activity, inspections, and violations",
      "Driver score concept for comparative visibility",
    ],
    visual: "safety",
  },
  {
    id: "fraud",
    number: "04",
    title: "Fraud & Anomaly Detection",
    summary:
      "Help identify potential indicators for review — not automatic proof of fraud — by connecting identity, device, ELD, location, and relationship signals.",
    points: [
      "Duplicate driver profiles or license numbers",
      "ELD profile switching and unplugging indicators",
      "Unusual device changes and location mismatches",
      "Unexpected jumps and suspicious relationships",
    ],
    visual: "fraud",
  },
  {
    id: "company",
    number: "05",
    title: "Trucking Company Management",
    summary:
      "Give carriers an organization-level workspace for fleet people, units, compliance items, and day-to-day operational records.",
    points: [
      "Driver, truck, and VIN management",
      "Carrier-side safety and personnel records",
      "Compliance and maintenance visibility",
      "Operational records in one company workspace",
    ],
    visual: "company",
  },
  {
    id: "broker",
    number: "06",
    title: "Freight Broker & Carrier Vetting",
    summary:
      "Support broker decisions with carrier, driver, truck, safety, insurance, and consistency indicators — where data is available.",
    points: [
      "Carrier, driver, truck, and VIN context",
      "Safety history, inspections, and violations",
      "Insurance information and risk indicators",
      "Carrier information consistency checks",
    ],
    visual: "broker",
  },
  {
    id: "freight",
    number: "07",
    title: "Freight & Load Management",
    summary:
      "Connect freight and load records with carrier requests, assignments, pickup verification concepts, and shipment activity.",
    points: [
      "Freight and load records",
      "Carrier requests and assignments",
      "Driver and truck assignment",
      "Pickup verification concept and shipment activity",
    ],
    visual: "freight",
  },
  {
    id: "insurance-mgmt",
    number: "08",
    title: "Insurance Management & Verification",
    summary:
      "Associate insurance policy information with drivers and VINs, and provide visibility into coverage status, limits, expiration, and cancellation information.",
    points: [
      "Policy information and coverage limits",
      "Driver and VIN associations",
      "Expiration and cancellation visibility",
      "Coverage status and acceptance workflow",
    ],
    visual: "insurance",
  },
  {
    id: "location",
    number: "09",
    title: "Location & Route Monitoring",
    summary:
      "Show where units are moving, how routes compare to plan, and recent mileage context for operational awareness.",
    points: [
      "Current driver and truck position",
      "Travel history and planned corridor context",
      "Route deviation visibility",
      "Mileage and movement information",
    ],
    visual: "map",
  },
  {
    id: "incidents",
    number: "10",
    title: "Incident & Freight Risk Intelligence",
    summary:
      "Link cargo-theft and drug-related freight incidents to related drivers, trucks, carriers, brokers, and historical movement for investigation support.",
    points: [
      "Cargo theft and drug-related freight incidents",
      "Driver and truck incident history",
      "Carrier and broker relationships",
      "Repeated associations and historical movement",
    ],
    visual: "incident",
  },
  {
    id: "external",
    number: "11",
    title: "External Data Integrations",
    summary:
      "AISR is intended to connect relevant external transportation data sources. Specific providers and live integrations are confirmed only when published.",
    points: [
      "Designed to connect external transportation data",
      "Supports a more complete operational picture",
      "Integration availability depends on confirmed access",
      "No unverified provider claims on this site",
    ],
    visual: "external",
  },
  {
    id: "admin",
    number: "12",
    title: "Admin Dashboard & Analytics",
    summary:
      "An administrative and analytics area is planned to support platform oversight. Detailed admin permissions and workflows remain pending client documentation.",
    points: [
      "High-level administrative visibility",
      "Analytics area for operational oversight",
      "Detailed scope still pending confirmation",
      "Not presented as finalized functionality",
    ],
    visual: "admin",
  },
  {
    id: "alerts",
    number: "13",
    title: "Notifications & Risk Alerts",
    summary:
      "Surface potential notification categories across verification, device, safety, location, insurance, and freight workflows. Severity levels and channels are not claimed here.",
    points: [
      "Verification, device, and safety-related alerts",
      "Location mismatch and route deviation visibility",
      "Insurance expiration or cancellation signals",
      "Freight request, confirmation, and delivery events",
    ],
    visual: "alerts",
  },
] as const

export const howItWorksContent = {
  id: "how-it-works",
  eyebrow: "How AISR works",
  title: "From Identity Verification to Connected Risk Intelligence.",
  steps: [
    {
      id: "verify",
      number: "01",
      title: "Verify Identity",
      text: "Connect driver identity, license, face verification, phone, and ELD identity.",
      icon: "verify",
    },
    {
      id: "connect",
      number: "02",
      title: "Connect Transportation Records",
      text: "Associate the driver with the truck, VIN, ELD, trucking company, insurance, and freight.",
      icon: "connect",
    },
    {
      id: "monitor",
      number: "03",
      title: "Monitor Activity",
      text: "Bring together available driving, location, safety, and shipment information.",
      icon: "monitor",
    },
    {
      id: "anomalies",
      number: "04",
      title: "Identify Potential Anomalies",
      text: "Help surface unusual patterns, mismatches, and risk indicators for review.",
      icon: "anomalies",
    },
    {
      id: "picture",
      number: "05",
      title: "Build a Connected Picture",
      text: "Maintain historical relationships to support investigation and informed decisions.",
      icon: "picture",
    },
  ],
  chain: ["Driver", "Identity", "Device", "ELD", "Truck / VIN", "Trucking Company"],
} as const

export const responsibleContent = {
  id: "responsible",
  eyebrow: "Responsible by design",
  title: "Built to support review, not replace judgment.",
  description:
    "AISR helps teams see related information together. People stay in charge of the decisions.",
  cards: [
    {
      id: "indicators",
      title: "Indicators, not verdicts",
      text: "Signals are shown for review and are not proof of wrongdoing.",
      icon: "flag",
    },
    {
      id: "history",
      title: "Historical context",
      text: "Related records and relationships stay connected over time.",
      icon: "history",
    },
    {
      id: "access",
      title: "Controlled access",
      text: "Access is designed around roles and responsibilities.",
      icon: "lock",
    },
    {
      id: "claims",
      title: "Claims when confirmed",
      text: "Integrations and capabilities are described only once confirmed.",
      icon: "badge",
    },
  ],
} as const

export const audienceContent = {
  id: "audiences",
  eyebrow: "Who uses AISR",
  title: "Built for the Roles That Keep Freight Moving",
  audiences: [
    {
      id: "drivers",
      title: "Drivers",
      text: "Identity, device, assigned truck, ELD, and safety-related information stay connected to the person doing the work.",
    },
    {
      id: "companies",
      title: "Trucking Companies",
      text: "Manage drivers, truck records, safety information, insurance context, and operational visibility in one company view.",
    },
    {
      id: "brokers",
      title: "Freight Brokers",
      text: "Review carrier vetting context, driver and truck information, insurance, shipment details, and potential risk indicators.",
    },
    {
      id: "agents",
      title: "Insurance Agents",
      text: "Associate policy and coverage information with the drivers and vehicles that matter to underwriting and monitoring.",
    },
  ],
} as const

export const faqsContent = {
  id: "faqs",
  eyebrow: "FAQs",
  title: "Clear answers before you dig deeper",
  description:
    "Practical questions about what AISR is designed to support — with cautious wording where details are still unpublished.",
  items: [
    {
      id: "what-is-aisr",
      category: "Platform",
      question: "What is AISR?",
      answer:
        "AISR is being developed as a transportation intelligence platform that connects related driver, vehicle, ELD, carrier, insurance, freight, and risk information in one view — where data is available.",
    },
    {
      id: "replace-judgment",
      category: "Risk",
      question: "Does AISR automatically confirm fraud or risk?",
      answer:
        "No. AISR is designed to surface potential indicators for review. People stay responsible for decisions. Signals are not presented as proof of wrongdoing.",
    },
    {
      id: "who-uses",
      category: "Audience",
      question: "Who is AISR intended for?",
      answer:
        "The platform is designed around roles that move freight: drivers, trucking companies, freight brokers, and insurance agents — each seeing related records in their own context.",
    },
    {
      id: "data-sources",
      category: "Integrations",
      question: "Which data sources does AISR connect?",
      answer:
        "AISR is intended to connect relevant transportation data sources. Specific providers and live integrations are described only once they are confirmed and published.",
    },
    {
      id: "history",
      category: "Records",
      question: "How does AISR handle historical relationships?",
      answer:
        "AISR is designed to preserve associations over time — who was linked to which truck, company, device, or shipment — so teams can review context during investigations when records exist.",
    },
    {
      id: "demo",
      category: "Next step",
      question: "How can we learn more or request a conversation?",
      answer:
        "Use the contact section below to share questions about the platform, your operation, or a demo discussion. Published company details appear when available.",
    },
  ],
} as const

export const contactSectionContent = {
  id: "contact",
  eyebrow: "Contact Us",
  title: "Start a conversation with AISR",
  description:
    "Tell us about your operation or questions on the platform. We respond when published contact channels are available.",
  formTitle: "Send a message",
  formNote: "Required fields are marked. Messages stay in the browser until a published email is configured.",
  detailsTitle: "Reach the team",
  detailsText:
    "Email, phone, and address appear here once AISR publishes them. Until then, use the form to capture your request locally.",
} as const