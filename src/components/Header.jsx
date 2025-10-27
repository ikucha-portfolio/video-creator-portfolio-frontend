import { useState } from "react";
import { Menu, X } from "lucide-react"; // Xアイコンを追加（閉じるボタン）

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-5xl mx-auto">
        {/* 屋号ロゴ */}
        <h1 className="text-lg font-semibold tracking-wide text-gray-800">
          TARO YAMADA
        </h1>

        {/* ハンバーガーメニュー */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
          aria-label="メニューを開く"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* モバイルメニュー（開閉） */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-6 space-y-4">
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#works"
            className="text-gray-700 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Works
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
