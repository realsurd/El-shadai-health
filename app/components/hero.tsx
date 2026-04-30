"use client";

import { motion } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function Hero() {
  return (
    <section className="bg-[#F8BBD0] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT - TEXT */}
          <motion.div
            className="text-[#0C2340]"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Serving Greater Houston Area
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Uncompromising
              <span className="block text-[#AD1457]">Home Care</span>
              That Puts You First
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg"
            >
              Personalized, compassionate care delivered by dedicated
              professionals — right in the comfort of your own home. Over 10,000
              families trust El-Shadai.
            </motion.p>

            {/* BADGES */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-4 mb-10"
            >
              {[
                "10,000+ Happy Clients",
                "5-Star Rated",
                "Free Consultation",
              ].map((badge) => (
                <motion.div
                  key={badge}
                  variants={fadeUp}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  {badge}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={fadeUp}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:2817016053"
              className="inline-flex items-center gap-3 bg-sky-600 text-white font-bold px-6 py-3.5 rounded-full hover:bg-sky-700 transition shadow-md"
            >
              <Phone className="w-5 h-5" />
              Call 281-701-6053
            </motion.a>
          </motion.div>

          {/* RIGHT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Home care"
              className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
            />

            {/* subtle overlay card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow">
              <p className="text-sm font-semibold text-[#0C2340]">
                Trusted Care Professionals
              </p>
              <p className="text-xs text-gray-500">
                Compassion. Reliability. Excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
