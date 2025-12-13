// src/components/Thanks.jsx
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <section className="min-h-screen px-6 pt-36 pb-32 bg-white text-[#333]">
      <div className="max-w-xl mx-auto text-center" translate="no">

        {/* 見出し */}
        <h1 className="text-[18px] tracking-widest mb-6 font-light">
          THANK YOU
        </h1>

        {/* メッセージ */}
        <p className="text-[#555] leading-relaxed text-[15px] mb-10">
          お問い合わせありがとうございます。<br />
          内容を確認のうえ、<br className="md:hidden" />
          通常 <span className="text-[#147C88]">2〜3日以内</span> にご連絡いたします。
        </p>

        {/* 補足 */}
        <p className="text-[#777] text-[13px] leading-relaxed mb-14">
          数日経っても返信がない場合は、<br />
          お手数ですが SNS の DM よりご連絡ください。
        </p>

        {/* アクション */}
        <div className="flex flex-col items-center gap-6">
          <Link
            to="/"
            className="
              px-12 py-2
              bg-[#147C88] text-white
              tracking-wide text-sm
              hover:bg-[#0f5d68]
              transition
            "
          >
            ホームへ戻る
          </Link>

          <p className="text-[#aaa] text-xs tracking-wide">
            ryan.chronicle
          </p>
        </div>
      </div>
    </section>
  );
}
