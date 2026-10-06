import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Compass, Languages, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { hospital } from "@/data/hospital";
import { contactConfig } from "@/data/contact-config";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Deep Multispeciality Hospital in Gurdaspur — address, phone, appointment and directions.",
  alternates: { canonical: "/contact" },
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  "Deep Multispeciality Hospital, Jail Road, Kotli Nangal, Gurdaspur, Punjab 143521",
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="We're here to help — whether you'd like to book a consultation or simply have a question about the hospital."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <div className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
                <MapPin size={20} />
              </div>
              <h2 className="mt-4 text-xl font-semibold">Address</h2>
              <p className="mt-2 text-[color:var(--color-slate-text)] leading-relaxed">
                {hospital.name}
                <br />
                {hospital.address.line1}
                <br />
                {hospital.address.line2}, {hospital.address.city}
                <br />
                {hospital.address.state} {hospital.address.postalCode}, {hospital.address.country}
              </p>
              <a
                href={contactConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-4 w-full justify-center"
              >
                Get Directions
              </a>
            </div>

            <div className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
                <Phone size={20} />
              </div>
              <h2 className="mt-4 text-xl font-semibold">Phone</h2>
              <p className="mt-2 text-[color:var(--color-slate-text)]">
                Call the hospital directly for appointments and general enquiries.
              </p>
              <a href={telHref(hospital.phone.raw)} className="btn btn-primary mt-4 w-full justify-center">
                {hospital.phone.display}
              </a>
            </div>

            <div className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-gold-50)] text-[color:var(--color-gold-700)]">
                <Calendar size={20} />
              </div>
              <h2 className="mt-4 text-xl font-semibold">Appointments</h2>
              <p className="mt-2 text-[color:var(--color-slate-text)]">
                Request an appointment online and the hospital will confirm by phone.
              </p>
              <Link href="/appointment" className="btn btn-accent mt-4 w-full justify-center">
                Book an Appointment
              </Link>
            </div>

            <div className="card p-6 bg-[color:var(--color-warm-white)]">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[color:var(--color-navy-900)]">
                  <Languages size={18} />
                </span>
                <p className="font-semibold text-[color:var(--color-navy-900)]">Languages spoken</p>
              </div>
              <p className="mt-3 text-sm text-[color:var(--color-muted-text)]">
                Punjabi · Hindi · English
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-[color:var(--color-border-soft)] shadow-[var(--shadow-soft)] h-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px] relative">
              <iframe
                src={mapSrc}
                title={`Map showing ${hospital.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px] border-0"
                allowFullScreen
              />
            </div>

            <div className="mt-5 card p-6 flex items-start gap-4">
              <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-gold-50)] text-[color:var(--color-gold-700)]">
                <Compass size={20} />
              </span>
              <div>
                <h3 className="font-semibold text-[color:var(--color-navy-900)]">Landmarks & directions</h3>
                <p className="mt-1 text-sm text-[color:var(--color-muted-text)] leading-relaxed">
                  The hospital is located on Jail Road, Kotli Nangal, in Gurdaspur. For turn-by-turn directions from your location, use the Get Directions button — it opens the address in Google Maps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
