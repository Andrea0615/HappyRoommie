import { FINAL_CTA_CONTENT } from "@/config/content";
import { WHATSAPP_DISPLAY } from "@/config/whatsapp";
import WhatsAppButton from "./WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFF9EE_0%,#FFFFFF_36%,#FFFFFF_100%)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#FDD76C_0%,#FFE48E_100%)] px-6 py-12 shadow-soft ring-1 ring-ink/5 sm:px-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-14 lg:py-16">
          <div aria-hidden="true" className="absolute -left-12 top-12 h-28 w-28 rounded-full bg-white/[0.55]" />
          <div aria-hidden="true" className="absolute bottom-8 left-1/2 hidden h-20 w-40 rounded-full border-[14px] border-ink/10 md:block" />
          <div className="relative">
            <p className="mb-4 inline-flex rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-ink">
              Atención personalizada por WhatsApp
            </p>
            <h2 className="max-w-2xl font-display text-4xl font-black leading-[1] text-ink sm:text-6xl">
              {FINAL_CTA_CONTENT.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-ink/[0.72]">
              {FINAL_CTA_CONTENT.text}
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton
                messageKey="general"
                analyticsEvent="whatsapp_click_final_cta"
                variant="primary"
                className="!px-9 !py-4 text-lg"
              >
                {FINAL_CTA_CONTENT.cta}
              </WhatsAppButton>
              <p className="text-sm font-black tracking-wide text-ink/[0.65]">
                WhatsApp: {WHATSAPP_DISPLAY}
              </p>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="mx-auto max-w-xs rounded-[2.2rem] border-[10px] border-ink bg-ink p-3 shadow-soft lg:translate-y-10">
              <div className="overflow-hidden rounded-[1.5rem] bg-sand p-4">
                <div className="mb-4 h-6 rounded-full bg-white" />
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-coral px-4 py-3 text-sm font-bold text-ink">
                  Hola, busco vivienda cerca de mi universidad.
                </div>
                <div className="mt-3 max-w-[86%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm font-semibold text-ink/75">
                  Claro. Cuéntanos ciudad, universidad y presupuesto.
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-ink/25" />
                  <span className="h-2 w-2 rounded-full bg-ink/25" />
                  <span className="h-2 w-2 rounded-full bg-ink/25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
