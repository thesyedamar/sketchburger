"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartBar from "@/components/layout/CartBar";
import ItemCard from "@/components/ui/ItemCard";
import BounceUp from "@/components/ui/BounceUp";
import { menuData, MenuItem } from "@/lib/menuData";

const categories = [
  { key: "steaks", label: "Loaded Steaks", subtitle: "Prime flame-grilled cuts & sizzling platters" },
  { key: "chicken_grill", label: "Grill & Fried Chicken", subtitle: "Chef specials, Chicken Kiev & golden fried cuts" },
  { key: "pastas", label: "Italian Pastas & Lasagna", subtitle: "Handcrafted Alfredo, Cajun chicken & baked lasagna" },
  { key: "mexican", label: "Mexican Cuisine", subtitle: "Sizzling fajitas, hearty burritos & loaded nachos" },
  { key: "burgers", label: "Burgers & Sandwiches", subtitle: "Char-grilled beef & crispy chicken gourmet burgers" },
  { key: "appetizers", label: "Appetizers & Starters", subtitle: "Dynamite wings, quesadillas & grand platters" },
  { key: "seafood", label: "From the Ocean", subtitle: "Fresh grilled fish, crispy fish & chips and prawns" },
  { key: "wok", label: "Wok*A*Meal (Chinese)", subtitle: "Crispy beef chilli dry, chowmein & wok-fried rice" },
  { key: "soups_salads", label: "Soups & Salads", subtitle: "Hot & sour, Thai soup and fresh Caesar salads" },
  { key: "desserts", label: "Sizzling Desserts", subtitle: "Iconic skillet brownie & molten chocolate volcano" },
  { key: "beverages", label: "Margaritas & Smoothies", subtitle: "Blended mint margheritas & creamy fruit smoothies" },
  { key: "shakes_coffee", label: "Shakes & Cold Coffee", subtitle: "Oreo shakes, thick ice-cream shakes & iced coffees" },
  { key: "teas_drinks", label: "Teas, Lassi & Drinks", subtitle: "Karak chai, hot chocolate, lassi & chilled sodas" },
  { key: "extras", label: "Sides & Add-Ons", subtitle: "Sautéed vegetables, herb rice and extra sauces" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("steaks");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim()) return;

    const handleScroll = () => {
      const sections = categories.map((cat) => document.getElementById(cat.key));
      const scrollPosition = window.scrollY + 160;

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
  }, [searchQuery]);

  const scrollToCategory = (key: string) => {
    setActiveCategory(key);
    const element = document.getElementById(key);
    if (element) {
      const offset = 130;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    const results: MenuItem[] = [];
    Object.values(menuData).forEach((items) => {
      items.forEach((item) => {
        if (
          item.name.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.badge.toLowerCase().includes(query)
        ) {
          results.push(item);
        }
      });
    });
    return results;
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      <main className="pt-16 pb-36">
        <section className="bg-cream relative overflow-hidden py-14 md:py-18">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🥩</div>
            <div className="absolute top-20 right-20 text-4xl">🍝</div>
            <div className="absolute bottom-10 left-1/4 text-5xl">🍔</div>
            <div className="absolute bottom-20 right-1/3 text-4xl">🍹</div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid md:grid-cols-2 items-center gap-10">
              <div>
                <div className="flex items-center gap-2 text-sm font-dm text-gray mb-3">
                  <Link href="/" className="hover:text-yellow transition-colors">
                    Home
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-yellow font-semibold">Complete Menu</span>
                </div>
                <BounceUp>
                  <h1 className="font-fredoka text-dark text-4xl sm:text-5xl md:text-6xl">
                    Grill Yard <span className="text-yellow">Full Menu</span>
                  </h1>
                </BounceUp>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-dm text-gray text-base md:text-lg mt-3 max-w-lg"
                >
                  All about Taste and Quality! Explore our complete official menu with signature sizzling steaks, Chicken Kiev, gourmet burgers, Mexican fajitas, artisan pastas, fresh seafood and wok specialties.
                </motion.p>

                <div className="mt-6 flex flex-wrap gap-3 items-center">
                  <div className="bg-yellow/20 px-4 py-1.5 rounded-full text-xs font-nunito font-bold text-dark flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow" /> 4.5 ⭐ (649+ Reviews)
                  </div>
                  <div className="bg-dark text-white px-4 py-1.5 rounded-full text-xs font-nunito font-bold">
                    I-8 Markaz, Islamabad
                  </div>
                  <div className="text-xs text-gray font-dm italic">
                    * All prices are exclusive of General Sales Taxes
                  </div>
                </div>

                <div className="relative mt-6 max-w-md">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search dishes (e.g. Rib Eye, Kiev, Alfredo, Margarita)..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-border shadow-sm text-sm font-dm focus:outline-none focus:border-yellow"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray hover:text-dark font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-blue-500/25 absolute inset-0 blur-2xl pointer-events-none" />
                  <div className="relative z-10">
                    <Image
                      src="/images/BBQ.png"
                      alt="Grill Yard Sizzling Steak"
                      width={380}
                      height={380}
                      className="w-60 h-60 md:w-72 md:h-72 object-contain drop-shadow-[0_25px_45px_rgba(30,64,175,0.3)]"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {!searchQuery && (
          <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
              <div className="flex gap-2 py-3 overflow-x-auto scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => scrollToCategory(cat.key)}
                    className={`px-4 py-2 rounded-full font-nunito font-semibold text-xs md:text-sm whitespace-nowrap transition-all ${
                      activeCategory === cat.key
                        ? "bg-yellow text-dark shadow-btn font-bold"
                        : "bg-gray-100 text-gray border border-border hover:bg-gray-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8 pb-6">
          {searchQuery ? (
            <div>
              <div className="mb-6 flex justify-between items-center">
                <h2 className="font-fredoka text-dark text-2xl">
                  Search Results for &ldquo;{searchQuery}&rdquo; ({filteredItems?.length || 0})
                </h2>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-sm text-yellow font-nunito font-bold hover:underline"
                >
                  Show Full Menu
                </button>
              </div>
              {filteredItems && filteredItems.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {filteredItems.map((item, i) => (
                    <BounceUp key={item.id} delay={i * 0.03}>
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
              ) : (
                <div className="text-center py-16 bg-cream/40 rounded-2xl border border-border">
                  <p className="font-fredoka text-dark text-xl">No items found</p>
                  <p className="font-dm text-gray text-sm mt-1">
                    Try searching for steak, pasta, burger, chicken, or shake
                  </p>
                </div>
              )}
            </div>
          ) : (
            categories.map((cat) => {
              const items = menuData[cat.key] || [];
              if (items.length === 0) return null;
              return (
                <section key={cat.key} id={cat.key} className="scroll-mt-32 mb-14">
                  <div className="mb-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-b border-border pb-3">
                    <div>
                      <h2 className="font-fredoka text-dark text-2xl md:text-3xl">
                        {cat.label}
                      </h2>
                      <p className="font-dm text-gray text-xs md:text-sm mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-nunito text-gray mt-1 sm:mt-0 font-semibold">
                      {items.length} items
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                    {items.map((item, i) => (
                      <BounceUp key={item.id} delay={Math.min(i * 0.03, 0.3)}>
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
              );
            })
          )}
        </div>
      </main>
      <Footer />
      <CartBar />
    </>
  );
}