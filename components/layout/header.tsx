// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useMemo, useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// type NavLink = { label: string; href: string };

// export default function Header() {
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const navLinks: NavLink[] = useMemo(
//     () => [
//       { label: "Home", href: "/" },
//       { label: "About", href: "/about" },
//       { label: "What We Do", href: "/programs" },
//       { label: "Gallery", href: "/gallery" },
//       { label: "Contact", href: "/contact" },
//     ],
//     []
//   );

//   useEffect(() => {
//     if (!isHome) {
//       setScrolled(true); // non-home always white
//       return;
//     }

//     const onScroll = () => setScrolled(window.scrollY > 80);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [isHome]);

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [pathname]);

//   const isActive = (href: string) => {
//     if (href === "/") return pathname === "/";
//     return pathname.startsWith(href);
//   };

//   const headerClass = isHome
//     ? scrolled
//       ? "bg-white/85 backdrop-blur text-zinc-900"
//       : "bg-transparent text-white"
//     : "bg-white text-zinc-900";

//   const linkBase =
//     "rounded-xl px-4 py-2 text-sm font-medium transition-colors";

//   const desktopLinkClass = (active: boolean) => {
//     if (!isHome || scrolled) {
//       return [
//         linkBase,
//         active
//           ? "bg-zinc-900 text-white"
//           : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
//       ].join(" ");
//     }

//     return [
//       linkBase,
//       active
//         ? "bg-white/15 text-white"
//         : "text-white/90 hover:bg-white/10 hover:text-white",
//     ].join(" ");
//   };

//   const brandChipClass =
//     !isHome || scrolled ? "bg-zinc-900 text-white" : "bg-white/15 text-white";

//   const donateBtnClass =
//     !isHome || scrolled
//       ? "bg-zinc-900 text-white hover:bg-zinc-800"
//       : "bg-white text-zinc-900 hover:bg-zinc-100";

//   const mobileBtnClass =
//     !isHome || scrolled
//       ? "text-zinc-900 hover:bg-zinc-100"
//       : "text-white hover:bg-white/10";

//   return (
//     <>
//       <header
//         className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerClass}`}
//       >
//         <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
//           <Link href="/" className="flex items-center gap-3">
//           <div className="grid h-10 w-10 place-items-center rounded-2xl overflow-hidden text-sm font-bold">
//             <Image 
//               src="/images/hhh.png" 
//               alt="Hyolmo Helping Hands Nepal Logo" 
//               width={40} 
//               height={40} 
//               className="w-full h-full object-cover" 
//             />
//           </div>
//             <div className="leading-tight">
//               <p className="text-sm font-semibold tracking-tight">
//                 Hyolmo Helping Hands Nepal
//               </p>
//               <p
//                 className={
//                   !isHome || scrolled ? "text-xs text-zinc-500" : "text-xs text-white/80"
//                 }
//               >
//                 Humanity & Compassion
//               </p>
//             </div>
//           </Link>

//           <ul className="hidden items-center gap-1 md:flex">
//             {navLinks.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className={desktopLinkClass(isActive(item.href))}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-3">
//             <Link
//               href="/donate"
//               className={`hidden rounded-xl px-4 py-2 text-sm font-medium transition md:inline-flex ${donateBtnClass}`}
//             >
//               Donate
//             </Link>

//             <button
//               type="button"
//               aria-label="Open menu"
//               onClick={() => setMobileOpen(true)}
//               className={`md:hidden rounded-xl p-2 transition ${mobileBtnClass}`}
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* MOBILE DRAWER */}
//       <div
//         className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
//           mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={() => setMobileOpen(false)}
//       >
//         <div
//           className={`fixed left-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
//             mobileOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="flex items-center justify-between border-b px-4 py-4">
//             <Link href="/" className="text-base font-semibold">
//               Hyolmo Helping Hands Nepal
//             </Link>
//             <button
//               type="button"
//               aria-label="Close menu"
//               onClick={() => setMobileOpen(false)}
//               className="rounded-xl p-2 hover:bg-zinc-100"
//             >
//               <X className="h-6 w-6" />
//             </button>
//           </div>

//           <nav className="space-y-2 px-4 py-4">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={[
//                   "block rounded-xl px-3 py-2 text-sm font-medium transition",
//                   isActive(item.href)
//                     ? "bg-zinc-900 text-white"
//                     : "text-zinc-800 hover:bg-zinc-100",
//                 ].join(" ")}
//                 onClick={() => setMobileOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             ))}

//             <div className="pt-4 space-y-3">
//               <Link
//                 href="/donate"
//                 className="block w-full rounded-xl bg-zinc-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-zinc-800"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 Donate
//               </Link>

//               <a
//                 href="mailto:hyolmohelpinghands@gmail.com"
//                 className="block w-full rounded-xl border border-zinc-200 px-4 py-3 text-center text-sm font-medium text-zinc-900 hover:bg-zinc-50"
//               >
//                 Email Us
//               </a>
//             </div>
//           </nav>

//           <div className="mt-auto border-t px-4 py-4 text-xs text-zinc-500">
//             <p>Tinchuli, Kathmandu, Nepal</p>
//             <p className="mt-1">
//               <a
//                 className="underline underline-offset-4"
//                 href="mailto:hyolmohelpinghands@gmail.com"
//               >
//                 hyolmohelpinghands@gmail.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }












// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useMemo, useState } from "react";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";
// import { Button } from "../ui/button";

// type NavLink = {
//   label: string;
//   href: string;
//   homeId?: string;
// };

// export default function Header() {
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState<string>("home");

//   const navLinks: NavLink[] = useMemo(
//     () => [
//       { label: "Home", href: "/", homeId: "home" },
//       { label: "About", href: "/about", homeId: "about" },
//       { label: "Works", href: "/works", homeId: "works" },
//       { label: "Contact", href: "/contact", homeId: "contact" },
//     ],
//     []
//   );

//   /* ---------- header bg scroll ---------- */
//   useEffect(() => {
//     if (!isHome) {
//       setScrolled(true);
//       return;
//     }

//     const onScroll = () => setScrolled(window.scrollY > 80);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [isHome]);

//   /* ---------- close mobile on route ---------- */
//   useEffect(() => {
//     setMobileOpen(false);
//   }, [pathname]);

//   /* ---------- scroll spy ---------- */
//   useEffect(() => {
//     if (!isHome) return;

//     const ids = ["about", "works", "contact"];
//     const els = ids
//       .map((id) => document.getElementById(id))
//       .filter(Boolean) as HTMLElement[];

//     if (!els.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries
//           .filter((e) => e.isIntersecting)
//           .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

//         const top = visible[0]?.target?.id;
//         if (top) setActiveSection(top);
//       },
//       {
//         rootMargin: "-35% 0px -55% 0px",
//         threshold: 0.08,
//       }
//     );

//     els.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, [isHome]);

//   /* ---------- force Home active near top ---------- */
//   useEffect(() => {
//     if (!isHome) return;

//     const onScroll = () => {
//       if (window.scrollY < window.innerHeight * 0.35) {
//         setActiveSection("home");
//       }
//     };

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [isHome]);

//   /* ---------- active logic ---------- */
//   const isActive = (item: NavLink) => {
//     if (isHome && item.homeId) return activeSection === item.homeId;
//     if (item.href === "/") return pathname === "/";
//     return pathname.startsWith(item.href);
//   };

//   /* ---------- smooth scroll ---------- */
//   const scrollTo = (id: string) => {
//     const el = document.getElementById(id);
//     el?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   const handleHomeNavClick = (e: React.MouseEvent, item: NavLink) => {
//     if (!isHome || !item.homeId) return;
//     e.preventDefault();
//     scrollTo(item.homeId);
//   };

//   const headerClass = isHome
//     ? scrolled
//       ? "bg-white/85 backdrop-blur text-zinc-900"
//       : "bg-transparent text-white"
//     : "bg-white text-zinc-900";

//   /* ✅ ONLY REAL CHANGE IS HERE */
//   const linkBase =
//     "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ease-out will-change-transform";

//   const desktopLinkClass = (active: boolean) => {
//     if (!isHome || scrolled) {
//       return [
//         linkBase,
//         active
//           ? "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white scale-[1.02]"
//           : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
//       ].join(" ");
//     }

//     return [
//       linkBase,
//       active
//         ? "bg-white/15 text-white scale-[1.02]"
//         : "text-white/90 hover:bg-white/10 hover:text-white",
//     ].join(" ");
//   };

//   const donateBtnClass =
//     !isHome || scrolled
//       ? "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white hover:opacity-90"
//       : "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white hover:opacity-90";

//   const mobileBtnClass =
//     !isHome || scrolled
//       ? "text-zinc-900 hover:bg-zinc-100"
//       : "text-white hover:bg-white/10";

//   return (
//     <>
//       <header
//         className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerClass}`}
//       >
//         <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
//           <Link href="/" className="flex items-center gap-3">
//             <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl">
//               <Image
//                 src="/images/hhh.png"
//                 alt="Hyolmo Helping Hands Nepal Logo"
//                 width={40}
//                 height={40}
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             <div className="leading-tight">
//               <p className="text-sm font-semibold tracking-tight">
//                 Hyolmo Helping Hands Nepal
//               </p>
//               <p
//                 className={
//                   !isHome || scrolled
//                     ? "text-xs text-zinc-500"
//                     : "text-xs text-white/80"
//                 }
//               >
//                 Humanity & Compassion
//               </p>
//             </div>
//           </Link>

//           {/* DESKTOP MENU — UNCHANGED STRUCTURE */}
//           <ul className="hidden items-center gap-1 md:flex">
//             {navLinks.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={isHome && item.homeId ? `/#${item.homeId}` : item.href}
//                   onClick={(e) => handleHomeNavClick(e, item)}
//                   className={desktopLinkClass(isActive(item))}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-3">
//             <Link
//               href="/donate"
//               className={`hidden rounded-xl px-4 py-2 text-sm font-medium transition md:inline-flex ${donateBtnClass}`}
//             >
//               Donate
//             </Link>

//             <button
//               onClick={() => setMobileOpen(true)}
//               className={`rounded-xl p-2 transition md:hidden ${mobileBtnClass}`}
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* MOBILE DRAWER (UNCHANGED) */}
// <div
//   className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
//     mobileOpen ? "visible opacity-100" : "invisible opacity-0"
//   }`}
//   onClick={() => setMobileOpen(false)}
// >
//   <div
//     className={`fixed left-0 top-0 h-full w-80 transform bg-white shadow-lg transition-transform duration-300 flex flex-col ${
//       mobileOpen ? "translate-x-0" : "-translate-x-full"
//     }`}
//     onClick={(e) => e.stopPropagation()}
//   >
//     {/* Header */}
//     <div className="flex items-center justify-between border-b px-4 py-4">
//       <Link href="/" className="text-base font-semibold">
//         Hyolmo Helping Hands Nepal
//       </Link>

//       <button
//         onClick={() => setMobileOpen(false)}
//         className="rounded-xl p-2 hover:bg-zinc-100"
//       >
//         <X className="h-6 w-6" />
//       </button>
//     </div>

//     {/* Nav (takes remaining space + scrolls if needed) */}
//     <nav className="flex-1 space-y-2 px-4 py-4 overflow-y-auto">
//       {navLinks.map((item) => (
//         <Link
//           key={item.href}
//           href={isHome && item.homeId ? `/#${item.homeId}` : item.href}
//           className={[
//             "block rounded-xl px-3 py-2 text-sm font-medium transition",
//             isActive(item)
//               ? "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white"
//               : "text-zinc-800 hover:bg-zinc-100",
//           ].join(" ")}
//           onClick={(e) => {
//             if (isHome && item.homeId) {
//               e.preventDefault();
//               scrollTo(item.homeId);
//             }
//             setMobileOpen(false);
//           }}
//         >
//           {item.label}
//         </Link>
//       ))}
//     </nav>

//     {/* Donate button pinned to bottom */}
//     <div className="px-4 pb-6">
//       <button
//         className="w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500"
//         onClick={() => {
//           // put your donate action here (route, modal, external link etc.)
//           setMobileOpen(false);
//         }}
//       >
//         Donate
//       </button>
//     </div>
//   </div>
// </div>

//     </>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useDonate } from "@/context/donate-context";

type NavLink = {
  label: string;
  href: string;
  homeId?: string;
};

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { openDonate } = useDonate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navLinks: NavLink[] = useMemo(
    () => [
      { label: "Home", href: "/", homeId: "home" },
      { label: "About", href: "/about", homeId: "about" },
      { label: "Works", href: "/works", homeId: "works" },
      { label: "Contact", href: "/contact", homeId: "contact" },
    ],
    []
  );

  /* ---------- header bg scroll ---------- */
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /* ---------- close mobile on route ---------- */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* ---------- scroll spy ---------- */
  useEffect(() => {
    if (!isHome) return;

    // ✅ only observe sections that actually exist
    const ids = ["about", "works", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0]?.target?.id;
        if (top) setActiveSection(top);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.08,
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  /* ✅ FIX: force Home active only when REALLY at top */
  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection("home");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /* ---------- active logic ---------- */
  const isActive = (item: NavLink) => {
    if (isHome && item.homeId) return activeSection === item.homeId;
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  };

  /* ---------- smooth scroll ---------- */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHomeNavClick = (e: React.MouseEvent, item: NavLink) => {
    if (!isHome || !item.homeId) return;
    e.preventDefault();
    scrollTo(item.homeId);
  };

  // ✅ mobile: set active instantly, scroll, then close
  const handleMobileNavClick = (e: React.MouseEvent, item: NavLink) => {
    if (isHome && item.homeId) {
      e.preventDefault();
      setActiveSection(item.homeId);
      scrollTo(item.homeId);
      window.setTimeout(() => setMobileOpen(false), 60);
      return;
    }
    setMobileOpen(false);
  };

  const headerClass = isHome
    ? scrolled
      ? "bg-white/85 backdrop-blur text-zinc-900"
      : "bg-transparent text-white"
    : "bg-white text-zinc-900";

  const linkBase =
    "rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ease-out will-change-transform";

  const desktopLinkClass = (active: boolean) => {
    if (!isHome || scrolled) {
      return [
        linkBase,
        active
          ? "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white scale-[1.02]"
          : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900",
      ].join(" ");
    }

    return [
      linkBase,
      active ? "bg-white/15 text-white scale-[1.02]" : "text-white/90 hover:bg-white/10 hover:text-white",
    ].join(" ");
  };

  const donateBtnClass =
    "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white hover:opacity-90";

  const mobileBtnClass =
    !isHome || scrolled ? "text-zinc-900 hover:bg-zinc-100" : "text-white hover:bg-white/10";

  return (
    <>
      <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${headerClass}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => {
              if (isHome) setActiveSection("home");
            }}
          >
            <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-2xl">
              <Image
                src="/images/hhh.png"
                alt="Hyolmo Helping Hands Nepal Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">Hyolmo Helping Hands Nepal</p>
              <p className={!isHome || scrolled ? "text-xs text-zinc-500" : "text-xs text-white/80"}>
                Humanity & Compassion
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={isHome && item.homeId ? `/#${item.homeId}` : item.href}
                  onClick={(e) => handleHomeNavClick(e, item)}
                  className={desktopLinkClass(isActive(item))}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openDonate("header")}
              className={`hidden rounded-xl px-4 py-2 text-sm font-medium transition md:inline-flex cursor-pointer ${donateBtnClass}`}
            >
              Donate
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className={`rounded-xl p-2 transition md:hidden ${mobileBtnClass}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`fixed left-0 top-0 h-full w-80 transform bg-white shadow-lg transition-transform duration-300 flex flex-col ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-4 py-4">
            <Link href="/" className="text-base font-semibold">
              Hyolmo Helping Hands Nepal
            </Link>

            <button onClick={() => setMobileOpen(false)} className="rounded-xl p-2 hover:bg-zinc-100">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 space-y-2 px-4 py-4 overflow-y-auto">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={isHome && item.homeId ? `/#${item.homeId}` : item.href}
                className={[
                  "block rounded-xl px-3 py-2 text-sm font-medium transition",
                  isActive(item)
                    ? "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white"
                    : "text-zinc-800 hover:bg-zinc-100",
                ].join(" ")}
                onClick={(e) => handleMobileNavClick(e, item)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Donate pinned */}
          <div className="px-4 pb-6">
            <Link
              href="/donate"
              className="w-full inline-flex justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
