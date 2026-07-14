import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import StudentSection from "@/components/StudentSection";
import ParentSection from "@/components/ParentSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <StudentSection />
        <ParentSection />
        <BenefitsSection />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <MobileStickyCTA />
    </>
  );
}
