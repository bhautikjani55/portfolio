import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import { PROFILE } from "@/data/portfolio";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://bhautikjani.dev";
const TITLE = "Bhautik Jani — Full-Stack Software Engineer";
const DESCRIPTION =
  "Full-Stack Software Engineer specializing in React, Next.js, Node.js, NestJS, AWS and scalable cloud-native applications.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${PROFILE.name}` },
  description: DESCRIPTION,
  keywords: [
    "Bhautik Jani",
    "Full-Stack Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "AWS",
    "Serverless",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "GraphQL",
    "SaaS",
    "Surat",
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: `${PROFILE.name} — Portfolio`,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#ece8dd",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: "Full-Stack Software Engineer",
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  email: `mailto:${PROFILE.email}`,
  url: SITE_URL,
  sameAs: [PROFILE.socials.github, PROFILE.socials.linkedin],
  knowsAbout: ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "AWS", "Serverless", "MongoDB", "PostgreSQL", "Redis", "GraphQL"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="grain relative flex min-h-full flex-col bg-[#ece8dd] text-[#181713]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#181713] focus:px-4 focus:py-2 focus:text-sm focus:text-[#ece8dd]"
        >
          Skip to content
        </a>
        <TopBar />
        <div className="relative z-10 flex flex-1 flex-col">{children}</div>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
