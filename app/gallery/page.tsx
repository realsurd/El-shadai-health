"use client";
import { use, useState } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { Phone } from "lucide-react";

type Category =
  | "All"
  | "Caregiving"
  | "Nursing"
  | "Companionship"
  | "Community";

interface GalleryItem {
  url: string;
  alt: string;
  category: Exclude<Category, "All">;
}

const gallery: GalleryItem[] = [
  {
    url: "https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg",
    alt: "Caregiver assisting elderly client",
    category: "Caregiving",
  },
  {
    url: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
    alt: "Nurse reviewing care plan",
    category: "Nursing",
  },
  {
    url: "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg",
    alt: "Warm conversation with client",
    category: "Companionship",
  },
  {
    url: "https://images.pexels.com/photos/7551650/pexels-photo-7551650.jpeg",
    alt: "Home care professional at work",
    category: "Caregiving",
  },
  {
    url: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
    alt: "Skilled nursing visit",
    category: "Nursing",
  },
  {
    url: "https://images.pexels.com/photos/7578994/pexels-photo-7578994.jpeg",
    alt: "Caregiver and senior sharing a meal",
    category: "Companionship",
  },
  {
    url: "https://images.pexels.com/photos/6354017/pexels-photo-6354017.jpeg",
    alt: "Physical therapy at home",
    category: "Caregiving",
  },
  {
    url: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg",
    alt: "Community support event",
    category: "Community",
  },
  {
    url: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg",
    alt: "Medical professional consultation",
    category: "Nursing",
  },
  {
    url: "https://images.pexels.com/photos/7551620/pexels-photo-7551620.jpeg",
    alt: "Elderly client being cared for",
    category: "Caregiving",
  },
  {
    url: "https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg",
    alt: "Caregiver helping with daily tasks",
    category: "Companionship",
  },
  {
    url: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
    alt: "Community health program",
    category: "Community",
  },
];

const categories: Category[] = [
  "All",
  "Caregiving",
  "Nursing",
  "Companionship",
  "Community",
];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-[#FFF5F8] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#E91E63] text-xs font-semibold uppercase tracking-widest mb-2">
            Photo Gallery
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight text-5xl mb-5">
            See the Care We Provide
          </h1>
          <p className="text-[#4A5568] max-w-xl mx-auto text-lg">
            A glimpse into the compassionate, professional care that El Shadai
            delivers to families across Houston every day.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-10 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-[#E91E63] text-white shadow-md"
                    : "bg-[#FFF5F8] text-[#4A5568] hover:bg-[#FCE4EC] hover:text-[#E91E63] border border-[#FCE4EC]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <button
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-square focus:outline-none focus:ring-2 focus:ring-[#E91E63]"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1A2B4A]/0 group-hover:bg-[#1A2B4A]/40 transition-all duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left">
                    {item.alt}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-white/90 text-[#E91E63] text-xs px-2 py-0.5 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.url}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-contain bg-black"
            />
            <div className="bg-white p-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#1A2B4A] text-sm">
                  {lightbox.alt}
                </p>
                <span className="bg-[#FCE4EC] text-[#E91E63] text-xs px-2 py-0.5 rounded-full">
                  {lightbox.category}
                </span>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="text-[#718096] hover:text-[#E91E63] text-sm font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#E91E63]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Let our caring team show you the same dedication you see in these
            photos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+12817016053"
              className="bg-white text-[#E91E63] px-7 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-[#FFF5F8] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href="/contact-us"
              className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-[#E91E63] transition-all duration-200 inline-flex items-center gap-2"
            >
              Request Care
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
