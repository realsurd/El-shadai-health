import Link from "next/link";
import { Heart, Phone, MapPin, Clock } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1A2B4A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="https://res.cloudinary.com/du153mzwk/image/upload/v1777548439/WhatsApp_Image_2026-04-28_at_8.38.27_PM_xsjajc.jpg"
                alt="El-Shadia Logo"
                className="w-10 h-10 rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <div>
                <span className="font-bold text-base block">El Shadai</span>
                <span className="text-xs text-white/60 block">
                  Health & Home Care
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Compassionate, personalized home care serving Houston families for
              over 10 years.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://www.instagram.com/elshadihh1407/"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-[#E91E63] rounded-full flex items-center justify-center transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-[#E91E63] rounded-full flex items-center justify-center transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 bg-white/10 hover:bg-[#E91E63] rounded-full flex items-center justify-center transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Our Services", path: "/services" },
                { label: "Photo Gallery", path: "/gallery" },
                { label: "Contact Us", path: "/contact-us" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className="text-white/70 hover:text-[#F06292] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Personal Care",
                "Skilled Nursing",
                "Companion Care",
                "Post-Hospital Care",
                // "Alzheimer's Care",
                "Respite Care",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-[#F06292] text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#E91E63] mt-0.5 flex-shrink-0" />
                <div>
                  <Link
                    href="tel:+12817016053"
                    className="text-white text-sm font-semibold hover:text-[#F06292] transition-colors"
                  >
                    (281) 701-6053
                  </Link>
                  <p className="text-white/50 text-xs">24/7 Available</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E91E63] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">1407 Lacy Dr</p>
                  <p className="text-white/70 text-sm">Baytown, TX 77520</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#E91E63] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Mon – Sun</p>
                  <p className="text-white/70 text-sm">8:00 AM – 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} El Shadai Health and Home Care
            Service. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Serving Houston &amp; Surrounding Communities
          </p>
        </div>
      </div>
    </footer>
  );
}
