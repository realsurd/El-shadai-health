"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Reveal({
  children,
  className = "",
  variant = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: any;
}) {
  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}