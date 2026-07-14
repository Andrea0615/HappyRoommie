/**
 * Site-wide configuration.
 *
 * NOTE ON CANONICAL URL:
 * CANONICAL_URL is intentionally left configurable,
 * driven by an environment variable. It must NEVER be set to
 * the official site — this landing is independent and must not reference it
 * anywhere, including SEO metadata.
 */

export const SITE_CONFIG = {
  name: "Happy Roomie",
  title: "Vivienda cerca del Tec Guadalajara | Happy Roomie",
  description:
    "Consulta opciones de vivienda para estudiantes cerca del Tec de Monterrey Campus Guadalajara. Conoce disponibilidad para agosto por WhatsApp.",
  keywords: [
    "vivienda cerca del Tec Guadalajara",
    "cuartos cerca del Tec de Monterrey Guadalajara",
    "renta para estudiantes Tec Guadalajara",
    "habitaciones para estudiantes Guadalajara",
    "vivienda Tec Campus Guadalajara",
    "cuarto amueblado cerca del Tec Guadalajara",
    "Happy Roomie",
  ],
  locale: "es_MX",
  // Set NEXT_PUBLIC_SITE_URL in your deployment environment
  // (e.g. Vercel project settings) once this landing has its own domain.
  // This URL is independent from the official Happy Roomie site.
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
  faviconPath: "/happy-roomie-icon.svg",
  ogImagePath: "/images/og-cover.jpg",
} as const;

export const CONTACT_CONFIG = {
  whatsappDisplay: "+52 33 3399 0043",
} as const;
