import { Mail, Instagram, Youtube } from "lucide-react";

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
  { name: "Instagram", icon: Instagram, url: "#" },
  { name: "YouTube", icon: Youtube, url: "#" },
  { name: "X", icon: XIcon, url: "#" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative py-24 px-6 lg:px-12 text-center scroll-rise
      "
    >
      {/* ==== 上部の透明グラデーションライン（HERO/WORKSと統一） ==== */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="max-w-3xl mx-auto">

        {/* CONTACT：控えめな英字 */}
        <p
          className="
            text-white/60 tracking-[0.25em]
            text-sm uppercase mb-4
          "
          translate="no"
        >
          CONTACT
        </p>

        {/* 説明文 */}
        <p className="text-white/80 text-[16px] leading-relaxed mb-12">
          ご相談やお見積もりは無料です。
          <br />
          お気軽にお問い合わせください。
        </p>

        {/* ==== メインCTA ボタン（白枠 × ガラス） ==== */}
        <a
          href="#"
          className="
            inline-flex items-center justify-center gap-3
            border border-white/60
            text-white text-[15px]
            py-3 px-10
            rounded-sm
            backdrop-blur-sm bg-white/10
            hover:bg-white/20 hover:border-white
            transition-all duration-300
          "
        >
          <Mail className="h-5 w-5 text-white" />
          お問い合わせフォームへ
        </a>

        {/* ==== SNS === */}
        <div className="mt-14">
          <p className="text-white/70 mb-6">SNS でもつながりましょう</p>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="
                    w-12 h-12 flex items-center justify-center
                    border border-white/40
                    text-white
                    backdrop-blur-sm bg-white/10
                    hover:bg-white/20 hover:border-white
                    transition-all duration-300
                  "
                  translate="no"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
