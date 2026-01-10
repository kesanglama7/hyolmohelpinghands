import type { MetadataRoute } from "next";

const SITE_URL = "https://www.hyolmohelpinghands.org.np";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
