"use client";

import Link from "next/link";
import { Calendar, MapPin, Phone } from "lucide-react";
import { hospital } from "@/data/hospital";
import { contactConfig } from "@/data/contact-config";
import { telHref } from "@/lib/utils";

export function MobileActionBar() {
  return (
    <div
      role="navigation"
      aria-label="Quick actions"
      className="lg-hide fixed inset-x-0 bottom-0 z-30 border-t border-[color:var(--color-border-soft)] bg-white/95 backdrop-blur-md pb-safe shadow-[0_-10px_28px_-18px_rgba(11,59,46,0.35)]"
    >
      <div className="grid grid-cols-3 text-center">
        <a
          href={telHref(hospital.phone.raw)}
          className="flex flex-col items-center gap-1 py-2.5 sm:py-3 text-[color:var(--color-navy-900)] hover:bg-[color:var(--color-sky-soft)] transition-colors"
          aria-label={`Call ${hospital.phone.display}`}
        >
          <Phone size={18} className="text-[color:var(--color-teal-800)]" />
          <span className="text-[11.5px] font-semibold">Call</span>
        </a>
        <Link
          href="/appointment"
          className="flex flex-col items-center gap-1 py-2.5 sm:py-3 bg-[color:var(--color-navy-900)] text-white hover:bg-[color:var(--color-navy-800)] transition-colors relative"
        >
          <Calendar size={18} className="text-[color:var(--color-gold-500)]" />
          <span className="text-[11.5px] font-semibold">Appointment</span>
        </Link>
        <a
          href={contactConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 sm:py-3 text-[color:var(--color-navy-900)] hover:bg-[color:var(--color-sky-soft)] transition-colors"
        >
          <MapPin size={18} className="text-[color:var(--color-teal-800)]" />
          <span className="text-[11.5px] font-semibold">Directions</span>
        </a>
      </div>
    </div>
  );
}
