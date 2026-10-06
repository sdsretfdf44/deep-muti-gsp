import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { MobileActionBar } from "@/components/MobileActionBar";
import { hospital } from "@/data/hospital";
import { contactConfig } from "@/data/contact-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const siteUrl = contactConfig.siteUrl;

export const viewport: Viewport = {
  themeColor: "#0B3B2E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${hospital.name} | Healthcare in Gurdaspur, Punjab`,
    template: `%s | ${hospital.name}`,
  },
  description: `${hospital.name} in Gurdaspur, Punjab. Comprehensive healthcare with a patient-first approach — explore specialties, doctors, services, and appointment information.`,
  keywords: [
    "Deep Multispeciality Hospital",
    "hospital in Gurdaspur",
    "multispeciality hospital Gurdaspur",
    "general medicine Gurdaspur",
    "doctor consultation Gurdaspur",
    "Kotli Nangal hospital",
    "Punjab hospital",
  ],
  authors: [{ name: hospital.name }],
  applicationName: hospital.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: hospital.name,
    title: `${hospital.name} | Healthcare in Gurdaspur, Punjab`,
    description:
      "Comprehensive healthcare with a patient-first approach in Gurdaspur, Punjab.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: hospital.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${hospital.name} | Healthcare in Gurdaspur, Punjab`,
    description:
      "Comprehensive healthcare with a patient-first approach in Gurdaspur, Punjab.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: hospital.name,
    url: siteUrl,
    telephone: hospital.phone.raw,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${hospital.address.line1}, ${hospital.address.line2}`,
      addressLocality: hospital.address.city,
      addressRegion: hospital.address.state,
      postalCode: hospital.address.postalCode,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Gurdaspur, Punjab",
    },
    medicalSpecialty: ["General Medicine"],
    priceRange: "$$",
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: hospital.name,
  };

  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <AnnouncementBar />
        <Header />
        <main id="main" className="pb-[72px] lg:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
        <Script
          id="ld-hospital"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  );
}
