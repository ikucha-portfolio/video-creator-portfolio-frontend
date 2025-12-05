// src/components/AboutB.jsx
import { ArrowLeft, Instagram, Youtube, Mail } from "lucide-react";

// X（旧Twitter）
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function AboutB({ onBack }) {
  return (
    <div className="min-h-screen bg-white text-[#222]">

      {/* ===== Header ===== */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-[#E5E5E5] z-50">
        <div className="px-4 py-4 max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#222] hover:opacity-70 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            戻る
          </button>
        </div>
      </header>


      {/* ===== MAIN ===== */}
      <main className="pt-28 pb-32 max-w-4xl mx-auto px-6 space-y-28">

        {/* =======================================================
            ① プロフィール
        ======================================================= */}
        <section className="space-y-10">
          
          {/* 大きな写真 */}
          <img
  src="/src/assets/ryan.jpg"
  alt="Ryan Chronicle"
  className="w-full shadow-[0_6px_20px_rgba(0,0,0,0.1)] object-cover rounded-none"
/>


          <div className="space-y-4">
            <h1
              className="text-[32px] font-semibold"
              translate="no"
            >
              RYAN CHRONICLE
            </h1>

            <p
              className="text-[#89C4E1] text-lg"
              translate="no"
            >
              Video Creator
            </p>

            <h2 className="text-[20px] mt-4">人の想いを、映像で残す。</h2>

            <p className="leading-[1.9] text-[15px] text-[#444] space-y-4">
              台湾への留学をきっかけに映像制作を始めました。
              台湾での暮らしや旅を通して、映像が人と人をつなぐ力を強く実感し、多様な文化や価値観に触れた日々は、私の映像制作の原点です。
              <br /><br />
              <span translate="no">CHRONICLE</span>
              （クロニクル）の名のもと、映像を通して人の想いに寄り添い、
              その声や記憶を未来へ残すことを大切にしています。
              <br /><br />
              現在は北海道を拠点に、ドキュメンタリー、
              PR映像、音楽作品など、多様な表現に挑戦しています。
            </p>
          </div>
        </section>


        {/* 区切り線 */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#F3E8C8]/70 to-transparent" />


        {/* =======================================================
            ② 経歴（読み物として自然に）
        ======================================================= */}
        <section className="space-y-10">
          <h2 className="text-2xl font-medium">経歴</h2>

          <div className="text-[15px] text-[#444] leading-[1.85] space-y-3">
            <p>1989年生まれ / 栃木県出身 / 北海道江別市在住</p>
            <p>趣味 : 旅行 / ギター / 筋トレ / 登山</p>
            <p>特技 : 中国語(台湾華語)会話 / 映像・写真撮影</p>
          </div>

          <div className="text-[15px] text-[#444] leading-[1.9] space-y-6">

            <div>
              <p className="font-medium text-[#89C4E1]" translate="no">2011 - 2018</p>
              <p>約8年介護職に従事。ギター弾き語りでの旅を経験。</p>
              <p>台湾旅行で文化に触れ、興味を持つ。</p>
            </div>

            <div>
              <p className="font-medium text-[#89C4E1]" translate="no">2019 - 2021</p>
              <p>台湾へワーホリ。語学と映像に没頭。</p>
            </div>

            <div>
              <p className="font-medium text-[#89C4E1]" translate="no">2021</p>
              <p>国立台湾芸術大学 ラジオ・テレビ学科 入学。</p>
            </div>

            <div>
              <p className="font-medium text-[#89C4E1]" translate="no">2023</p>
              <p>イベントPR動画制作。</p>
              <p>台北の日系企業でSNSマーケティング・動画制作を担当。</p>
            </div>

            <div>
              <p className="font-medium text-[#89C4E1]" translate="no">2024</p>
              <p>ドキュメンタリー作品、MV作品など多数制作。</p>
            </div>

            <div>
              <p className="font-medium text-[#89C4E1]" translate="no">2025</p>
              <p>大学卒業後、日本へ帰国し北海道で活動開始。</p>
            </div>

          </div>
        </section>


        {/* 区切り線 */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#F3E8C8]/70 to-transparent" />


        {/* =======================================================
            ③ 大切にしていること（文章で）
        ======================================================= */}
        <section className="space-y-10">
          <h2 className="text-2xl font-medium">大切にしていること</h2>

          <div className="leading-[1.9] text-[#444] text-[15px] space-y-6">
            <div>
              <h3 className="font-medium text-[17px] mb-2">1. 想いを丁寧にすくい取る</h3>
              <p>背景や感情に向き合い、その想いが自然に映像へ宿るよう制作しています。</p>
            </div>

            <div>
              <h3 className="font-medium text-[17px] mb-2">2. 多文化から学ぶ姿勢</h3>
              <p>台湾で得た価値観を大切にし、柔軟な表現を追求しています。</p>
            </div>

            <div>
              <h3 className="font-medium text-[17px] mb-2">3. 記憶を未来へつなぐ映像づくり</h3>
              <p>
                <span translate="no">Chronicle</span>
                として、心に残る記録を未来へ渡す映像を作り続けます。
              </p>
            </div>
          </div>
        </section>


        {/* 区切り線 */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#F3E8C8]/70 to-transparent" />


        {/* =======================================================
            ④ 使用機材・ソフト（シンプル / 洗練）
        ======================================================= */}
        <section className="space-y-10">
          <h2 className="text-2xl font-medium mb-6">使用機材・ソフト</h2>

          <div className="text-[15px] text-[#444] leading-[1.9] space-y-3">
            <h3 className="font-medium text-[17px] mt-6">撮影機材</h3>

            {/* すべてリンク／淡い青で統一 */}
            <ul className="space-y-3">
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">FUJIFILM X-H2</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">FUJIFILM X-T3</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">XF 18-55mm F2.8-4</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">Tokina ATX-M 33mm F1.4</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">TAMRON 18-300mm</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">Viltrox 13mm F1.4</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">NiSi TRUE COLOR VND</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">Black Mist No.05</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">DJI Mavic 3 Pro</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">DJI RSC 2</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">Ulanzi F38 Tripod</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">TASCAM X8</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">ZOOM M3 MicTrak</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">AnkerWork M650</a></li>
              <li><a href="#" className="text-[#89C4E1] hover:underline" translate="no">Ulanzi VL120 RGB Light</a></li>
            </ul>

            <h3 className="font-medium text-[17px] mt-10">編集ソフト</h3>
            <ul className="space-y-2">
              <li translate="no">Premiere Pro</li>
              <li translate="no">DaVinci Resolve</li>
              <li translate="no">After Effects</li>
              <li translate="no">Lightroom Classic</li>
              <li translate="no">Photoshop</li>
            </ul>
          </div>
        </section>


        {/* ===== 戻る ===== */}
        <div className="pt-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#222] hover:opacity-70 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            戻る
          </button>
        </div>

      </main>
    </div>
  );
}
