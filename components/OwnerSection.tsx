import { OWNER_CONTENT } from "@/config/content";
import WhatsAppButton from "./WhatsAppButton";

export default function OwnerSection() {
  return (
    <section id="propietarios" className="scroll-mt-20 bg-sand py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[2rem] rounded-tl-[6rem] bg-white shadow-soft">
            <img
              src="/images/apartment-family.png"
              alt={OWNER_CONTENT.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-2 bottom-8 max-w-xs rounded-[1.5rem] bg-white p-5 shadow-soft sm:-right-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">Propiedad lista</p>
            <p className="mt-2 font-display text-2xl font-black leading-tight text-ink">
              Muéstrala a estudiantes que ya están buscando.
            </p>
          </div>
          <div aria-hidden="true" className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-coral" />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            {OWNER_CONTENT.title}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70">
            {OWNER_CONTENT.text}
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3">
            {OWNER_CONTENT.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 border-b border-ink/10 pb-3 text-sm font-semibold text-ink/75">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-coral"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <WhatsAppButton
              messageKey="ownerDetailed"
              analyticsEvent="whatsapp_click_owners"
              variant="primary"
            >
              {OWNER_CONTENT.cta}
            </WhatsAppButton>
          </div>
        </div>

      </div>
    </section>
  );
}
