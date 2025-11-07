// src/AppB.jsx
import HeaderB from "./components/HeaderB";
import HeroB from "./components/HeroB";
import WorksB from "./components/WorksB";
import { ContactSection } from "./components/ContactB";
import { FooterB } from "./components/FooterB";

export default function AppB() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] antialiased">
      <HeaderB />

      <main className="pt-24 px-6">
        {/* Heroセクション */}
        <HeroB />

        {/* Worksセクション */}
        <WorksB />

        {/* Contactセクション */}
        <ContactSection />


        {/* Footerセクション */}
        <FooterB />
      </main>
    </div>

  );
}
