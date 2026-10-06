export interface Speciality {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  icon: string;
  image?: string;
  services?: string[];
  conditions?: string[];
  doctorSlugs?: string[];
  verified: boolean;
}

// Only General Medicine is treated as verified. Everything else is a placeholder
// the hospital owner can enable once confirmed.
export const specialities: Speciality[] = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    shortDescription:
      "Comprehensive medical care for the diagnosis, treatment and ongoing management of a wide range of adult health conditions.",
    longDescription:
      "General Medicine covers the assessment, diagnosis and non-surgical management of adult health concerns. It is often the first point of contact for patients who are unwell, need a routine check-up, or are managing long-term conditions such as high blood pressure or diabetes.",
    icon: "Stethoscope",
    conditions: [
      "Fever and common infections",
      "Blood pressure concerns",
      "Diabetes management",
      "Thyroid concerns",
      "Cough, cold and respiratory concerns",
      "Digestive concerns",
      "General weakness and fatigue",
      "Routine health check-ups",
    ],
    services: [
      "Consultation and clinical assessment",
      "Referrals to relevant specialists when required",
      "Long-term condition follow-up",
      "Preventive health guidance",
    ],
    verified: true,
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    shortDescription:
      "Heart-focused care including consultation and evaluation of common cardiac concerns.",
    icon: "HeartPulse",
    verified: false,
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    shortDescription:
      "Assessment and management of bone, joint and musculoskeletal concerns.",
    icon: "Bone",
    verified: false,
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    shortDescription:
      "Healthcare for infants, children and adolescents in a child-friendly environment.",
    icon: "Baby",
    verified: false,
  },
  {
    slug: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    shortDescription:
      "Women's health, pregnancy care and gynaecological consultations.",
    icon: "HeartHandshake",
    verified: false,
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    shortDescription:
      "Surgical consultation and management for common surgical conditions.",
    icon: "Activity",
    verified: false,
  },
  {
    slug: "ent",
    name: "ENT",
    shortDescription:
      "Ear, nose and throat consultation and treatment.",
    icon: "Ear",
    verified: false,
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    shortDescription:
      "Skin, hair and nail care and treatment of common dermatological conditions.",
    icon: "Sparkles",
    verified: false,
  },
];

export function getSpeciality(slug: string): Speciality | undefined {
  return specialities.find((s) => s.slug === slug);
}

export function verifiedSpecialities(): Speciality[] {
  return specialities.filter((s) => s.verified);
}
