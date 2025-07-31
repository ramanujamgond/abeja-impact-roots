import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ImpactSection from "@/components/ImpactSection";
import CSRPartnerSection from "@/components/CSRPartnerSection";
import InvestSection from "@/components/InvestSection";
import DonateSection from "@/components/DonateSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatWeDoSection />
        <ImpactSection />
        <CSRPartnerSection />
        <InvestSection />
        <DonateSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
