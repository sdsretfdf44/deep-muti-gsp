import { MapPin, Phone } from "lucide-react";
import { hospital } from "@/data/hospital";
import { telHref } from "@/lib/utils";

export function AnnouncementBar() {
  return (
    <div className="hidden md:block bg-[color:var(--color-navy-900)] text-white text-[13px]">
      <div className="container-page flex items-center justify-between py-2">
        <div className="flex items-center gap-4 text-white/80">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-[color:var(--color-gold-500)]" />
            <span>
              <span className="font-semibold text-white">{hospital.name}</span>
              <span className="text-white/55"> · Gurdaspur, Punjab</span>
            </span>
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden lg:inline text-white/60">Comprehensive healthcare with a patient-first approach</span>
          <a
            href={telHref(hospital.phone.raw)}
            className="inline-flex items-center gap-2 font-medium text-white/90 hover:text-[color:var(--color-gold-500)] transition-colors focus-ring"
          >
            <Phone size={14} />
            <span>{hospital.phone.display}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
