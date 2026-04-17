'use client';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Caregiver with elderly client',
    caption: 'One-on-One Companionship',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Caregiver helping with daily activities',
    caption: 'Daily Living Assistance',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/6303762/pexels-photo-6303762.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Home care professional',
    caption: 'Professional Care Team',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Nurse assisting elderly person',
    caption: 'Medical Support at Home',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/7551670/pexels-photo-7551670.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Caregiver and senior enjoying time together',
    caption: 'Building Meaningful Bonds',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/8376232/pexels-photo-8376232.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Home care services',
    caption: 'Comfort & Dignity at Home',
    span: '',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
            Moments of Care & Connection
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Every day, our caregivers create meaningful moments that enrich the lives of clients and families across America.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{img.caption}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-slate-700" />
              </div>
            </div>
          ))}
        </div>

        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightbox}
              alt="Gallery"
              className="max-w-4xl max-h-[85vh] w-full object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
