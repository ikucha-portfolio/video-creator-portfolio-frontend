// src/AppB.jsx
import HeaderB from "./components/HeaderB";
import HeroB from "./components/HeroB";
import WorksB from "./components/WorksB";
import { ContactSection } from "./components/ContactB";
import { FooterB } from "./components/FooterB";

export default function AppB() {
  return (
    <div
      className="
        min-h-screen antialiased
        bg-[linear-gradient(to_bottom_left,var(--grad-top),var(--grad-2),var(--grad-3),var(--grad-4),var(--grad-bottom))]
      "
    >
      <HeaderB />

      <main className="pt-24 px-6">
        <HeroB />
        <WorksB />
        <ContactSection />
        <FooterB />
      </main>
    </div>
  );
}
