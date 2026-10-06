import { Activity, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

// Composed hero visual — polished, framework-based composition that works
// even before real hospital photography is supplied.
export function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] w-full max-w-[560px] mx-auto">
      <div className="absolute inset-0 grid-pattern rounded-[36px]" aria-hidden="true" />

      <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full bg-[color:var(--color-gold-100)] blur-2xl opacity-70" aria-hidden="true" />

      <div className="absolute inset-x-6 inset-y-4 md:inset-x-8 md:inset-y-6 rounded-[28px] overflow-hidden bg-gradient-to-br from-[color:var(--color-navy-900)] via-[color:var(--color-navy-800)] to-[color:var(--color-teal-800)] shadow-[var(--shadow-lift)]">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay" aria-hidden="true">
          <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-[color:var(--color-gold-500)] blur-3xl" />
          <div className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full bg-[color:var(--color-teal-500)] blur-3xl" />
        </div>

        <div className="relative h-full w-full flex flex-col justify-end p-6 md:p-8 text-white">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
              <HeartPulse size={18} className="text-[color:var(--color-gold-500)]" />
            </span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-white/75">
              Patient-First Care
            </span>
          </div>
          <p className="text-lg md:text-xl font-medium leading-snug max-w-[22ch]">
            Care that starts with listening. Clear guidance. Professional care.
          </p>
          <div className="mt-6 flex items-center gap-4 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-teal-500)] pulse-ring" />
              </span>
              <span>Available today for consultation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating card — left */}
      <div className="absolute left-2 sm:-left-2 md:-left-6 top-8 sm:top-10 md:top-14 bg-white shadow-[var(--shadow-lift)] rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 border border-[color:var(--color-border-soft)] max-w-[calc(100%-16px)]">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-teal-50)] text-[color:var(--color-teal-800)]">
          <Stethoscope size={16} />
        </span>
        <div>
          <p className="text-[11px] uppercase tracking-wider text-[color:var(--color-muted-text)] font-semibold">Specialty</p>
          <p className="text-sm font-semibold text-[color:var(--color-navy-900)]">General Medicine</p>
        </div>
      </div>

      {/* Floating card — right */}
      <div className="absolute right-2 sm:-right-2 md:-right-4 bottom-10 sm:bottom-14 md:bottom-20 bg-white shadow-[var(--shadow-lift)] rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 border border-[color:var(--color-border-soft)] max-w-[calc(100%-16px)]">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-gold-50)] text-[color:var(--color-gold-700)]">
          <ShieldCheck size={16} />
        </span>
        <div>
          <p className="text-[11px] uppercase tracking-wider text-[color:var(--color-muted-text)] font-semibold">Approach</p>
          <p className="text-sm font-semibold text-[color:var(--color-navy-900)]">Patient-Centred</p>
        </div>
      </div>

      {/* Top-right pill */}
      <div className="hidden md:flex absolute right-8 top-8 bg-white/95 backdrop-blur shadow-[var(--shadow-lift)] rounded-2xl px-3 py-2 items-center gap-2 border border-[color:var(--color-border-soft)]">
        <Activity size={14} className="text-[color:var(--color-teal-800)]" />
        <span className="text-[12px] font-semibold text-[color:var(--color-navy-900)]">Gurdaspur, Punjab</span>
      </div>
    </div>
  );
}
