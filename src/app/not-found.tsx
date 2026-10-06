import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { hospital } from "@/data/hospital";
import { telHref } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="section-y hero-bg">
      <div className="container-page">
        <div className="text-center max-w-xl mx-auto">
          <p className="eyebrow justify-center">404</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Page not found</h1>
          <p className="mt-4 text-[color:var(--color-muted-text)]">
            The page you're looking for doesn't exist or has been moved. Head back home or reach out to the hospital directly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn btn-primary">
              Go to Homepage <ArrowRight size={16} />
            </Link>
            <a href={telHref(hospital.phone.raw)} className="btn btn-outline">
              <Phone size={16} /> Call {hospital.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
