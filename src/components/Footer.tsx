import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { hospital } from "@/data/hospital";
import { footerNav } from "@/data/navigation";
import { contactConfig } from "@/data/contact-config";
import { telHref } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-[color:var(--color-navy-900)] text-white/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[color:var(--color-gold-500)] blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-[color:var(--color-teal-500)] blur-3xl" />
      </div>

      <div className="container-page py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Link href="/" aria-label="Home" className="inline-flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 border border-white/15"
                >
                  <span className="absolute inline-block h-[18px] w-[3px] rounded-full bg-[color:var(--color-gold-500)]" />
                  <span className="absolute inline-block h-[3px] w-[18px] rounded-full bg-[color:var(--color-gold-500)]" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[16px] font-extrabold text-white tracking-tight">DEEP</span>
                  <span className="-mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Multispeciality Hospital
                  </span>
                </span>
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              Comprehensive healthcare with a patient-first approach, based in Gurdaspur, Punjab.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[color:var(--color-gold-500)]" />
                <span className="text-white/75">
                  {hospital.address.line1}
                  <br />
                  {hospital.address.line2}, {hospital.address.city}
                  <br />
                  {hospital.address.state} {hospital.address.postalCode}
                </span>
              </div>
              <a
                href={telHref(hospital.phone.raw)}
                className="flex items-center gap-3 text-white/85 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-[color:var(--color-gold-500)]" />
                <span>{hospital.phone.display}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Explore</h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-[color:var(--color-gold-500)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Patient Resources</h3>
            <ul className="flex flex-col gap-2.5">
              {footerNav.patientResources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-[color:var(--color-gold-500)] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/insurance" className="text-sm text-white/70 hover:text-[color:var(--color-gold-500)] transition-colors">
                  Insurance & Payments
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Get in Touch</h3>
            <p className="text-sm text-white/70 mb-4">
              Have a question or want to arrange a consultation? Reach us directly.
            </p>
            <div className="flex flex-col gap-2.5">
              <Link href="/appointment" className="btn btn-gold">
                Book an Appointment
              </Link>
              <a
                href={contactConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline !bg-transparent !text-white !border-white/25 hover:!border-white/60"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/55">
          <p>© {year} {hospital.name}. All rights reserved.</p>
          <p>Designed with care for better healthcare access.</p>
        </div>
      </div>
    </footer>
  );
}
