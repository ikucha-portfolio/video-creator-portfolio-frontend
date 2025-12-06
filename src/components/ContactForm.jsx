// src/components/ContactForm.jsx

import { Link } from "react-router-dom";

export default function ContactForm() {
  return (
    <section className="min-h-screen bg-[#F9F9F7] text-[#244B4A] pt-24 pb-32 px-6">
      <div className="max-w-2xl mx-auto">

        {/* タイトル */}
        <h1 className="text-3xl font-medium tracking-wide mb-10">
          お問い合わせ
        </h1>

        <p className="text-[15px] leading-relaxed text-[#4A5C5B] mb-12">
          ご相談・お見積もりは無料です。
          <br />
          お気軽にお問い合わせください。
        </p>

        {/* ===== フォーム本体 ===== */}
        <form
          action="mailto:your-email@example.com"
          method="POST"
          encType="text/plain"
          className="space-y-8"
        >
          {/* 名前 */}
          <div>
            <label className="block mb-2 text-sm text-[#446160]">
              お名前
            </label>
            <input
              type="text"
              name="name"
              required
              className="
                w-full bg-transparent border-b border-[#C8D5D4]
                focus:border-[#5B8E8A] focus:outline-none
                py-2 text-[15px] transition-all
              "
            />
          </div>

          {/* メール */}
          <div>
            <label className="block mb-2 text-sm text-[#446160]">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              required
              className="
                w-full bg-transparent border-b border-[#C8D5D4]
                focus:border-[#5B8E8A] focus:outline-none
                py-2 text-[15px] transition-all
              "
            />
          </div>

          {/* 内容 */}
          <div>
            <label className="block mb-2 text-sm text-[#446160]">
              お問い合わせ内容
            </label>
            <textarea
              name="message"
              required
              className="
                w-full bg-transparent border border-[#D6E2E1]
                focus:border-[#5B8E8A] focus:outline-none
                rounded-[4px]
                min-h-[160px] p-3 text-[15px] transition-all
              "
            ></textarea>
          </div>

          {/* 送信ボタン（控えめ・ミニマル） */}
          <button
            type="submit"
            className="
              mt-4
              px-10 py-2
              border border-[#5B8E8A]
              text-[#3A5F5C]
              rounded-[4px]
              text-sm tracking-wide
              hover:bg-[#5B8E8A]/10
              transition-all
            "
          >
            送信する
          </button>
        </form>

        {/* ホームへ戻る */}
        <div className="mt-14 text-center">
          <Link
            to="/"
            className="
              text-[#356A6A] text-sm tracking-wide
              hover:underline underline-offset-4
            "
          >
            ← ホームへ戻る
          </Link>
        </div>

      </div>
    </section>
  );
}
