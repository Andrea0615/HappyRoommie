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

/**
 * Pre-filled messages by audience/context.
 * Keep these as the single source of truth for copy consistency.
 */
export const WHATSAPP_MESSAGES = {
  general:
    "Hola, vi la página de Happy Roomie y me gustaría recibir más información.",
  student:
    "Hola, vi la página de Happy Roomie y estoy buscando dónde vivir. Me gustaría recibir información.",
  studentDetailed:
    "Hola, vi la página de Happy Roomie y estoy buscando dónde vivir. Mi universidad es ______ y mi presupuesto aproximado es ______.",
  parent:
    "Hola, vi la página de Happy Roomie y estoy buscando información de vivienda para un estudiante.",
  parentDetailed:
    "Hola, vi la página de Happy Roomie y estoy buscando información de vivienda para un estudiante. La universidad es ______.",
  owner:
    "Hola, vi la página de Happy Roomie y quiero obtener información para publicar una propiedad.",
  ownerDetailed:
    "Hola, vi la página de Happy Roomie y quiero obtener información para publicar una propiedad. La propiedad se encuentra en ______.",
  faq: "Hola, vi la página de Happy Roomie y tengo una pregunta que no aparece en las preguntas frecuentes.",
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

/**
 * Builds a correctly URL-encoded wa.me link for a given message key.
 */
export function buildWhatsAppUrl(messageKey: WhatsAppMessageKey): string {
  const message = WHATSAPP_MESSAGES[messageKey];
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
