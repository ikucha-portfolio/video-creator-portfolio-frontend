import { Link } from "react-router-dom";

export default function ContactForm() {
  return (
    <section className="min-h-screen bg-white text-[#333] pt-32 pb-32 px-6">
      <div className="max-w-xl mx-auto">

        {/* 見出し */}
        <h1 className="text-[20px] font-light tracking-wider mb-10 text-center" translate="no">
          Contact
        </h1>

        {/* 説明文 */}
        <p className="text-[15px] leading-relaxed text-[#666] mb-16 text-center">
          ご相談・お見積もりは無料です。
          <br />
          お気軽にお問い合わせください。
        </p>

        {/* ===== フォーム ===== */}
        <form
          action="mailto:your-email@example.com"
          method="POST"
          encType="text/plain"
          className="space-y-10"
        >
          {/* 名前 */}
          <div>
            <label className="block mb-2 text-sm text-[#555]">お名前</label>
            <input
              type="text"
              name="name"
              required
              className="
                w-full px-3 py-3 
                border border-[#ddd] 
                focus:border-[#89C4E1]
                outline-none 
                transition 
                rounded-sm
              "
            />
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block mb-2 text-sm text-[#555]">メールアドレス</label>
            <input
              type="email"
              name="email"
              required
              className="
                w-full px-3 py-3 
                border border-[#ddd] 
                focus:border-[#89C4E1]
                outline-none 
                transition 
                rounded-sm
              "
            />
          </div>

          {/* メッセージ */}
          <div>
            <label className="block mb-2 text-sm text-[#555]">お問い合わせ内容</label>
            <textarea
              name="message"
              required
              className="
                w-full px-3 py-3 
                border border-[#ddd] 
                focus:border-[#89C4E1]
                outline-none 
                transition 
                min-h-[160px]
                rounded-sm
              "
            ></textarea>
          </div>

          {/* ボタン（小さく・洗練・中央） */}
          <div className="text-center pt-4" translate="no">
            <button
              type="submit"
              className="
                px-10 py-2.5
                bg-[#89C4E1] 
                text-white
                tracking-wide 
                transition 
                hover:opacity-90
                rounded-none
                inline-block
              "
            >
              Send
            </button>
          </div>
        </form>

        {/* ホームへ戻る */}
        <div className="text-center mt-16">
          <Link to="/" className="text-[#89C4E1] underline text-sm">
            ホームへ戻る
          </Link>
        </div>

      </div>
    </section>
  );
}
