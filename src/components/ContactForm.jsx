// src/components/ContactForm.jsx
import { Link } from "react-router-dom";

export default function ContactForm() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-24 bg-white text-[#333]">

      <div className="max-w-xl mx-auto" translate="no">

        {/* 見出し */}
        <h1
          className="
         text-[20px] tracking-widest mb-2 font-light
          "
        >
          CONTACT
        </h1>

        {/* 説明 */}
        <p className="text-[#444] leading-relaxed mb-12 text-[15px]">
          ご相談・ご依頼・お見積もりなど、<br />
          下記フォームよりお気軽にお問い合わせください。
        </p>

        {/* フォーム */}
        <form
          action="mailto:your-email@example.com"
          method="POST"
          encType="text/plain"
          className="space-y-8"
        >
          {/* 名前 */}
          <div>
            <label className="block text-sm mb-1 text-[#555]">お名前</label>
            <input
              type="text"
              name="name"
              required
              className="
                w-full px-3 py-2
                border border-[#ddd]
                bg-white
                text-[#333]
                focus:border-[#89C4E1]
                outline-none transition
              "
            />
          </div>

          {/* メール */}
          <div>
            <label className="block text-sm mb-1 text-[#555]">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              required
              className="
                w-full px-3 py-2
                border border-[#ddd]
                bg-white
                text-[#333]
                focus:border-[#89C4E1]
                outline-none transition
              "
            />
          </div>

          {/* メッセージ */}
          <div>
            <label className="block text-sm mb-1 text-[#555]">
              メッセージ
            </label>
            <textarea
              name="message"
              required
              className="
                w-full px-3 py-2
                min-h-[150px]
                border border-[#ddd]
                bg-white
                text-[#333]
                focus:border-[#89C4E1]
                outline-none transition
              "
            ></textarea>
          </div>

          {/* ボタン */}
          <button
            type="submit"
            className="
              mt-4
              px-10 py-2
              bg-[#89C4E1]
              text-white
              text-sm tracking-wide
              border border-[#89C4E1]
              hover:bg-[#7BB6D3]
              transition
              rounded-none
            "
          >
            Send
          </button>
        </form>

        {/* ホームへ戻る */}
        <div className="mt-12 text-left">
          <Link
            to="/"
            className="
              text-[#666] text-sm
              hover:text-[#89C4E1] transition-colors
            "
          >
            ← ホームへ戻る
          </Link>
        </div>

      </div>
    </section>
  );
}
