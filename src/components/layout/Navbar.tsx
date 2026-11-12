"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";
import CartDrawer from "@/components/layout/CartDrawer";

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
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/grill%20yard%20logo.png"
            alt="Grill Yard"
            width={150}
            height={56}
            className="h-10 md:h-11 w-auto object-contain"
            priority
          />
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
          <a href="tel:03205401241" className="flex items-center gap-2 text-dark font-nunito text-sm hover:text-yellow transition-colors">
            <Phone className="w-4 h-4 text-yellow" />
            <span>0320 5401241</span>
          </a>
          <button
            type="button"
            onClick={openCart}
            className="p-2 hover:text-yellow transition-colors relative cursor-pointer group"
            aria-label="Shopping Cart"
          >
            <motion.div
              key={`desktop-bag-${totalItems}`}
              animate={totalItems > 0 ? { rotate: [0, -12, 10, -6, 0], scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ShoppingBag className="w-5 h-5 text-dark group-hover:text-yellow transition-colors" />
            </motion.div>
            <AnimatePresence mode="popLayout">
              {totalItems > 0 && (
                <motion.span
                  key={`desktop-count-${totalItems}`}
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: [1, 1.45, 0.95, 1], opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    times: [0, 0.4, 0.7, 1],
                    ease: "easeInOut",
                  }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-yellow text-dark text-xs font-bold rounded-full flex items-center justify-center shadow-md select-none pointer-events-none"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <a
            href="https://wa.me/923205401241"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-green hover:scale-110 transition-transform"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="p-2 hover:text-yellow transition-colors relative cursor-pointer group"
            aria-label="Shopping Cart"
          >
            <motion.div
              key={`mobile-bag-${totalItems}`}
              animate={totalItems > 0 ? { rotate: [0, -12, 10, -6, 0], scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ShoppingBag className="w-5 h-5 text-dark" />
            </motion.div>
            <AnimatePresence mode="popLayout">
              {totalItems > 0 && (
                <motion.span
                  key={`mobile-count-${totalItems}`}
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: [1, 1.45, 0.95, 1], opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    times: [0, 0.4, 0.7, 1],
                    ease: "easeInOut",
                  }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-yellow text-dark text-xs font-bold rounded-full flex items-center justify-center shadow-md select-none pointer-events-none"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
                <a href="tel:03205401241" className="flex items-center gap-2 text-dark font-nunito text-sm">
                  <Phone className="w-4 h-4 text-yellow" />
                  <span>0320 5401241</span>
                </a>
                <a
                  href="https://wa.me/923205401241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-green"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>

    {/* Global Cart Drawer */}
    <CartDrawer />
  </>
);
}