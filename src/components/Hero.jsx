export default function Hero({ onMoreClick }) {
  return (
    <section
  id="hero"
  className="pt-32 md:pt-40 pb-20 md:pb-32 bg-gradient-to-b from-[#F7F7F6] to-[#FFFFFF] shadow-[inset_0_10px_40px_rgba(0,0,0,0.03)]"
>
      <div className="max-w-6xl mx-auto px-6">
  {/* PCでは左右2カラム／SPは縦並び */}
  <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
    
    {/* Copy（左） */}
<div className="md:col-span-6 lg:col-span-5 md:pr-6 max-w-[360px] mx-auto md:mx-0">
{/* 導入コピー（小さく・濃く・間を詰める） */}
<p className="text-sm md:text-base font-medium text-[#1A1A1A] leading-tight tracking-tight mb-5">
  心に残る瞬間を、<br />
  映像に。
</p>

{/* 本文コピー（やや大きめ・柔らかいトーン） */}
<h1 className="text-lg md:text-xl text-[#444] font-normal leading-relaxed md:max-w-md mb-8">
  台湾での学びと、北海道の自然が育んだ感性で、
  <br />
  あなたの大切なストーリーを丁寧に紡ぎます。
</h1>

  {/* MORE */}
  <button
  translate="no"
  onClick={onMoreClick} // ← この1行を追加
  className="group mt-2 inline-flex items-center gap-2 text-[#7FB3D5] font-medium tracking-wider
             hover:text-[#A8D8EA] active:scale-[0.97]
             transition-transform duration-300 ease-out"
  >
    About
    <span className="w-8 h-0.5 bg-[#A8D8EA] group-hover:w-16 transition-all duration-700 ease-in-out"></span>
  </button>
</div>

    {/* Visual（右） */}
    <div className="md:col-span-6 lg:col-span-7 mt-12 md:mt-0">
      <div className="relative">
        {/* 飾り */}
        <div className="hidden md:block absolute -bottom-6 -right-6 w-40 h-40 border-2 border-[#7FB3D5]/30 -z-10"></div>

        {/* 画像 */}
        <img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1600&q=80"
          alt="A young videographer holding a camera"
          className="w-full aspect-[4/3] object-cover border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
        />
      </div>
    </div>
</div>


        {/* CTAリンク（共通モーション） */}
        <div className="mt-12 flex flex-col gap-6 text-[#7FB3D5] text-base font-medium tracking-wide">
          {[
            { label: "作品を見る", href: "#works" },
            { label: "お問い合わせ", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group inline-flex items-center gap-2 hover:text-[#A8D8EA]
                         active:scale-[0.97]
                         transition-transform duration-300 ease-out"
            >
              {item.label}
              <span className="w-8 h-0.5 bg-[#A8D8EA] group-hover:w-16 transition-all duration-500"></span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
