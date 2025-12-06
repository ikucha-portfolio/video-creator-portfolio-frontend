import { Link } from "react-router-dom";
import logo from "/src/assets/logo1.png";   // ★ ここを logo1.png に変更！

export default function HeroB() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* 背景動画 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-cover.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 暗めフィルター */}
      <div className="absolute inset-0 bg-black/35" />

      {/* ===== コピー＋ロゴ（左端ガイド適用） ===== */}
      <div className="relative z-10 h-full w-full px-6 flex flex-col justify-center text-white">

        {/* ▼ ここを“ガイドコンテナ”に変更（全要素の左端が必ず一致） */}
        <div className="pl-[4.5rem] md:pl-[7rem] w-fit">

          {/* ---------- ロゴ + VIDEO CREATOR ---------- */}
          <div className="flex items-center gap-[4px] mb-[4px]" translate="no">
            <img
              src={logo}
              alt="Ryan Chronicle Logo"
              className="w-[56px] h-auto opacity-95 drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
            />

            <p
              className="
                text-[13px]
                tracking-[0.16em]
                opacity-90
                font-semibold
                relative top-[2px]
              "
            >
              VIDEO CREATOR
            </p>
          </div>

          {/* ---------- キャッチコピー（ガイドと完全揃え） ---------- */}
          <h1
            className="
              text-[clamp(32px,5vw,48px)]
              leading-tight
              font-serif
              -translate-x-[3px]   /* ← 文字ズレ補正 */
            "
          >
            人の想いを、<br />
            映像に。
          </h1>

          {/* ---------- 本文 ---------- */}
          <p className="mt-4 text-[16px] leading-8 opacity-90 font-serif">
            動画クリエイターとして、<br />
            あなたの想いを丁寧に形にします。<br />
            <span className="text-[14px] opacity-90">
              日本語・中国語対応可能
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}
