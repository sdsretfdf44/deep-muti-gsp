import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { hospital } from "@/data/hospital";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy practices for the Deep Multispeciality Hospital website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`This page explains how information submitted through the ${hospital.name} website is used.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="section-y">
        <div className="container-page max-w-3xl">
          <div className="prose-medical">
            <p>
              This privacy policy applies to the website of {hospital.name}. It explains, in plain language, what information the website may collect and how it is used.
            </p>

            <h2>Information you provide</h2>
            <p>
              When you submit an appointment request or contact form on this website, you may provide your name, mobile number, email address (optional) and details of the consultation you are requesting. This information is used solely to respond to your request.
            </p>

            <h2>Please do not submit sensitive medical information</h2>
            <p>
              This website should not be used to submit sensitive medical details, test results or clinical documents. Please discuss such details with a doctor in person.
            </p>

            <h2>Emergencies</h2>
            <p>
              This website is not intended for emergency use. If you are experiencing a medical emergency, please contact local emergency medical services or go directly to a hospital.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              The website may use basic analytics to understand how it is used and to improve the experience. Analytics does not collect personally identifying information beyond what is required to measure aggregate usage.
            </p>

            <h2>Third-party services</h2>
            <p>
              The website may link to third-party services such as Google Maps for directions. Your use of those services is governed by their respective privacy policies.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              This policy may be updated periodically. Please review it from time to time.
            </p>

            <h2>Contact</h2>
            <p>
              For any privacy-related questions about the website, please contact the hospital directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
