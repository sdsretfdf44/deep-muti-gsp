import type { MetadataRoute } from "next";
import { contactConfig } from "@/data/contact-config";

export default function robots(): MetadataRoute.Robots {
  const base = contactConfig.siteUrl.replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
