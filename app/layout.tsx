
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/layout/header";
// import Footer from "@/components/layout/footer";
// import { Toaster } from "@/components/ui/sonner";
// import { DonateProvider } from "@/context/donate-context";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
//   display: "swap",
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   display: "swap",
// });

// const SITE_NAME = "Hyolmo Helping Hands Nepal";
// const SITE_DESCRIPTION =
//   "Humanity exists in everyone — it just needs an eye to see it and an open heart to feel it. A page dedicated to humanism and compassion.";
// const SITE_URL = "https://hyolmohelpinghands.com.np";
// const OG_IMAGE = "/og.png";

// export const metadata: Metadata = {
//   metadataBase: new URL(SITE_URL),
//   title: {
//     default: SITE_NAME,
//     template: `%s | ${SITE_NAME}`,
//   },
//   description: SITE_DESCRIPTION,
//   openGraph: {
//     type: "website",
//     url: SITE_URL,
//     title: SITE_NAME,
//     description: SITE_DESCRIPTION,
//     siteName: SITE_NAME,
//     images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: SITE_NAME,
//     description: SITE_DESCRIPTION,
//     images: [OG_IMAGE],
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={[
//           geistSans.variable,
//           geistMono.variable,
//           "min-h-screen bg-white text-zinc-900 antialiased",
//         ].join(" ")}
//       >
//         <DonateProvider>
//         <Header />
//         <main className="min-h-[70vh]">
//           {children}
//           <Toaster />
//         </main>
//         <Footer />
//         </DonateProvider>
//       </body>
//     </html>
//   );
// }




import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { DonateProvider } from "@/context/donate-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_NAME = "Hyolmo Helping Hands Nepal";
const SITE_DESCRIPTION =
  "Hyolmo Helping Hands Nepal is a non-profit organization supporting education, health, disaster relief, environmental protection, and community development across Nepal.";
const SITE_URL = "https://www.hyolmohelpinghands.org.np";
const OG_IMAGE = "/og.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Community Support & Humanitarian Aid`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  keywords: [
    "Hyolmo Helping Hands Nepal",
    "NGO Nepal",
    "non profit Nepal",
    "education support Nepal",
    "health camp Nepal",
    "disaster relief Nepal",
    "community development Nepal",
    "menstrual health Nepal",
    "environment cleanup Nepal",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} | Community Support & Humanitarian Aid`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Community Support & Humanitarian Aid`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-white text-zinc-900 antialiased",
        ].join(" ")}
      >
        <DonateProvider>
          <Header />
          <main className="min-h-[70vh]">
            {children}
            <Toaster />
          </main>
          <Footer />
        </DonateProvider>
      </body>
    </html>
  );
}
