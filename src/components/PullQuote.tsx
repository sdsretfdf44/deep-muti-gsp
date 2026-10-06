import { Quote } from "lucide-react";

export function PullQuote() {
  return (
    <figure className="relative rounded-2xl sm:rounded-[32px] bg-[color:var(--color-warm-white)] border border-[color:var(--color-border-soft)] px-5 pt-12 pb-8 sm:px-6 sm:pt-10 sm:pb-10 md:px-14 md:py-16 shadow-[var(--shadow-soft)]">
      <span aria-hidden="true" className="absolute -top-5 left-4 sm:left-6 md:left-10 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[color:var(--color-gold-500)] text-[color:var(--color-navy-900)] shadow-[var(--shadow-lift)]">
        <Quote size={20} className="sm:hidden" />
        <Quote size={22} className="hidden sm:block" />
      </span>
      <blockquote className="text-[19px] sm:text-2xl md:text-[30px] leading-[1.4] sm:leading-[1.35] font-medium text-[color:var(--color-navy-900)] max-w-4xl">
        &ldquo;Good healthcare is not just about a diagnosis — it&rsquo;s about clarity, kindness and care that meets you where you are. That&rsquo;s the standard we hold ourselves to, every day.&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="divider-gold" />
        <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-teal-800)]">Our commitment</span>
      </figcaption>
    </figure>
  );
}
