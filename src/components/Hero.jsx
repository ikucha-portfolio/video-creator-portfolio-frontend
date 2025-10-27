export default function Hero() {
  return (
    <section id="hero" className="pt-32 md:pt-40 pb-20 md:pb-32 bg-gradient-to-b from-[#F9F8F6] to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* PCでは左右2カラム／SPは縦並び */}
        <div className="md:grid md:grid-cols-12 md:gap-12 items-center">
          
          {/* Copy（左） */}
          <div className="md:col-span-6 lg:col-span-5 md:pr-6">
            <h1 className="text-3xl md:text-5xl font-medium text-[#333] leading-relaxed mb-6">
              心に残る瞬間を、<br />
              映像に。
            </h1>
            <p className="text-base md:text-lg text-[#555] leading-relaxed md:max-w-md">
              台湾での学びと、北海道の自然が育んだ感性で、<br />
              あなたの大切なストーリーを丁寧に紡ぎます。
            </p>

            {/* MORE */}
            <button translate="no" className="group mt-8 inline-flex items-center gap-3 text-[#7FB3D5] font-medium tracking-wider hover:text-[#A8D8EA] transition">
              MORE
              <span className="w-12 h-0.5 bg-[#A8D8EA] group-hover:w-24 transition-all duration-700 ease-in-out"></span>
            </button>
          </div>

          {/* Visual（右） */}
          <div className="md:col-span-6 lg:col-span-7 mt-12 md:mt-0">
            <div className="relative">
              {/* うっすら飾り（斜めの線枠っぽい）※お好みで */}
              <div className="hidden md:block absolute -bottom-6 -right-6 w-40 h-40 border-2 border-[#7FB3D5]/30 -z-10"></div>

              {/* 画像：角丸なし＋薄い影 */}
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1600&q=80"
                alt="A young videographer holding a camera"
                className="w-full aspect-[4/3] object-cover border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              />
            </div>
          </div>
        </div>

        {/* セクション内のリンク（任意）：左寄せのまま */}
        <div className="mt-12 flex flex-col gap-6 text-[#7FB3D5] text-base font-medium tracking-wide">
          <a href="#works" className="hover:text-[#A8D8EA] transition">作品を見る</a>
          <a href="#contact" className="hover:text-[#A8D8EA] transition">お問い合わせ</a>
        </div>
      </div>
    </section>
  );
}
