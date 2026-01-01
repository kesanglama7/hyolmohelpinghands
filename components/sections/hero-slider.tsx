"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Button } from "../ui/button";

const AUTOPLAY_DELAY = 7000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Use a constant for autoplay to prevent re-render loops
  const autoplayConfig = useMemo(() => ({
    delay: AUTOPLAY_DELAY,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }), []);

  const slides = useMemo(() => [
    {
      image: "/images/hero/slide-1.png",
      title: "Humanism & Compassion",
      subtitle: "Humanity exists in everyone — it just needs an eye to see it and an open heart to feel it.",
      primaryCta: { label: "Get Involved", href: "/contact" },
      secondaryCta: { label: "What We Do", href: "/programs" },
    },
    {
      image: "/images/hero/slide-1.jpg",
      title: "Helping Hands in Action",
      subtitle: "From small support to meaningful change — we stand with communities when it matters most.",
      primaryCta: { label: "Support Us", href: "/contact" },
      secondaryCta: { label: "See Gallery", href: "/gallery" },
    },
    {
      image: "/images/hero/slide-3.jpg",
      title: "Together, We Can Do More",
      subtitle: "We believe in collaboration, transparency, and long-term impact — one step at a time.",
      primaryCta: { label: "Volunteer", href: "/contact" },
      secondaryCta: { label: "About Us", href: "/about" },
    },
  ], []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000} // Smooth transition speed
        loop={true}
        allowTouchMove={true}
        grabCursor={true}
        // Improve Swipe Sensitivity
        touchEventsTarget="container"
        touchRatio={1.5}
        threshold={5}
        pagination={{ clickable: true }}
        autoplay={autoplayConfig}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx} className="!h-full w-full overflow-hidden">
            <div className="relative h-full w-full">
              
              {/* Image Zoom Animation */}
              <motion.div
                key={`zoom-${activeIndex === idx}`} // Re-triggers animation when slide becomes active
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={activeIndex === idx ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 8, ease: "linear" }}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  priority={idx === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </motion.div>

              {/* Dark Overlay - pointer-events-none ensures it doesn't block swipes */}
              <div className="pointer-events-none absolute inset-0 bg-black/40 z-10" />

              {/* Text Content */}
              <div className="relative z-20 flex h-full items-center">
                <div className="mx-auto w-full max-w-6xl px-6">
                  <div className="max-w-2xl text-left">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeIndex === idx ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-4xl font-bold tracking-tight text-white sm:text-7xl"
                    >
                      {s.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeIndex === idx ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mt-6 text-sm text-white/90 sm:text-xl"
                    >
                      {s.subtitle}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeIndex === idx ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="mt-10 flex flex-wrap gap-4"
                    >
                        <Button variant="outline" size="custom">
                            <Link href={s.primaryCta.href} className="p-6">
                            {s.primaryCta.label}
                            </Link>
                        </Button>
                        <Button variant="glass" size="custom">
                            <Link href={s.secondaryCta.href} className="p-6">
                            {s.secondaryCta.label}
                            </Link>
                        </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global CSS to fix height and bullet visibility */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #fff !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          width: 30px !important;
          border-radius: 6px !important;
        }
        /* Crucial: Ensure the wrapper doesn't collapse */
        .swiper-wrapper {
          height: 100% !important;
        }
      `}</style>
    </section>
  );
}