"use client";

import { buildWhatsAppUrl } from "@/config/whatsapp";
import { trackEvent } from "@/lib/analytics";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Persistent floating action button. Hidden on small screens where
 * MobileStickyCTA already provides a fixed WhatsApp entry point, to avoid
 * two competing floating elements on mobile.
 */
export default function FloatingWhatsAppButton() {
  const href = buildWhatsAppUrl("general");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={() => trackEvent("whatsapp_click_floating_button")}
      aria-label="Hablar con Happy Roomie por WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-ink text-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:bg-coral focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-coral/60 motion-safe:animate-pulse-soft motion-reduce:animate-none sm:flex"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
