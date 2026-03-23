"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PromoTag from "@/components/ui/PromoTag";

const decorations = [
  { emoji: "🧅", className: "top-4 left-10", animate: { y: [0, -12, 0], rotate: [0, 15, 0] }, duration: 2.5 },
  { emoji: "🌶️", className: "top-20 right-16", animate: { y: [0, -15, 0] }, duration: 3 },
  { emoji: "🥬", className: "bottom-16 left-20", animate: { y: [0, -10, 0], rotate: [0, -10, 0] }, duration: 3.5 },
  { emoji: "🍅", className: "bottom-8 right-20", animate: { y: [0, -12, 0], rotate: [0, 20, 0] }, duration: 2.8 },
  { emoji: "🧀", className: "top-1/3 left-4", animate: { y: [0, -8, 0] }, duration: 4 },
];

export default function Hero() {
  return (
    <section className="relative bg-cream min-h-screen pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="pl-0 md:pl-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-yellow/20 text-yellow rounded-full px-4 py-1 text-sm font-nunito font-semibold mb-4"
            >
              ⭐ Dargai&apos;s #1 Burger Spot
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-fredoka text-5xl md:text-7xl lg:text-8xl text-dark leading-tight"
            >
              <span className="block">SKETCH</span>
              <span className="block text-yellow">BURGER</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block bg-green/20 text-green rounded px-3 py-0.5 mt-3 font-nunito italic text-sm"
            >
              Dargai Phattak, Malakand — Fresh Daily
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-dm text-gray text-base leading-relaxed max-w-sm mt-4"
            >
              Handcrafted smash burgers, crispy rolls and premium street food — made fresh to order in the heart of Dargai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <p className="font-nunito text-gray text-sm">Starting from</p>
              <p className="font-fredoka text-2xl text-yellow">PKR 350</p>
              <span className="font-dm text-gray text-sm line-through">PKR 450</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-6"
            >
              <Link href="/menu" className="btn-primary flex items-center gap-2">
                Order Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/menu"
                className="border-2 border-yellow text-yellow rounded-full px-8 py-3.5 font-nunito font-bold hover:bg-yellow hover:text-dark transition-colors"
              >
                View Menu
              </Link>
            </motion.div>
          </div>

          <div className="relative flex justify-center">
            <motion.div
              className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-yellow/25 absolute"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              className="relative z-10"
            >
              <Image
                src="/images/burger.png"
                alt="Smash Burger"
                width={450}
                height={450}
                className="max-w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            {decorations.map((d, i) => (
              <motion.span
                key={i}
                className={`absolute text-4xl ${d.className}`}
                animate={d.animate}
                transition={{ duration: d.duration, repeat: Infinity }}
              >
                {d.emoji}
              </motion.span>
            ))}

            <PromoTag className="absolute top-4 left-4">
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