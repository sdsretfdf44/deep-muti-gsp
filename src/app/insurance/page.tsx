import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CreditCard, FileCheck, HelpCircle, Phone, Receipt, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { hospital } from "@/data/hospital";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insurance & Payments",
  description:
    "Information about payment options and insurance queries at Deep Multispeciality Hospital, Gurdaspur.",
  alternates: { canonical: "/insurance" },
};

const items = [
  {
    icon: CreditCard,
    title: "Payment options",
    description:
      "The hospital accepts common payment methods. Please confirm the latest accepted options at the front desk before your visit.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance queries",
    description:
      "Call the hospital ahead of your appointment to discuss insurance queries and any paperwork you may need to bring.",
  },
  {
    icon: FileCheck,
    title: "Cashless facility",
    description:
      "Availability of cashless facilities is subject to hospital confirmation. Please check directly with the hospital before assuming coverage.",
  },
  {
    icon: Receipt,
    title: "Receipts & records",
    description:
      "Keep your receipts, prescriptions and reports safely — they may be needed for follow-up visits, insurance claims or referrals.",
  },
];

export default function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance & Payments"
        title="Clear conversations about billing"
        description="Straightforward information to help you plan your visit. When in doubt, calling ahead is the quickest way to get accurate answers."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insurance & Payments" }]}
        action={
          <a href={telHref(hospital.phone.raw)} className="btn btn-accent">
            <Phone size={16} />
            {hospital.phone.display}
          </a>
        }
      />

      <section className="section-y">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {items.map((it) => (
                <div key={it.title} className="card p-6 md:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]" aria-hidden="true">
                    <it.icon size={20} />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-[color:var(--color-navy-900)]">
                    {it.title}
                  </h2>
                  <p className="mt-1.5 text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed">
                    {it.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 prose-medical">
              <h2>Before your visit</h2>
              <p>
                To help your visit go smoothly, please consider the following:
              </p>
              <ul>
                <li>Call the hospital in advance to confirm payment options, insurance coverage and any documents you need to bring.</li>
                <li>Carry a valid photo ID and any insurance-related documents.</li>
                <li>If your policy requires pre-authorisation, please initiate this well in advance.</li>
              </ul>

              <h2>Please note</h2>
              <p className="text-[color:var(--color-muted-text)]">
                Payment methods, insurance networks and cashless arrangements may change over time. The information on this page is a general guide — the front desk always has the most current, accurate details. Please confirm before your appointment.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card p-6 sticky top-24">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-gold-50)] text-[color:var(--color-gold-700)]">
                <HelpCircle size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">Have a specific question?</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted-text)]">
                The front desk is the fastest, most accurate source for information about your specific situation.
              </p>
              <a href={telHref(hospital.phone.raw)} className="btn btn-primary mt-4 w-full justify-center">
                Call {hospital.phone.display}
              </a>
              <Link href="/appointment" className="btn btn-outline mt-3 w-full justify-center">
                <Calendar size={16} /> Book Appointment
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
