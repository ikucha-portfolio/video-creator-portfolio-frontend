// src/components/AboutB.jsx
import { useEffect, useState } from "react";
import { Menu, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/* =======================================================
      ABOUT PAGE — WHITE HEADER VERSION（B案）
======================================================== */
export default function AboutB({ onBack }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#444]">

      {/* =======================================================
          WHITE HEADER（B案）
      ======================================================= */}
      <header
        className="
          fixed top-0 left-0 w-full z-50
          bg-white
          border-b border-[#eee]
          shadow-[0_1px_3px_rgba(0,0,0,0.03)]
        "
      >
        <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

          {/* Logo（浅葱色） */}
          <Link
            to="/"
            className="font-mincho text-[#147C88] text-lg md:text-xl tracking-wide"
            translate="no"
          >
            RYAN.CHRONICLE
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#147C88]"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-[#147C88] text-sm font-medium">
            <Link to="/" className="hover:text-[#0f5d68]" translate="no">
              Works
            </Link>
            <Link to="/about" className="hover:text-[#0f5d68]" translate="no">
              About
            </Link>
            <a href="/#contact" className="hover:text-[#0f5d68]" translate="no">
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-[#eee] bg-white">
            <nav className="flex flex-col items-center gap-4 py-6 text-[#147C88] text-base">
              <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-[#0f5d68]">
                Works
              </Link>
              <Link onClick={() => setIsOpen(false)} to="/about" className="hover:text-[#0f5d68]">
                About
              </Link>
              <a
                onClick={() => setIsOpen(false)}
                href="/#contact"
                className="hover:text-[#0f5d68]"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* =======================================================
          MAIN CONTENT
      ======================================================= */}
      <main className="pt-32 pb-32 px-6 max-w-5xl mx-auto space-y-32">

        {/* =======================================================
            PROFILE：左テキスト × 右写真
        ======================================================= */}
        <section className="scroll-rise">
          <div className="grid grid-cols-1 md:grid-cols-[1.38fr_1fr] gap-8 md:gap-10 items-start max-w-6xl mx-auto">
            
            {/* LEFT TEXT */}
            <div className="space-y-7 md:pr-4">

              <h2 className="text-[20px] font-medium text-[#444] leading-relaxed">
                人の想いを、映像で残す。
              </h2>

              <p className="text-[15px] leading-[1.9] text-[#555] space-y-6">
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

              <div className="pt-2 space-y-1" translate="no">
                <p className="text-[15px] text-[#89C4E1] font-medium">Video Creator</p>

                <p className="text-[22px] font-serif text-[#333] flex items-baseline">
                  伊東 良介
                  <span className="text-[15px] font-serif text-[#777] ml-[0.55em]">Ryosuke Ito</span>
                </p>
              </div>

            </div>

            {/* RIGHT PHOTO */}
            <div className="flex justify-end fade-up">
              <img
                src="/src/assets/ryan.jpg"
                alt="Ryosuke Ito"
                className="
                  w-full max-w-[380px] md:max-w-[400px]
                  object-cover rounded-md
                  shadow-[0_8px_24px_rgba(0,0,0,0.13)]
                "
              />
            </div>

          </div>
        </section>

        <Divider />

        {/* =======================================================
            Biography
        ======================================================= */}
        <section className="space-y-10 max-w-3xl mx-auto">
          <SectionTitle translate="no">Biography</SectionTitle>

          <div className="text-[15px] text-[#555] leading-[1.85] space-y-3">
            <p>1989年生まれ / 栃木県出身 / 北海道江別市在住</p>
            <p>趣味 : 旅行 / ギター / 筋トレ / 登山</p>
            <p>特技 : 中国語(台湾華語)会話 / 映像・写真撮影</p>
          </div>

          <div className="text-[15px] text-[#555] leading-[1.9] space-y-6">
            <YearBlock year="2011 - 2018">
              約8年介護職に従事。ギター弾き語りでの旅を経験。
              台湾旅行で文化に触れ、興味を持つ。
            </YearBlock>

            <YearBlock year="2019 - 2021">
              台湾へワーホリ。語学と映像に没頭。
            </YearBlock>

            <YearBlock year="2021">
              国立台湾芸術大学 ラジオ・テレビ学科 入学。
            </YearBlock>

            <YearBlock year="2023">
              イベントPR動画制作。
              台北の日系企業でSNSマーケティング・動画制作を担当。
            </YearBlock>

            <YearBlock year="2024">
              ドキュメンタリー作品、MV作品など多数制作。
            </YearBlock>

            <YearBlock year="2025">
              大学卒業後、日本へ帰国し北海道で活動開始。
            </YearBlock>
          </div>
        </section>

        <Divider />

        {/* =======================================================
            Core Values
        ======================================================= */}
        <section className="space-y-12 max-w-3xl mx-auto">
          <SectionTitle translate="no">Core Values</SectionTitle>

          <div className="space-y-16">
            <ValueItem number="01" title="Honoring Emotions with Care">
              背景や感情に向き合い、その想いが自然に映像へ宿るよう制作しています。
            </ValueItem>

            <ValueItem number="02" title="Learning from Diverse Cultures">
              台湾で得た価値観を大切にし、柔軟な表現を追求しています。
            </ValueItem>

            <ValueItem number="03" title="Creating Memories That Last">
              <span translate="no">Chronicle</span> として、心に残る記録を未来へ受け渡す映像を作り続けています。
            </ValueItem>
          </div>
        </section>

        <Divider />

        {/* =======================================================
            Gear & Software
        ======================================================= */}
        <section className="space-y-10 max-w-3xl mx-auto">
          <SectionTitle translate="no">Gear & Software</SectionTitle>

          <div className="text-[15px] text-[#555] leading-[1.9] space-y-6">

            <h3 className="font-medium text-[17px] mt-4" translate="no">Camera Gear</h3>

            <ul className="space-y-3" translate="no">
              <ListItem>FUJIFILM X-H2</ListItem>
              <ListItem>FUJIFILX-T3</ListItem>
              <ListItem>XF 18-55mm F2.8-4</ListItem>
              <ListItem>Tokina ATX-M 33mm F1.4</ListItem>
              <ListItem>TAMRON 18-300mm</ListItem>
              <ListItem>Viltrox 13mm F1.4</ListItem>
              <ListItem>NiSi TRUE COLOR VND</ListItem>
              <ListItem>Black Mist No.05</ListItem>
              <ListItem>DJI Mavic 3 Pro</ListItem>
              <ListItem>DJI RSC 2</ListItem>
              <ListItem>Ulanzi F38 Tripod</ListItem>
              <ListItem>TASCAM X8</ListItem>
              <ListItem>ZOOM M3 MicTrak</ListItem>
              <ListItem>AnkerWork M650</ListItem>
              <ListItem>Ulanzi VL120 RGB Light</ListItem>
            </ul>

            <h3 className="font-medium text-[17px] mt-10" translate="no">Software</h3>

            <ul className="space-y-2" translate="no">
              <li>Premiere Pro</li>
              <li>DaVinci Resolve</li>
              <li>After Effects</li>
              <li>Lightroom Classic</li>
              <li>Photoshop</li>
            </ul>

          </div>
        </section>

        {/* =======================================================
            RETURN BUTTON
        ======================================================= */}
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

/* =======================================================
      SMALL COMPONENTS
======================================================== */

function SectionTitle({ children }) {
  return (
    <h2 className="text-[22px] font-medium relative pb-2 text-[#444]" translate="no">
      {children}
      <span className="block h-[2px] bg-[#89C4E1]/60 mt-1 w-0 animate-underlineExpand"></span>
    </h2>
  );
}

function Divider() {
  return <div className="h-px bg-[#eee]" />;
}

function YearBlock({ year, children }) {
  return (
    <div>
      <p className="font-medium text-[#89C4E1]" translate="no">{year}</p>
      <p>{children}</p>
    </div>
  );
}

function ValueItem({ number, title, children }) {
  return (
    <div className="relative">
      <span
        className="
          absolute left-0 top-0
          text-[44px] md:text-[52px]
          text-[#e5e5e5]
          font-light leading-none
          -translate-y-3 tracking-tight select-none
        "
        translate="no"
      >
        {number}
      </span>

      <div className="pl-14 md:pl-16">
        <h3 className="font-medium text-[17px] mb-2 text-[#444]" translate="no">{title}</h3>
        <p className="text-[15px] leading-[1.9] text-[#555]">{children}</p>
      </div>
    </div>
  );
}

function ListItem({ children }) {
  return (
    <li className="text-[#89C4E1] hover:underline" translate="no">{children}</li>
  );
}
