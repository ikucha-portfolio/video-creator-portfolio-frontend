// src/components/AboutB.jsx
import { ArrowLeft, Camera, Monitor, Mail, Instagram, Youtube } from "lucide-react";

// X（旧Twitter）アイコン
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// 共通 Button（角丸なし）
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`
      bg-[#89C4E1] text-white 
      px-8 py-4 text-[15px]
      shadow-md hover:bg-[#7ABAD7] 
      transition-all duration-300
      flex items-center justify-center
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

// 共通 Card（角丸なし）
const Card = ({ children, className = "" }) => (
  <div className={`bg-white border border-[#DDD] shadow-sm p-6 ${className}`}>
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
      description: "中国語を学びながら、現地の映像制作会社でインターン経験",
    },
    {
      year: "2019 - 2021",
      title: "映像制作の基礎を学ぶ",
      description: "独学で動画編集を開始。YouTubeチャンネル運営でスキルを磨く",
    },
  ];

  const values = [
    {
      title: "誠実さ",
      description: "お客様の想いを大切に、期待以上の作品を届けることを約束します。",
    },
    {
      title: "柔軟性",
      description: "駆け出しだからこそ、ご要望に合わせて柔軟に対応できます。",
    },
    {
      title: "成長意欲",
      description: "常に新しい技術を学び、より良い作品づくりに挑戦し続けます。",
    },
  ];

  const equipment = [
    {
      icon: Camera,
      category: "撮影機材",
      items: [
        "Sony α7 IV",
        "DJI Ronin-S（ジンバル）",
        "各種レンズ（単焦点・ズーム）",
        "RODE VideoMic Pro+",
        "ZOOM H6（レコーダー）",
        "照明機材一式",
      ],
    },
    {
      icon: Monitor,
      category: "編集ソフト",
      items: [
        "Premiere Pro / After Effects",
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
    <div className="min-h-screen bg-[#FAFAFA] text-gray-800">
      {/* ==== 戻るボタン ==== */}
      <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-md border-b border-gray-200 z-50">
        <div className="px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition" />
            戻る
          </button>
        </div>
      </header>

      <main className="pt-28 pb-20 space-y-20">

        {/* ==== プロフィール ==== */}
        <section className="px-6 max-w-xl mx-auto text-center fade-in show">
          <p className="text-sm tracking-[0.2em] text-gray-400 mb-2">ABOUT ME</p>
          <h1 className="text-3xl font-semibold mb-8">制作者について</h1>

          <img
            src="https://images.unsplash.com/photo-1638545818407-ac7a54b544fd?auto=format&fit=crop&w=1080&q=80"
            alt="制作者"
            className="w-full shadow-md object-cover zoom show"
          />

          <h2 className="text-2xl font-semibold mt-8">田中 美咲</h2>
          <p className="text-[#89C4E1] text-lg mb-6">Video Creator</p>

          <div className="text-left space-y-4 leading-relaxed text-gray-700">
            <p>はじめまして。駆け出しの動画クリエイターとして活動しています。</p>
            <p>
              台湾での留学経験を通じ、多様な文化や価値観に触れ、
              映像を通じて“想いを伝えること”の大切さを学びました。
            </p>
            <p>日本語・中国語での対応が可能です。</p>
          </div>
        </section>

        {/* ==== 経歴 ==== */}
        <section className="px-6 max-w-xl mx-auto fade-in show">
          <h2 className="text-2xl font-semibold mb-2">経歴</h2>
          <p className="text-gray-500 mb-8">これまでの歩み</p>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <Card key={i} className="hover-lift">
                <p className="text-[#89C4E1] font-medium">{exp.year}</p>
                <h3 className="text-lg font-semibold mt-1">{exp.title}</h3>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ==== 大切にしていること ==== */}
        <section className="px-6 max-w-xl mx-auto fade-in show">
          <h2 className="text-2xl font-semibold mb-2">大切にしていること</h2>
          <p className="text-gray-500 mb-8">制作における価値観</p>

          <div className="space-y-6">
            {values.map((v, i) => (
              <Card key={i} className="hover-lift">
                <div className="w-12 h-1 bg-[#89C4E1] mb-4"></div>
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="text-gray-600 mt-2">{v.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ==== 使用機材 ==== */}
        <section className="px-6 max-w-xl mx-auto fade-in show">
          <h2 className="text-2xl font-semibold mb-2">使用機材・ソフト</h2>
          <p className="text-gray-500 mb-8">制作で使用している機材とソフトウェア</p>

          <div className="space-y-8">
            {equipment.map((eq, i) => {
              const Icon = eq.icon;
              return (
                <Card key={i} className="hover-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E6F4FA] flex items-center justify-center">
                      <Icon className="text-[#89C4E1] h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{eq.category}</h3>
                  </div>

                  <ul className="text-gray-600 space-y-2 ml-2">
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
        <section className="px-6 max-w-xl mx-auto text-center fade-in show">

          <h3 className="text-2xl font-semibold mb-4">
            一緒に素敵な映像を作りましょう
          </h3>

          <p className="text-gray-600 mb-10 leading-relaxed">
            ご相談やお見積もりは無料です。
            <br />お気軽にお問い合わせください。
          </p>

          <Button className="mx-auto w-full max-w-sm hover-lift">
            <Mail className="h-5 w-5 mr-2" />
            お問い合わせフォームへ
          </Button>

          {/* SNS */}
          <div className="mt-12">
            <p className="text-gray-500 mb-4">SNSでもつながりましょう</p>

            <div className="flex justify-center gap-6">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    className="
                      w-12 h-12 border border-[#CCC] 
                      flex items-center justify-center 
                      hover:border-[#89C4E1] hover-lift
                    "
                  >
                    <Icon className="text-gray-500" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 戻るボタン */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <button
              onClick={onBack}
              className="
                border-2 border-gray-700 px-6 py-3 
                hover:bg-gray-700 hover:text-white 
                transition flex items-center gap-2 mx-auto hover-lift
              "
            >
              <ArrowLeft className="h-4 w-4" />
              トップページに戻る
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
