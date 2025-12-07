// src/components/AboutB.jsx
import { useState } from "react";
import { Menu, ArrowLeft, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

/* X ロゴ */
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function AboutB({ onBack }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#444]">

      {/* ===========================
          HEADER
      ============================ */}
      <header
        style={{
          backgroundColor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        className="fixed top-0 left-0 w-full z-50 border-b border-white/40"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

          <Link
            to="/"
            className="font-mincho text-[#147C88] text-lg md:text-xl tracking-wide"
            translate="no"
          >
            RYAN.CHRONICLE
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#147C88]"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <nav className="hidden md:flex gap-8 text-[#147C88] text-sm font-medium">
            <Link to="/" translate="no" className="hover:text-[#0f5d68]">Works</Link>
            <Link to="/about" translate="no" className="hover:text-[#0f5d68]">About</Link>
            <a href="/contact#form" translate="no" className="hover:text-[#0f5d68]">Contact</a>
          </nav>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-white/50">
            <nav className="flex flex-col items-center gap-4 py-6 text-[#147C88] text-base">
              <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-[#0f5d68]">Works</Link>
              <Link onClick={() => setIsOpen(false)} to="/about" className="hover:text-[#0f5d68]">About</Link>
              <a onClick={() => setIsOpen(false)} href="/contact#form" className="hover:text-[#0f5d68]">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* ===========================
          MAIN
      ============================ */}
      <main className="pt-32 pb-32 px-6 max-w-5xl mx-auto space-y-32">

        {/* PROFILE SECTION */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 items-start">

            {/* LEFT */}
            <div className="space-y-8 md:pr-6">

              <h2 className="text-[20px] font-medium text-[#444]" translate="no">
                人の想いを、映像で残す。
              </h2>

              <p className="text-[15px] leading-[1.9] text-[#555]">
                台湾への留学をきっかけに映像制作を始めました。
                台湾での暮らしや旅を通して、映像が人と人をつなぐ力を強く実感し、
                多様な文化や価値観に触れた日々は、私の映像制作の原点です。
                <br /><br />
                <span translate="no">CHRONICLE</span>（クロニクル）の名のもと、
                映像を通して人の想いに寄り添い、記憶を未来へ残すことを大切にしています。
                <br /><br />
                現在は北海道を拠点に、ドキュメンタリー、PR映像、音楽作品など、
                多様な表現に挑戦しています。
              </p>

              {/* 名前・SNS・フォームブロック */}
              <div className="space-y-4" translate="no">

                {/* 名前 */}
                <div>
                  <p className="text-[15px] text-[#147C88] font-medium">Video Creator</p>

                  <p className="text-[22px] font-serif text-[#333] flex items-baseline">
                    伊東 良介
                    <span className="text-[15px] font-serif text-[#777] ml-[0.55em]">
                      Ryosuke Ito
                    </span>
                  </p>
                </div>

                {/* SNS */}
                <div className="flex gap-4">
                  <IconLink href="https://www.instagram.com/ryan.chronicle/">
                    <Instagram size={16} />
                  </IconLink>

                  <IconLink href="https://youtube.com/@ryan_chronicle">
                    <Youtube size={16} />
                  </IconLink>

                  <IconLink href="https://x.com/ryanchroniclejp">
                    <XIcon />
                  </IconLink>
                </div>

                {/* 問い合わせ */}
                <Link
                  to="/contact#form"
                  className="group inline-flex items-center gap-2 text-[#147C88] text-[15px]"
                >
                  <span className="text-[17px] group-hover:translate-x-[3px] transition">▶︎</span>
                  <span className="group-hover:opacity-80 transition">お問い合わせフォームへ</span>
                </Link>
              </div>
            </div>

            {/* RIGHT PHOTO */}
            <div className="flex justify-end">
              <img
                src="/src/assets/ryan.jpg"
                alt="Ryosuke Ito"
                className="w-full max-w-[400px] rounded-md object-cover shadow-[0_8px_24px_rgba(0,0,0,0.13)]"
              />
            </div>

          </div>
        </section>

        <Divider />

        {/* Biography */}
        <section className="space-y-10 max-w-3xl mx-auto">
          <SectionTitle translate="no">Biography</SectionTitle>

          <p className="text-[15px] text-[#555] leading-[1.9] space-y-3">
            1989年生まれ / 栃木県出身 / 北海道江別市在住
            <br />趣味 : 旅行 / ギター / 筋トレ / 登山
            <br />特技 : 中国語(台湾華語)会話 / 映像・写真撮影
          </p>

          <div className="text-[15px] text-[#555] leading-[1.9] space-y-6">
            <YearBlock year="2011 - 2018">約8年介護職に従事。</YearBlock>
            <YearBlock year="2019 - 2021">台湾へワーホリ。</YearBlock>
            <YearBlock year="2021">国立台湾芸術大学 入学。</YearBlock>
            <YearBlock year="2023">PR動画制作、SNSマーケ担当。</YearBlock>
            <YearBlock year="2024">ドキュメンタリー・MV制作。</YearBlock>
            <YearBlock year="2025">帰国後、北海道で活動開始。</YearBlock>
          </div>
        </section>

        <Divider />

        {/* Values */}
        <section className="space-y-12 max-w-3xl mx-auto">
          <SectionTitle translate="no">Core Values</SectionTitle>

          <ValueItem number="01" title="Honoring Emotions with Care">
            背景や感情に向き合い、その想いが映像に宿るよう制作しています。
          </ValueItem>

          <ValueItem number="02" title="Learning from Diverse Cultures">
            台湾で得た価値観を基に、柔軟な表現を追求しています。
          </ValueItem>

          <ValueItem number="03" title="Creating Memories That Last">
            心に残る記録を未来へ受け渡す映像制作を続けています。
          </ValueItem>
        </section>

        <Divider />

        {/* Gear */}
        <section className="space-y-10 max-w-3xl mx-auto">
          <SectionTitle translate="no">Gear & Software</SectionTitle>

          <ul className="space-y-2">
            <ListItem>FUJIFILM X-H2</ListItem>
            <ListItem>XF 18-55mm F2.8-4</ListItem>
            <ListItem>Tokina ATX-M 33mm F1.4</ListItem>
            <ListItem>DJI Mavic 3 Pro</ListItem>
            <ListItem>DaVinci Resolve</ListItem>
            <ListItem>Premiere Pro</ListItem>
          </ul>
        </section>

        <div className="pt-20">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#444] hover:opacity-70 transition text-[15px]"
          >
            <ArrowLeft className="h-5 w-5" />
            戻る
          </button>
        </div>

      </main>
    </div>
  );
}

/* ===========================
   SMALL COMPONENTS
=========================== */

function IconLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        w-7 h-7 flex items-center justify-center
        rounded-full border border-[#147C88]/30
        text-[#147C88]/70 bg-white/5 backdrop-blur-sm
        hover:text-[#147C88] hover:border-[#147C88]
        transition
      "
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-[22px] font-medium pb-2 relative text-[#444]" translate="no">
      {children}
      <span className="block h-[2px] bg-[#147C88]/50 mt-1 w-0 animate-underlineExpand"></span>
    </h2>
  );
}

function Divider() {
  return <div className="h-px bg-[#eee]" />;
}

function YearBlock({ year, children }) {
  return (
    <div>
      <p className="font-medium text-[#147C88]" translate="no">{year}</p>
      <p>{children}</p>
    </div>
  );
}

function ValueItem({ number, title, children }) {
  return (
    <div className="relative" translate="no">
      <span className="absolute left-0 top-0 text-[44px] text-[#e5e5e5] font-light -translate-y-3">
        {number}
      </span>

      <div className="pl-14 md:pl-16">
        <h3 className="font-medium text-[17px] mb-2 text-[#444]">{title}</h3>
        <p className="text-[15px] leading-[1.9] text-[#555]">{children}</p>
      </div>
    </div>
  );
}

function ListItem({ children }) {
  return (
    <li className="text-[#147C88] hover:underline" translate="no">
      {children}
    </li>
  );
}
