// src/components/ContactB.jsx
import { Mail, Instagram, Youtube } from "lucide-react";

// ✅ ShadcnのButtonがない場合に備えて、
// 通常のbuttonタグでも動くようにここで簡易ボタンを定義
function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`rounded-md font-medium transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

// ✅ Xアイコン（SVG）
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

// ✅ SNSリンク設定
const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "#",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "#",
    color: "hover:text-[#FF0000]",
  },
  {
    name: "X",
    icon: XIcon,
    url: "#",
    color: "hover:text-foreground",
  },
];

// ✅ メインコンポーネント
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-32 px-6 lg:px-12 bg-[color:var(--background-ivory)] relative"
    >
      {/* トップの淡いボーダー */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent"></div>

      <div className="container mx-auto max-w-4xl">
        {/* セクションタイトル */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[color:var(--accent)] text-sm tracking-[0.3em] uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl lg:text-5xl mb-6 text-[color:var(--foreground)]">
            お問い合わせ
          </h2>
          <p className="text-[color:var(--muted-foreground)] text-lg leading-relaxed max-w-2xl mx-auto">
            ご相談やお見積もりは無料です。
            <br />
            お気軽にお問い合わせください。
          </p>
        </div>

        {/* メインボタン */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <Button
            className="bg-[color:var(--accent)] hover:bg-[color:var(--accent-soft)] text-white shadow-xl hover:shadow-2xl px-12 py-6 text-lg group"
          >
            <Mail className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform inline" />
            お問い合わせフォームへ
          </Button>
        </div>

        {/* SNSリンク */}
        <div className="space-y-6">
          <p className="text-center text-[color:var(--muted-foreground)]">
            SNSでもつながりましょう
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 border-2 border-[color:var(--border)] flex items-center justify-center hover:border-[color:var(--accent)] transition-all duration-300 group ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* フッター情報 */}
        <div className="mt-16 pt-12 border-t border-[color:var(--border)] text-center space-y-4">
          <p className="text-[color:var(--muted-foreground)]">
            日本語・中国語でのお問い合わせに対応しています
            <br />
            日本語・中文諮詢都歡迎
          </p>
          <p className="text-sm text-[color:var(--muted-foreground)]">
            通常1〜2営業日以内にご返信いたします
          </p>
        </div>
      </div>
    </section>
  );
}
