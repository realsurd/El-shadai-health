'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Zap,
  Users,
  Shield,
  MessageCircle,
  BookOpen,
  CheckCircle,
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Empathy',
    description:
      'Our caregiving is marked by deep understanding, compassion, and empathy — we see every person as a unique individual with a unique story.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description:
      'We strive for excellence in every aspect of our services, ensuring the highest quality of care that consistently exceeds expectations.',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description:
      'We empower you to maintain independence, make informed care decisions, and live life on your own terms at every stage.',
  },
  {
    icon: Shield,
    title: 'Ethics',
    description:
      'We uphold the highest ethical standards in all interactions and operations, ensuring trust, transparency, and accountability.',
  },
  {
    icon: MessageCircle,
    title: 'Engagement',
    description:
      'We actively engage with clients and families, building meaningful relationships and delivering deeply personalized care.',
  },
  {
    icon: BookOpen,
    title: 'Expertise',
    description:
      'Our caregivers bring specialized expertise tailored to your unique needs, backed by extensive training and ongoing education.',
  },
];

const differentiators = [
  'Family Caregiver Program — get paid to care for a loved one',
  'No long-term contracts — cancel anytime',
  'Dedicated care coordinator for every client',
  'Available in all areas around Houston',
  'Free in-home assessment and consultation',
  'Medicaid and private pay options available',
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

const slideLeft = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
            >
              <motion.span
                variants={fadeUp}
                className="text-sky-600 font-semibold text-sm uppercase tracking-widest"
              >
                Why El-Shadai
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight"
              >
                Care That Goes Beyond
                <br />
                the Ordinary
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-slate-500 text-lg leading-relaxed mb-8"
              >
                At El-Shadai, we don&apos;t just provide services — we deliver experiences
                built on trust, warmth, and unwavering dedication. Our six core values guide
                every interaction.
              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-3">
                {differentiators.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.22 }}
                className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100"
              >
                <p className="text-slate-700 font-medium text-sm leading-relaxed italic">
                  &quot;Personalized expert care with grace, kindness, and uncompromising
                  dignity — for you and your loved ones.&quot;
                </p>
                <p className="text-sky-600 font-bold text-sm mt-3">— El-Shadai Mission</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                variants={cardIn}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22 }}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg cursor-default ${
                  i % 3 === 0
                    ? 'bg-sky-50 border-sky-100 hover:border-sky-300'
                    : i % 3 === 1
                    ? 'bg-emerald-50 border-emerald-100 hover:border-emerald-300'
                    : 'bg-amber-50 border-amber-100 hover:border-amber-300'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.2 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    i % 3 === 0
                      ? 'bg-sky-100'
                      : i % 3 === 1
                      ? 'bg-emerald-100'
                      : 'bg-amber-100'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      i % 3 === 0
                        ? 'text-sky-600'
                        : i % 3 === 1
                        ? 'text-emerald-600'
                        : 'text-amber-600'
                    }`}
                  />
                </motion.div>

                <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}