"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X, Heart } from "lucide-react";
import Link from "next/link";

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
        scrolled ? "bg-[#E91E63] shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1777548439/WhatsApp_Image_2026-04-28_at_8.38.27_PM_xsjajc.jpg"
            alt="El-Shadai Home Care Logo"
            className="w-20 h-20 rounded-full object-cover border-2"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-lg font-bold transition-colors duration-200 hover:text-sky-400 ${
                scrolled ? "text-white" : "text-[#AD1457]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="tel: 281-701-6053"
          className={`hidden md:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
            scrolled
              ? "bg-white text-[#E91E63] hover:bg-pink-50"
              : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
          }`}
        >
          <Phone className="w-4 h-4" />
          281-701-6053
        </Link>

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
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-700 font-medium text-sm hover:text-sky-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:2817016053"
              className="flex items-center gap-2 text-sm font-semibold bg-sky-600 text-white px-4 py-2 rounded-full w-fit"
            >
              <Phone className="w-4 h-4" />
              281-701-6053
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
