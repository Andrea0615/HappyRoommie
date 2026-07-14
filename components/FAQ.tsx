import { FAQ_CONTENT } from "@/config/content";
import WhatsAppButton from "./WhatsAppButton";

export default function FAQ() {
  return (
    <section
      id="preguntas-frecuentes"
      className="scroll-mt-20 bg-[linear-gradient(180deg,#FFFFFF_0%,#FFF9EE_38%,#FFF9EE_100%)] py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <aside className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-soft">
          <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-coral" />
          <div aria-hidden="true" className="absolute bottom-8 right-8 grid grid-cols-4 gap-2 opacity-30">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="h-2 w-2 rounded-full bg-coral" />
            ))}
          </div>
          <p className="relative text-sm font-bold uppercase tracking-[0.18em] text-coral">
            ¿Todavía tienes dudas?
          </p>
          <h2 id="faq-heading" className="relative mt-4 font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            {FAQ_CONTENT.title}
          </h2>
          <p className="relative mt-5 text-base leading-relaxed text-white/[0.72]">
            {FAQ_CONTENT.intro}
          </p>
          <div className="relative mt-8">
            <WhatsAppButton messageKey="faq" analyticsEvent="whatsapp_click_faq" variant="ghost">
              {FAQ_CONTENT.cta}
            </WhatsAppButton>
          </div>
        </aside>

        <div className="space-y-3">
          {FAQ_CONTENT.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.25rem] border border-ink/10 bg-white p-5 shadow-[0_10px_26px_-24px_rgba(10,42,92,0.3)] transition-all duration-300 open:shadow-card"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg font-display text-base font-black text-ink marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60">
                {item.question}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-ink/40 transition-transform duration-200 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
