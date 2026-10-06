import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { hospital } from "@/data/hospital";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for the Deep Multispeciality Hospital website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description={`Terms that apply to the use of the ${hospital.name} website.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <div className="prose-medical">
            <h2>Use of the website</h2>
            <p>
              The content on this website is provided for general information about {hospital.name} and general health education. It is not a substitute for professional medical advice, diagnosis or treatment.
            </p>

            <h2>No medical advice</h2>
            <p>
              Nothing on this website should be interpreted as personalised medical advice. Always consult a qualified doctor for any personal medical concern.
            </p>

            <h2>Emergencies</h2>
            <p>
              This website is not intended for medical emergencies. In an emergency, contact local emergency medical services or go directly to a hospital.
            </p>

            <h2>Third-party links</h2>
            <p>
              The website may link to third-party resources. The hospital is not responsible for the content or practices of external websites.
            </p>

            <h2>Changes to the website</h2>
            <p>
              The content on this website may be updated from time to time without notice.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, please contact the hospital directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
