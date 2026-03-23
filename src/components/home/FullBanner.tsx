"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getImageUrl } from "@/lib/menuData";

export default function FullBanner() {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <Image
        src={getImageUrl("photo-1628840042765-356cda07504e", 1800)}
        alt="Delicious Burgers"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

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
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full bg-red flex items-center justify-center"
            >
              <span className="font-nunito font-bold text-white text-sm">
                30% OFF
              </span>
            </motion.div>
          </motion.div>

          <div className="text-center md:col-span-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-nunito italic text-yellow text-xl mb-2"
            >
              Super
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-fredoka text-white text-6xl md:text-8xl italic"
            >
              Delicious
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="font-fredoka text-yellow text-5xl md:text-7xl"
            >
              BURGERS
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="font-dm text-white/80 mt-2"
            >
              Fast! Hungry? Order Your Favourite Food!
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="btn-primary mt-6"
            >
              Order Now
            </motion.button>
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