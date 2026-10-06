import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[color:var(--color-muted-text)]">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1">
              {c.href && !isLast ? (
                <Link href={c.href} className="hover:text-[color:var(--color-navy-900)] transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-[color:var(--color-navy-900)] font-medium">
                  {c.label}
                </span>
              )}
              {!isLast && <ChevronRight size={14} className="text-[color:var(--color-border-soft)]" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
