import type { Metadata } from "next";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { hospital } from "@/data/hospital";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of Deep Multispeciality Hospital, Gurdaspur — coming soon.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  const images: { src: string; alt: string }[] = [];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the Hospital"
        description="A look at the hospital environment, patient areas and consultation spaces."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="section-y">
        <div className="container-page">
          {images.length === 0 ? (
            <div className="card p-10 md:p-16 text-center max-w-2xl mx-auto">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-sky-soft)] text-[color:var(--color-navy-900)] mb-4">
                <ImageIcon size={26} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">Hospital gallery coming soon</h2>
              <p className="text-[color:var(--color-muted-text)] mb-6">
                Real photographs of the hospital will be published here shortly. In the meantime, feel free to visit or call for any specific queries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={telHref(hospital.phone.raw)} className="btn btn-primary">
                  Call {hospital.phone.display}
                </a>
                <Link href="/appointment" className="btn btn-outline">
                  Request an Appointment
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {/* Real images would be rendered here. */}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
