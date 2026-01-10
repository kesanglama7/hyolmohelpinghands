import Image from "next/image";
import Link from "next/link";
import TeamSection from "@/components/sections/team-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Our Mission & Team",
  description:
    "Learn about Hyolmo Helping Hands Nepal, our mission, values, team, and volunteers working together to support education, health, and community welfare.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Hyolmo Helping Hands Nepal",
    description:
      "Our mission, values, team, and volunteers supporting education, health, and community welfare in Nepal.",
    url: "/about",
    images: [
      { url: "/images/og/about.jpg", width: 1200, height: 630, alt: "About Hyolmo Helping Hands Nepal" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hyolmo Helping Hands Nepal",
    description:
      "Our mission, values, team, and volunteers supporting education, health, and community welfare in Nepal.",
    images: ["/images/og/about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white mt-[12vh]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-900" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_30%,white,transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium text-white/80">About Us</p>

          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Hyolmo Helping Hands
          </h1>

          <p className="mt-5 max-w-2xl text-white/90 text-lg leading-relaxed">
            We are a community-driven nonprofit working to support education,
            health, dignity, and environmental care — with action-based programs
            and transparent impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/works"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-emerald-900 hover:bg-white/90 transition"
            >
              View our work →
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border bg-white p-7">
              <p className="text-sm font-medium text-muted-foreground">
                Our Mission
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Support people with dignity
              </h2>
              <p className="mt-3 text-muted-foreground leading-7">
                We focus on practical support in education, health camps, relief
                response, menstrual health, and care for vulnerable communities.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-7">
              <p className="text-sm font-medium text-muted-foreground">
                Our Vision
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Stronger communities, brighter futures
              </h2>
              <p className="mt-3 text-muted-foreground leading-7">
                A future where children learn, elders are respected, nature is
                protected, and communities are resilient in crisis.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-7">
              <p className="text-sm font-medium text-muted-foreground">
                Our Values
              </p>
              <h2 className="mt-2 text-xl font-semibold">
                Compassion + Transparency
              </h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Community-first action</li>
                <li>• Respect and dignity</li>
                <li>• Accountability and honesty</li>
                <li>• Sustainability and care for nature</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Our Story
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Built by the community, for the community
              </h2>

              <p className="mt-4 text-muted-foreground leading-7">
                Hyolmo Helping Hands started with a simple idea: if we can take
                action together, we can reduce suffering and create hope. Over
                time, we expanded our work to support education, rural health,
                elderly care, orphanage support, environmental cleanups, and
                emergency relief during disasters.
              </p>

              <p className="mt-4 text-muted-foreground leading-7">
                We partner with local communities, volunteers, and supporters to
                deliver meaningful help — focusing on real needs, measurable
                support, and long-term impact.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-muted">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src="/images/about/hero.jpg"
                  alt="Hyolmo Helping Hands community work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team + Volunteers */}
      <TeamSection />

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl border bg-gradient-to-br from-emerald-700 to-emerald-900 p-10 text-white">
            <h2 className="text-3xl font-semibold">Want to support our work?</h2>
            <p className="mt-3 max-w-2xl text-white/90 leading-7">
              Whether you want to volunteer, partner, or support a campaign, we’d
              love to connect. Every contribution creates real impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-emerald-900 hover:bg-white/90 transition"
              >
                Contact us
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Explore our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
