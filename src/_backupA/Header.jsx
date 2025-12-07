import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ scrollToSection, menuItems, onAboutClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (item) => {
    if (item.label === "About") {
      onAboutClick?.();
    } else {
      scrollToSection?.(item.href.slice(1));
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        "header-safe",
        "transition-all duration-300",
        // ▼ 背景を白→深緑のグラデーションに変更
        scrolled
          ? "bg-[#0E5C52]/95 backdrop-blur-md shadow-sm"
          : "bg-gradient-to-b from-[#0E5C52] to-[#1A7264]",
      ].filter(Boolean).join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ロゴ（右UI風に全大文字＋やや小さめ） */}
        <h1
          translate="no"
          className="text-base md:text-lg font-semibold tracking-widest text-white"
        >
          TARO YAMADA
        </h1>

        {/* ハンバーガー（SP） */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="p-2 rounded-md hover:bg-white/10 active:scale-[0.97] transition md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* デスクトップナビ（右寄せ・シンプル） */}
        <nav
          translate="no"
          className="hidden md:flex items-center gap-10 text-sm font-medium text-white/90"
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item)}
              className="hover:text-white transition-colors"
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </nav>
      </div>

      {/* モバイルナビ（グラデ背景統一） */}
      <div
        className={[
          "md:hidden absolute top-full left-0 w-full overflow-hidden backdrop-blur-md",
          "bg-[rgba(14,92,82,0.95)] border-t border-white/10 shadow-md",
          "transition-all duration-300",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav translate="no" className="flex flex-col items-center py-5 gap-5">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item)}
              className="text-base font-medium text-white/95 hover:text-white transition-colors"
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
