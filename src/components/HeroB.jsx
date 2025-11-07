import { Play } from "lucide-react";

const Arrow = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export default function HeroB() {
  return (
    <section
      className="
        pt-6 pb-16
        bg-[linear-gradient(180deg,rgba(250,249,246,0.9),rgba(255,255,255,0.95))]
        supports-[backdrop-filter]:backdrop-blur-[2px]
      "
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* ===== HERO画像 ===== */}
        <div className="overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
            alt="Portfolio visual"
            className="w-full h-[420px] sm:h-[480px] md:h-[540px] object-cover object-center"
          />
        </div>

        {/* ===== テキスト ===== */}
        <div className="mt-8">
          <p
            translate="no"
            className="text-xs tracking-[0.3em] text-gray-500 uppercase"
          >
            VIDEO CREATOR
          </p>

          <h1 className="mt-3 text-[clamp(28px,4.5vw,38px)] leading-snug font-medium text-[#222]">
            心に残る瞬間を、<br />
            映像に。
          </h1>

          <p className="mt-4 text-[15px] leading-8 text-[#555]">
            駆け出しの動画クリエイターとして、<br />
            あなたの想いを丁寧に形にします。<br />
            <span className="text-[14px] text-[#333]/80">
              日本語・中国語対応可能
            </span>
          </p>
        </div>

        {/* ===== CTAボタン群 ===== */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-start gap-3 md:gap-5">
          {/* 作品を見る */}
          <a
            href="#works"
            className="group flex items-center justify-center gap-2 bg-[#1A1A1A] text-white text-[15px] font-medium
                       h-[42px] px-8 rounded-none shadow-[0_3px_10px_rgba(0,0,0,0.1)]
                       hover:bg-[#2E2E2E] active:scale-[0.98]
                       transition-all duration-300 ease-in-out"
          >
            作品を見る
            <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* お問い合わせ */}
          <a
            href="#contact"
            className="flex items-center justify-center border-[1.5px] border-[#1A1A1A] text-[#1A1A1A] text-[15px] font-medium
                       h-[42px] px-8 rounded-none
                       hover:bg-[#1A1A1A] hover:text-white active:scale-[0.98]
                       transition-all duration-300 ease-in-out"
          >
            お問い合わせ
          </a>
        </div>

        {/* ===== 制作者リンク ===== */}
        <div className="mt-10 md:mt-14 text-[#666] text-sm md:text-base font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300 cursor-pointer">
          制作者について詳しく <Arrow className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
