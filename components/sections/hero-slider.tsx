
// "use client";

// import { useMemo, useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import { Button } from "../ui/button";

// const AUTOPLAY_DELAY = 7000;

// export default function HeroSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   // Prevents hydration mismatch and ensures client-side only rendering for Swiper
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const slides = useMemo(() => [
//     {
//       image: "/images/hero/test.jpg",
//       title: "Humanism & Compassion",
//       subtitle: "Humanity exists in everyone — it just needs an eye to see it and an open heart to feel it.",
//       primaryCta: { label: "Get Involved", href: "/contact" },
//       secondaryCta: { label: "What We Do", href: "/programs" },
//     },
//     {
//       image: "/images/hero/slide-1.png",
//       title: "Humanism & Compassion",
//       subtitle: "Humanity exists in everyone — it just needs an eye to see it and an open heart to feel it.",
//       primaryCta: { label: "Get Involved", href: "/contact" },
//       secondaryCta: { label: "What We Do", href: "/programs" },
//     },
//     {
//       image: "/images/hero/slide-1.jpg",
//       title: "Helping Hands in Action",
//       subtitle: "From small support to meaningful change — we stand with communities when it matters most.",
//       primaryCta: { label: "Support Us", href: "/contact" },
//       secondaryCta: { label: "See Gallery", href: "/gallery" },
//     },
//     {
//       image: "/images/hero/slide-3.jpg",
//       title: "Together, We Can Do More",
//       subtitle: "We believe in collaboration, transparency, and long-term impact — one step at a time.",
//       primaryCta: { label: "Volunteer", href: "/contact" },
//       secondaryCta: { label: "About Us", href: "/about" },
//     },
//   ], []);

//   if (!mounted) return <div className="h-screen w-full bg-zinc-900" />;

//   return (
//     <section className="relative h-[100svh] w-full overflow-hidden bg-zinc-950">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={1500} // Slower transition for a more "premium" feel
//         loop={true}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: AUTOPLAY_DELAY,
//           disableOnInteraction: false,
//         }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="h-full w-full"
//       >
//         {slides.map((s, idx) => (
//           <SwiperSlide key={idx} className="relative h-full w-full overflow-hidden">
//             <div 
//               className={`absolute inset-0 z-0 transition-transform duration-[8000ms] ease-linear will-change-transform ${
//                 activeIndex === idx ? "scale-110" : "scale-100"
//               }`}
//             >
//               <Image
//                 src={s.image}
//                 alt={s.title}
//                 fill
//                 priority={idx === 0}
//                 className="object-cover"
//                 sizes="100vw"
//                 quality={90}
//               />
//             </div>

//             {/* Typography-optimized Gradient Overlay */}
//             <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

//             {/* Text Content */}
//             <div className="relative z-20 flex h-full items-center">
//               <div className="container mx-auto px-6 lg:px-52">
//                 <div className="max-w-4xl">
//                   <AnimatePresence mode="wait">
//                     {activeIndex === idx && (
//                       <motion.div
//                         key={idx}
//                         initial={{ opacity: 0, x: -30 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: 20 }}
//                         transition={{ duration: 0.8, ease: "easeOut" }}
//                       >
//                         {/* Heading: Responsive & Bold */}
//                         <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl md:text-4xl lg:text-5xl leading-[1.1]">
//                           {s.title}
//                         </h1>

//                         {/* Subtitle: High legibility */}
//                         <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-200 md:text-lg lg:text-xl">
//                           {s.subtitle}
//                         </p>

//                         {/* Buttons */}
//                         <div className="mt-10 flex flex-wrap gap-4">
//                           <Button variant="outline" size="custom" asChild className="h-14 px-8 border-2 transition-transform hover:scale-105">
//                             <Link href={s.primaryCta.href}>
//                               {s.primaryCta.label}
//                             </Link>
//                           </Button>
//                           <Button variant="glass" size="custom" asChild className="h-14 px-8 backdrop-blur-md transition-transform hover:scale-105">
//                             <Link href={s.secondaryCta.href}>
//                               {s.secondaryCta.label}
//                             </Link>
//                           </Button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx global>{`
//         /* Modernized Pagination Bullets */
//         .swiper-pagination-bullet {
//           background: #fff !important;
//           width: 10px !important;
//           height: 10px !important;
//           opacity: 0.4 !important;
//           transition: all 0.4s ease !important;
//         }
//         .swiper-pagination-bullet-active {
//           opacity: 1 !important;
//           width: 35px !important;
//           border-radius: 5px !important;
//         }
//         .swiper-wrapper {
//           height: 100% !important;
//         }
//       `}</style>
//     </section>
//   );
// }





















// "use client";

// import { useMemo, useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import { Button } from "../ui/button";

// const AUTOPLAY_DELAY = 7000;

// export default function HeroSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const slides = useMemo(
//     () => [
//       {
//         image: "/images/hero/test.jpg",
//         title: "Humanism & Compassion",
//         subtitle: "Humanity exists in everyone — it just needs an eye to see it and an open heart to feel it.",
//         primaryCta: { label: "Get Involved", href: "/contact" },
//         secondaryCta: { label: "What We Do", href: "/programs" },
//         textAlign: "left" as const,
//       },
//       {
//         image: "/images/hero/slide-1.png",
//         title: "Empowering Communities",
//         subtitle: "We work tirelessly to provide education, healthcare, and hope to those who need it most.",
//         primaryCta: { label: "Donate Now", href: "/donate" },
//         secondaryCta: { label: "Our Impact", href: "/impact" },
//         textAlign: "center" as const,
//       },
//       {
//         image: "/images/hero/slide-1.jpg",
//         title: "Helping Hands in Action",
//         subtitle: "From small support to meaningful change — we stand with communities when it matters most.",
//         primaryCta: { label: "Support Us", href: "/contact" },
//         secondaryCta: { label: "See Gallery", href: "/gallery" },
//         textAlign: "right" as const,
//       },
//       {
//         image: "/images/hero/slide-3.jpg",
//         title: "Together, We Can Do More",
//         subtitle: "We believe in collaboration, transparency, and long-term impact — one step at a time.",
//         primaryCta: { label: "Volunteer", href: "/contact" },
//         secondaryCta: { label: "About Us", href: "/about" },
//         textAlign: "left" as const,
//       },
//     ],
//     []
//   );

//   if (!mounted) return <div className="h-screen w-full bg-zinc-900" />;

//   return (
//     <section className="relative h-[100svh] w-full overflow-hidden bg-zinc-950">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={1500}
//         loop={true}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="h-full w-full"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx} className="relative h-full w-full overflow-hidden">
//             {/* Background Image with Ken Burns effect */}
//             <div
//               className={`absolute inset-0 z-0 transition-transform duration-[8000ms] ease-linear ${
//                 activeIndex === idx ? "scale-110" : "scale-100"
//               }`}
//             >
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 priority={idx === 0}
//                 className="object-cover"
//                 sizes="100vw"
//                 quality={95}
//               />
//             </div>

//             {/* Adaptive Gradient Overlay */}
//             <div
//               className={`absolute inset-0 z-10 pointer-events-none ${
//                 slide.textAlign === "left"
//                   ? "bg-gradient-to-r from-black/80 via-black/40 to-transparent"
//                   : slide.textAlign === "right"
//                   ? "bg-gradient-to-l from-black/80 via-black/40 to-transparent"
//                   : "bg-gradient-to-r from-black/70 via-black/20 to-black/70"
//               }`}
//             />

//             {/* Content */}
//             <div className="relative z-20 flex h-full items-center">
//               <div className="container mx-auto px-6 lg:px-8">
//                 <div
//                   className={`
//                     w-full max-w-5xl
//                     ${slide.textAlign === "left" ? "lg:ml-0 lg:mr-auto" : ""}
//                     ${slide.textAlign === "center" ? "lg:mx-auto" : ""}
//                     ${slide.textAlign === "right" ? "lg:ml-auto lg:mr-0" : ""}
//                   `}
//                 >
//                   <AnimatePresence mode="wait">
//                     {activeIndex === idx && (
//                       <motion.div
//                         key={idx}
//                         initial={{ opacity: 0, x: slide.textAlign === "right" ? 60 : -60 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: slide.textAlign === "right" ? -60 : 60 }}
//                         transition={{ duration: 0.9, ease: "easeOut" }}
//                         className={`
//                           ${slide.textAlign === "center" ? "text-center lg:text-center" : ""}
//                           ${slide.textAlign === "right" ? "text-right lg:text-right" : "text-left lg:text-left"}
//                         `}
//                       >
//                         {/* Title */}
//                         <h1
//                           className={`
//                             text-2xl font-black tracking-tight text-white 
//                             sm:text-3xl md:text-4xl lg:text-5xl 
//                             leading-tight
//                             ${slide.textAlign === "center" ? "text-center" : ""}
//                             ${slide.textAlign === "right" ? "ml-auto" : ""}
//                           `}
//                         >
//                           {slide.title}
//                         </h1>

//                         {/* Subtitle */}
//                         <p
//                           className={`
//                             mt-6 text-lg text-zinc-100 lg:text-xl 
//                             leading-relaxed
//                             ${slide.textAlign === "center" ? "text-center" : ""}
//                             ${slide.textAlign === "right" ? "ml-auto" : ""}
//                           `}
//                         >
//                           {slide.subtitle}
//                         </p>

//                         {/* Buttons - Now perfectly centered when needed */}
//                         <div
//                           className={`
//                             mt-12 flex flex-wrap gap-5
//                             ${slide.textAlign === "left" ? "justify-start" : ""}
//                             ${slide.textAlign === "center" ? "justify-center" : ""}
//                             ${slide.textAlign === "right" ? "justify-end" : ""}
//                           `}
//                         >
//                           <Button
//                             asChild
//                             variant="outline" size="custom" className="h-14 px-8 border-2 transition-transform hover:scale-105"
//                           >
//                             <Link href={slide.primaryCta.href}>
//                               {slide.primaryCta.label}
//                             </Link>
//                           </Button>

//                           <Button
//                             variant="glass" size="custom" asChild className="h-14 px-8 backdrop-blur-md transition-transform hover:scale-105"
//                           >
//                             <Link href={slide.secondaryCta.href}>
//                               {slide.secondaryCta.label}
//                             </Link>
//                           </Button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Pagination Styles */}
//       <style jsx global>{`
//         .swiper-pagination {
//           bottom: 40px !important;
//         }
//         .swiper-pagination-bullet {
//           background: rgba(255, 255, 255, 0.5) !important;
//           width: 10px !important;
//           height: 10px !important;
//           opacity: 1 !important;
//           transition: all 0.4s ease !important;
//         }
//         .swiper-pagination-bullet-active {
//           background: #fff !important;
//           width: 36px !important;
//           border-radius: 6px !important;
//         }
//       `}</style>
//     </section>
//   );
// }






// "use client";

// import { useMemo, useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination } from "swiper/modules";
// import { Button } from "../ui/button";

// const AUTOPLAY_DELAY = 7000;1

// // Expanded to include vertical positions
// type SlidePosition = 
//   | "top-left" | "top-center" | "top-right"
//   | "center-left" | "center-center" | "center-right"
//   | "bottom-left" | "bottom-center" | "bottom-right";

// interface Slide {
//   image: string;
//   title: string;
//   subtitle: string;
//   position: SlidePosition; // Replaced textAlign
//   primaryCta?: { label: string; href: string };
//   secondaryCta?: { label: string; href: string };
// }

// export default function HeroSlider() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const slides: Slide[] = useMemo(
//     () => [
//       {
//         image: "/images/hero/test.jpg",
//         title: "Humanism & Compassion",
//         subtitle: "Humanity exists in everyone — it just needs an eye to see it and an open heart to feel it.",
//         primaryCta: { label: "Get Involved", href: "/contact" },
//         secondaryCta: { label: "What We Do", href: "/programs" },
//         position: "center-left", // Example of top-left
//       },
//       {
//         image: "/images/hero/slide-1.png",
//         title: "Empowering Communities",
//         subtitle: "We work tirelessly to provide education, healthcare, and hope to those who need it most.",
//         position: "top-right",
//       },
//       {
//         image: "/images/hero/slide-1.jpg",
//         title: "Helping Hands in Action",
//         subtitle: "From small support to meaningful change — we stand with communities when it matters most.",
//         secondaryCta: { label: "See Gallery", href: "/gallery" },
//         position: "top-right", // Example of top-right
//       },
//       {
//         image: "/images/hero/slide-3.jpg",
//         title: "Together, We Can Do More",
//         subtitle: "We believe in collaboration, transparency, and long-term impact — one step at a time.",
//         position: "bottom-left",
//       },
//     ],
//     []
//   );

//   if (!mounted) return <div className="h-screen w-full bg-zinc-900" />;

//   const hasAnyCta = (slide: Slide) => slide.primaryCta || slide.secondaryCta;

//   return (
//     <section className="relative h-[100svh] w-full overflow-hidden bg-zinc-950">
//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination]}
//         effect="fade"
//         fadeEffect={{ crossFade: true }}
//         speed={1500}
//         loop={true}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="h-full w-full"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx} className="relative h-full w-full overflow-hidden">
//             {/* Background Image */}
//             <div
//               className={`absolute inset-0 z-0 transition-transform duration-[8000ms] ease-linear ${
//                 activeIndex === idx ? "scale-110" : "scale-100"
//               }`}
//             >
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 priority={idx === 0}
//                 className="object-cover"
//                 sizes="100vw"
//                 quality={95}
//               />
//             </div>

//             {/* Adaptive Gradient Overlay - Logic kept but mapped to positions */}
//             <div
//               className={`absolute inset-0 z-10 pointer-events-none ${
//                 slide.position.includes("left")
//                   ? "bg-gradient-to-r from-black/80 via-black/40 to-transparent"
//                   : slide.position.includes("right")
//                   ? "bg-gradient-to-l from-black/80 via-black/40 to-transparent"
//                   : "bg-gradient-to-r from-black/70 via-black/20 to-black/70"
//               }`}
//             />

//             {/* Content Container */}
//             <div className={`
//               relative z-20 flex h-full container mx-auto px-6 lg:px-8
//               ${slide.position.startsWith("top") ? "items-start pt-[20vh]" : ""} 
//               ${slide.position.startsWith("center") ? "items-center" : ""}
//               ${slide.position.startsWith("bottom") ? "items-end pb-32" : ""}
//               ${slide.position.includes("left") ? "justify-start" : ""}
//               ${slide.position.includes("center") ? "justify-center" : ""}
//               ${slide.position.includes("right") ? "justify-end" : ""}
//             `}>
//               <div
//                 className={`
//                   w-full max-w-5xl
//                   ${slide.position.includes("left") ? "text-left" : ""}
//                   ${slide.position.includes("center") ? "text-center" : ""}
//                   ${slide.position.includes("right") ? "text-right" : ""}
//                 `}
//               >
//                 <AnimatePresence mode="wait">
//                   {activeIndex === idx && (
//                     <motion.div
//                       key={idx}
//                       initial={{ opacity: 0, x: slide.position.includes("right") ? 60 : -60 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: slide.position.includes("right") ? -60 : 60 }}
//                       transition={{ duration: 0.9, ease: "easeOut" }}
//                     >
//                       {/* Title */}
//                       <h1
//                         className={`
//                           text-2xl font-black tracking-tight text-white 
//                           sm:text-3xl md:text-4xl lg:text-5xl
//                           leading-tight
//                           ${slide.position.includes("right") ? "ml-auto" : ""}
//                         `}
//                       >
//                         {slide.title}
//                       </h1>

//                       {/* Subtitle */}
//                       <p
//                         className={`
//                           mt-6 text-lg text-zinc-100 lg:text-xl 
//                           leading-relaxed 
//                           ${slide.position.includes("center") ? "mx-auto" : "max-w-2xl"}
//                           ${slide.position.includes("right") ? "ml-auto" : ""}
//                         `}
//                       >
//                         {slide.subtitle}
//                       </p>

//                       {/* Optional CTAs */}
//                       {hasAnyCta(slide) && (
//                         <div
//                           className={`
//                             mt-12 flex flex-wrap gap-5
//                             ${slide.position.includes("left") ? "justify-start" : ""}
//                             ${slide.position.includes("center") ? "justify-center" : ""}
//                             ${slide.position.includes("right") ? "justify-end" : ""}
//                           `}
//                         >
//                           {slide.primaryCta && (
//                             <Button
//                               variant="outline" size="custom" asChild className="h-14 px-8 border-2 transition-transform hover:scale-105"
//                             >
//                               <Link href={slide.primaryCta.href}>
//                                 {slide.primaryCta.label}
//                               </Link>
//                             </Button>
//                           )}

//                           {slide.secondaryCta && (
//                             <Button
//                               variant="glass" size="custom" asChild className="h-14 px-8 backdrop-blur-md transition-transform hover:scale-105"
//                             >
//                               <Link href={slide.secondaryCta.href}>
//                                 {slide.secondaryCta.label}
//                               </Link>
//                             </Button>
//                           )}
//                         </div>
//                       )}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Pagination */}
//       <style jsx global>{`
//         .swiper-pagination {
//           bottom: 40px !important;
//         }
//         .swiper-pagination-bullet {
//           background: rgba(255, 255, 255, 0.5) !important;
//           width: 10px !important;
//           height: 10px !important;
//           opacity: 1 !important;
//           transition: all 0.4s ease !important;
//         }
//         .swiper-pagination-bullet-active {
//           background: #fff !important;
//           width: 36px !important;
//           border-radius: 6px !important;
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Button } from "../ui/button";

const AUTOPLAY_DELAY = 7000;

// Expanded to include vertical positions
type SlidePosition = 
  | "top-left" | "top-center" | "top-right"
  | "center-left" | "center-center" | "center-right"
  | "bottom-left" | "bottom-center" | "bottom-right";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  position: SlidePosition; // Replaced textAlign
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides: Slide[] = useMemo(
    () => [
      {
        image: "/images/hero/test.jpg",
        title: "Humanism & Compassion",
        subtitle: "Humanity exists in everyone — it just needs an eye to see it and an open heart to feel it.",
        primaryCta: { label: "Get Involved", href: "/contact" },
        secondaryCta: { label: "What We Do", href: "/works" },
        position: "center-left", // Example of top-left
      },
      {
        image: "/images/hero/slide-1.png",
        title: "Empowering Communities",
        subtitle: "We work tirelessly to provide education, healthcare, and hope to those who need it most.",
        position: "bottom-right",
      },
      // {
      //   image: "/images/hero/slide-1.jpg",
      //   title: "Helping Hands in Action",
      //   subtitle: "From small support to meaningful change — we stand with communities when it matters most.",
      //   position: "top-right", // Example of top-right
      // },
      {
        image: "/images/hero/slide-3.jpg",
        title: "Together, We Can Do More",
        subtitle: "We believe in collaboration, transparency, and long-term impact — one step at a time.",
        position: "bottom-left",
      },
    ],
    []
  );

  if (!mounted) return <div className="h-screen w-full bg-zinc-900" />;

  const hasAnyCta = (slide: Slide) => slide.primaryCta || slide.secondaryCta;

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-zinc-950">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative h-full w-full overflow-hidden">
            {/* Background Image */}
            <div
              className={`absolute inset-0 z-0 transition-transform duration-[8000ms] ease-linear ${
                activeIndex === idx ? "scale-110" : "scale-100"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="100vw"
                quality={95}
              />
            </div>

            {/* Adaptive Gradient Overlay - Logic kept but mapped to positions */}
            <div
              className={`absolute inset-0 z-10 pointer-events-none ${
                slide.position.includes("left")
                  ? "bg-gradient-to-r from-black/80 via-black/40 to-transparent"
                  : slide.position.includes("right")
                  ? "bg-gradient-to-l from-black/80 via-black/40 to-transparent"
                  : "bg-gradient-to-r from-black/70 via-black/20 to-black/70"
              }`}
            />

            {/* Content Container */}
            <div className={`
              relative z-20 flex h-full container mx-auto max-w-6xl px-6 lg:px-8
              items-center justify-center
              ${slide.position.startsWith("top") ? "md:items-start md:pt-[20vh]" : ""} 
              ${slide.position.startsWith("center") ? "md:items-center" : ""}
              ${slide.position.startsWith("bottom") ? "md:items-end md:pb-32" : ""}
              ${slide.position.includes("left") ? "md:justify-start" : ""}
              ${slide.position.includes("center") ? "md:justify-center" : ""}
              ${slide.position.includes("right") ? "md:justify-end" : ""}
            `}>
              <div
                className={`
                  w-full max-w-4xl text-center
                  ${slide.position.includes("left") ? "md:text-left" : ""}
                  ${slide.position.includes("center") ? "md:text-center" : ""}
                  ${slide.position.includes("right") ? "md:text-right" : ""}
                `}
              >
                <AnimatePresence mode="wait">
                  {activeIndex === idx && (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: slide.position.includes("right") ? 60 : -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: slide.position.includes("right") ? -60 : 60 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                      {/* Title */}
                      <h1
                        className={`
                          text-2xl font-black tracking-tight text-white 
                          sm:text-3xl md:text-4xl lg:text-5xl
                          leading-tight
                          ${slide.position.includes("right") ? "md:ml-auto" : ""}
                        `}
                      >
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p
                        className={`
                          mt-6 text-lg text-zinc-100 lg:text-xl 
                          leading-relaxed mx-auto
                          ${slide.position.includes("center") ? "md:mx-auto" : "max-w-2xl"}
                          ${slide.position.includes("right") ? "md:ml-auto md:mr-0" : ""}
                          ${slide.position.includes("left") ? "md:ml-0 md:mr-auto" : ""}
                        `}
                      >
                        {slide.subtitle}
                      </p>

                      {/* Optional CTAs */}
                      {hasAnyCta(slide) && (
                        <div
                          className={`
                            mt-12 flex flex-wrap gap-5 justify-center
                            ${slide.position.includes("left") ? "md:justify-start" : ""}
                            ${slide.position.includes("center") ? "md:justify-center" : ""}
                            ${slide.position.includes("right") ? "md:justify-end" : ""}
                          `}
                        >
                          {slide.primaryCta && (
                            <Button
                              variant="outline" size="custom" asChild className="h-14 px-8 border-2 transition-transform hover:scale-105"
                            >
                              <Link href={slide.primaryCta.href}>
                                {slide.primaryCta.label}
                              </Link>
                            </Button>
                          )}

                          {slide.secondaryCta && (
                            <Button
                              variant="glass" size="custom" asChild className="h-14 px-8 backdrop-blur-md transition-transform hover:scale-105"
                            >
                              <Link href={slide.secondaryCta.href}>
                                {slide.secondaryCta.label}
                              </Link>
                            </Button>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 40px !important;
        }
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5) !important;
          width: 10px !important;
          height: 10px !important;
          opacity: 1 !important;
          transition: all 0.4s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #fff !important;
          width: 36px !important;
          border-radius: 6px !important;
        }
      `}</style>
    </section>
  );
}