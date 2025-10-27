export default function Hero() {
  return (
    <section className="pt-48 pb-20 px-6 bg-gradient-to-b from-[#F9F8F6] to-white">
      <div className="max-w-md mx-auto text-center">
        {/* コピー部分 */}
        <h1 className="text-2xl font-medium text-[#333] leading-relaxed mb-6">
          心に残る瞬間を、<br />
          映像に。
        </h1>
        <p className="text-base text-[#555] leading-relaxed mb-8">
          台湾での学びと、北海道の自然が育んだ感性で、<br />
          あなたの大切なストーリーを丁寧に紡ぎます。
        </p>

        {/* MOREボタン */}
        <button translate="no"className="group inline-flex items-center gap-2 text-[#7FB3D5] font-medium tracking-wider hover:text-[#A8D8EA] transition mb-12">
          MORE
        <span className="w-10 h-0.5 bg-[#A8D8EA] group-hover:w-20 transition-all duration-700 ease-in-out"></span>

        </button>

        {/* 画像 */}
        <div className="overflow-hidden shadow-md mb-12 border border-gray-100">
        <img
        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80"
        alt="A young videographer holding a camera"
        className="w-full h-auto object-cover"
        />
       </div>


        {/* CTA */}
        <div className="flex flex-col gap-6 text-[#6BA8C8] text-base font-medium tracking-wide">
        <a href="#works" className="hover:text-[#A8D8EA] transition">作品を見る</a>
        <a href="#contact" className="hover:text-[#A8D8EA] transition">お問い合わせ</a>
        </div>

      </div>
    </section>
  );
}
