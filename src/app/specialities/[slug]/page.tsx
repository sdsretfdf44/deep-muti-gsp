import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, ChevronRight, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Icon } from "@/components/Icon";
import { specialities, getSpeciality } from "@/data/specialities";
import { doctorsBySpecialty } from "@/data/doctors";
import { hospital } from "@/data/hospital";
import { telHref } from "@/lib/utils";

export function generateStaticParams() {
  return specialities.map((s) => ({ slug: s.slug }));
}

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getSpeciality(slug);
  if (!s) return {};
  return {
    title: `${s.name} in Gurdaspur`,
    description: s.shortDescription,
    alternates: { canonical: `/specialities/${s.slug}` },
  };
}

const faqsByStr: Array<{ question: string; answer: string }> = [
  {
    question: "How do I book a consultation?",
    answer:
      "Call Deep Multispeciality Hospital at +91 84271 76580 or use the appointment request form on this website. The hospital team will confirm the details by phone.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "A valid photo ID, any prior medical records or reports relevant to your concern, a list of current medications, and details of any known allergies.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "A referral is not required for a general medicine consultation. If your condition requires specialist input, your consulting doctor will guide you.",
  },
];

export default async function SpecialityPage({ params }: Params) {
  const { slug } = await params;
  const speciality = getSpeciality(slug);
  if (!speciality) notFound();

  if (!speciality.verified) {
    return (
      <>
        <PageHero
          eyebrow="Speciality"
          title={speciality.name}
          description={speciality.shortDescription}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Specialities", href: "/specialities" },
            { label: speciality.name },
          ]}
        />
        <section className="section-y">
          <div className="container-page">
            <div className="card p-10 md:p-14 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Details Coming Soon</h2>
              <p className="text-[color:var(--color-muted-text)] mb-6">
                This specialty is being prepared for the website. Please call the hospital to enquire about availability.
              </p>
              <a href={telHref(hospital.phone.raw)} className="btn btn-primary">
                <Phone size={16} />
                Call {hospital.phone.display}
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  const doctors = doctorsBySpecialty(speciality.slug);

  return (
    <>
      <PageHero
        eyebrow="Speciality"
        title={speciality.name}
        description={speciality.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Specialities", href: "/specialities" },
          { label: speciality.name },
        ]}
        action={
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/appointment" className="btn btn-primary">
              <Calendar size={16} />
              Book Appointment
            </Link>
            <a href={telHref(hospital.phone.raw)} className="btn btn-outline">
              <Phone size={16} />
              Call
            </a>
          </div>
        }
      />

      <section className="section-y">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 prose-medical">
            <h2>What is {speciality.name}?</h2>
            <p>{speciality.longDescription || speciality.shortDescription}</p>

            {speciality.conditions && speciality.conditions.length > 0 && (
              <>
                <h2>Conditions commonly managed</h2>
                <ul>
                  {speciality.conditions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            )}

            {speciality.services && speciality.services.length > 0 && (
              <>
                <h2>What a consultation includes</h2>
                <ul>
                  {speciality.services.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            )}

            <h2>When to seek medical advice</h2>
            <p>
              If your symptoms are persistent, worsening or unclear, it is usually wise to consult a doctor rather than wait. For urgent or emergency concerns — such as severe chest pain, difficulty breathing or sudden weakness — please contact local emergency medical services or go directly to a hospital.
            </p>

            <h2>What to bring to your appointment</h2>
            <ul>
              <li>A valid photo ID</li>
              <li>Any prior medical records or investigations</li>
              <li>A list of current medications</li>
              <li>Notes on your symptoms and how they have changed over time</li>
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-[color:var(--color-sky-soft)]/60 border border-[color:var(--color-border-soft)] not-prose">
              <p className="text-sm text-[color:var(--color-slate-text)] leading-relaxed">
                <strong className="text-[color:var(--color-navy-900)]">Medical disclaimer:</strong>{" "}
                Information on this page is educational and general in nature. It is not a substitute for advice from a qualified medical professional. Please consult a doctor for any concern that is personal to you.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="card p-6 sticky top-24">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
                <Icon name={speciality.icon} size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Book a consultation</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted-text)]">
                Request an appointment for {speciality.name} at Deep Multispeciality Hospital, Gurdaspur.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/appointment" className="btn btn-primary justify-center">
                  <Calendar size={16} /> Book Appointment
                </Link>
                <a href={telHref(hospital.phone.raw)} className="btn btn-outline justify-center">
                  <Phone size={16} /> {hospital.phone.display}
                </a>
              </div>
              <div className="mt-6 border-t border-[color:var(--color-border-soft)] pt-4 flex items-center gap-2 text-xs text-[color:var(--color-muted-text)]">
                <ShieldCheck size={14} className="text-[color:var(--color-teal-800)]" />
                Patient-first care in Gurdaspur
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-[color:var(--color-warm-white)] border-y border-[color:var(--color-border-soft)]">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
            <div>
              <span className="eyebrow">Meet the team</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">Doctors</h2>
            </div>
            <Link href="/doctors" className="link-arrow">
              All doctors <ChevronRight size={16} />
            </Link>
          </div>
          {doctors.length === 0 ? (
            <div className="card p-8 md:p-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-sky-soft)] text-[color:var(--color-navy-900)] mb-3">
                <Stethoscope size={22} />
              </div>
              <p className="text-[color:var(--color-muted-text)]">
                Doctor profiles for {speciality.name} will be published soon. Please call the hospital to enquire about available consultations.
              </p>
              <a href={telHref(hospital.phone.raw)} className="btn btn-primary mt-5">
                <Phone size={16} /> Call {hospital.phone.display}
              </a>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="eyebrow">FAQs</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Common questions
            </h2>
            <p className="mt-4 text-[color:var(--color-muted-text)]">
              Answers to questions patients often ask before booking an appointment.
            </p>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion faqs={faqsByStr} />
            <div className="mt-6">
              <Link href="/appointment" className="btn btn-primary">
                Book an Appointment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
