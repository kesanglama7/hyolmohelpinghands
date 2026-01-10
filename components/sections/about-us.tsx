"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid  gap-12 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-2xl font-medium text-muted-foreground">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Hyolmo Helping Hands
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground">
             Hyolmo Helping Hands is a community-driven non-profit committed to uplifting
            underprivileged families through education access, basic healthcare support,
            and long-term social empowerment — with transparency at the center of everything we do.
          </p>

          <div className="mt-6 grid gap-3">
            <div className="rounded-xl border bg-background p-4">
              <p className="text-sm font-medium text-foreground">What we focus on</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Education support, health assistance, emergency relief, and women & youth empowerment.
              </p>
            </div>

            <div className="rounded-xl border bg-background p-4">
              <p className="text-sm font-medium text-foreground">How we work</p>
              <p className="mt-1 text-sm text-muted-foreground">
                We collaborate with local communities, track outcomes, and share updates so donors can see impact.
              </p>
            </div>
            <Link href="/about">
              <Button variant="main" className="cursor-pointer ">
                Learn More
                <MoveRight />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.25 }}
          className="hidden lg:block relative overflow-hidden rounded-2xl bg-gradient-to-b from-muted/70 to-background"
        >
          <div className="aspect-[4/4] w-full">
            <Image
             src="/images/hero/about-us.png"
             alt="About Hyolmo Helping Hands"
             width={600}
             height={400}
             className="w-full h-full object-cover"
           />
          </div>
          <div className="absolute left-6 top-6 rounded-full border bg-background/70 px-4 py-2 text-xs text-gray-950 backdrop-blur">
            Trusted community support
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
