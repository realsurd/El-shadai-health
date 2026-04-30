"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" fill="white" />
          </div>
          <span
            className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-sky-900" : "text-white"}`}
          >
            El-Shadai
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-sky-400 ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel: 281-701-6053"
          className={`hidden md:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
            scrolled
              ? "bg-sky-600 text-white hover:bg-sky-700"
              : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
          }`}
        >
          <Phone className="w-4 h-4" />
          281-701-6053
        </a>

        <button
          className={`md:hidden transition-colors ${scrolled ? "text-slate-800" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-700 font-medium text-sm hover:text-sky-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:2817016053"
              className="flex items-center gap-2 text-sm font-semibold bg-sky-600 text-white px-4 py-2 rounded-full w-fit"
            >
              <Phone className="w-4 h-4" />
              281-701-6053
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
