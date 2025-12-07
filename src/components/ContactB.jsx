// src/components/ContactB.jsx
import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

// X ロゴ
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
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/ryan.chronicle/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@ryan_chronicle?si=bWyrwwVJYe8hE7Yk",
  },
  {
    name: "X",
    icon: XIcon,
    url: "https://x.com/ryanchroniclejp?s=21&t=kZaMgtchjSEJeQzmW10Q0A",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative py-28 px-6 lg:px-12 text-center scroll-rise
      "
    >
      {/* 上線（浅黄色の光） */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r 
          from-transparent via-[#F3E8C8]/60 to-transparent" />

      <div className="max-w-3xl mx-auto">

        <p
          className="
            text-white/60 tracking-[0.25em]
            text-sm uppercase mb-6
            
          "
        >
          CONTACT
        </p>

        <p className="text-white/80 text-[16px] leading-relaxed mb-12">
          ご相談やお見積もりは無料です。<br />
          お気軽にお問い合わせください。
        </p>

        {/* ==== CTAボタン（ガラス × 洗練） ==== */}
        <Link
          to="/contact"
          className="
            group inline-flex items-center gap-2
            text-white/85 text-[15px] tracking-wide
            transition-all duration-500 relative
          "
        >
          <span
            className="
              text-[17px] leading-none
              transition-all duration-500
              group-hover:text-[#F3E8C8]
              group-hover:translate-x-[3px]
            "
          >
            ▶︎
          </span>

          <span className="transition-colors duration-500 group-hover:text-[#F3E8C8]">
            お問い合わせフォームへ
          </span>

          <span
            className="
              absolute -bottom-[2px] left-0 w-full h-px
              bg-transparent transition-all duration-500
              group-hover:bg-[#F3E8C8]
              group-hover:shadow-[0_0_8px_#F3E8C8]
            "
          />
        </Link>

        {/* ==== SNSアイコン ==== */}
        <div className="mt-16 flex justify-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12 flex items-center justify-center
                  rounded-full
                  border border-white/30
                  text-white
                  backdrop-blur-md bg-white/10
                  hover:border-[#F3E8C8]
                  hover:bg-[#F3E8C8]/20
                  hover:shadow-[0_0_18px_rgba(243,232,200,0.45)]
                  transition-all duration-300
                "
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
