import { PARENT_CONTENT } from "@/config/content";
import WhatsAppButton from "./WhatsAppButton";

export default function ParentSection() {
  return (
    <section id="familias" className="relative scroll-mt-20 overflow-hidden bg-ink py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sand/10 to-transparent" />
      <div aria-hidden="true" className="absolute -left-14 top-12 h-36 w-36 rounded-full border-[22px] border-coral/70" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-40 w-40 rounded-tl-full bg-coral/95" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-coral">
            {PARENT_CONTENT.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-black leading-tight text-white sm:text-5xl">
            {PARENT_CONTENT.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/[0.72]">
            {PARENT_CONTENT.text}
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {PARENT_CONTENT.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 rounded-[1rem] bg-white/[0.08] px-4 py-3 text-sm font-medium text-white/[0.88]"
              >
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

          <div className="mt-9">
            <WhatsAppButton
              messageKey="parentDetailed"
              analyticsEvent="whatsapp_click_families"
              variant="ghost"
            >
              {PARENT_CONTENT.cta}
            </WhatsAppButton>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] rounded-br-[6rem] border-8 border-white/10 bg-white shadow-soft">
            <img
              src="/images/apartment-family.png"
              alt={PARENT_CONTENT.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-7 left-5 rounded-[1.5rem] bg-white p-5 text-ink shadow-soft sm:left-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">Decisión acompañada</p>
            <p className="mt-1 font-display text-2xl font-black">Más claridad antes de elegir</p>
          </div>
        </div>
      </div>
    </section>
  );
}
