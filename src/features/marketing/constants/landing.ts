import driverVerificationLogo from "@/features/marketing/assets/logos/driver-verification.svg"
import insuranceCarrierLogo from "@/features/marketing/assets/logos/insurance-carrier.svg"
import eldIntegrationLogo from "@/features/marketing/assets/logos/eld-integration.svg"
import realtimeMonitoringLogo from "@/features/marketing/assets/logos/realtime-monitoring.svg"

export const heroChecks = [
  {
    id: "driver-verification",
    label: "Driver Verification",
    icon: driverVerificationLogo,
  },
  {
    id: "insurance-carrier",
    label: "Insurance & Carrier Vetting",
    icon: insuranceCarrierLogo,
  },
  {
    id: "eld-integration",
    label: "ELD Integration",
    icon: eldIntegrationLogo,
  },
  {
    id: "realtime-monitoring",
    label: "Real-time Monitoring",
    icon: realtimeMonitoringLogo,
  },
] as const

export const heroBadge = "AI-Powered Freight Risk & Safety Platform" as const

export const heroCopy = {
  title: "A Safer, Smarter Way to Move Freight.",
  description:
    "Verify drivers, carriers, and insurance, monitor shipments in real time, and reduce risk with one intelligent platform.",
} as const

export const advantageFeatures = [
  {
    id: "driver-verification",
    title: "Driver Verification",
    text: "Connect a license, date of birth, face check, phone, device, and ELD identity to one driver profile.",
  },
  {
    id: "eld-safety",
    title: "ELD & Safety Insights",
    text: "Use available ELD activity for hours, speeding, hard braking, crashes, and AISR safety scoring.",
  },
  {
    id: "carrier-insurance",
    title: "Carrier & Insurance Vetting",
    text: "Review carrier records, inspections, violations, and insurance tied to drivers and VINs.",
  },
  {
    id: "freight-risk",
    title: "Freight Risk Intelligence",
    text: "Watch active loads, route deviations, and repeated associations across freight incidents.",
  },
] as const

export const howItWorksCopy = {
  eyebrow: "How it works",
  title: "From Verification to Real-Time Monitoring.",
  description:
    "AISR connects companies, drivers, trucks, brokers, and insurance into one continuous safety flow.",
  finale: "A Safer, Smarter Trucking Ecosystem",
} as const

export const journeySteps = [
  {
    id: "aisr-company",
    title: "AISR Company",
    text: "Central platform that connects every stakeholder and checks data consistency in one place.",
    placement: "above",
  },
  {
    id: "driver",
    title: "Driver",
    text: "Verify identity, license, selfie match, device, and ELD identity for each driver profile.",
    placement: "above",
  },
  {
    id: "truck",
    title: "Truck",
    text: "Link VIN, truck details, assignment, and location signals to the correct driver and load.",
    placement: "below",
  },
  {
    id: "broker",
    title: "Broker",
    text: "Give brokers clear context on driver, carrier, route, and risk before freight assignment.",
    placement: "below",
  },
  {
    id: "insurance",
    title: "Insurance",
    text: "Validate coverage, policy status, and insurance links across company, driver, and VIN.",
    placement: "above",
  },
] as const

export const platformPoints = [
  "Live shipment tracking and alerts",
  "Driver and carrier risk scoring",
  "Insurance coverage monitoring",
  "Actionable safety and compliance insights",
] as const

export const trustedByCopy = "Trusted by Industry Leaders" as const

export const trustedBrands = [
  { id: "freightex", name: "FREIGHTEX", logo: "freightex" },
  { id: "loadwise", name: "LoadWise", logo: "loadwise" },
  { id: "carrierhub", name: "CarrierHub", logo: "carrierhub" },
  { id: "transmove", name: "TransMove", logo: "transmove" },
  { id: "quicklogistics", name: "QuickLogistics", logo: "quicklogistics" },
] as const
