import { Play } from "lucide-react";

// ==========================
// 作品データ
// ==========================
const works = [
  {
    id: "FRtnvFs-C0A",
    title: "結婚式オープニングムービー",
    category: "Wedding",
    thumbnail: "https://img.youtube.com/vi/FRtnvFs-C0A/hqdefault.jpg",
  },
  {
    id: "zlozoPc0ElE",
    title: "台湾・友愛会に参加する日本語世代の想い",
    category: "Documentary",
    thumbnail: "https://img.youtube.com/vi/zlozoPc0ElE/hqdefault.jpg",
  },
  {
    id: "nZhXHjCubMQ",
    title: "作品③",
    category: "Creative",
    thumbnail: "https://img.youtube.com/vi/nZhXHjCubMQ/hqdefault.jpg",
  },
  {
    id: "b8k4JoNv4TY",
    title: "木靈 -Kodama-",
    category: "Short Film",
    thumbnail: "https://img.youtube.com/vi/b8k4JoNv4TY/hqdefault.jpg",
  },
  {
    id: "RqGxN7aUtrM",
    title: "松岡義人 -Sound Memo-",
    category: "Documentary",
    thumbnail: "https://img.youtube.com/vi/RqGxN7aUtrM/hqdefault.jpg",
  },
];

export default function WorksB() {
  return (
    <section
      id="works"
      className="
        py-24 lg:py-32 px-6 lg:px-12 relative bg-transparent scroll-rise
      "
    >
      {/* 上部ライン（統一） */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="max-w-6xl mx-auto">

        {/* 見出し */}
        <p
          className="
            text-white/60 tracking-[0.25em]
            text-sm uppercase mb-14
            text-center
          "
          translate="no"
        >
          WORKS
        </p>

        {/* グリッド */}
        <div className="grid md:grid-cols-2 gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              className="
                group relative overflow-hidden rounded-none
                cursor-pointer
                shadow-[0_6px_24px_rgba(0,0,0,0.1)]
                hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                transition-all duration-500
              "
              onClick={() => window.open(`https://youtu.be/${work.id}`, "_blank")}
            >
              {/* サムネ */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-[1.04]
                    transition-transform duration-[900ms]
                  "
                />

                {/* グラデフィルター */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/70 via-black/40 to-transparent
                  opacity-80
                  group-hover:opacity-90
                  transition-opacity duration-500
                " />

                {/* ▶ 洗練されたミニ再生ボタン */}
{/* ▶ 超ミニ・繊細プレイボタン（40px） */}
<div className="absolute inset-0 flex items-center justify-center">
  <div
    className="
      w-10 h-10          /* 40px */
      rounded-full
      border border-white/30
      backdrop-blur-sm bg-white/5
      flex items-center justify-center
      shadow-[0_0_6px_rgba(255,255,255,0.15)]
      transition-all duration-500
      group-hover:border-white/60
      group-hover:bg-white/15
      group-hover:shadow-[0_0_10px_rgba(255,255,255,0.30)]
    "
  >
    <Play
      className="
        w-4 h-4
        text-white
        ml-0.5
        transition-colors duration-500
      "
    />
  </div>
</div>


                {/* テキスト */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-[12px] tracking-widest opacity-80 mb-1">
                    {work.category}
                  </p>
                  <h3 className="text-[20px] font-light leading-snug">
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
