import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ scrollToSection, menuItems }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <h1
          translate="no"
          className="text-lg md:text-xl font-medium tracking-wider text-foreground"
        >
          Ryan Chronicle
        </h1>

        {/* ハンバーガーメニュー（モバイル） */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 hover:bg-muted rounded-md transition-colors md:hidden"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>

        {/* デスクトップナビゲーション */}
        <nav
          translate="no"
          className="hidden md:flex items-center space-x-8 text-sm font-medium"
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href.slice(1))}
              className="text-foreground hover:text-primary transition"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* モバイルナビゲーション */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-t border-border transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav translate="no" className="flex flex-col items-center py-6 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                scrollToSection(item.href.slice(1));
                setMenuOpen(false);
              }}
              className="text-lg font-medium text-foreground hover:text-primary transition"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
