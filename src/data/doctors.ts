export interface Doctor {
  slug: string;
  name: string;
  qualifications: string;
  specialtySlug: string;
  experience?: string;
  languages?: string[];
  consultationTimings?: string;
  photo?: string;
  verified: boolean;
}

// Doctor profiles are intentionally empty until confirmed by the hospital.
// Add entries here with verified: true once the hospital provides them.
export const doctors: Doctor[] = [];

export function verifiedDoctors(): Doctor[] {
  return doctors.filter((d) => d.verified);
}

export function doctorsBySpecialty(specialtySlug: string): Doctor[] {
  return verifiedDoctors().filter((d) => d.specialtySlug === specialtySlug);
}
