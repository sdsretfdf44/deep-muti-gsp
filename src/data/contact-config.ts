import { hospital } from "./hospital";

const env = (key: string, fallback = ""): string => {
  const val = process.env[key];
  return val && val.trim().length > 0 ? val : fallback;
};

export const contactConfig = {
  hospitalPhone: env("NEXT_PUBLIC_HOSPITAL_PHONE", hospital.phone.raw),
  hospitalPhoneDisplay: hospital.phone.display,
  appointmentEmail: env("NEXT_PUBLIC_APPOINTMENT_EMAIL", ""),
  whatsappNumber: env("NEXT_PUBLIC_WHATSAPP_NUMBER", ""),
  googleMapsUrl: env(
    "NEXT_PUBLIC_GOOGLE_MAPS_URL",
    "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(
        "Deep Multispeciality Hospital, Jail Road, Kotli Nangal, Gurdaspur, Punjab 143521",
      ),
  ),
  googleBusinessUrl: env("NEXT_PUBLIC_GOOGLE_BUSINESS_URL", ""),
  googleReviewsUrl: env("NEXT_PUBLIC_GOOGLE_REVIEWS_URL", ""),
  siteUrl: env("NEXT_PUBLIC_SITE_URL", "https://deepmultispecialityhospital.com"),
};

export type ContactConfig = typeof contactConfig;
