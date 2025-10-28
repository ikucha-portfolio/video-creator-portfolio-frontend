// 先頭のどこか（コンポーネント外でもOK）
const Arrow = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export default function HeroB() {
  return (
    <section
      className="
        pt-10 pb-16
        /* ほんのりグレイッシュ＆透明感 */
        bg-[linear-gradient(180deg,rgba(250,249,246,0.85),rgba(255,255,255,0.92))]
        supports-[backdrop-filter]:backdrop-blur-[2px]
      "
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* 画像（影をほんのり） */}
        <div className="overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
            alt="Portfolio visual"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* テキスト */}
        <p translate="no" className="mt-8 text-xs tracking-[0.25em] text-gray-500">VIDEO CREATOR</p>
        <h1 className="mt-3 text-[clamp(28px,5vw,40px)] leading-snug font-medium text-[#222]">
          心に残る瞬間を、<br />映像に。
        </h1>
        <p className="mt-5 text-[17px] leading-8 text-[#555]">
          駆け出しの動画クリエイターとして、<br />
          あなたの想いを丁寧な形にします。<br />
          日本語・中国語対応可能
        </p>

        {/* CTA（細身＆スタイリッシュ／▶︎がスライド） */}
        <div className="mt-8 flex flex-col gap-4 max-w-md">
          {/* プライマリ（塗り） */}
          <a
  href="#works"
  className="
    group inline-flex items-center justify-center
    px-6 py-3 md:px-8 md:py-3
    bg-[#2B2B2B] text-white
    font-medium tracking-wide
    shadow-sm hover:shadow-md
    transition-all duration-300
    hover:-translate-y-0.5
  "
>
  作品を見る <span className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1">▷</span>
</a>


          {/* セカンダリ（アウトライン＋透明感） */}
          <a
            href="#contact"
            className="
              group inline-flex items-center justify-center
              px-6 py-3 md:px-8 md:py-3
              border border-[#2B2B2B]/60 text-[#2B2B2B]
              bg-white/65 supports-[backdrop-filter]:backdrop-blur-[2px]
              shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]
              transition-all duration-300
              hover:-translate-y-0.5
            "
          >
            お問い合わせ
          </a>
        </div>

        {/* さらに下の「制作者について詳しく」などがあればここに */}
      </div>
    </section>
  );
}
