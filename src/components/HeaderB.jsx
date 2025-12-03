import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderB() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        transition-all duration-300

        /* ✨ すりガラス質感（元UIを維持） */
        backdrop-blur-md
        backdrop-saturate-150

        /* ✨ 緑の薄い斜めグラデをフィルムのように重ねる */
        bg-[linear-gradient(
          135deg,
          rgba(33, 81, 80, 0.25),
          rgba(59, 130, 140, 0.18),
          rgba(86, 166, 178, 0.13),
          rgba(126,192,204,0.10)
        )]
        bg-opacity-40

        border-b border-white/10
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-6
          flex items-center justify-between
          h-16 md:h-20
        "
      >
        {/* Logo（浅葱色・光を帯びた色） */}
        <Link
          to="/"
          className="text-[#FFEFB3] text-lg md:text-xl font-medium tracking-wide"
          translate="no"
        >
          Ryan.Chronicle
        </Link>

        {/* Mobile Menu icon（浅葱色） */}
        <button
  onClick={() => setIsOpen(!isOpen)}
  className="text-[#FFEFB3] md:hidden transition-transform duration-300 active:scale-95"
  aria-label="Open navigation menu"
>
  <Menu
    size={22}
    strokeWidth={1.4}
    className="scale-x-[1.15] scale-y-[0.85]"
  />
</button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-white text-sm font-medium">
          <a href="#works" className="hover:text-[#FFEFB3] transition-colors" translate="no">
            Works
          </a>
          <Link
            to="/about"
            className="hover:text-[#FFEFB3] transition-colors"
            translate="no"
          >
            About
          </Link>
          <a href="#contact" className="hover:text-[#FFEFB3] transition-colors" translate="no">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation（ガラス × 薄グラデ） */}
      {isOpen && (
        <div
          className="
            md:hidden 
            bg-[linear-gradient(
              135deg,
              rgba(33, 81, 80, 0.28),
              rgba(59, 130, 140, 0.20),
              rgba(86, 166, 178, 0.17),
              rgba(126,192,204,0.12)
            )]
            backdrop-blur-xl
            backdrop-saturate-150
            border-t border-white/10
          "
        >
          <nav className="flex flex-col items-center gap-4 py-6 text-white text-base font-medium">
            <a
              href="#works"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#FFEFB3] transition-colors"
              translate="no"
            >
              Works
            </a>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#FFEFB3] transition-colors"
              translate="no"
            >
              About
            </Link>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#FFEFB3] transition-colors"
              translate="no"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
