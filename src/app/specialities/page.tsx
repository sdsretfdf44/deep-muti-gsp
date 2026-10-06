import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { specialities } from "@/data/specialities";
import { hospital } from "@/data/hospital";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Medical Specialities",
  description:
    "Explore medical specialities at Deep Multispeciality Hospital, Gurdaspur — including General Medicine and additional specialties.",
  alternates: { canonical: "/specialities" },
};

export default function SpecialitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialities"
        title="Care Across Everyday Health Needs"
        description="A growing range of medical specialities at Deep Multispeciality Hospital, Gurdaspur. Additional specialities are being added as they are confirmed."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Specialities" }]}
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {specialities.map((s) => (
              <SpecialtyCard key={s.slug} speciality={s} />
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-warm-white)] p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Looking for something specific?</h2>
            <p className="mt-3 max-w-2xl mx-auto text-[color:var(--color-muted-text)]">
              Not sure which specialty is right for you? Call the hospital and the team will help guide you.
            </p>
            <a href={telHref(hospital.phone.raw)} className="btn btn-primary mt-6">
              <Phone size={16} />
              Call {hospital.phone.display}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
