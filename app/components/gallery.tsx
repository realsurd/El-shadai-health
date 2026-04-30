'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const ease = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const imageReveal = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease },
  },
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={fadeUp}
            className="text-sky-600 font-semibold text-sm uppercase tracking-widest"
          >
            Our Work
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold text-slate-900 mt-3 mb-4"
          >
            Moments of Care &amp; Connection
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            Every day, our caregivers create meaningful moments that enrich the lives of
            clients and families across America.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {images.map((img, i) => (
            <motion.button
              key={i}
              type="button"
              variants={imageReveal}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer text-left ${img.span}`}
              onClick={() => setLightbox(img.src)}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.45, ease }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{img.caption}</p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-slate-700" />
              </div>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setLightbox(null)}
            >
              <motion.button
                type="button"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X className="w-5 h-5" />
              </motion.button>

              <motion.img
                src={lightbox}
                alt="Gallery"
                initial={{ opacity: 0, scale: 0.96, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 14 }}
                transition={{ duration: 0.35, ease }}
                className="max-w-4xl max-h-[85vh] w-full object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}