import { STUDENT_CONTENT } from "@/config/content";
import WhatsAppButton from "./WhatsAppButton";

export default function StudentSection() {
  return (
    <section id="opciones-vivienda" className="scroll-mt-20 bg-[linear-gradient(180deg,#FFF9EE_0%,#FFF9EE_64%,#FFFFFF_100%)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] rounded-tr-[7rem] bg-white shadow-soft">
            <img
              src="/images/student-search.png"
              alt={STUDENT_CONTENT.imageAlt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <div className="absolute -bottom-8 left-6 max-w-sm rounded-[1.5rem] bg-white p-5 shadow-soft sm:left-10">
            <p className="font-display text-2xl font-black leading-tight text-ink">
              {STUDENT_CONTENT.imageCallout}
            </p>
          </div>
          <div aria-hidden="true" className="absolute -right-4 top-10 hidden h-28 w-28 rounded-full bg-coral md:block" />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
            {STUDENT_CONTENT.title}
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70">
            {STUDENT_CONTENT.text}
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {STUDENT_CONTENT.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink/75 shadow-card ring-1 ring-ink/5">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-ink"
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
              messageKey="studentDetailed"
              analyticsEvent="whatsapp_click_students"
              variant="primary"
            >
              {STUDENT_CONTENT.cta}
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
