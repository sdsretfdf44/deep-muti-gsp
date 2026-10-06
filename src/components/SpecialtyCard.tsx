import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Icon } from "./Icon";
import type { Speciality } from "@/data/specialities";

export function SpecialtyCard({ speciality }: { speciality: Speciality }) {
  const href = speciality.verified ? `/specialities/${speciality.slug}` : "/specialities";
  return (
    <Link
      href={href}
      className="card card-hover group flex flex-col gap-4 p-6 md:p-7 focus-ring relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[color:var(--color-gold-50)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <span
        aria-hidden="true"
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)] group-hover:bg-[color:var(--color-navy-900)] group-hover:text-[color:var(--color-gold-500)] transition-colors"
      >
        <Icon name={speciality.icon} size={22} />
      </span>
      <div className="flex-1 relative">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <h3 className="text-lg font-semibold text-[color:var(--color-navy-900)]">
            {speciality.name}
          </h3>
          {!speciality.verified && (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[color:var(--color-muted-text)] bg-[color:var(--color-sky-soft)] px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          )}
        </div>
        <p className="text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed">
          {speciality.shortDescription}
        </p>
      </div>
      <span className="link-arrow text-sm relative">
        {speciality.verified ? "Learn More" : "Enquire"}
        <ChevronRight size={16} />
      </span>
    </Link>
  );
}
