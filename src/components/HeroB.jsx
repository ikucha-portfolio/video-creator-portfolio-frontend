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
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* ===== 背景動画 ===== */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-cover.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ===== 暗めフィルター ===== */}
      <div className="absolute inset-0 bg-black/30" />

      {/* ===== コピー（調整済み） ===== */}
      <div className="relative z-10 h-full w-full px-6 pl-20 md:pl-32 flex flex-col justify-center text-white">
        <p className="text-xs tracking-[0.3em] opacity-80" translate="no">
          VIDEO CREATOR
        </p>

        <h1 className="mt-3 text-[clamp(32px,5vw,48px)] leading-snug font-serif">
          人の想いを、<br />
          映像に。
        </h1>

        <p className="mt-4 text-[16px] leading-8 opacity-90 font-serif">
          駆け出しの動画クリエイターとして、<br />
          あなたの想いを丁寧に形にします。<br />
          <span className="text-[14px] opacity-90">
            日本語・中国語対応可能
          </span>
        </p>
      </div>

      {/* ▼ ここにあった「左下CTA」は完全に削除しました */}

    </section>
  );
}
