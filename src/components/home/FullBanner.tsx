"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getImageUrl } from "@/lib/menuData";

export default function FullBanner() {
  return (
    <section className="relative h-[420px] md:h-[500px] overflow-hidden">
      <Image
        src={getImageUrl("photo-1544025162-d76694265947", 1800)}
        alt="Grill Yard Sizzling Steaks"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-3 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 rounded-full bg-red flex flex-col items-center justify-center text-center p-2 shadow-2xl"
            >
              <span className="font-fredoka text-white text-xs leading-none">4.5 ⭐</span>
              <span className="font-nunito font-bold text-white text-[10px] uppercase mt-0.5">
                Top Rated
              </span>
            </motion.div>
          </motion.div>

          <div className="text-center md:col-span-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-nunito italic text-yellow text-xl mb-1"
            >
              Sizzling & Juicy
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-fredoka text-white text-5xl md:text-7xl"
            >
              Grill Yard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="font-fredoka text-yellow text-4xl md:text-6xl tracking-wider"
            >
              STEAKS
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="font-dm text-white/90 text-sm md:text-base mt-2"
            >
              Outdoor Seating · Live Sports · Open Till 12 AM in I-8 Markaz
            </motion.p>
            <motion.a
              href="https://wa.me/923205401241"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="btn-primary inline-block mt-6"
            >
              Order on WhatsApp
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Image
                src={getImageUrl("photo-1568901346375-23c9450c58cd", 400)}
                alt="Burger"
                width={300}
                height={300}
                className="food-image-heavy ml-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}