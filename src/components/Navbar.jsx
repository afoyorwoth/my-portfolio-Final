
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative z-50 w-full px-6 md:px-16 py-6 bg-brand-cream dark:bg-brand-darkbg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="font-heading text-2xl font-bold text-brand-burgundy dark:text-brand-lighttext"
        >
          Patricia<span className="text-brand-gold">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="text-brand-dark dark:text-brand-lighttext hover:text-brand-burgundy transition">
            Home
          </Link>

          <Link to="/about" className="text-brand-dark dark:text-brand-lighttext hover:text-brand-burgundy transition">
            About
          </Link>

          <Link to="/projects" className="text-brand-dark dark:text-brand-lighttext hover:text-brand-burgundy transition">
            Projects
          </Link>

          <Link to="/contact" className="text-brand-dark dark:text-brand-lighttext hover:text-brand-burgundy transition">
            Contact
          </Link>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="border border-brand-gold px-3 py-2 rounded-full text-brand-dark dark:text-brand-lighttext"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <Link
            to="/contact"
            className="hidden md:inline-block bg-brand-burgundy text-white px-5 py-3 rounded-full hover:bg-brand-dark transition"
          >
            Let's Talk
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden border border-brand-gold px-3 py-2 rounded-lg text-brand-dark dark:text-brand-lighttext"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden absolute left-0 top-full w-full bg-brand-cream dark:bg-[#292426] shadow-lg border-t border-brand-gold/30 px-6 py-5"
        >
          <div className="flex flex-col gap-5 font-medium">
            <Link to="/" onClick={closeMenu} className="text-brand-dark dark:text-brand-lighttext hover:text-brand-burgundy">
              Home
            </Link>

            <Link to="/about" onClick={closeMenu} className="text-brand-dark dark:text-brand-lighttext hover:text-brand-burgundy">
              About
            </Link>

            <Link to="/projects" onClick={closeMenu} className="text-brand-dark dark:text-brand-lighttext hover:text-brand-burgundy">
              Projects
            </Link>

            <Link to="/contact" onClick={closeMenu} className="text-brand-dark dark:text-brand-lighttext hover:text-brand-burgundy">
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="bg-brand-burgundy text-white text-center px-5 py-3 rounded-full"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
