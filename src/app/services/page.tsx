import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services, verifiedServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services at Deep Multispeciality Hospital, Gurdaspur — including consultations and patient support.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const verified = verifiedServices();
  const upcoming = services.filter((s) => !s.verified);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services That Support Your Care"
        description="A growing set of services designed to make your visit straightforward and comfortable."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {verified.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          {upcoming.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Additional services (coming soon)</h2>
              <p className="text-[color:var(--color-muted-text)] mb-6 max-w-2xl">
                The following services will be published once confirmed. Please call the hospital for the latest information.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {upcoming.map((s) => (
                  <div key={s.slug} className="opacity-80">
                    <ServiceCard service={s} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 text-center">
            <Link href="/appointment" className="btn btn-primary btn-lg">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
