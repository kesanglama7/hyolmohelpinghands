"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { people, type TeamPerson } from "@/lib/data/teams";
import { Mail, Globe, Linkedin, Instagram, Facebook } from "lucide-react";

type SocialLabel = "facebook" | "instagram" | "linkedin" | "website" | "email";

function SocialIcon({ label }: { label: SocialLabel }) {
  const cls = "h-4 w-4";
  if (label === "facebook") return <Facebook className={cls} />;
  if (label === "instagram") return <Instagram className={cls} />;
  if (label === "linkedin") return <Linkedin className={cls} />;
  if (label === "website") return <Globe className={cls} />;
  return <Mail className={cls} />;
}

export default function TeamSection() {
  const [tab, setTab] = useState<"team" | "volunteer">("team");

  const team = useMemo(() => people.filter((p) => p.group === "team"), []);
  const volunteers = useMemo(
    () => people.filter((p) => p.group === "volunteer"),
    []
  );

  const list = tab === "team" ? team : volunteers;

  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium text-muted-foreground">People</p>
          <h2 className="text-3xl font-semibold tracking-tight">Our Team</h2>
          <p className="max-w-2xl text-muted-foreground">
            We’re a mix of dedicated team members and volunteers working together
            for long-term impact.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex items-center gap-2">
          <button
            onClick={() => setTab("team")}
            className={[
              "rounded-full px-4 py-2 text-sm font-medium border transition",
              tab === "team"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white hover:bg-muted",
            ].join(" ")}
          >
            Team
          </button>

          {/* <button
            onClick={() => setTab("volunteer")}
            className={[
              "rounded-full px-4 py-2 text-sm font-medium border transition",
              tab === "volunteer"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white hover:bg-muted",
            ].join(" ")}
          >
            Volunteers
          </button> */}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border bg-white overflow-hidden hover:shadow-sm transition"
            >
              {/* Avatar */}
              <div className="relative aspect-[16/10] bg-muted">
                {p.avatar?.src ? (
                  <Image
                    src={p.avatar.src}
                    alt={p.avatar.alt || p.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                    No photo
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.role}</p>
                    {p.location ? (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {p.location}
                      </p>
                    ) : null}
                  </div>

                  {/* Socials */}
                  {p.socials?.length ? (
                    <div className="flex gap-2">
                      {p.socials.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-muted transition"
                          aria-label={s.label}
                        >
                          <SocialIcon label={s.label} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                {p.bio ? (
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {p.bio}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
