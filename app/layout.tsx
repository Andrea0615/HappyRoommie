import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/config/site";
import { WHATSAPP_DISPLAY } from "@/config/whatsapp";

// CANONICAL URL: intentionally driven by NEXT_PUBLIC_SITE_URL. Left empty
// until this landing has its own domain. Never point this at
// https://happyroomie.mx — this page is independent from the official site.
const canonical = SITE_CONFIG.canonicalUrl || undefined;

export const metadata: Metadata = {
  ...(canonical ? { metadataBase: new URL(canonical) } : {}),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  alternates: canonical ? { canonical } : undefined,
  icons: {
    icon: SITE_CONFIG.faviconPath,
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [{ url: SITE_CONFIG.ogImagePath, width: 1200, height: 630, alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org structured data — only confirmed, non-invented information.
// No ratings, no founding date, no address, no fabricated statistics.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: WHATSAPP_DISPLAY,
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["es"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
