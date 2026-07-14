"use client";

import WhatsAppButton from "./WhatsAppButton";

export default function MobileStickyCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 border-t border-ink/10 bg-sand/95 backdrop-blur-md px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <WhatsAppButton
        messageKey="general"
        analyticsEvent="whatsapp_click_mobile_sticky"
        variant="primary"
        className="w-full"
      >
        Consultar disponibilidad
      </WhatsAppButton>
    </div>
  );
}
