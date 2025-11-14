// src/components/AboutB.jsx
import {
  ArrowLeft,
  Camera,
  Monitor,
  Mail,
  Instagram,
  Youtube,
} from "lucide-react";

// X（旧Twitter）
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Hero 準拠：角丸なし Button
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`
      bg-[#89C4E1] text-white 
      px-8 py-4 text-[15px]
      shadow-md hover:bg-[#7ABAD7]
      transition-all duration-300
      flex items-center justify-center
      rounded-none
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

// Hero 準拠：角丸なし Card
const Card = ({ children, className = "" }) => (
  <div
    className={`
      bg-white border border-[#E5E5E5]
      p-6 shadow-sm
      rounded-none
      ${className}
    `}
  >
    {children}
  </div>
);

export default function AboutB({ onBack }) {
  const experience = [
    {
      year: "2023 - 現在",
      title: "フリーランス動画クリエイター",
      description: "企業PV、イベント撮影、プロモーション動画などを制作",
    },
    {
      year: "2021 - 2023",
      title: "台湾・国立台湾大学 留学",
      description: "中国語を学びつつ、現地の映像制作会社でインターン",
    },
    {
      year: "2019 - 2021",
      title: "映像制作の基礎を学ぶ",
      description: "独学で動画編集開始。YouTube運営でスキルを磨く",
    },
  ];

  const values = [
    {
      title: "誠実さ",
      description:
        "お客様の想いを大切に、期待以上の作品を届けることを心がけています。",
    },
    {
      title: "柔軟性",
      description:
        "駆け出しだからこそ、ご要望に合わせ柔軟に対応できます。",
    },
    {
      title: "成長意欲",
      description:
        "常に技術を学び、より良い表現を目指して作品づくりを行っています。",
    },
  ];

  const equipment = [
    {
      icon: Camera,
      category: "撮影機材",
      items: [
        "Sony α7 IV",
        "DJI Ronin-S（ジンバル）",
        "単焦点 / ズームレンズ",
        "RODE Video Mic",
        "ZOOM H6",
        "照明機材一式",
      ],
    },
    {
      icon: Monitor,
      category: "編集ソフト",
      items: [
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "DaVinci Resolve",
        "Photoshop / Illustrator",
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram },
    { name: "YouTube", icon: Youtube },
    { name: "X", icon: XIcon },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#222]">

      {/* ==== Header ==== */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-[#E5E5E5] z-50">
        <div className="px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#222] hover:opacity-70 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Top Pageへ
          </button>
        </div>
      </header>

      <main className="pt-28 pb-20 space-y-20">

        {/* ==== プロフィール ==== */}
        <section className="px-6 max-w-xl mx-auto text-center">
          <p className="text-[#555] tracking-[0.2em] text-sm mb-2">
            ABOUT ME
          </p>

          <h1 className="text-[28px] font-medium text-[#222] mb-8">
            制作者について
          </h1>

          <img
            src="https://images.unsplash.com/photo-1638545818407-ac7a54b544fd?auto=format&fit=crop&w=1080&q=80"
            className="w-full shadow-[0_6px_20px_rgba(0,0,0,0.1)] object-cover rounded-none"
          />

          <h2 className="text-2xl font-medium text-[#222] mt-8">田中 美咲</h2>

          <p className="text-[#89C4E1] text-lg mb-6">Video Creator</p>

          <div className="text-left space-y-4 leading-relaxed">
            <p className="text-[#555]">
              駆け出しの動画クリエイターとして活動しています。
            </p>
            <p className="text-[#555]">
              台湾留学を通じて多様な価値観に触れ、映像で想いを伝える大切さを学びました。
            </p>
            <p className="text-[#555]">日本語・中国語対応可能です。</p>
          </div>
        </section>

        {/* ==== 経歴 ==== */}
        <section className="px-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-medium text-[#222] mb-2">経歴</h2>
          <p className="text-[#555] mb-8">これまでの歩み</p>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <Card key={i}>
                <p className="text-[#89C4E1] font-medium">{exp.year}</p>
                <h3 className="text-lg font-medium text-[#222] mt-1">
                  {exp.title}
                </h3>
                <p className="text-[#555] mt-2">{exp.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ==== 価値観 ==== */}
        <section className="px-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-medium text-[#222] mb-2">大切にしていること</h2>
          <p className="text-[#555] mb-8">制作における価値観</p>

          <div className="space-y-6">
            {values.map((v, i) => (
              <Card key={i}>
                <div className="w-12 h-1 bg-[#89C4E1] mb-4" />
                <h3 className="text-lg font-medium text-[#222]">{v.title}</h3>
                <p className="text-[#555] mt-2">{v.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ==== 使用機材 ==== */}
        <section className="px-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-medium text-[#222] mb-2">使用機材・ソフト</h2>
          <p className="text-[#555] mb-8">制作で使用している機材</p>

          <div className="space-y-8">
            {equipment.map((eq, i) => {
              const Icon = eq.icon;
              return (
                <Card key={i}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E6F4FA] flex items-center justify-center rounded-none">
                      <Icon className="text-[#89C4E1] h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-[#222]">
                      {eq.category}
                    </h3>
                  </div>

                  <ul className="text-[#555] space-y-2 ml-2">
                    {eq.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ==== お問い合わせ ==== */}
<section
  className="relative py-20 lg:py-24 px-6 max-w-3xl mx-auto text-center bg-[#FAFAFA]"
>
  {/* 青い仕切りライン（ホームと同じ） */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A9D7E8]/80 to-transparent" />

  {/* 見出し（文言そのまま） */}
  <h3 className="text-[clamp(26px,5vw,38px)] font-medium text-[#222] mb-6">
    一緒に素敵な映像を作りましょう
  </h3>

  <p className="text-[#555] text-[16px] leading-relaxed mb-10">
    ご相談やお見積もりは無料です。
    <br />
    お気軽にお問い合わせください。
  </p>

  {/* メインボタン（ホームと完全一致UI） */}
  <a
    href="#"
    className="
      inline-flex items-center justify-center gap-3
      bg-[#89C4E1] text-white text-[15px] font-medium
      py-3 px-10 rounded-sm shadow-md
      hover:bg-[#7ABAD7] hover:shadow-lg
      transition-all duration-300
    "
  >
    <Mail className="h-5 w-5" />
    お問い合わせフォームへ
  </a>

  {/* SNS */}
  <div className="mt-12">
    <p className="text-[#555] mb-6">SNSでもつながりましょう</p>

    <div className="flex justify-center gap-6">
      {socialLinks.map((s) => {
        const Icon = s.icon;
        return (
          <a
            key={s.name}
            href={s.url ?? "#"}
            className="
              w-12 h-12 border border-[#DDD]
              flex items-center justify-center
              hover:border-[#89C4E1]
              transition-all duration-300
              rounded-none
            "
          >
            <Icon className="text-[#555]" />
          </a>
        );
      })}
    </div>
  </div>

  {/* 仕切り＋戻る */}
  <div className="mt-16 pt-10 border-t border-[#E5E5E5]">
    <div className="px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#222] hover:opacity-70 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Top Pageへ
          </button>
        </div>
  </div>
</section>

      </main>
    </div>
  );
}
