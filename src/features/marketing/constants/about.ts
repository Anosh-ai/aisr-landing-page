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
