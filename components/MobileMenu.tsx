"use client";

import { NAV_LINKS } from "@/config/navigation";
import WhatsAppButton from "./WhatsAppButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`md:hidden overflow-hidden border-b border-ink/5 bg-sand transition-[max-height] duration-300 ease-in-out ${
        open ? "max-h-96" : "max-h-0"
      }`}
    >
      <nav aria-label="Navegación móvil" className="flex flex-col gap-1 px-4 py-4">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-lg px-3 py-3 text-base font-semibold text-ink/80 hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60"
          >
            {link.label}
          </a>
        ))}
        <div className="mt-2">
          <WhatsAppButton
            messageKey="general"
            analyticsEvent="whatsapp_click_header"
            variant="primary"
            className="w-full"
          >
            Consultar disponibilidad
          </WhatsAppButton>
        </div>
      </nav>
    </div>
  );
}
