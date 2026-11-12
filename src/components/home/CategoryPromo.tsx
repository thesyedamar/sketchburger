"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { getImageUrl } from "@/lib/menuData";
import { useRef } from "react";

const categories = [
  {
    label: "Prime Sizzling",
    title: "Steaks",
    price: "from PKR 1,999",
    bg: "#7C1D1D",
    img: "photo-1558030006-450675393462",
  },
  {
    label: "Italian Artisan",
    title: "Pastas",
    price: "from PKR 1,499",
    bg: "#B45309",
    img: "photo-1621996346565-e3d5d6281724",
  },
  {
    label: "Signature",
    title: "Chicken Kiev",
    price: "PKR 1,599",
    bg: "#FFC500",
    img: "photo-1604908176997-125f25cc6f3d",
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
        <a
          href="/menu"
          className={`inline-block mt-4 px-6 py-2 rounded-full font-nunito font-bold text-sm transition-transform hover:scale-105 ${
            cat.isYellow ? "bg-dark text-white" : "bg-yellow text-dark"
          }`}
        >
          Explore
        </a>
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