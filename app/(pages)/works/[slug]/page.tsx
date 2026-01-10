import { notFound } from "next/navigation";
import Image from "next/image";
import { works } from "@/lib/data/works";
import BackButton from "@/components/shared/back-button";
import type { Metadata } from "next";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;

  const work = works.find((w) => w.slug === slug);

  // If no work found, let your page call notFound()
  if (!work) {
    return {
      title: "Work Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${work.title} | Hyolmo Helping Hands Nepal`;
  const description =
    work.shortDesc ||
    "Explore this community program by Hyolmo Helping Hands Nepal.";

  // Prefer cover image for OG, fallback to site OG
  const ogImage = work.coverImage?.src || "/images/og/works.jpg";

  return {
    title,
    description,
    alternates: { canonical: `/works/${work.slug}` },
    openGraph: {
      title,
      description,
      url: `/works/${work.slug}`,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: work.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}


export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export default async function ProjectDetailPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const { slug } = await props.params;

  const project = works.find((w) => w.slug === slug);
  if (!project) return notFound();

  const gallery = project.gallery ?? []

  return (
    <div className="min-h-screen bg-zinc-50 mt-[12vh]">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-zinc-900">
        {project.coverImage?.src ? (
          <>
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt || project.title}
              fill
              priority
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-900" />
        )}
        <div className="absolute flex items-start top-6 left-6 z-10 px-6 lg:px-8">

        <BackButton />
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 w-full">
            {project.featured && (
              <span className="inline-block px-4 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-full mb-4">
                Featured
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-zinc-200 max-w-3xl">
              {project.shortDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Detailed Description */}
        {project.detailedDesc && (
          <div className="mb-16">
            <p className="text-lg text-zinc-700 leading-relaxed">
              {project.detailedDesc}
            </p>
          </div>
        )}

        {/* Content Blocks */}
        <div className="space-y-16">
          {project.blocks.map((block, index) => (
            <div key={index}>
              {block.type === 'text' && (
                <div className="prose prose-lg max-w-none">
                  {block.title && (
                    <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                      {block.title}
                    </h2>
                  )}
                  <p className="text-zinc-700 leading-relaxed text-lg">
                    {block.content}
                  </p>
                </div>
              )}

              {block.type === 'list' && (
                <div>
                  {block.title && (
                    <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                      {block.title}
                    </h2>
                  )}
                  <ul className="space-y-4">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center mt-1">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-lg text-zinc-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* {block.type === 'stats' && (
                <div>
                  {block.title && (
                    <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                      {block.title}
                    </h2>
                  )}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {block.items.map((stat, i) => (
                      <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-zinc-200 hover:shadow-lg transition-shadow">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-zinc-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        {gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-8">Gallery</h2>
            <div
              className={`grid gap-6 ${
                gallery.length === 1
                  ? "grid-cols-1"
                  : gallery.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}