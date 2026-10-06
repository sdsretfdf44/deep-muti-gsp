export const hospital = {
  name: "Deep Multispeciality Hospital",
  shortName: "Deep Multispeciality",
  tagline: "Compassionate Care. Trusted Healthcare.",
  description:
    "Deep Multispeciality Hospital in Gurdaspur, Punjab. Comprehensive healthcare with a patient-first approach.",
  address: {
    line1: "Jail Rd, Shaheed Bhagat Singh Nagar",
    line2: "Kotli Nangal",
    city: "Gurdaspur",
    state: "Punjab",
    postalCode: "143521",
    country: "India",
    full: "Jail Rd, Shaheed Bhagat Singh Nagar, Kotli Nangal, Gurdaspur, Punjab 143521, India",
  },
  phone: {
    display: "+91 84271 76580",
    raw: "+918427176580",
  },
  // Additional fields the owner can populate later.
  hours: null as null | { weekday: string; hours: string }[],
  emergency: null as null | { available: boolean; note?: string },
  accreditations: [] as string[],
} as const;

export type Hospital = typeof hospital;
