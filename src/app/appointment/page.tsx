import type { Metadata } from "next";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AppointmentForm } from "@/components/AppointmentForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { appointmentFaqs } from "@/data/faqs";
import { hospital } from "@/data/hospital";
import { contactConfig } from "@/data/contact-config";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment at Deep Multispeciality Hospital, Gurdaspur. The hospital team will confirm your appointment by phone.",
  alternates: { canonical: "/appointment" },
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Request an Appointment"
        description="Fill in the form and the hospital team will get in touch by phone to confirm your appointment. Prefer to speak with someone? Call us directly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Appointment" }]}
        action={
          <a href={telHref(hospital.phone.raw)} className="btn btn-accent">
            <Phone size={16} />
            {hospital.phone.display}
          </a>
        }
      />

      <section className="section-y-sm">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8">
            <AppointmentForm />
          </div>
          <aside className="lg:col-span-4 flex flex-col gap-5">
            <div className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
                <Phone size={20} />
              </div>
              <h2 className="mt-4 text-lg font-semibold">Prefer to call?</h2>
              <p className="mt-2 text-sm text-[color:var(--color-muted-text)]">
                Speak with our team directly — often the quickest way to confirm a time that suits you.
              </p>
              <a href={telHref(hospital.phone.raw)} className="btn btn-primary mt-4 w-full justify-center">
                Call {hospital.phone.display}
              </a>
            </div>

            <div className="card p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
                <MapPin size={20} />
              </div>
              <h2 className="mt-4 text-lg font-semibold">Visit the hospital</h2>
              <p className="mt-2 text-sm text-[color:var(--color-muted-text)]">
                {hospital.address.line1}, {hospital.address.line2}, {hospital.address.city}, {hospital.address.state} {hospital.address.postalCode}.
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

            <div className="card p-6 bg-[color:var(--color-sky-soft)]/50">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[color:var(--color-navy-900)]">
                <Calendar size={20} />
              </div>
              <h3 className="mt-4 font-semibold">What happens next?</h3>
              <ol className="mt-3 space-y-2 text-sm text-[color:var(--color-slate-text)] list-decimal list-inside">
                <li>You submit your request.</li>
                <li>A member of the hospital team calls to confirm.</li>
                <li>You visit at the confirmed time.</li>
              </ol>
              <div className="mt-4 flex items-center gap-2 text-xs text-[color:var(--color-muted-text)]">
                <Clock size={14} /> Response times vary — a phone call is usually the fastest option.
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">Appointment FAQs</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Good to know</h2>
            <p className="mt-4 text-[color:var(--color-muted-text)]">
              A few things patients commonly ask before their visit.
            </p>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion faqs={appointmentFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}
