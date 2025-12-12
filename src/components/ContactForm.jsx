// src/components/ContactForm.jsx
import { Link } from "react-router-dom";

export default function ContactForm() {
  return (
    <section className="min-h-screen px-6 pt-36 pb-32 bg-white text-[#333]">
      <div className="max-w-xl mx-auto" translate="no">

        {/* 見出し */}
        <h1 className="text-[18px] tracking-widest mb-2 font-light">
          CONTACT
        </h1>

        <p className="text-[#555] leading-relaxed mb-12 text-[15px]">
          ご相談・ご依頼・お見積もりなど、<br />
          下記フォームよりお気軽にお問い合わせください。
        </p>

        {/* ▼▼ 追加：準備中メッセージ ▼▼ */}
        <div className="mb-10 text-[14px] leading-relaxed text-[#147C88]">
          ※ お問い合わせフォーム準備中です。<br />
          お急ぎの場合は、お手数ですが SNS の DM よりご連絡ください。
        </div>
        {/* ▲▲ 追加ここまで ▲▲ */}

        <form
  action="https://formspree.io/f/mgvgrapd"
  method="POST"
  className="space-y-8"
>

          {/* お名前 */}
          <div>
            <label className="block text-sm mb-1 text-[#666]">お名前</label>
            <input
              type="text"
              name="name"
              required
              className="
                w-full px-3 py-2
                border border-[#e5e5e5]
                bg-white text-[#333]
                focus:border-[#147C88]
                outline-none transition
              "
            />
          </div>

          {/* メール */}
          <div>
            <label className="block text-sm mb-1 text-[#666]">メールアドレス</label>
            <input
              type="email"
              name="email"
              required
              className="
                w-full px-3 py-2
                border border-[#e5e5e5]
                bg-white text-[#333]
                focus:border-[#147C88]
                outline-none transition
              "
            />
          </div>

          {/* メッセージ */}
          <div>
            <label className="block text-sm mb-1 text-[#666]">メッセージ</label>
            <textarea
              name="message"
              required
              className="
                w-full px-3 py-2 min-h-[150px]
                border border-[#e5e5e5]
                bg-white text-[#333]
                focus:border-[#147C88]
                outline-none transition
              "
            ></textarea>
          </div>

          {/* ▼ 浅葱色ボタン */}
          <button
            type="submit"
            className="
              mt-6 px-12 py-2
              bg-[#147C88] text-white
              tracking-wide text-sm
              hover:bg-[#0f5d68]
              transition rounded-none
            "
          >
            Send
          </button>
        </form>

        <div className="mt-14">
          <Link
            to="/"
            className="text-[#777] text-sm hover:text-[#147C88] transition-colors"
          >
            ← ホームへ戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
