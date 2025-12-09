import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderB() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // 80px までは完全透明（見えない）
      if (y < 80) {
        setScrollOpacity(0);
        return;
      }

      // 80px → 200px のスクロールに応じて透明度が変わる
      const progress = Math.min((y - 80) / 120, 1);

      const min = 0.3;   // フェードイン直後の薄透け白
      const max = 0.95;  // スクロール後の濃い白
      setScrollOpacity(min + (max - min) * progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // メニューを開いた時は強制的に真っ白にする
  const bgOpacity = isOpen ? 1 : scrollOpacity;

  return (
    <header
      style={{
        opacity: bgOpacity === 0 && !isOpen ? 0 : 1, // 完全非表示スタート
        backgroundColor: `rgba(255,255,255,${bgOpacity})`,
        backdropFilter: `blur(${bgOpacity * 12}px)`,
        WebkitBackdropFilter: `blur(${bgOpacity * 12}px)`,
        transition: "opacity 0.5s ease, background-color 0.5s ease, backdrop-filter 0.5s ease",
        pointerEvents: bgOpacity === 0 && !isOpen ? "none" : "auto",
      }}
      className="
        fixed top-0 left-0 w-full z-50
        border-b border-white/40
      "
    >
      {/* HEADER CONTENT */}
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

        <Link
          to="/"
          className="font-mincho text-[#147C88] text-lg md:text-xl tracking-wide"
          translate="no"
        >
          RYAN CHRONICLE
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#147C88]"
        >
          <Menu size={22} strokeWidth={1.5} />
        </button>

        <nav className="hidden md:flex gap-8 text-[#147C88] text-sm font-medium" translate="no">
          <a href="#works" className="hover:text-[#0f5d68]">Works</a>
          <Link to="/about" className="hover:text-[#0f5d68]">About</Link>
          <a href="#contact" className="hover:text-[#0f5d68]">Contact</a>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          style={{
            backgroundColor: "rgba(255,255,255,1)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            transition: "background-color 0.3s ease",
          }}
          className="md:hidden border-t border-white/50"
        >
          <nav className="flex flex-col items-center gap-4 py-6 text-[#147C88] text-base" translate="no">
            <a href="#works" onClick={() => setIsOpen(false)}>Works</a>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
