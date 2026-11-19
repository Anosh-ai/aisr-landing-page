import { audiences, platformCapabilities } from "@/constants/platform"

export const recordSources = [
  {
    title: "Driver identity",
    text: "License, date of birth, face verification, phone, and device.",
  },
  {
    title: "ELD activity",
    text: "Duty status, hours of service, speed, hard braking, mileage, and engine hours.",
  },
  {
    title: "Truck and VIN",
    text: "The assigned vehicle, its identification number, and who is operating it.",
  },
  {
    title: "Insurance",
    text: "Policy details, limits, dates, cancellation, and the drivers and VINs covered.",
  },
  {
    title: "Freight",
    text: "The load, the broker, the carrier, and the driver and truck assigned to it.",
  },
  {
    title: "Location",
    text: "The driver’s permitted phone location and the truck’s ELD location.",
  },
] as const

export const audienceDetails: Record<(typeof audiences)[number], string> = {
  Drivers:
    "A profile meant to follow the person, not only a name: verified license and face check, device, ELD identity, assigned truck, hours, safety history, and freight activity.",
  "Trucking companies":
    "A place to see which drivers are verified, which ELD drivers are not on AISR yet, and the trucks, hours, violations, and compliance records tied to the company.",
  "Freight brokers":
    "Carrier and driver context before and during a load, including hours, scores, inspections, violations, insurance, VIN information, and risk indicators.",
  "Insurance agents":
    "Policy and coverage information for drivers and VINs. AISR treats coverage as confirmed after the trucking company reviews and accepts it.",
}

export const capabilitySummaries: Record<
  (typeof platformCapabilities)[number],
  string
> = {
  "Driver Registration & Identity Verification":
    "Connect a license, date of birth, face check, phone, device, and ELD identity to one driver profile.",
  "ELD Integration":
    "Receive available duty status, hours, speed, braking, location, mileage, engine hours, and VIN data while keeping the original ELD records unchanged.",
  "Driver Safety Monitoring & Scoring":
    "Use speeding, hard braking, harsh turning, crashes, hours-of-service activity, and violations in a safety profile and score. The formula depends on approved business rules.",
  "Fraud & Anomaly Detection":
    "Surface duplicate profiles, a license used more than once, ELD switching, reused former-employee profiles, unplugged ELDs, unusual device changes, and location mismatches for review.",
  "Trucking Company Management":
    "Manage verified drivers, compliance dates, drug-test and crash records, VINs, assignments, mileage, engine hours, maintenance, and fuel records.",
  "Freight Broker & Carrier Vetting":
    "Review carrier, driver, vehicle, inspection, insurance, and completeness information, including possible shared relationships between carriers.",
  "Freight & Load Management":
    "Create loads, receive carrier responses, and assign a driver and truck. Pickup can combine location, a face check, and a one-time code.",
  "Insurance Management & Verification":
    "Let an agent submit cargo, liability, and related coverage, match it to drivers and VINs, and wait for carrier acceptance before treating it as confirmed.",
  "Location & Route Monitoring":
    "Compare a permitted phone location with the truck’s ELD location, and compare a live movement with the route expected for the load.",
  "Incident & Freight Risk Intelligence":
    "Connect cargo-theft and freight-incident records with the related driver, truck, carrier, load, and broker, including repeated associations.",
  "External Data Integrations":
    "Use approved ELD, SAFER/FMCSA, identity, mapping, and carrier-software sources where access, licensing, and the available fields are confirmed.",
  "Admin Dashboard & Analytics":
    "Give administrators a view of drivers, companies, brokers, agents, trucks, loads, pending verifications, and risk alerts.",
  "Notifications & Risk Alerts":
    "Notify the right role about verification, device changes, speeding, braking, crashes, hours of service, route deviations, and other approved events.",
}

export const reviewQuestions = [
  "Is this the driver who is supposed to be operating this truck?",
  "Does the license belong to that driver, and does the selfie match the license photograph?",
  "Is the driver connected to the correct ELD account?",
  "Does the driver’s phone location match the truck’s location?",
  "Is the required insurance associated with the driver and the VIN?",
  "Is the shipment following the expected route?",
  "Have this driver, truck, carrier, or broker appeared in earlier freight incidents?",
] as const

export const aboutContent = {
  eyebrow: "About Us",
  title: "A clearer picture of who and what is moving the freight.",
  lead: "AISR is being developed as a safety, identity-verification, and freight-security platform for the trucking industry. It is designed to connect drivers, trucking companies, freight brokers, insurance agents, and the transportation data around a shipment.",
  sections: [
    {
      title: "Why the records are hard to trust separately",
      paragraphs: [
        "A driver may be verified in one place, hours stored in an ELD, insurance kept by an agent, carrier information checked through another source, and freight tracked somewhere else. When those pieces stay apart, inconsistencies are difficult to see.",
        "AISR is intended to bring the records together and keep the relationships over time: who is driving, which truck and VIN they are operating, which company they work with, what freight they are carrying, whether insurance is in place, and which safety or risk events are associated with them.",
      ],
    },
    {
      title: "Identity that stays attached to the work",
      paragraphs: [
        "Verification is meant to establish that a driver is the person they claim to be, by connecting the license, date of birth, face check, phone, device, and ELD identity. That profile can then hold the assigned truck, driving and hours history, speeding and braking records, crashes, inspections, violations, a driver score, assigned freight, and device-change history.",
        "The same identity can be followed into a load. At pickup, the specified process combines driver location, face verification, and a one-time code. After pickup, driver and truck activity, ELD status, location, mileage, hours, route, speeding, and hard braking can be monitored. A movement away from the expected route can be identified for the broker.",
      ],
    },
    {
      title: "History, not only the latest event",
      paragraphs: [
        "Drivers change trucks, trucks change companies, devices change, and freight assignments change. AISR is intended to preserve those relationships so that, when something looks wrong, a user can look back and see which people, vehicles, companies, and shipments were connected at that time.",
        "That history also supports freight-incident intelligence. Cargo-theft and drug-related freight incidents can be linked to the relevant driver, truck, carrier, freight, and broker. Repeated associations can be shown as risk indicators. Where ELD and location data exist, historical movement connected with an incident can be reviewed.",
      ],
    },
    {
      title: "What a signal means",
      paragraphs: [
        "Duplicate drivers, ELD profile switching, a driver and truck in different places, a route deviation, and a suspicious carrier relationship are specified as risk and anomaly indicators. They are raised for investigation. They are not an automatic accusation of fraud.",
        "Original ELD information is preserved. Driver scores, speeding summaries, route analysis, location records, and fraud or anomaly indicators are kept as AISR’s own analysis, separate from the source records.",
      ],
    },
  ],
} as const
