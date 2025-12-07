import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import heroCover from "../assets/videos/hero-cover.mp4";
import heroMobile from "../assets/videos/hero-mobile.mp4";

export default function HeroB() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* PC用背景動画 */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        src={heroCover}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* スマホ用背景動画 */}
      <video
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        src={heroMobile}
        autoPlay
        muted
        loop
        playsInline
      />


      {/* フィルター（読みやすさUP） */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/35" />

      {/* =============================
          テキストレイヤー
      ============================== */}
      <div
        className="
          relative z-10 h-full w-full
          px-6
          flex flex-col justify-center
          text-white
        "
      >
        <div
          className="
            w-full
            text-left                     /* スマホも左寄せ（洗練） */
            md:pl-[7rem]                  /* PC：左ガイド揃え */
          "
        >

          {/* ---------- ロゴ & ラベル ---------- */}
          <div
            className="
              flex flex-col md:flex-row
              items-start md:items-center
              gap-[4px]
              mb-5 md:mb-[4px]
            "
            translate="no"
          >
            <img
              src={logo}
              alt="Ryan Chronicle Logo"
              className="
                w-[40px] md:w-[56px]
                h-auto
                opacity-95
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]
              "
            />
            <p
              className="
                text-[11px] md:text-[13px]
                tracking-[0.22em]
                opacity-90
                font-semibold
                mt-2 md:mt-0
              "
            >
              VIDEO CREATOR
            </p>
          </div>

          {/* ---------- キャッチコピー ---------- */}
          <h1
            className="
              font-serif
              leading-tight
              text-[22px] md:text-[clamp(32px,5vw,48px)]
              mb-5
            "
          >
            人の想いを、<br className="md:hidden" />
            映像に。
          </h1>

          {/* ---------- 本文 ---------- */}
          <p
            className="
              font-serif
              text-[13px] md:text-[16px]
              leading-[1.8]
              opacity-90
            "
          >
            動画クリエイターとして、<br className="md:hidden" />
            あなたの想いを丁寧に形にします。
            <br />
            <span className="text-[11px] md:text-[14px] opacity-80">
              日本語・中国語対応可能
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}
