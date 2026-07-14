/**
 * Site-wide configuration.
 *
 * NOTE ON CANONICAL URL:
 * CANONICAL_URL is intentionally left as a configurable placeholder,
 * driven by an environment variable. It must NEVER be set to
 * https://happyroomie.mx — this landing is independent from the official
 * site and must not reference it anywhere, including SEO metadata.
 */

export const SITE_CONFIG = {
  name: "Happy Roomie",
  title: "Happy Roomie | Encuentra vivienda y roomies cerca de tu universidad",
  description:
    "Conoce opciones de vivienda y roomies cerca de tu universidad con Happy Roomie. Escríbenos por WhatsApp y recibe información.",
  keywords: [
    "vivienda para estudiantes",
    "departamentos para estudiantes",
    "habitaciones cerca de universidades",
    "encontrar roomie",
    "renta para estudiantes",
    "vivienda universitaria",
    "Happy Roomie",
  ],
  locale: "es_MX",
  // Pending: set NEXT_PUBLIC_SITE_URL in your deployment environment
  // (e.g. Vercel project settings) once this landing has its own domain.
  // This URL is independent from https://happyroomie.mx.
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  faviconPath: "/happy-roomie-icon.svg",
  // Pending: replace with the real Open Graph share image (1200x630).
  ogImagePath: "/images/og-cover.jpg",
} as const;

export const CONTACT_CONFIG = {
  whatsappDisplay: "+52 33 3399 0043",
} as const;
