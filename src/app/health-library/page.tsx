import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { healthArticles } from "@/data/health-articles";

export const metadata: Metadata = {
  title: "Health Library",
  description:
    "Health education articles from Deep Multispeciality Hospital, Gurdaspur — general medicine, preventive health and wellness.",
  alternates: { canonical: "/health-library" },
};

export default function HealthLibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Health Library"
        title="Understand Your Health, Better"
        description="Short, plain-language reading on common health topics — designed to help you make informed choices."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Health Library" }]}
      />

      <section className="section-y">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {healthArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/health-library/${a.slug}`}
                className="card card-hover p-6 md:p-7 flex flex-col gap-3 focus-ring"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[color:var(--color-muted-text)] font-semibold">
                  <span className="text-[color:var(--color-teal-800)]">{a.category}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} /> {a.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-[color:var(--color-navy-900)] leading-snug">
                  {a.title}
                </h2>
                <p className="text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <span className="link-arrow text-sm">
                  Read article
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
