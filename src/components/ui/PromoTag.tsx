"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PromoTagProps {
  children: ReactNode;
  className?: string;
  spin?: boolean;
}

export default function PromoTag({ children, className = "", spin = true }: PromoTagProps) {
  return (
    <motion.div
      animate={spin ? { rotate: 360 } : {}}
      transition={spin ? { duration: 8, ease: "linear", repeat: Infinity } : {}}
      className={`rounded-full bg-yellow text-dark font-nunito font-bold text-xs w-16 h-16 flex items-center justify-center ${className}`}
    >
      {children}
    </motion.div>
  );
}