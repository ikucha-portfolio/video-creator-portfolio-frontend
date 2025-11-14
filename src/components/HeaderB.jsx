import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderB() {
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
        {/* Logo */}
        <Link
          to="/"
          className="text-[#1A1A1A] text-lg md:text-xl font-medium tracking-wide"
        >
          Ryan.Chronicle
        </Link>

        {/* Mobile Menu icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#1A1A1A] md:hidden transition-transform duration-300 active:scale-95"
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-[#333] text-sm font-medium">
          <a href="#works" className="hover:text-[#7FB3D5] transition-colors">
            Works
          </a>
          <Link
            to="/about"
            className="hover:text-[#7FB3D5] transition-colors"
          >
            About
          </Link>
          <a href="#contact" className="hover:text-[#7FB3D5] transition-colors">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
          <nav className="flex flex-col items-center gap-4 py-6 text-[#333] text-base font-medium">
            <a
              href="#works"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#7FB3D5] transition-colors"
            >
              Works
            </a>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#7FB3D5] transition-colors"
            >
              About
            </Link>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#7FB3D5] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
