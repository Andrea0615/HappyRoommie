import { HERO_CONTENT } from "@/config/content";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[linear-gradient(135deg,#FDD76C_0%,#FFE48E_54%,#FFF9EE_115%)] pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 h-40 w-20 rounded-r-full bg-white/40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-28 hidden h-28 w-28 rounded-full border-[18px] border-ink/10 md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(10,42,92,0.18)_1px,transparent_0)] [background-size:28px_28px]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-sand/70 to-sand" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="motion-safe:animate-fade-up">
          <p className="mb-5 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-card">
            Vivienda y roomies cerca de tu universidad
          </p>
          <h1 className="max-w-3xl font-display text-[2.55rem] font-black leading-[1.02] text-ink sm:text-6xl lg:text-[4.35rem]">
            {HERO_CONTENT.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink/[0.78] sm:text-xl">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton
              messageKey="student"
              analyticsEvent="whatsapp_click_hero_student"
              variant="primary"
            >
              {HERO_CONTENT.primaryCta}
            </WhatsAppButton>
            <WhatsAppButton
              messageKey="owner"
              analyticsEvent="whatsapp_click_hero_owner"
              variant="secondary"
            >
              {HERO_CONTENT.secondaryCta}
            </WhatsAppButton>
          </div>

          <p className="mt-4 text-sm font-semibold text-ink/[0.65]">{HERO_CONTENT.microcopy}</p>
        </div>

        <div className="relative motion-safe:animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-[2.25rem] rounded-bl-[7rem] bg-white shadow-soft ring-1 ring-white/60">
            <img
              src="/images/hero-students.png"
              alt={HERO_CONTENT.imageAlt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/[0.22] via-transparent to-transparent" />
          </div>
          <div className="absolute -left-2 top-8 max-w-[14rem] rounded-[1.35rem] bg-white p-4 text-sm font-semibold text-ink shadow-soft ring-1 ring-ink/5 sm:-left-8">
            <p className="text-xs uppercase tracking-[0.16em] text-ink/45">WhatsApp</p>
            <p className="mt-1">Hola, busco algo cerca de mi uni.</p>
            <p className="mt-2 inline-flex rounded-full bg-coral px-3 py-1 text-xs">Te ayudamos hoy</p>
          </div>
          <div className="absolute -bottom-6 right-3 grid gap-2 rounded-[1.5rem] bg-ink p-4 text-sm font-bold text-white shadow-soft ring-1 ring-white/10 sm:right-8">
            <span>Cerca de tu universidad</span>
            <span className="text-coral">Opciones para estudiantes</span>
            <span>Atención personalizada</span>
          </div>
          <div aria-hidden="true" className="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-white/[0.55]" />
        </div>
      </div>
    </section>
  );
}
