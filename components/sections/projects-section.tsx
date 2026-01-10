"use client";

import { motion } from "framer-motion";
import Section from "@/components/shared/section";
import { HeartHandshake, Stethoscope, GraduationCap } from "lucide-react";

const items = [
  {
    title: "Education Support",
    desc: "Learning materials, mentoring, and scholarships for children.",
    Icon: GraduationCap,
  },
  {
    title: "Health & Wellness",
    desc: "Medical camps, checkups, and awareness programs.",
    Icon: Stethoscope,
  },
  {
    title: "Community Development",
    desc: "Sustainable initiatives that strengthen local livelihoods.",
    Icon: HeartHandshake,
  },
];

export default function ProjectsSection() {
  return (
    <Section id="works" className="bg-muted/30">
      <div className="text-center">
        <p className="text-sm font-medium text-muted-foreground">Programs</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          What We Do
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          Our programs are designed to deliver measurable impact and long-term
          improvement across communities.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="group rounded-2xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-11 w-11 place-items-center rounded-xl border bg-muted/40">
                <it.Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {it.desc}
                </p>
              </div>
            </div>

            <div className="mt-5 h-px w-full bg-muted" />

            <p className="mt-4 text-xs text-muted-foreground">
              Learn more on the Projects page →
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
