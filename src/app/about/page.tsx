import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  Compass,
  HandHeart,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  UserRound,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactCards } from "@/components/ContactCards";
import { CareJourney } from "@/components/CareJourney";
import { PullQuote } from "@/components/PullQuote";
import { contactConfig } from "@/data/contact-config";

export const metadata: Metadata = {
  title: "About the Hospital",
  description:
    "About Deep Multispeciality Hospital in Gurdaspur — a patient-first approach to comprehensive healthcare in Punjab.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: contactConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${contactConfig.siteUrl}/about` },
    ],
  };

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Healthcare with a Human Touch"
        description="Deep Multispeciality Hospital is a healthcare destination in Gurdaspur, Punjab — built around clear communication, considered care and a professional environment designed for patient comfort."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Mission / Vision / Values */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            <MvvCard
              icon={<Target size={22} />}
              title="Our Mission"
              description="To deliver comprehensive, patient-first healthcare that combines clinical care with clarity and compassion."
            />
            <MvvCard
              icon={<Compass size={22} />}
              title="Our Vision"
              description="A healthcare experience where every patient in and around Gurdaspur feels heard, understood and well cared for."
            />
            <MvvCard
              icon={<Lightbulb size={22} />}
              title="Our Values"
              description="Empathy, professionalism, respect for time, honesty in conversation and a quiet, steady commitment to quality."
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-y section-cream border-y border-[color:var(--color-border-soft)]">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 prose-medical">
            <h2>Our purpose</h2>
            <p>
              We exist to make quality healthcare more accessible to the people of Gurdaspur and the surrounding region — with an experience that is calm, clear and considered from the first phone call to the follow-up visit.
            </p>
            <h2>Our approach</h2>
            <p>
              Good medical care starts with listening. Our teams focus on understanding each patient's concern, explaining the situation in plain language and recommending the next step — whether that's a simple lifestyle change, further tests or ongoing management.
            </p>
            <h2>What you can expect</h2>
            <ul>
              <li>A respectful, unhurried consultation</li>
              <li>Clear explanations of your condition and next steps</li>
              <li>Referrals or follow-up guidance when required</li>
              <li>A professional, welcoming environment</li>
            </ul>
            <p className="text-[color:var(--color-muted-text)] text-sm">
              As the hospital grows, additional specialties, services and team information will be added to this website.
            </p>
          </div>

          <aside className="lg:col-span-5 space-y-4">
            <ValueCard
              icon={<HeartHandshake size={20} />}
              title="Patient-first mindset"
              description="Every interaction is guided by empathy, professionalism and respect for your time."
            />
            <ValueCard
              icon={<Stethoscope size={20} />}
              title="Quality-focused care"
              description="Care that is thorough, evidence-informed and appropriate to your needs."
            />
            <ValueCard
              icon={<UserRound size={20} />}
              title="Accessible & local"
              description="Convenient location in Kotli Nangal, Gurdaspur — close to the community we serve."
            />
            <ValueCard
              icon={<Sparkles size={20} />}
              title="Continual improvement"
              description="A commitment to raising the standard of the healthcare experience — one visit at a time."
            />
          </aside>
        </div>
      </section>

      {/* Care journey */}
      <section className="section-y">
        <div className="container-page">
          <div className="max-w-3xl">
            <span className="eyebrow">How Care Works</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Every visit, four simple steps</h2>
            <p className="mt-4 text-[color:var(--color-muted-text)] text-lg">
              Whether you're visiting for the first time or returning for follow-up, we've designed the journey to feel clear and unhurried.
            </p>
          </div>
          <div className="mt-14">
            <CareJourney />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="section-y-sm">
        <div className="container-page max-w-6xl">
          <PullQuote />
        </div>
      </section>

      {/* Commitments */}
      <section className="section-y">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="eyebrow justify-center">
              <HandHeart size={12} />
              Our Commitments
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">What patients can expect from us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: HandHeart,
                title: "We listen carefully",
                description: "Every consultation begins with hearing your concern in your own words.",
              },
              {
                icon: ShieldCheck,
                title: "We protect your privacy",
                description: "Personal and clinical information is handled with strict discretion.",
              },
              {
                icon: Sparkles,
                title: "We keep spaces clean",
                description: "Consultation and patient areas are maintained to a high standard of hygiene.",
              },
              {
                icon: HeartHandshake,
                title: "We respect your time",
                description: "Appointment slots are planned so you're seen with minimal waiting.",
              },
              {
                icon: Stethoscope,
                title: "We explain clearly",
                description: "Medical explanations are shared in plain language, without unnecessary jargon.",
              },
              {
                icon: UserRound,
                title: "We stay reachable",
                description: "For follow-up or clarification, a phone call is always welcome.",
              },
            ].map((it) => (
              <div key={it.title} className="card p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-gold-50)] text-[color:var(--color-gold-700)]">
                  <it.icon size={20} />
                </span>
                <h3 className="mt-4 font-semibold text-lg">{it.title}</h3>
                <p className="mt-1.5 text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed">
                  {it.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y section-cream border-t border-[color:var(--color-border-soft)]">
        <div className="container-page text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Come and see us</h2>
          <p className="mt-3 max-w-2xl mx-auto text-[color:var(--color-muted-text)]">
            Whether you are booking your first consultation or returning for a follow-up, we are here to help.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <ContactCards />
          </div>
          <Link href="/appointment" className="btn btn-primary btn-lg mt-8">
            Book an Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Script
        id="ld-breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}

function MvvCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="card p-6 md:p-8 relative overflow-hidden">
      <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-[color:var(--color-gold-50)] opacity-70" aria-hidden="true" />
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-navy-900)] text-[color:var(--color-gold-500)]" aria-hidden="true">
        {icon}
      </span>
      <h3 className="relative mt-5 text-xl font-semibold text-[color:var(--color-navy-900)]">{title}</h3>
      <p className="relative mt-2 text-[15px] text-[color:var(--color-muted-text)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="card p-6 flex gap-4">
      <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]" aria-hidden="true">
        {icon}
      </span>
      <div>
        <h3 className="font-semibold text-[color:var(--color-navy-900)]">{title}</h3>
        <p className="mt-1 text-sm text-[color:var(--color-muted-text)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
