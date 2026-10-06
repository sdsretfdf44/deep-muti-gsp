import type { Metadata } from "next";
import Link from "next/link";
import { Phone, UserRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { verifiedDoctors } from "@/data/doctors";
import { hospital } from "@/data/hospital";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Doctors at Deep Multispeciality Hospital, Gurdaspur. Call the hospital to enquire about available consultations.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsPage() {
  const doctors = verifiedDoctors();
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet Our Doctors"
        description="Our medical team information is being updated. Please contact the hospital to enquire about available consultations."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors" }]}
      />

      <section className="section-y">
        <div className="container-page">
          {doctors.length === 0 ? (
            <div className="card p-10 md:p-16 text-center max-w-2xl mx-auto">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-sky-soft)] text-[color:var(--color-navy-900)] mb-4">
                <UserRound size={26} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Doctor Profiles Coming Soon
              </h2>
              <p className="text-[color:var(--color-muted-text)] mb-6">
                We are in the process of publishing information about our medical team. In the meantime, please call the hospital to enquire about available consultations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={telHref(hospital.phone.raw)} className="btn btn-primary">
                  <Phone size={16} /> Call {hospital.phone.display}
                </a>
                <Link href="/appointment" className="btn btn-outline">
                  Request an Appointment
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
