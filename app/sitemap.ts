import { works } from "@/lib/data/works";

export default function sitemap() {
  const baseUrl = "https://hyolmohelpinghands.com.np";

  return [
    { url: `${baseUrl}`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/works`, lastModified: new Date() },
    ...works.map((w) => ({
      url: `${baseUrl}/works/${w.slug}`,
      lastModified: new Date(),
    })),
  ];
}
