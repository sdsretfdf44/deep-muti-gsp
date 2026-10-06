"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/data/faqs";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[color:var(--color-border-soft)] rounded-3xl border border-[color:var(--color-border-soft)] bg-white overflow-hidden">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 md:px-7 md:py-6 text-left focus-ring"
            >
              <span className="text-[16px] md:text-[17px] font-semibold text-[color:var(--color-navy-900)]">
                {f.question}
              </span>
              <span
                aria-hidden="true"
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[color:var(--color-border-soft)] text-[color:var(--color-teal-800)]"
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-6 md:px-7 md:pb-7 -mt-1 text-[color:var(--color-slate-text)] leading-relaxed">
                {f.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
