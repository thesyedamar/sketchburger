"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartBar from "@/components/layout/CartBar";
import ItemCard from "@/components/ui/ItemCard";
import BounceUp from "@/components/ui/BounceUp";
import { menuData } from "@/lib/menuData";

const categories = [
  { key: "burgers", label: "Burgers" },
  { key: "rolls", label: "Rolls" },
  { key: "pizza", label: "Pizza" },
  { key: "sandwiches", label: "Sandwiches" },
  { key: "drinks", label: "Drinks" },
  { key: "desserts", label: "Desserts" },
  { key: "deals", label: "Deals" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("burgers");

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map((cat) => document.getElementById(cat.key));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveCategory(categories[i].key);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (key: string) => {
    setActiveCategory(key);
    const element = document.getElementById(key);
    if (element) {
      const offset = 120;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16 pb-36">
        <section className="bg-cream relative overflow-hidden py-16 md:py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🍔</div>
            <div className="absolute top-20 right-20 text-4xl">🍕</div>
            <div className="absolute bottom-10 left-1/4 text-5xl">🌭</div>
            <div className="absolute bottom-20 right-1/3 text-4xl">🥤</div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid md:grid-cols-2 items-center gap-12">
              <div>
                <div className="flex items-center gap-2 text-sm font-dm text-gray mb-3">
                  <Link href="/" className="hover:text-yellow transition-colors">Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-yellow font-semibold">Menu</span>
                </div>
                <BounceUp>
                  <h1 className="font-fredoka text-dark text-5xl md:text-6xl lg:text-7xl">
                    Our <span className="text-yellow">Menu</span>
                  </h1>
                </BounceUp>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-dm text-gray text-lg mt-4 max-w-md"
                >
                  Explore our delicious range of burgers, rolls, pizza, and more — made fresh daily with love.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4 mt-8"
                >
                  <div className="bg-yellow/20 px-5 py-2 rounded-full">
                    <span className="font-nunito font-bold text-dark">28+ Items</span>
                  </div>
                  <div className="bg-green/20 px-5 py-2 rounded-full">
                    <span className="font-nunito font-bold text-green">Fresh Daily</span>
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative"
                >
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow/30 absolute inset-0 animate-pulse" />
                  <div className="relative z-10">
                    <Image
                      src="/images/fastfood.png"
                      alt="Our Menu"
                      width={400}
                      height={400}
                      className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-2 -right-2 bg-red text-white text-xs font-bold px-3 py-1 rounded-full"
                  >
                    HOT!
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <div className="sticky top-16 z-40 bg-white border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="flex gap-2 py-3 overflow-x-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => scrollToCategory(cat.key)}
                  className={`px-5 py-2 rounded-full font-nunito font-semibold text-sm whitespace-nowrap transition-all ${
                    activeCategory === cat.key
                      ? "bg-yellow text-dark shadow-btn"
                      : "bg-gray-100 text-gray border border-border hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 pt-10 pb-6">
          {categories.map((cat) => (
            <section key={cat.key} id={cat.key} className="scroll-mt-32 mb-12">
              <div className="mb-6">
                <h2 className="font-fredoka text-dark text-2xl md:text-3xl">{cat.label}</h2>
                <p className="font-dm text-gray text-sm">Made fresh to order</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {menuData[cat.key]?.map((item, i) => (
                  <BounceUp key={item.id} delay={i * 0.05}>
                    <ItemCard
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      desc={item.desc}
                      img={item.img}
                      stars={item.stars}
                      badge={item.badge}
                      showQtyControls
                    />
                  </BounceUp>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <CartBar />
    </>
  );
}