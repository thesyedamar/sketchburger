"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { getImageUrl } from "@/lib/menuData";
import { useRef } from "react";

const categories = [
  {
    label: "Fresh Food",
    title: "Meals",
    price: "PKR 350",
    bg: "#2D9142",
    img: "photo-1565299624946-b28f40a0ae38",
  },
  {
    label: "House",
    title: "Burgers",
    price: "PKR 480",
    bg: "#E65C00",
    img: "photo-1568901346375-23c9450c58cd",
  },
  {
    label: "Hot Fresh",
    title: "Rolls",
    price: "PKR 320",
    bg: "#FFC500",
    img: "photo-1626700051175-6818013e1d4f",
    isYellow: true,
  },
];

export default function CategoryPromo() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={i} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, index * 20]);

  return (
    <motion.div
      ref={ref}
      style={{ y, backgroundColor: cat.bg }}
      className={`h-64 rounded-2xl overflow-hidden flex items-center justify-between px-8 relative`}
    >
      <div className="text-white">
        <span className={`font-nunito text-sm ${cat.isYellow ? "text-dark" : "text-white/80"}`}>
          {cat.label}
        </span>
        <h3 className={`font-fredoka text-4xl ${cat.isYellow ? "text-dark" : "text-white"}`}>
          {cat.title}
        </h3>
        <p className={`font-nunito text-lg ${cat.isYellow ? "text-dark" : "text-white"}`}>
          {cat.price}
        </p>
        <button
          className={`mt-4 px-6 py-2 rounded-full font-nunito font-bold text-sm ${
            cat.isYellow ? "bg-dark text-white" : "bg-yellow text-dark"
          }`}
        >
          Order Now
        </button>
      </div>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2 + index * 0.5, repeat: Infinity }}
        className="w-32 h-32 relative"
      >
        <Image
          src={getImageUrl(cat.img, 300)}
          alt={cat.title}
          width={150}
          height={150}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
}