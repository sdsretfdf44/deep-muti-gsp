export interface Service {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: "clinical" | "support";
  verified: boolean;
}

export const services: Service[] = [
  {
    slug: "general-medicine-consultation",
    name: "General Medicine Consultation",
    description:
      "Assessment and management of adult health concerns, including routine check-ups and long-term condition follow-up.",
    icon: "Stethoscope",
    category: "clinical",
    verified: true,
  },
  {
    slug: "appointment-booking",
    name: "Appointment Booking",
    description:
      "Contact the hospital directly to arrange a consultation at a time that works for you.",
    icon: "CalendarCheck",
    category: "support",
    verified: true,
  },
  // Placeholders — enable only after hospital confirmation.
  {
    slug: "pharmacy",
    name: "In-house Pharmacy",
    description: "On-site pharmacy for prescribed medication (subject to hospital confirmation).",
    icon: "Pill",
    category: "support",
    verified: false,
  },
  {
    slug: "diagnostics",
    name: "Diagnostic Services",
    description: "Laboratory and diagnostic support (subject to hospital confirmation).",
    icon: "FlaskConical",
    category: "support",
    verified: false,
  },
  {
    slug: "parking",
    name: "Parking",
    description: "On-site parking availability (subject to hospital confirmation).",
    icon: "Car",
    category: "support",
    verified: false,
  },
];

export function verifiedServices(): Service[] {
  return services.filter((s) => s.verified);
}
