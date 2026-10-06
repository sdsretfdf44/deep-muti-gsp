import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { hospital } from "@/data/hospital";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Patient Information",
  description:
    "Practical patient information for visiting Deep Multispeciality Hospital, Gurdaspur — appointments, registration, records and privacy.",
  alternates: { canonical: "/patient-information" },
};

const sections = [
  {
    title: "Before Your Appointment",
    body: [
      "Plan to arrive a little before your scheduled time to complete any registration formalities.",
      "Bring a valid photo ID, prior medical records that are relevant to your concern, and a list of current medications.",
      "If you are visiting on behalf of an elderly relative or a child, please carry any relevant medical history.",
    ],
  },
  {
    title: "What to Bring",
    body: [
      "A valid photo ID",
      "Any prior prescriptions, reports or investigations",
      "A list of current medications and known allergies",
      "Contact details of your regular doctor if applicable",
    ],
  },
  {
    title: "Registration",
    body: [
      "A member of the reception team will help you complete the registration process on your first visit.",
      "Please keep your contact details up to date, as the hospital may need to reach you for follow-up.",
    ],
  },
  {
    title: "Consultation",
    body: [
      "Consultations are conducted in a private setting.",
      "Please share your concerns openly — small details often help your doctor reach the right diagnosis.",
      "Feel free to ask questions if anything is unclear.",
    ],
  },
  {
    title: "Reports and Records",
    body: [
      "Any tests requested during your consultation will be explained by your doctor.",
      "Keep your reports safely — you may need them for future visits or referrals.",
    ],
  },
  {
    title: "Payment Information",
    body: [
      "Please speak with the hospital's front desk for the latest information on payment options and consultation charges.",
    ],
  },
  {
    title: "Patient Privacy",
    body: [
      "The hospital takes patient privacy seriously and handles medical information with appropriate care.",
      "This website should not be used to submit sensitive medical information — please share such details with your doctor in person.",
    ],
  },
  {
    title: "General Patient Rights",
    body: [
      "You have the right to be treated with respect and dignity.",
      "You have the right to receive clear, honest information about your condition and care.",
      "You have the right to ask questions and to seek a second opinion.",
    ],
  },
];

export default function PatientInformationPage() {
  return (
    <>
      <PageHero
        eyebrow="For Patients"
        title="Patient Information"
        description="Practical information to help you prepare for your visit — from what to bring to how registration works."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient Information" }]}
      />

      <section className="section-y">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8 space-y-10">
            {sections.map((s) => (
              <article key={s.title}>
                <h2 className="text-2xl md:text-[28px] font-bold mb-3">{s.title}</h2>
                <div className="space-y-3 text-[color:var(--color-slate-text)] leading-relaxed">
                  {s.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <div className="card p-6 sticky top-24">
              <h3 className="text-lg font-semibold">Need help planning your visit?</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted-text)]">
                The hospital team is happy to answer questions before you arrive.
              </p>
              <a href={telHref(hospital.phone.raw)} className="btn btn-primary mt-4 w-full justify-center">
                Call {hospital.phone.display}
              </a>
              <Link href="/appointment" className="btn btn-outline mt-3 w-full justify-center">
                Request an Appointment
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
