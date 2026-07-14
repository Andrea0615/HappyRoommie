import { PROBLEM_CONTENT } from "@/config/content";
import WhatsAppButton from "./WhatsAppButton";
import KeyTag from "./KeyTag";

const ICONS = [
  // compass / search
  <path key="1" strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-13.5-2 5-5 2 2-5 5-2Z" />,
  // sliders / fit
  <path key="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h9m4 0h3M4 12h3m4 0h9M4 18h13m4 0h-3M9 4v4M17 10v4M13 16v4" />,
  // chat / questions
  <path key="3" strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.5 8.5 0 0 1-12.9 7.3L3 20l1.3-4.9A8.5 8.5 0 1 1 21 11.5Z" />,
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFF9EE_0%,#FFFFFF_48%,#FFF9EE_100%)] py-20 sm:py-28">
      <div aria-hidden="true" className="absolute right-0 top-16 h-28 w-14 rounded-l-full bg-coral/80" />
      <div aria-hidden="true" className="absolute bottom-16 left-8 hidden h-24 w-24 rounded-full border-[16px] border-ink/[0.08] md:block" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <h2 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            {PROBLEM_CONTENT.title}
          </h2>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-ink/70 lg:justify-self-end">
            {PROBLEM_CONTENT.closing}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROBLEM_CONTENT.cards.map((card, i) => (
            <div
              key={card.title}
              className={`group relative rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${
                i === 1 ? "md:mt-10 bg-ink text-white" : i === 2 ? "md:-mt-5" : ""
              }`}
            >
              <span className={`absolute right-5 top-4 font-display text-5xl font-black ${i === 1 ? "text-white/10" : "text-ink/10"}`}>
                0{i + 1}
              </span>
              <KeyTag tone={i === 1 ? "coral" : "ink"}>
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  {ICONS[i]}
                </svg>
              </KeyTag>
              <h3 className={`mt-5 font-display text-xl font-black ${i === 1 ? "text-white" : "text-ink"}`}>
                {card.title}
              </h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-white/[0.72]" : "text-ink/[0.65]"}`}>
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 rounded-[2rem] bg-coral/95 px-6 py-8 shadow-soft ring-1 ring-ink/5 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-xl font-display text-2xl font-black leading-snug text-ink">
            La forma más fácil de empezar es escribir lo que necesitas.
          </p>
          <WhatsAppButton
            messageKey="general"
            analyticsEvent="whatsapp_click_problem"
            variant="primary"
            className="shrink-0"
          >
            {PROBLEM_CONTENT.cta}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
