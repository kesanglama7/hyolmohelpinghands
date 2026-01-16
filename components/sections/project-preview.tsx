import Link from "next/link";
import Image from "next/image";
import { works } from "@/lib/data/works";

export default function ProjectsPreviewSection() {
  const featured = works.filter((w) => w.featured).slice(0, 4);
  const items = featured.length ? featured : works.slice(0, 4);

  return (
    <section id="works" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-2xl font-medium text-muted-foreground">Works</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              What we’re working on
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              A few highlights — see the full list for everything we do.
            </p>
          </div>

          <Link
            href="/works"
            className="hidden sm:inline-flex rounded-xl border px-4 py-2 text-sm font-medium hover:bg-muted transition"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((w) => (
            <Link
              key={w.slug}
              href={`/works/${w.slug}`}
              className="group overflow-hidden rounded-2xl border bg-white hover:shadow-sm transition"
            >
              <div className="relative aspect-[4/3] w-full bg-muted">
                {w.coverImage?.src ? (
                  <Image
                    src={w.coverImage.src}
                    alt={w.coverImage.alt || w.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : null}
              </div>

              <div className="p-4">
                <h3 className="text-base font-semibold leading-snug">
                  {w.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {w.shortDesc}
                </p>
                <p className="mt-4 text-sm font-medium">Read more →</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            href="/works"
            className="inline-flex w-full items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-muted transition"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
