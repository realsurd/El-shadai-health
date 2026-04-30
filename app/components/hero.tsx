"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Loader2, ChevronDown } from "lucide-react";

// const STATES = ["Texas", "Missouri", "New Jersey", "Pennsylvania"];

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

const softScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease },
  },
};

const bgReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 0.15,
    scale: 1,
    transition: { duration: 1.2, ease },
  },
};

export default function Hero() {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   state: "",
  //   message: "",
  // });
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState("");

  // const handleChange = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >,
  // ) => {
  //   setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");

  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 700));
  //     setSuccess(true);
  //     setForm({ name: "", email: "", phone: "", state: "", message: "" });
  //   } catch {
  //     setError("Something went wrong. Please try again or call us directly.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0C2340 0%, #0369A1 60%, #0EA5E9 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        className="absolute inset-0"
        variants={bgReveal}
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="text-white"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Serving Greater Houston Area
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Uncompromising
              <span className="block text-sky-300">Home Care</span>
              That Puts You First
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg"
            >
              Personalized, compassionate care delivered by dedicated
              professionals — right in the comfort of your own home. Over 10,000
              families trust El-Shadai.
            </motion.p>

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
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {badge}
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href="tel:2817016053"
              className="inline-flex items-center gap-3 bg-white text-sky-700 font-bold px-6 py-3.5 rounded-full hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl text-base"
            >
              <Phone className="w-5 h-5" />
              Call 281-701-6053
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
