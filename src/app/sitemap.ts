import type { MetadataRoute } from "next";
import { contactConfig } from "@/data/contact-config";
import { specialities } from "@/data/specialities";
import { healthArticles } from "@/data/health-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = contactConfig.siteUrl.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/specialities",
    "/doctors",
    "/services",
    "/facilities",
    "/appointment",
    "/patient-information",
    "/gallery",
    "/health-library",
    "/contact",
    "/insurance",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const specialityRoutes = specialities.map((s) => ({
    url: `${base}/specialities/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articleRoutes = healthArticles.map((a) => ({
    url: `${base}/health-library/${a.slug}`,
    lastModified: new Date(a.lastReviewed),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...specialityRoutes, ...articleRoutes];
}
