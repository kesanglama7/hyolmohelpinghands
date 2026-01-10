// import AboutSection from "@/components/sections/about-us";
// import HeroSlider from "@/components/sections/hero-slider";


// export default function Home() {
//   return (
//     <div>
//       <HeroSlider />
//       <AboutSection />
//     </div>
//   );
// }





import AboutSection from "@/components/sections/about-us";
import ContactSection from "@/components/sections/contact-us";
import HeroSlider from "@/components/sections/hero-slider";
import ProjectsPreviewSection from "@/components/sections/project-preview";
import StatsCounter from "@/components/sections/status-counter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyolmo Helping Hands Nepal | Community Support & Humanitarian Aid",
  description:
    "Hyolmo Helping Hands Nepal is a non-profit organization supporting education, health, disaster relief, environment protection, and community development.",
  keywords: [
    "Hyolmo Helping Hands",
    "Non profit organization Nepal",
    "Community support Nepal",
    "Education charity Nepal",
    "NGO Nepal",
  ],
  openGraph: {
    title: "Hyolmo Helping Hands Nepal",
    description:
      "Supporting education, health, environment, and humanitarian relief across Nepal.",
    url: "https://hyolmohelpinghands.com.np",
    siteName: "Hyolmo Helping Hands Nepal",
    images: [
      {
        url: "/images/og/home.png",
        width: 1200,
        height: 630,
        alt: "Hyolmo Helping Hands Nepal",
      },
    ],
    type: "website",
  },
};


export default function Home() {
  return (
    <div>
      {/* Home anchor (scroll-spy + header "Home") */}
      <div id="home">
        <HeroSlider />
      </div>

      {/* About anchor */}
      <section id="about">
        <AboutSection />
      </section>

      <section>
        <StatsCounter />
      </section>

      <section id="works">
         <ProjectsPreviewSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
