// src/components/WorksB.jsx
export default function WorksB() {
  const works = [
    {
      title: "企業プロモーション映像",
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1590608897129-79da98d159d8?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "イベント撮影・編集",
      category: "Event",
      image: "https://images.unsplash.com/photo-1604335399105-174ce6930f14?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "商品紹介ムービー",
      category: "Product",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "ウェディング映像",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <section id="works" className="py-24 border-t-4 border-[#89C4E1]/60 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションタイトル */}
        <p className="text-sm font-medium tracking-[0.2em] text-[#89C4E1] mb-2">
          WORKS
        </p>
        <h2 className="text-2xl md:text-3xl font-medium text-[#1A1A1A] mb-4">
          制作実績
        </h2>
        <p className="text-gray-600 mb-12">
          これまで手がけた映像作品の一部をご紹介します。
        </p>

        {/* グリッドレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 ease-out"
            >
              {/* 画像 */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />

              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 ease-in-out" />

              {/* 再生ボタン */}
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-14 h-14 border-2 border-white flex items-center justify-center text-white text-3xl 
                            group-hover:border-[#89C4E1] group-hover:text-[#89C4E1] transition-all duration-500 ease-in-out"
                >
                  ▷
                </div>
              </div>

              {/* テキスト */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-80">{work.category}</p>
                <p className="text-lg font-medium">{work.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
