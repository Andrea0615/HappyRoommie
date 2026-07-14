import { TRUST_CONTENT } from "@/config/content";

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#FDD76C_20%,#FFE48E_78%,#FFF9EE_100%)] py-16 sm:py-20">
      <div aria-hidden="true" className="absolute left-10 top-8 hidden h-20 w-20 rounded-full border-[14px] border-white/50 md:block" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-black leading-tight text-ink sm:text-4xl">
            {TRUST_CONTENT.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-ink/70">
            {TRUST_CONTENT.text}
          </p>
        </div>

        <div className="flex flex-wrap content-center gap-3">
          {TRUST_CONTENT.indicators.map((indicator) => (
            <span
              key={indicator}
              className="rounded-full border border-ink/10 bg-white/80 px-5 py-2.5 text-sm font-bold text-ink/75 shadow-[0_10px_24px_-22px_rgba(10,42,92,0.28)]"
            >
              {indicator}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
