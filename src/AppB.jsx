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
        bg-black        /* 最初の背景。ここは何色でも OK、動画の裏になるだけ */
      "
    >
      {/* ヘッダー（グラデ背景の上に重なる） */}
      <HeaderB />

      {/* ここは背景なしで OK：Hero の動画は独立 */}
      <HeroB />

      {/* ここから下が “統一グラデーション背景” */}
      <main
        className="
          text-white-theme
          bg-[linear-gradient(to_bottom_left,var(--grad-top),var(--grad-2),var(--grad-3),var(--grad-4),var(--grad-bottom))]
          pb-16
        "
      >
        <WorksB />
        <ContactSection />
        <FooterB />
      </main>
    </div>
  );
}
