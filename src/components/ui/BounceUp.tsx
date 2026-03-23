"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BounceUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function BounceUp({ children, delay = 0, className = "" }: BounceUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}