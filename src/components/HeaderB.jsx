import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/80 backdrop-blur-sm
        shadow-[0_2px_8px_rgba(0,0,0,0.05)]
        transition-all duration-300
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-6
          flex items-center justify-between
          h-16 md:h-20
        "
      >
        {/* ロゴ */}
        <a
          href="#"
          className="text-[#1A1A1A] text-lg md:text-xl font-medium tracking-wide"
        >
          映像工房
        </a>

        {/* メニューアイコン（モバイル） */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#1A1A1A] md:hidden transition-transform duration-300 active:scale-95"
          aria-label="メニューを開く"
        >
          <Menu size={24} />
        </button>

        {/* ナビゲーション（PC表示） */}
        <nav className="hidden md:flex gap-8 text-[#333] text-sm font-medium">
          <a href="#works" className="hover:text-[#7FB3D5] transition-colors">
            作品
          </a>
          <a href="#about" className="hover:text-[#7FB3D5] transition-colors">
            制作者について
          </a>
          <a href="#contact" className="hover:text-[#7FB3D5] transition-colors">
            お問い合わせ
          </a>
        </nav>
      </div>

      {/* モバイルメニュー（開閉式） */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <nav className="flex flex-col items-center gap-4 py-6 text-[#333] text-base font-medium">
            <a
              href="#works"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#7FB3D5] transition-colors"
            >
              作品
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#7FB3D5] transition-colors"
            >
              制作者について
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#7FB3D5] transition-colors"
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
