export default function Hero({ onMoreClick }) {
  return (
    <section
  id="hero"
  className="
    pt-32 md:pt-40 pb-20 md:pb-32
    relative
    bg-hero-figma hero-vignette-sm hero-glass
    text-white
  "
>

      {/* 読みやすさ向上の薄い被せ（明るい動画や画像を重ねてもOK） */}
      <div className="absolute inset-0 pointer-events-none bg-black/10" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* PCでは左右2カラム／SPは縦並び */}
        <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
          {/* Copy（左） */}
          <div className="md:col-span-6 lg:col-span-5 md:pr-6 max-w-[360px] mx-auto md:mx-0">
            {/* 導入コピー */}
            <p className="text-sm md:text-base font-medium text-white/95 leading-tight tracking-tight mb-5">
              心に残る瞬間を、<br />
              映像に。
            </p>

            {/* 本文コピー */}
            <h1 className="text-lg md:text-xl text-white/85 font-normal leading-relaxed md:max-w-md mb-8">
              台湾での学びと、北海道の自然が育んだ感性で、
              <br />
              あなたの大切なストーリーを丁寧に紡ぎます。
            </h1>

            {/* MORE */}
            <button
              translate="no"
              onClick={onMoreClick}
              className="
                group mt-2 inline-flex items-center gap-2
                text-[#A8D8EA] font-medium tracking-wider
                hover:text-white active:scale-[0.97]
                transition-transform duration-300 ease-out
              "
            >
              About
              <span className="w-8 h-0.5 bg-[#A8D8EA] group-hover:w-16 group-hover:bg-white transition-all duration-700 ease-in-out"></span>
            </button>
          </div>

          {/* Visual（右） */}
          <div className="md:col-span-6 lg:col-span-7 mt-12 md:mt-0">
            <div className="relative">
              {/* 飾り（淡いアウトラインに変更） */}
              <div className="hidden md:block absolute -bottom-6 -right-6 w-40 h-40 border-2 border-white/15 -z-10"></div>

              {/* 画像 */}
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1600&q=80"
                alt="A young videographer holding a camera"
                className="
                  w-full aspect-[4/3] object-cover
                  border border-white/10
                  shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                  rounded-none
                "
              />
            </div>
          </div>
        </div>

        {/* CTAリンク */}
        <div className="mt-12 flex flex-col gap-6 text-[#A8D8EA] text-base font-medium tracking-wide">
          {[
            { label: '作品を見る', href: '#works' },
            { label: 'お問い合わせ', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                group inline-flex items-center gap-2
                hover:text-white
                active:scale-[0.97]
                transition-transform duration-300 ease-out
              "
            >
              {item.label}
              <span className="w-8 h-0.5 bg-[#A8D8EA] group-hover:w-16 group-hover:bg-white transition-all duration-500"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
