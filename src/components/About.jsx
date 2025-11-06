import React from "react";
export function AboutPage({ onBack }) {
  return (
    <div className="min-h-screen bg-[#FDFCFA] text-[#333]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-5">
          <button
            onClick={onBack}
            className="group relative text-primary hover:text-accent transition-all font-medium tracking-wide"
          >
            <span>← 戻る</span>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500"></div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-40">
        <div className="max-w-4xl mx-auto">
          {/* 見出し */}
          <h1 translate="no" className="text-center mb-20 text-[22px] font-medium tracking-wide text-foreground">
            About Me
          </h1>

          {/* プロフィール */}
          <div className="grid md:grid-cols-5 gap-16 items-start mb-24">
            {/* 写真 */}
            <div className="md:col-span-2">
              <div className="aspect-square border border-[#E8E8E8] shadow-[0_6px_24px_rgba(0,0,0,0.06)] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615339721301-18437e4d9f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Profile portrait"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* テキスト */}
            <div className="md:col-span-3 space-y-6">
              <div className="space-y-2">
                <h2 className="text-[17px] font-medium text-[#333] tracking-wide">
                  伊東 良介
                </h2>
                <p className="text-sm text-[#777] tracking-wide">
                  Video Creator
                </p>
              </div>

              <div className="space-y-5 text-[15px] text-[#444] leading-[1.9] tracking-wide">
                <p>
                  はじめまして。動画クリエイターの山田太郎です。
                  「誰かの想いを形にする」ことに喜びを感じ、映像制作の道へ。
                </p>
                <p>
                  まだまだ駆け出しですが、一つひとつの案件に真摯に向き合い、
                  お客様の期待以上のものをお届けできるよう日々学んでいます。
                </p>
              </div>
            </div>
          </div>

          {/* 経歴 */}
          <section className="space-y-20 mb-24">
            <div>
              <h3 className="mb-10 text-[18px] font-medium tracking-wide text-[#333] border-b border-[#E8E8E8] pb-2">
                経歴
              </h3>

              <div className="space-y-10 border-l border-[#A8D8EA] pl-6">
                {[
                  {
                    year: "2024年",
                    title: "フリーランスとして独立",
                    text: "これまでの経験を活かし、個人事業主として映像制作を開始。小規模事業者や個人の方々の想いを映像で届けることに注力しています。",
                  },
                  {
                    year: "2022〜2024年",
                    title: "映像制作会社にて勤務",
                    text: "企業VPや商品PR動画の制作に携わり、企画から撮影、編集まで一貫したワークフローを習得。お客様の要望を形にする楽しさを知りました。",
                  },
                  {
                    year: "2020〜2022年",
                    title: "映像制作の学習を開始",
                    text: "独学で動画編集ソフトの使い方を学び、YouTubeやSNS向けの動画制作を開始。趣味として始めた映像制作が、次第にライフワークへと変化しました。",
                  },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-[#333] text-[15px]">
                      {item.year}
                    </h4>
                    <p className="font-medium text-[#333]">{item.title}</p>
                    <p className="text-[15px] text-[#444] leading-[1.9] tracking-wide">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 大切にしていること */}
          <section className="space-y-8 mb-24">
            <h3 className="text-[18px] font-medium tracking-wide text-[#333] border-b border-[#E8E8E8] pb-2">
              大切にしていること
            </h3>

            <div className="grid gap-6">
              {[
                {
                  title: "丁寧なコミュニケーション",
                  text: "お客様の「伝えたい想い」を正確に理解するため、打ち合わせの時間を大切にしています。些細な疑問点も遠慮なくお聞きください。",
                },
                {
                  title: "期限の厳守",
                  text: "納期は必ず守ります。万が一遅れが生じる場合は、早めにご連絡し、代替案をご提案いたします。",
                },
                {
                  title: "柔軟な対応",
                  text: "予算やスケジュールに合わせて、最適なプランをご提案します。小さな案件からお気軽にご相談ください。",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F9F8F6] border border-[#E8E8E8] px-6 py-6 text-[#333] shadow-[0_1px_6px_rgba(0,0,0,0.04)]"
                >
                  <h4 className="font-medium mb-2 tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-[15px] text-[#444] leading-[1.9] tracking-wide">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 使用機材 */}
          <section className="mb-24">
            <h3 className="text-[18px] font-medium tracking-wide text-[#333] border-b border-[#E8E8E8] pb-2 mb-10">
              使用機材・ソフト
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-medium mb-4 text-[#333]">撮影機材</h4>
                <ul className="list-disc pl-5 space-y-1 text-[15px] text-[#444] leading-[1.9]">
                  <li>カメラ：Sony α7 IV</li>
                  <li>レンズ：各種単焦点・ズームレンズ</li>
                  <li>ジンバル：DJI RS3</li>
                  <li>照明機材：LED照明一式</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4 text-[#333]">編集ソフト</h4>
                <ul className="list-disc pl-5 space-y-1 text-[15px] text-[#444] leading-[1.9]">
                  <li>Adobe Premiere Pro</li>
                  <li>Adobe After Effects</li>
                  <li>DaVinci Resolve</li>
                  <li>Adobe Photoshop / Illustrator</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 戻る */}
          <div className="text-center mt-24">
            <button
              onClick={onBack}
              className="group relative text-primary hover:text-accent transition-all font-medium tracking-wide"
            >
              <span className="text-base md:text-lg">
                トップページに戻る
              </span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-accent group-hover:w-1/2 transition-all duration-500"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
