import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Only include a sitemap reference once the real deployment URL is set.
    ...(SITE_CONFIG.canonicalUrl
      ? { sitemap: `${SITE_CONFIG.canonicalUrl}/sitemap.xml` }
      : {}),
  };
}
