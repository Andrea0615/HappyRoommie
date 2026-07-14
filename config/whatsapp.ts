/**
 * Centralized WhatsApp configuration.
 *
 * IMPORTANT: This is the ONLY external destination allowed anywhere in this
 * project. Every button, link, or CTA must resolve to a URL built from
 * WHATSAPP_NUMBER via buildWhatsAppUrl(). Do not hardcode wa.me URLs
 * elsewhere in the codebase.
 */

// Official WhatsApp number in international format, digits only (no +, spaces or dashes)
export const WHATSAPP_NUMBER = "523333990043";

// Human-readable display format for footer / final CTA
export const WHATSAPP_DISPLAY = "+52 33 3399 0043";

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const STUDENT_WHATSAPP_MESSAGE =
  "¡Hola! Vi su página y busco cuarto cerca del Tec Guadalajara. ¿Me pasan información y disponibilidad para agosto?";

export const FAMILY_WHATSAPP_MESSAGE =
  "¡Hola! Vi su página y busco vivienda para mi hijo cerca del Tec Guadalajara. ¿Me pasan información y disponibilidad para agosto?";

/**
 * Pre-filled messages by audience/context.
 * Keep these as the single source of truth for copy consistency.
 */
export const WHATSAPP_MESSAGES = {
  general: STUDENT_WHATSAPP_MESSAGE,
  student: STUDENT_WHATSAPP_MESSAGE,
  studentDetailed: STUDENT_WHATSAPP_MESSAGE,
  parent: FAMILY_WHATSAPP_MESSAGE,
  parentDetailed: FAMILY_WHATSAPP_MESSAGE,
  faq: STUDENT_WHATSAPP_MESSAGE,
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

function encodeWhatsAppMessage(message: string): string {
  return encodeURIComponent(message).replace(/[!'()*]/g, (character) =>
    `%${character.charCodeAt(0).toString(16).toUpperCase()}`
  );
}

export function getWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeWhatsAppMessage(message)}`;
}

/**
 * Builds a correctly URL-encoded wa.me link for a given message key.
 */
export function buildWhatsAppUrl(messageKey: WhatsAppMessageKey): string {
  const message = WHATSAPP_MESSAGES[messageKey];
  return getWhatsAppUrl(message);
}
