import type { ComponentType } from "react"
import {
  AdminPreview,
  AlertsPreview,
  BrokerPreview,
  CompanyPreview,
  ExternalPreview,
  FraudPreview,
  FreightPreview,
  IncidentPreview,
  InsurancePreview,
  LocationPreview,
  SafetyPreview,
} from "@/features/marketing/components/sections/capabilities/CapabilityTopicPreviews"
import { DriverIdentityPreview } from "@/features/marketing/components/sections/capabilities/DriverIdentityPreview"
import { EldIntegrationPreview } from "@/features/marketing/components/sections/capabilities/EldIntegrationPreview"
import type { capabilities } from "@/features/marketing/constants/landing"

type VisualKey = (typeof capabilities)[number]["visual"]

const previewByVisual: Record<VisualKey, ComponentType> = {
  identity: DriverIdentityPreview,
  eld: EldIntegrationPreview,
  safety: SafetyPreview,
  fraud: FraudPreview,
  company: CompanyPreview,
  broker: BrokerPreview,
  freight: FreightPreview,
  insurance: InsurancePreview,
  map: LocationPreview,
  incident: IncidentPreview,
  external: ExternalPreview,
  admin: AdminPreview,
  alerts: AlertsPreview,
}

export function CapabilityVisual({ visual }: { visual: VisualKey; title: string }) {
  const Preview = previewByVisual[visual]
  return <Preview />
}
