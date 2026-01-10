import Link from "next/link";
import Image from "next/image";
import { works } from "@/lib/data/works";
// app/works/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work – Community Programs",
  description:
    "Explore the community programs of Hyolmo Helping Hands Nepal including education support, health camps, environmental care, disaster relief, and rural development.",
  alternates: { canonical: "/works" },
  openGraph: {
    title: "Our Work | Hyolmo Helping Hands Nepal",
    description:
      "Education, health camps, environmental initiatives, disaster relief, and rural development programs across Nepal.",
    url: "/works",
    images: [
      { url: "/images/og/works.jpg", width: 1200, height: 630, alt: "Our Work - Hyolmo Helping Hands Nepal" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Hyolmo Helping Hands Nepal",
    description:
      "Education, health camps, environmental initiatives, disaster relief, and rural development programs across Nepal.",
    images: ["/images/og/works.jpg"],
  },
};


export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 mt-[12vh]">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">All Projects</h1>
          <p className="mt-2 text-muted-foreground">
            Explore our programs and ongoing work.
          </p>
        </div>

        <Link
          href="/"
          className="hidden sm:inline-flex rounded-xl border px-4 py-2 text-sm font-medium hover:bg-muted transition"
        >
          Back home
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => (
          <Link
            key={w.slug}
            href={`/works/${w.slug}`}
            className="group overflow-hidden rounded-2xl border bg-white hover:shadow-sm transition"
          >
            <div className="relative aspect-[16/10] w-full bg-muted">
              {w.coverImage?.src ? (
                <Image
                  src={w.coverImage.src}
                  alt={w.coverImage.alt || w.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : null}
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold">{w.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {w.shortDesc}
              </p>
              <p className="mt-4 text-sm font-medium">Read more →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
