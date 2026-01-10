// app/sitemap.ts
import type { MetadataRoute } from "next";
import { works } from "@/lib/data/works";

const SITE_URL = "https://www.hyolmohelpinghands.org.np";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date() },
    { url: `${SITE_URL}/about`, lastModified: new Date() },
    { url: `${SITE_URL}/works`, lastModified: new Date() },
    { url: `${SITE_URL}/contact`, lastModified: new Date() },
    ...works.map((w) => ({
      url: `${SITE_URL}/works/${w.slug}`,
      lastModified: new Date(),
    })),
  ];
}
