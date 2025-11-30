import { Mail, Instagram, Youtube } from "lucide-react";

// X（旧Twitter）アイコン
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-[#E4405F]" },
  { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-[#FF0000]" },
  { name: "X", icon: XIcon, url: "#", color: "hover:text-[#111]" },
];

// ✅ Contact セクションのみ
export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 px-6 lg:px-12 relative bg-transparent text-center"
    >
      {/* 青い仕切りライン */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A9D7E8]/80 to-transparent" />

      <div className="max-w-3xl mx-auto">
        {/* 見出し */}
        <p className="text-[#89C4E1] text-sm tracking-[0.25em] uppercase mb-3">
          CONTACT
        </p>
        <h2 className="text-[clamp(26px,5vw,38px)] font-medium text-[#222] mb-6">
          お問い合わせ
        </h2>
        <p className="text-[#555] text-[16px] leading-relaxed mb-10">
          ご相談やお見積もりは無料です。
          <br />
          お気軽にお問い合わせください。
        </p>

        {/* メインボタン */}
        <a
          href="#"
          className="inline-flex items-center justify-center gap-3 bg-[#89C4E1] text-white text-[15px] font-medium py-3 px-10 rounded-sm shadow-md hover:bg-[#7ABAD7] hover:shadow-lg transition-all duration-300"
        >
          <Mail className="h-5 w-5" />
          お問い合わせフォームへ
        </a>

        {/* SNSリンク */}
        <div className="mt-12">
          <p className="text-[#555] mb-6">SNSでもつながりましょう</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 border border-[#DDD] flex items-center justify-center hover:border-[#89C4E1] transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* 補足テキスト */}
        <div className="mt-16 pt-10 border-t border-[#E5E5E5] space-y-4 text-center">
          <p className="text-[#555] leading-relaxed text-[15px]">
            日本語・中国語でのお問い合わせに対応しています
            <br />
            日本語・中文諮詢都歡迎
          </p>
          <p className="text-[#777] text-[14px]">
            通常1〜2営業日以内にご返信いたします
          </p>
        </div>
      </div>
    </section>
  );
}
