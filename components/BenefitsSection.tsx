import { BENEFITS_CONTENT } from "@/config/content";
import KeyTag from "./KeyTag";

const ICONS = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.5 8.5 0 0 1-12.9 7.3L3 20l1.3-4.9A8.5 8.5 0 1 1 21 11.5Z" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M4 19.5V6a2 2 0 0 1 2-2h8.5L20 8.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z M9 22V16h6v6" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 0 0-3-3.87M9 20H4v-1a4 4 0 0 1 3-3.87m5-5.13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 0a4 4 0 0 1 4 4v1H5v-1a4 4 0 0 1 4-4h4Z" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 6.95-1.41-1.41M6.46 6.46 5.05 5.05m12.9 0-1.41 1.41M6.46 17.54l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />,
];

export default function BenefitsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
          {BENEFITS_CONTENT.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">
          {BENEFITS_CONTENT.cards.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-[1.75rem] p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${
                i === 0
                  ? "bg-ink text-white md:col-span-2 md:row-span-2 md:p-8"
                  : i === 2
                    ? "bg-coral text-ink md:col-span-2"
                    : "bg-sand text-ink"
              }`}
            >
              <KeyTag tone={i % 2 === 0 ? "ink" : "coral"}>
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  {ICONS[i]}
                </svg>
              </KeyTag>
              <h3 className={`mt-5 font-display font-black ${i === 0 ? "text-3xl text-white" : "text-xl text-ink"}`}>
                {card.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-white/72" : "text-ink/68"}`}>
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/*
          Testimonials section — INTENTIONALLY DISABLED.
          No real, confirmed testimonials exist yet. Do not enable this
          block with invented quotes. Once real testimonials are approved,
          uncomment and populate with genuine content (name, program/role,
          and explicit consent to publish).

          <div className="mt-16">
            <h3 className="font-display text-2xl font-bold text-ink">
              Lo que dicen quienes ya usaron Happy Roomie
            </h3>
            ...testimonial cards go here...
          </div>
        */}
      </div>
    </section>
  );
}
