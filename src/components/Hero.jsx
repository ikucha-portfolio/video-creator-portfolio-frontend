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
          <span className="w-10 h-0.5 bg-[#A8D8EA] group-hover:w-16 transition-all duration-500"></span>
        </button>

        {/* 画像 */}
        <div className="rounded-2xl overflow-hidden shadow-md mb-12 border border-gray-100">
          <img
          src="https://placekitten.com/800/600"
          alt="Hero test image"
          className="w-full h-auto object-cover"
          />

        </div>

        {/* CTA */}
        <div className="flex flex-col gap-8 text-[#7FB3D5] text-lg font-medium">
          <a href="#works" className="hover:text-[#A8D8EA] transition">作品を見る</a>
          <a href="#contact" className="hover:text-[#A8D8EA] transition">お問い合わせ</a>
        </div>
      </div>
    </section>
  );
}
