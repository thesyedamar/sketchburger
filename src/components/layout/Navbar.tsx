"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-card"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="font-fredoka text-xl md:text-2xl">
            <span className="text-yellow">MEAT&apos;n</span>
            <span className="text-dark"> CHEESE</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-nunito font-semibold text-dark hover:text-yellow transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:03709119991" className="flex items-center gap-2 text-dark font-nunito text-sm">
            <Phone className="w-4 h-4 text-yellow" />
            <span>0370 9119991</span>
          </a>
          <Link href="/menu" className="p-2 hover:text-yellow transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow text-dark text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <a
            href="https://wa.me/923709119991"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-green hover:scale-110 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t"
          >
            <div className="p-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-nunito font-semibold text-dark py-3 border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-2">
                <a href="tel:03709119991" className="flex items-center gap-2 text-dark font-nunito text-sm">
                  <Phone className="w-4 h-4 text-yellow" />
                  <span>0370 9119991</span>
                </a>
                <a
                  href="https://wa.me/923709119991"
                  target="_blank"
                  className="p-2 text-green"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}