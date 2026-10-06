import { CalendarCheck, ClipboardList, MessageCircle, Stethoscope } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book",
    description: "Request an appointment online or by phone — our team confirms a slot that works for you.",
  },
  {
    icon: ClipboardList,
    title: "Prepare",
    description: "Bring a photo ID, prior reports and a list of current medications for a smooth consultation.",
  },
  {
    icon: Stethoscope,
    title: "Consult",
    description: "A private, unhurried consultation with clear explanations and considered recommendations.",
  },
  {
    icon: MessageCircle,
    title: "Follow-up",
    description: "Continued guidance for follow-up, referrals or long-term management when required.",
  },
];

export function CareJourney() {
  return (
    <div className="relative">
      <div className="hidden sm:block absolute top-8 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[color:var(--color-gold-500)]/40 to-transparent" aria-hidden="true" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 relative">
        {steps.map((s, i) => (
          <div key={s.title} className="text-center relative">
            <div className="relative inline-flex mx-auto">
              <span className="absolute -top-2 -right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--color-gold-500)] text-[color:var(--color-navy-900)] text-[11px] font-bold border-2 border-white shadow-sm">
                {i + 1}
              </span>
              <span
                aria-hidden="true"
                className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[color:var(--color-border-soft)] shadow-[var(--shadow-soft)] text-[color:var(--color-teal-800)]"
              >
                <s.icon size={26} />
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[color:var(--color-navy-900)]">
              {s.title}
            </h3>
            <p className="mt-2 text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed max-w-[26ch] mx-auto">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
