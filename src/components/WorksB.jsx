import { Play } from "lucide-react";

const works = [
  {
    id: 1,
    title: "企業プロモーション映像",
    category: "Corporate",
    thumbnail:
      "https://images.unsplash.com/photo-1683089906941-3dc61665e7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBiZWhpbmQlMjBzY2VuZXN8ZW58MXx8fHwxNzYxNDEyMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "イベント撮影・編集",
    category: "Event",
    thumbnail:
      "https://images.unsplash.com/photo-1623115132156-bc471b0eb463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjEzOTM2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "クリエイティブコンテンツ制作",
    category: "Creative",
    thumbnail:
      "https://images.unsplash.com/photo-1760768550727-00f5e02feb72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGZpbG1pbmd8ZW58MXx8fHwxNzYxMzAxNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "トラベルVlog・ドキュメンタリー",
    category: "Travel",
    thumbnail:
      "https://images.unsplash.com/photo-1659856233753-7ddf7d3fa8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB2bG9nJTIwY2FtZXJhfGVufDF8fHx8MTc2MTQxMjEwMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function WorksB() {
  return (
    <section
      id="works"
      className="py-20 lg:py-28 px-6 lg:px-12 bg-white relative"
    >
      {/* トップボーダー */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#89C4E1] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* ===== 見出し部分（左寄せ） ===== */}
        <div className="mb-14 text-left">
          <p className="text-[#89C4E1] text-sm tracking-[0.25em] uppercase mb-3">
            WORKS
          </p>
          <h2 className="text-[clamp(28px,5vw,40px)] font-medium text-[#222] mb-4">
            制作実績
          </h2>
          <p className="text-[#555] text-[16px] leading-relaxed max-w-2xl">
            これまで手がけた映像作品の一部をご紹介します。
          </p>
        </div>

        {/* ===== 作品グリッド ===== */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* オーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* 再生ボタン */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 flex items-center justify-center group-hover:bg-[#89C4E1] group-hover:scale-110 transition-all duration-300">
                    <Play className="h-6 w-6 text-[#222] group-hover:text-white ml-1" />
                  </div>
                </div>

                {/* テキスト情報 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-[13px] tracking-widest opacity-80 mb-1">
                    {work.category}
                  </p>
                  <h3 className="text-[20px] font-medium leading-snug">
                    {work.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
