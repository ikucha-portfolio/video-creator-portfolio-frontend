import { Play } from "lucide-react";

// ==========================
// 作品データ
// ==========================
const works = [
  {
    id: "FRtnvFs-C0A",
    title: ["オープニングムービー"],
    category: "Wedding",
    thumbnail: "https://img.youtube.com/vi/FRtnvFs-C0A/hqdefault.jpg",
  },
  {
    id: "zlozoPc0ElE",
    title: ["台湾・友愛会に参加する", "日本語世代の想い"],
    category: "Documentary",
    thumbnail: "https://img.youtube.com/vi/zlozoPc0ElE/hqdefault.jpg",
  },
  {
    id: "nZhXHjCubMQ",
    title: ["台湾芸術大学ラジオ・テレビ学科", "卒業作品展ハイライト"],
    category: "Creative",
    thumbnail: "https://img.youtube.com/vi/nZhXHjCubMQ/hqdefault.jpg",
  },
  {
    id: "b8k4JoNv4TY",
    title: "木靈 -Kodama-",
    category: "Music Video",
    thumbnail: "https://img.youtube.com/vi/b8k4JoNv4TY/hqdefault.jpg",
  },
  {
    id: "RqGxN7aUtrM",
    title: "松岡義人 - Sound Memo -",
    category: "Documentary",
    thumbnail: "https://img.youtube.com/vi/RqGxN7aUtrM/hqdefault.jpg",
  },
];

export default function WorksB() {
  return (
    <section
      id="works"
      className="relative py-24 lg:py-32 px-6 lg:px-12 bg-transparent"
    >
      {/* 上部ライン */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* 見出し */}
        <p
          className="mb-14 text-center text-sm uppercase tracking-[0.25em] text-white/60"
          translate="no"
        >
          WORKS
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              onClick={() =>
                window.open(`https://youtu.be/${work.id}`, "_blank")
              }
              className="group relative cursor-pointer overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.10)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={work.thumbnail}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm shadow-[0_0_6px_rgba(255,255,255,0.15)] group-hover:border-white/60 group-hover:bg-white/15 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.30)] transition-all duration-500">
                    <Play className="w-4 h-4 ml-0.5 text-white" />
                  </div>
                </div>

                {/* Text Overlay – Left Bottom */}
                <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 max-w-[72%] text-white pointer-events-none">
                  {/* Category */}
                  <p className="mb-1 text-[10px] tracking-[0.3em] uppercase opacity-60">
                    {work.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-light leading-snug tracking-wide text-white/90">
                    {Array.isArray(work.title)
                      ? work.title.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))
                      : work.title}
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
