import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Car, ClipboardList, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hospital Facilities",
  description:
    "Facilities at Deep Multispeciality Hospital, Gurdaspur — patient areas, consultation spaces, accessibility and more.",
  alternates: { canonical: "/facilities" },
};

const facilities = [
  {
    icon: Building2,
    title: "Hospital Environment",
    description:
      "A clean, professional environment designed with patient comfort and privacy in mind.",
  },
  {
    icon: HeartHandshake,
    title: "Patient Areas",
    description:
      "Comfortable seating and clear signage across patient waiting and reception areas.",
  },
  {
    icon: Stethoscope,
    title: "Consultation Rooms",
    description:
      "Private consultation rooms designed for calm, focused conversations with your doctor.",
  },
  {
    icon: ShieldCheck,
    title: "Accessibility",
    description:
      "Considered accessibility features to support patients with mobility needs.",
  },
  {
    icon: Car,
    title: "Parking",
    description:
      "On-site parking availability (subject to hospital confirmation).",
  },
  {
    icon: ClipboardList,
    title: "Support Services",
    description:
      "Reception and support services to help you navigate your visit smoothly.",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="A Calm, Professional Environment"
        description="Deep Multispeciality Hospital is designed around a straightforward principle: patients deserve a space that feels calm, clean and considered."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Facilities" }]}
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {facilities.map((f) => (
              <div key={f.title} className="card p-6 md:p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]" aria-hidden="true">
                  <f.icon size={20} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-warm-white)] p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Photographs coming soon</h2>
            <p className="mt-3 max-w-2xl mx-auto text-[color:var(--color-muted-text)]">
              Real photographs of the hospital environment will be published here once available.
            </p>
            <Link href="/appointment" className="btn btn-primary mt-6">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
