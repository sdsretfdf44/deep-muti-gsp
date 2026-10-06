import { Clock, Languages, MapPin, ShieldCheck } from "lucide-react";

// Truthful positioning items — no fabricated numbers.
const items = [
  {
    icon: MapPin,
    label: "Location",
    value: "Jail Road, Gurdaspur",
  },
  {
    icon: Clock,
    label: "Appointments",
    value: "By phone or online",
  },
  {
    icon: Languages,
    label: "Languages",
    value: "Punjabi · Hindi · English",
  },
  {
    icon: ShieldCheck,
    label: "Care approach",
    value: "Patient-first",
  },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-x md:divide-y-0 divide-[color:var(--color-border-soft)] rounded-2xl md:rounded-3xl bg-white border border-[color:var(--color-border-soft)] shadow-[var(--shadow-soft)] overflow-hidden">
      {items.map((it) => (
        <div key={it.label} className="p-4 sm:p-5 md:p-6 flex items-start gap-2.5 sm:gap-3">
          <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]" aria-hidden="true">
            <it.icon size={18} />
          </span>
          <div className="min-w-0">
            <p className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-muted-text)]">{it.label}</p>
            <p className="text-[13px] sm:text-[14.5px] font-semibold text-[color:var(--color-navy-900)] leading-tight mt-0.5 truncate">{it.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
