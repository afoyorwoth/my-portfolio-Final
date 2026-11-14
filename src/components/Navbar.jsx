
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="w-full px-6 md:px-16 py-6 flex items-center justify-between">
      <Link
        to="/"
        className="font-heading text-2xl font-bold text-brand-burgundy"
      >
        Patricia<span className="text-brand-gold">.</span>
      </Link>

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
      </div>
    </nav>
  );
}

export default Navbar;
