import driverVerificationLogo from "@/assets/logos/driver-verification.svg"
import insuranceCarrierLogo from "@/assets/logos/insurance-carrier.svg"
import eldIntegrationLogo from "@/assets/logos/eld-integration.svg"
import realtimeMonitoringLogo from "@/assets/logos/realtime-monitoring.svg"

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

export const howItWorksSteps = [
  {
    id: "verify",
    title: "Verify",
    text: "Confirm the driver with license, face verification, device, and ELD identity.",
  },
  {
    id: "connect",
    title: "Connect",
    text: "Link the driver to the truck, VIN, company, insurance, and assigned freight.",
  },
  {
    id: "monitor",
    title: "Monitor",
    text: "Compare location, hours, route, speeding, and hard-braking activity during the load.",
  },
  {
    id: "protect",
    title: "Protect",
    text: "Surface mismatches and risk indicators for review before and during transit.",
  },
] as const

export const platformPoints = [
  "Live shipment and route monitoring for active freight",
  "Driver and carrier context for brokers before assignment",
  "Insurance matching across company, driver, and VIN",
  "Alerts for location mismatches and route deviations",
  "Historical relationships for investigation after an incident",
] as const

export const audienceStrip = [
  "Drivers",
  "Trucking companies",
  "Freight brokers",
  "Insurance agents",
] as const
