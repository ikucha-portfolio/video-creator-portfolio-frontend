import { Play } from "lucide-react";

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
    title: "作品④",
    category: "Short Film",
    thumbnail: "https://img.youtube.com/vi/b8k4JoNv4TY/hqdefault.jpg",
  },
];

export default function WorksB() {
  return (
    <section id="works" className="py-20 lg:py-28 px-6 lg:px-12 relative bg-transparent">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#89C4E1] to-transparent" />

      <div className="max-w-6xl mx-auto">

        <div className="mb-14 text-left">
          <p className="text-[#89C4E1] text-sm tracking-[0.25em] uppercase mb-3" notranslate translate="no">
            WORKS
          </p>
          <h2 className="text-[clamp(28px,5vw,40px)] font-medium text-[#222] mb-4">
            制作実績
          </h2>
          <p className="text-[#555] text-[16px] leading-relaxed max-w-2xl">
            これまで手がけた映像作品の一部をご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {works.map((work) => (
            <div
              key={work.id}
              className="group relative overflow-hidden shadow-[0_6px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-500 cursor-pointer"
              onClick={() => window.open(`https://youtu.be/${work.id}`, "_blank")}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={work.thumbnail}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/90 flex items-center justify-center group-hover:bg-[#89C4E1] group-hover:scale-110 transition-all duration-300">
                    <Play className="h-6 w-6 text-[#222] group-hover:text-white ml-1" />
                  </div>
                </div>

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
