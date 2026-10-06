import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, ChevronLeft, Clock, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { getArticle, healthArticles } from "@/data/health-articles";
import { hospital } from "@/data/hospital";
import { contactConfig } from "@/data/contact-config";

export function generateStaticParams() {
  return healthArticles.map((a) => ({ slug: a.slug }));
}

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/health-library/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.excerpt,
      publishedTime: a.publishedDate,
      modifiedTime: a.lastReviewed,
    },
  };
}

function renderContent(content: string) {
  const blocks = content.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return <h2 key={i}>{trimmed.slice(3)}</h2>;
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((l) => l.replace(/^-\s?/, ""));
      return (
        <ul key={i}>
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p key={i}>{trimmed}</p>;
  });
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = healthArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedDate,
    dateModified: article.lastReviewed,
    author: { "@type": "Organization", name: article.author },
    publisher: {
      "@type": "Organization",
      name: hospital.name,
      url: contactConfig.siteUrl,
    },
    mainEntityOfPage: `${contactConfig.siteUrl}/health-library/${article.slug}`,
  };

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Health Library", href: "/health-library" },
          { label: article.title },
        ]}
      />

      <section className="section-y">
        <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <article className="lg:col-span-8">
            <div className="flex items-center gap-4 text-sm text-[color:var(--color-muted-text)] mb-6">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                Published: {new Date(article.publishedDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>

            <div className="prose-medical">{renderContent(article.content)}</div>

            <div className="mt-10 p-5 rounded-2xl bg-[color:var(--color-sky-soft)]/60 border border-[color:var(--color-border-soft)]">
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="mt-0.5 text-[color:var(--color-teal-800)] flex-shrink-0" />
                <p className="text-sm text-[color:var(--color-slate-text)] leading-relaxed">
                  <strong className="text-[color:var(--color-navy-900)]">Medical disclaimer:</strong>{" "}
                  This article is for general information only and is not a substitute for medical advice, diagnosis or treatment. Please consult a qualified doctor for concerns specific to you.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[color:var(--color-border-soft)] pt-6">
              <div className="text-sm text-[color:var(--color-muted-text)]">
                <span>Last reviewed: {new Date(article.lastReviewed).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
              </div>
              <Link href="/health-library" className="link-arrow text-sm">
                <ChevronLeft size={14} /> All articles
              </Link>
            </div>
          </article>

          <aside className="lg:col-span-4">
            <div className="card p-6 sticky top-24">
              <h3 className="text-lg font-semibold">Speak with a doctor</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted-text)]">
                If any of the symptoms in this article are relevant to you, consider booking a consultation.
              </p>
              <Link href="/appointment" className="btn btn-primary mt-4 w-full justify-center">
                Book an Appointment <ArrowRight size={16} />
              </Link>
            </div>

            {related.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm uppercase tracking-wider font-semibold text-[color:var(--color-muted-text)] mb-3">
                  Related reading
                </h3>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/health-library/${r.slug}`}
                      className="card card-hover p-4 flex flex-col gap-1 focus-ring"
                    >
                      <span className="text-xs uppercase tracking-wider text-[color:var(--color-teal-800)] font-semibold">
                        {r.category}
                      </span>
                      <span className="text-[15px] font-semibold text-[color:var(--color-navy-900)] leading-snug">
                        {r.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <Script
        id={`ld-article-${article.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
