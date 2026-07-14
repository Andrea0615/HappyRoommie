"use client";

import { useState } from "react";
import { FOOTER_CONTENT } from "@/config/content";
import { WHATSAPP_DISPLAY } from "@/config/whatsapp";
import WhatsAppButton from "./WhatsAppButton";
import PrivacyModal from "./PrivacyModal";
import TermsModal from "./TermsModal";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-28 pt-16 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            {/* Logo — not a link, matches header treatment */}
            <div className="flex items-center" aria-label="Happy Roomie">
              <img
                src="/images/happy-roomie-lateral-navy.svg"
                alt=""
                className="h-10 w-auto rounded-md bg-sand px-2 py-1"
                width={232}
                height={40}
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sand/60">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-sand/70">
              WhatsApp: {WHATSAPP_DISPLAY}
            </p>
            <WhatsAppButton
              messageKey="general"
              analyticsEvent="whatsapp_click_final_cta"
              variant="primary"
              className="!py-2.5 !px-5 text-sm"
            >
              Hablar por WhatsApp
            </WhatsAppButton>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-sand/60">
              <button
                type="button"
                onClick={() => {
                  setPrivacyOpen(true);
                  trackEvent("privacy_modal_open");
                }}
                className="rounded underline-offset-4 hover:text-sand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60"
              >
                {FOOTER_CONTENT.privacyLinkLabel}
              </button>
              <button
                type="button"
                onClick={() => {
                  setTermsOpen(true);
                  trackEvent("terms_modal_open");
                }}
                className="rounded underline-offset-4 hover:text-sand hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60"
              >
                {FOOTER_CONTENT.termsLinkLabel}
              </button>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-sand/40">
          {FOOTER_CONTENT.legalNotice}
        </p>

        <p className="mt-6 text-xs text-sand/40">
          © {year} Happy Roomie. Todos los derechos reservados.
        </p>
      </div>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </footer>
  );
}
