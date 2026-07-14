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
    <section className="bg-[linear-gradient(180deg,#FFF9EE_0%,#FFFFFF_32%,#FFFFFF_100%)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
          {BENEFITS_CONTENT.title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {BENEFITS_CONTENT.cards.map((card, i) => (
            <div
              key={card.title}
              className="group flex min-h-[13.5rem] flex-col justify-between rounded-[1.5rem] border border-ink/10 bg-[#FFF9EE] p-6 text-ink shadow-card ring-1 ring-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-coral/80 hover:shadow-soft sm:p-7"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <KeyTag tone="coral" className="h-12 w-12">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6}>
                      {ICONS[i]}
                    </svg>
                  </KeyTag>
                  <span
                    className="font-display text-4xl font-black leading-none text-ink/10"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-black leading-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/[0.68]">
                  {card.text}
                </p>
              </div>

              <span className="mt-6 h-1.5 w-16 rounded-full bg-coral" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
