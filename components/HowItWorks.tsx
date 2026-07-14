import { HOW_IT_WORKS_CONTENT } from "@/config/content";
import WhatsAppButton from "./WhatsAppButton";
import KeyTag from "./KeyTag";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            {HOW_IT_WORKS_CONTENT.title}
          </h2>
          <div aria-hidden="true" className="hidden h-16 w-40 rounded-full border-[14px] border-coral md:block" />
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <span aria-hidden="true" className="absolute left-8 right-8 top-7 hidden h-1 rounded-full bg-coral lg:block" />
          {HOW_IT_WORKS_CONTENT.steps.map((step) => (
            <li key={step.number} className="relative rounded-[1.5rem] bg-sand p-6 shadow-card transition-transform duration-300 hover:-translate-y-1">
              <KeyTag tone={step.number === "4" ? "ink" : "coral"}>{step.number}</KeyTag>
              <h3 className="mt-5 font-display text-xl font-black text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <WhatsAppButton
            messageKey="general"
            analyticsEvent="whatsapp_click_how_it_works"
            variant="primary"
          >
            {HOW_IT_WORKS_CONTENT.cta}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
