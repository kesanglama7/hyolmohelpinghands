import ContactSection from "@/components/sections/contact-us";
// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hyolmo Helping Hands Nepal to volunteer, partner, or support our community programs and humanitarian initiatives.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Hyolmo Helping Hands Nepal",
    description:
      "Volunteer, partner, or support our community programs and humanitarian initiatives across Nepal.",
    url: "/contact",
    images: [
      { url: "/images/og/contact.jpg", width: 1200, height: 630, alt: "Contact Hyolmo Helping Hands Nepal" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Hyolmo Helping Hands Nepal",
    description:
      "Volunteer, partner, or support our community programs and humanitarian initiatives across Nepal.",
    images: ["/images/og/contact.jpg"],
  },
};


export default function ContactPage() {
    return (
        <div className="mt-[12vh]">
            <ContactSection />
        </div>
    );
}