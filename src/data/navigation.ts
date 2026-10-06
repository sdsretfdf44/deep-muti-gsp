export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Specialities", href: "/specialities" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Health Library", href: "/health-library" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  quickLinks: [
    { label: "About", href: "/about" },
    { label: "Specialities", href: "/specialities" },
    { label: "Doctors", href: "/doctors" },
    { label: "Services", href: "/services" },
    { label: "Facilities", href: "/facilities" },
    { label: "Appointment", href: "/appointment" },
    { label: "Contact", href: "/contact" },
  ],
  patientResources: [
    { label: "Patient Information", href: "/patient-information" },
    { label: "Health Library", href: "/health-library" },
    { label: "Gallery", href: "/gallery" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
};
