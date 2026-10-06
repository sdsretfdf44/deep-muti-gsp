import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ChevronRight,
  ClipboardList,
  Clock,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { SpecialtyCard } from "@/components/SpecialtyCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactCards } from "@/components/ContactCards";
import { StatsBar } from "@/components/StatsBar";
import { CareJourney } from "@/components/CareJourney";
import { CommitmentBadges } from "@/components/CommitmentBadges";
import { InsuranceInfo } from "@/components/InsuranceInfo";
import { PullQuote } from "@/components/PullQuote";
import { specialities } from "@/data/specialities";
import { verifiedDoctors } from "@/data/doctors";
import { generalFaqs } from "@/data/faqs";
import { healthArticles } from "@/data/health-articles";
import { hospital } from "@/data/hospital";
import { contactConfig } from "@/data/contact-config";
import { telHref } from "@/lib/utils";

export default function HomePage() {
  const doctors = verifiedDoctors();
  const featuredArticles = healthArticles.slice(0, 3);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaqs.slice(0, 4).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      {/* HERO */}
      <section className="hero-bg">
        <div className="container-page pt-10 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 fade-in">
              <span className="chip">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-teal-600)] animate-pulse" />
                Now accepting new patients
              </span>
              <h1 className="mt-4 sm:mt-5 text-[32px] sm:text-5xl lg:text-[58px] leading-[1.1] sm:leading-[1.05] font-bold tracking-tight">
                Compassionate Care.
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-[color:var(--color-teal-800)]">Trusted Healthcare.</span>
                  <span aria-hidden="true" className="absolute left-0 right-0 bottom-1 h-3 bg-[color:var(--color-gold-500)]/30 -z-0 rounded-sm" />
                </span>
              </h1>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[color:var(--color-muted-text)] max-w-xl leading-relaxed">
                Comprehensive healthcare with a patient-first approach, conveniently located in Gurdaspur. Care that starts with listening.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/appointment" className="btn btn-primary btn-lg justify-center">
                  <Calendar size={18} />
                  Book an Appointment
                </Link>
                <a href={telHref(hospital.phone.raw)} className="btn btn-outline btn-lg justify-center">
                  <Phone size={18} />
                  Call {hospital.phone.display}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[color:var(--color-muted-text)]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[color:var(--color-teal-800)]" />
                  <span>Patient-first care</span>
                </div>
                <div className="flex items-center gap-2">
                  <Stethoscope size={16} className="text-[color:var(--color-teal-800)]" />
                  <span>Qualified professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[color:var(--color-teal-800)]" />
                  <span>Jail Road, Gurdaspur</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="container-page -mt-14 md:-mt-16 relative z-10">
        <StatsBar />
      </section>

      {/* QUICK ACTIONS */}
      <section className="container-page mt-10 md:mt-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <QuickAction
            icon={<Calendar size={20} />}
            title="Book Appointment"
            description="Request a consultation"
            href="/appointment"
            accent
          />
          <QuickAction
            icon={<Phone size={20} />}
            title="Call Hospital"
            description={hospital.phone.display}
            href={telHref(hospital.phone.raw)}
            external
          />
          <QuickAction
            icon={<MapPin size={20} />}
            title="Get Directions"
            description="Open in Google Maps"
            href={contactConfig.googleMapsUrl}
            external
          />
          <QuickAction
            icon={<Stethoscope size={20} />}
            title="Our Specialities"
            description="Find the right care"
            href="/specialities"
          />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="section-y-sm">
        <div className="container-page">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            <TrustCard
              icon={<HeartHandshake size={22} />}
              title="Patient-Centred Care"
              description="Thoughtful care focused on individual patient needs."
            />
            <TrustCard
              icon={<UserRound size={22} />}
              title="Experienced Professionals"
              description="Care delivered by qualified healthcare professionals."
            />
            <TrustCard
              icon={<MapPin size={22} />}
              title="Conveniently Located"
              description="Jail Road, Kotli Nangal, Gurdaspur."
            />
            <TrustCard
              icon={<ClipboardList size={22} />}
              title="Easy Appointment Access"
              description="Contact the hospital directly to arrange a consultation."
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-y section-cream border-y border-[color:var(--color-border-soft)]">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-[color:var(--color-gold-50)] to-white grid-pattern" />
              <div className="absolute -inset-1 rounded-[32px] sm:rounded-[36px] border-2 border-dashed border-[color:var(--color-gold-500)]/30 -z-10 rotate-2" />
              <div className="absolute inset-4 sm:inset-6 rounded-[20px] sm:rounded-[24px] bg-white shadow-[var(--shadow-lift)] border border-[color:var(--color-border-soft)] p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-navy-900)] text-[color:var(--color-gold-500)]">
                    <Stethoscope size={20} />
                  </div>
                  <p className="mt-6 text-[16px] text-[color:var(--color-slate-text)] leading-relaxed">
                    Clear guidance. Professional care. A better healthcare experience for every patient who walks in.
                  </p>
                </div>
                <div className="text-sm text-[color:var(--color-muted-text)] border-t border-[color:var(--color-border-soft)] pt-4">
                  <span className="font-semibold text-[color:var(--color-navy-900)]">Located in Gurdaspur</span>
                  <br />
                  Jail Road, Kotli Nangal
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="About the Hospital"
              title="Healthcare with a Human Touch"
              description="Deep Multispeciality Hospital delivers comprehensive medical care in Gurdaspur — with a patient-first approach that focuses on clear communication, thoughtful assessment and respectful care."
            />
            <div className="mt-6 space-y-4 text-[color:var(--color-slate-text)] leading-relaxed">
              <p>
                Our approach is simple: listen carefully, explain clearly and provide care that respects your time and comfort. Every patient interaction is guided by professionalism, empathy and a commitment to quality.
              </p>
              <p>
                Whether you are visiting for a routine consultation or seeking help with an ongoing concern, we aim to make the experience straightforward and reassuring.
              </p>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Private, unhurried consultations",
                "Clear explanations in plain language",
                "Considered follow-up and referrals",
                "Respect for your time and dignity",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[15px]">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
                    <ArrowRight size={12} />
                  </span>
                  <span className="text-[color:var(--color-slate-text)]">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
              <Link href="/specialities" className="link-arrow">
                Explore our specialities
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CARE JOURNEY */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="How Care Works"
            title="A calm, four-step journey"
            description="From your first phone call to any follow-up, we've designed each step of the process to feel clear and considered."
            align="center"
          />
          <div className="mt-12 md:mt-16">
            <CareJourney />
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/appointment" className="btn btn-accent">
              <Calendar size={16} /> Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIALITIES */}
      <section id="specialities" className="section-y section-cream">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-8 md:mb-14">
            <SectionHeading
              eyebrow="Our Specialities"
              title="Care Across Everyday Health Needs"
              description="Explore the specialities available at Deep Multispeciality Hospital. Additional specialities are being added as they are confirmed."
            />
            <Link href="/specialities" className="link-arrow hidden md:inline-flex flex-shrink-0">
              View all specialities
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {specialities.slice(0, 6).map((s) => (
              <SpecialtyCard key={s.slug} speciality={s} />
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/specialities" className="btn btn-outline w-full justify-center">
              View all specialities
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="section-y-sm">
        <div className="container-page max-w-6xl">
          <PullQuote />
        </div>
      </section>

      {/* WHY CHOOSE US (dark) */}
      <section className="section-y section-dark">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
            <div className="lg:col-span-6">
              <span className="eyebrow !text-[color:var(--color-gold-500)]">Why Choose Us</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight">
                A calmer, clearer
                <br />
                healthcare experience.
              </h2>
              <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-md">
                We focus on what matters most — clear communication, considered care and a professional environment designed around patient comfort.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/appointment" className="btn btn-gold">
                  <Calendar size={16} />
                  Book an Appointment
                </Link>
                <a
                  href={contactConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline !bg-transparent !text-white !border-white/25 hover:!border-white/60"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 lg:pl-8 flex items-center">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                <WhyCard
                  title="Patient-First"
                  description="Every interaction guided by comfort, clarity and respect."
                />
                <WhyCard
                  title="Comprehensive"
                  description="A healthcare environment designed to support a range of needs."
                />
                <WhyCard
                  title="Professional"
                  description="A team-focused approach to delivering quality healthcare."
                />
                <WhyCard
                  title="Local"
                  description="On Jail Road in Kotli Nangal — close to the community we serve."
                />
              </div>
            </div>
          </div>

          <div className="pt-14 border-t border-white/10">
            <p className="eyebrow !text-[color:var(--color-gold-500)] mb-6">Our Commitments</p>
            <CommitmentBadges />
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Medical Team"
            title="Care Delivered by Qualified Professionals"
            description="Our medical team information is being updated. Please call the hospital to enquire about available consultations."
          />

          <div className="mt-10">
            {doctors.length === 0 ? (
              <div className="card p-10 md:p-14 text-center relative overflow-hidden">
                <div className="absolute inset-0 dotted-pattern opacity-40" aria-hidden="true" />
                <div className="relative">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-sky-soft)] text-[color:var(--color-navy-900)] mb-4">
                    <UserRound size={26} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    Doctor Profiles Coming Soon
                  </h3>
                  <p className="text-[color:var(--color-muted-text)] max-w-lg mx-auto mb-6">
                    We are in the process of publishing information about our medical team. In the meantime, please call the hospital to enquire about available consultations.
                  </p>
                  <a href={telHref(hospital.phone.raw)} className="btn btn-primary">
                    <Phone size={16} />
                    Call {hospital.phone.display}
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" />
            )}
          </div>
        </div>
      </section>

      {/* INSURANCE & PAYMENTS */}
      <section className="section-y section-cream border-y border-[color:var(--color-border-soft)]">
        <div className="container-page">
          <InsuranceInfo />
        </div>
      </section>

      {/* APPOINTMENT CTA */}
      <section className="section-y-sm">
        <div className="container-page">
          <div className="rounded-[28px] md:rounded-[36px] overflow-hidden relative bg-gradient-to-br from-[color:var(--color-navy-900)] via-[color:var(--color-navy-800)] to-[color:var(--color-teal-900)] text-white p-8 md:p-14 lg:p-16">
            <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
              <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[color:var(--color-gold-500)] blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[color:var(--color-teal-500)] blur-3xl" />
            </div>
            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="eyebrow !text-[color:var(--color-gold-500)]">Book a Consultation</span>
                <h2 className="mt-3 text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight">
                  Ready to speak with a doctor?
                </h2>
                <p className="mt-3 text-white/85 text-lg max-w-xl">
                  Request an appointment online — the hospital team will confirm your slot by phone.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
                <Link href="/appointment" className="btn btn-gold btn-lg justify-center">
                  <Calendar size={18} />
                  Book Appointment
                </Link>
                <a
                  href={telHref(hospital.phone.raw)}
                  className="btn btn-lg justify-center !bg-transparent !text-white !border-white/40 hover:!bg-white/10"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH LIBRARY */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-8 md:mb-10">
            <SectionHeading
              eyebrow="Health Library"
              title="Understand Your Health, Better"
              description="Educational reading to help you make informed decisions about your health."
            />
            <Link href="/health-library" className="link-arrow hidden md:inline-flex flex-shrink-0">
              View all articles
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/health-library/${a.slug}`}
                className="card card-hover p-6 md:p-7 flex flex-col gap-3 focus-ring group"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[color:var(--color-muted-text)] font-semibold">
                  <span className="text-[color:var(--color-teal-800)]">{a.category}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} /> {a.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[color:var(--color-navy-900)] leading-snug group-hover:text-[color:var(--color-teal-800)] transition-colors">
                  {a.title}
                </h3>
                <p className="text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <span className="link-arrow text-sm">
                  Read article
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/health-library" className="btn btn-outline w-full justify-center">
              View all articles
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section-y section-cream border-y border-[color:var(--color-border-soft)]">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQs"
              title="Answers to common questions"
              description="Can't find what you're looking for? Call the hospital directly and we'll be glad to help."
            />
            <a href={telHref(hospital.phone.raw)} className="btn btn-primary mt-6">
              <Phone size={16} />
              Call {hospital.phone.display}
            </a>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion faqs={generalFaqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      {/* LOCATION / CONTACT */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Visit Us"
            title="Get in Touch"
            description="Deep Multispeciality Hospital is located on Jail Road, Kotli Nangal, Gurdaspur."
            align="center"
          />
          <div className="mt-10">
            <ContactCards />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-y-sm pb-mobile-bar">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center">
              <Sparkles size={12} className="text-[color:var(--color-gold-500)]" />
              Your health matters
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Your Health Deserves Thoughtful Care</h2>
            <p className="mt-4 text-lg text-[color:var(--color-muted-text)]">
              Have a question or need to arrange a consultation? Contact Deep Multispeciality Hospital in Gurdaspur.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
              <Link href="/appointment" className="btn btn-primary btn-lg justify-center">
                <Calendar size={18} />
                Book an Appointment
              </Link>
              <a href={telHref(hospital.phone.raw)} className="btn btn-accent btn-lg justify-center">
                <Phone size={18} />
                Call {hospital.phone.display}
              </a>
              <a
                href={contactConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg justify-center"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Script
        id="ld-faq-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}

function QuickAction({
  icon, title, description, href, external, accent,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  external?: boolean;
  accent?: boolean;
}) {
  const cls = `card card-hover group flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 md:p-5 focus-ring ${
    accent ? "bg-[color:var(--color-navy-900)] text-white border-transparent" : ""
  }`;
  const iconBg = accent
    ? "bg-[color:var(--color-gold-500)]/15 text-[color:var(--color-gold-500)]"
    : "bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]";
  const titleCls = accent ? "text-white" : "text-[color:var(--color-navy-900)]";
  const descCls = accent ? "text-white/70" : "text-[color:var(--color-muted-text)]";

  const inner = (
    <>
      <span className={`inline-flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl ${iconBg}`} aria-hidden="true">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className={`font-semibold text-[14px] sm:text-[15px] ${titleCls} leading-tight`}>{title}</p>
        <p className={`mt-0.5 text-[12px] sm:text-[13px] ${descCls} leading-snug break-words`}>{description}</p>
      </div>
    </>
  );

  if (external) {
    return (
      <a href={href} className={cls} target={href.startsWith("tel:") ? undefined : "_blank"} rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <Link href={href} className={cls}>{inner}</Link>;
}

function TrustCard({
  icon, title, description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-2xl border border-[color:var(--color-border-soft)] bg-white/70 hover:bg-white hover:shadow-[var(--shadow-soft)] transition-all">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]" aria-hidden="true">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-[color:var(--color-navy-900)]">{title}</h3>
      <p className="mt-1.5 text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed">{description}</p>
    </div>
  );
}

function WhyCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.08] transition-colors">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-[14.5px] text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}
