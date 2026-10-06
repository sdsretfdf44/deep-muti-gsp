import { Ear, EyeOff, HandHeart, Sparkles } from "lucide-react";

const items = [
  {
    icon: Ear,
    title: "We listen first",
    description: "Every consultation begins with hearing your concern in your own words.",
  },
  {
    icon: HandHeart,
    title: "We treat with respect",
    description: "Your dignity, time and comfort are protected from the moment you arrive.",
  },
  {
    icon: EyeOff,
    title: "We protect your privacy",
    description: "Personal and clinical information is handled with strict discretion.",
  },
  {
    icon: Sparkles,
    title: "We keep it clean",
    description: "Consultation and patient areas are maintained to a high standard of hygiene.",
  },
];

export function CommitmentBadges() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.08] transition-colors backdrop-blur"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-gold-500)]/15 text-[color:var(--color-gold-500)]" aria-hidden="true">
            <item.icon size={20} />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-[14.5px] text-white/70 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
