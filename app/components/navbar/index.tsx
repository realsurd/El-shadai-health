"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const solidBg = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidBg ? "bg-[#E91E63] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="https://res.cloudinary.com/du153mzwk/image/upload/v1777548439/WhatsApp_Image_2026-04-28_at_8.38.27_PM_xsjajc.jpg"
              alt="El-Shadia Logo"
              className="w-15 h-15 rounded-full transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    solidBg
                      ? active
                        ? "bg-white/20 text-white"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                      : active
                        ? "text-[#E91E63] bg-[#FFF5F8]"
                        : "text-[#1A2B4A] hover:text-[#E91E63] hover:bg-[#FFF5F8]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="tel:+12817016053"
            className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              solidBg
                ? "bg-white text-[#E91E63] hover:bg-[#FFF5F8] shadow"
                : "bg-[#E91E63] text-white hover:bg-[#D81B60] shadow-md"
            }`}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Link>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${solidBg ? "text-white" : "text-[#1A2B4A]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#E91E63] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="tel:+17138001234"
            className="mt-2 flex items-center justify-center gap-2 bg-white text-[#E91E63] px-5 py-3 rounded-xl text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Link>
        </div>
      </div>
    </header>
  );
}
