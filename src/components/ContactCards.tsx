import { Calendar, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { hospital } from "@/data/hospital";
import { contactConfig } from "@/data/contact-config";
import { telHref } from "@/lib/utils";

export function ContactCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <a
        href={telHref(hospital.phone.raw)}
        className="card card-hover p-6 flex flex-col gap-3"
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
          <Phone size={20} />
        </span>
        <div>
          <p className="text-sm text-[color:var(--color-muted-text)]">Call the hospital</p>
          <p className="text-lg font-semibold text-[color:var(--color-navy-900)]">
            {hospital.phone.display}
          </p>
        </div>
      </a>

      <a
        href={contactConfig.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="card card-hover p-6 flex flex-col gap-3"
      >
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
          <MapPin size={20} />
        </span>
        <div>
          <p className="text-sm text-[color:var(--color-muted-text)]">Visit us</p>
          <p className="text-[15px] font-semibold text-[color:var(--color-navy-900)] leading-snug">
            {hospital.address.line1}, {hospital.address.city}
          </p>
        </div>
      </a>

      <Link href="/appointment" className="card card-hover p-6 flex flex-col gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
          <Calendar size={20} />
        </span>
        <div>
          <p className="text-sm text-[color:var(--color-muted-text)]">Book a consultation</p>
          <p className="text-lg font-semibold text-[color:var(--color-navy-900)]">
            Request an Appointment
          </p>
        </div>
      </Link>
    </div>
  );
}
