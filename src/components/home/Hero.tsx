"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PromoTag from "@/components/ui/PromoTag";

const decorations = [
  { emoji: "🥩", className: "top-4 left-10", animate: { y: [0, -12, 0], rotate: [0, 15, 0] }, duration: 2.5 },
  { emoji: "🔥", className: "top-20 right-16", animate: { y: [0, -15, 0] }, duration: 3 },
  { emoji: "🍝", className: "bottom-16 left-20", animate: { y: [0, -10, 0], rotate: [0, -10, 0] }, duration: 3.5 },
  { emoji: "🍹", className: "bottom-8 right-20", animate: { y: [0, -12, 0], rotate: [0, 20, 0] }, duration: 2.8 },
  { emoji: "🍔", className: "top-1/3 left-4", animate: { y: [0, -8, 0] }, duration: 4 },
];

export default function Hero() {
  return (
    <section className="relative bg-cream min-h-[90vh] md:min-h-screen pt-20 md:pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="pl-0 md:pl-8 order-2 md:order-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-yellow/20 text-dark rounded-full px-3.5 py-1 text-xs md:text-sm font-nunito font-bold mb-3 md:mb-4 border border-yellow/30"
            >
              ⭐ 4.5 Rated · 649+ Reviews in I-8 Markaz
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-fredoka text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-dark leading-tight"
            >
              <span className="block">Grill</span>
              <span className="block text-yellow">Yard</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block bg-green/15 text-green-dark rounded-full px-3.5 py-1 mt-2 md:mt-3 font-nunito font-semibold text-xs md:text-sm"
            >
              EOBI Plaza, Sector I-8 Markaz, Islamabad · Open till 12 AM
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-dm text-gray text-sm md:text-base leading-relaxed max-w-md mt-3 md:mt-4"
            >
              All about Taste and Quality! Savor sizzling chef-crafted beef & chicken steaks, creamy Alfredo pastas, crisp Chicken Kiev, and gourmet burgers in a relaxed outdoor steakhouse ambiance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 md:mt-6 flex items-baseline gap-3"
            >
              <div>
                <p className="font-nunito text-gray text-xs md:text-sm">Average per person</p>
                <p className="font-fredoka text-xl md:text-2xl text-yellow">Rs 2,000 – 3,000</p>
              </div>
              <span className="text-xs bg-yellow/15 text-dark font-nunito font-semibold px-2.5 py-1 rounded-full">
                Steakhouse & Continental
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6"
            >
              <Link href="/menu" className="btn-primary flex items-center justify-center gap-2 text-center">
                Explore Menu <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/923205401241"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-yellow text-dark bg-yellow/10 rounded-full px-6 md:px-8 py-3 md:py-3.5 font-nunito font-bold hover:bg-yellow hover:text-dark transition-colors text-center"
              >
                Order on WhatsApp
              </a>
            </motion.div>
          </div>

          <div className="relative flex justify-center order-1 md:order-2">
            <motion.div
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] rounded-full bg-yellow/25 absolute"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              className="relative z-10"
            >
              <Image
                src="/images/BBQ.png"
                alt="Delicious BBQ"
                width={350}
                height={350}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-[450px] md:h-[450px] max-w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            {decorations.map((d, i) => (
              <motion.span
                key={i}
                className={`absolute text-2xl sm:text-3xl md:text-4xl hidden sm:block ${d.className}`}
                animate={d.animate}
                transition={{ duration: d.duration, repeat: Infinity }}
              >
                {d.emoji}
              </motion.span>
            ))}

            <PromoTag className="absolute top-2 md:top-4 left-2 md:left-4">
              <div className="text-center spin-slow">
                <span>20%</span>
                <span className="block text-[10px]">OFF</span>
              </div>
            </PromoTag>
          </div>
        </div>
      </div>
    </section>
  );
}