import { Play } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">

      {/* ===== 背景動画 ===== */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-cover.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ===== 暗いフィルター ===== */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* ===== 中央テキスト & CTA ===== */}
      <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex flex-col justify-center">

        {/* テキスト */}
        <div className="font-serif text-white">
          <p
            translate="no"
            className="text-xs tracking-[0.3em] uppercase opacity-80"
          >
            VIDEO CREATOR
          </p>

          <h1 className="mt-3 text-[clamp(32px,5vw,48px)] leading-snug font-medium">
            心に残る瞬間を、<br />
            映像に。
          </h1>

          <p className="mt-4 text-[16px] leading-8 opacity-90">
            駆け出しの動画クリエイターとして、<br />
            あなたの想いを丁寧に形にします。<br />
            <span className="text-[14px] opacity-90">
              日本語・中国語対応可能
            </span>
          </p>
        </div>

        {/* CTAボタン群 */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-start gap-3 md:gap-5">

          {/* 作品ボタン */}
          <a
            href="#works"
            className="group flex items-center justify-center gap-2 bg-white/90 text-[#1A1A1A] text-[15px] font-medium
                       h-[42px] px-8 shadow-[0_3px_10px_rgba(0,0,0,0.1)]
                       hover:bg-white active:scale-[0.98]
                       transition-all duration-300 ease-in-out"
          >
            作品を見る
            <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* お問い合わせ */}
          <a
            href="#contact"
            className="flex items-center justify-center border-[1.5px] border-white text-white text-[15px] font-medium
                       h-[42px] px-8 hover:bg-white hover:text-[#1A1A1A] active:scale-[0.98]
                       transition-all duration-300 ease-in-out"
          >
            お問い合わせ
          </a>
        </div>

        {/* Aboutリンク */}
        <Link
          to="/about"
          className="mt-10 text-white/80 text-sm md:text-base font-medium flex items-center gap-1 hover:gap-2 transition-all duration-300 cursor-pointer"
          translate="no"
        >
          About <Arrow className="w-4 h-4" />
        </Link>
      </div>

    </section>
  );
}
