import { Breadcrumbs } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  action?: React.ReactNode;
}

export function PageHero({ eyebrow, title, description, breadcrumbs, action }: PageHeroProps) {
  return (
    <section className="hero-bg border-b border-[color:var(--color-border-soft)]">
      <div className="container-page pt-10 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-20">
        {breadcrumbs && (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="mt-3 text-[30px] sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12] sm:leading-[1.08] font-bold tracking-tight">
              {title}
            </h1>
            {description && (
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[color:var(--color-muted-text)] max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {action && <div className="lg:col-span-4 lg:flex lg:justify-end">{action}</div>}
        </div>
      </div>
    </section>
  );
}
