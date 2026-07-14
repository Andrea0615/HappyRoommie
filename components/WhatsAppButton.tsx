"use client";

import { buildWhatsAppUrl, WhatsAppMessageKey } from "@/config/whatsapp";
import { AnalyticsEvent, trackEvent } from "@/lib/analytics";
import WhatsAppIcon from "./WhatsAppIcon";

type Variant = "primary" | "secondary" | "ghost";

interface WhatsAppButtonProps {
  messageKey: WhatsAppMessageKey;
  analyticsEvent: AnalyticsEvent;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  showIcon?: boolean;
}

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-coral hover:text-ink focus-visible:ring-coral/70 shadow-soft",
  secondary:
    "bg-white text-ink border-2 border-ink/[0.15] hover:border-ink/[0.35] hover:bg-coral-soft shadow-card",
  ghost:
    "bg-coral text-ink hover:bg-white",
};

/**
 * The ONLY interactive element in this codebase that opens an external
 * destination. It always resolves to https://wa.me/523333990043 with a
 * URL-encoded, audience-specific message. Do not use <a href="wa.me/...">
 * directly elsewhere — route every CTA through this component so the
 * destination and analytics stay centralized and auditable.
 */
export default function WhatsAppButton({
  messageKey,
  analyticsEvent,
  children,
  variant = "primary",
  className = "",
  showIcon = true,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(messageKey);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={() => trackEvent(analyticsEvent)}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-display text-base font-bold transition-all duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 ${VARIANT_STYLES[variant]} ${className}`}
    >
      {showIcon && <WhatsAppIcon className="w-5 h-5 shrink-0" />}
      <span>{children}</span>
    </a>
  );
}
