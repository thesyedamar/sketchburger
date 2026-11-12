"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { useCartStore } from "@/lib/cartStore";
import { buildWhatsAppURL } from "@/lib/whatsapp";
import { getImageUrl } from "@/lib/menuData";

export default function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  const {
    items,
    isOpen,
    closeCart,
    increment,
    decrement,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  } = useCartStore();

  const cartList = Object.values(items);
  const totalCount = totalItems();
  const subtotal = totalPrice();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleWhatsAppCheckout = () => {
    if (cartList.length === 0) return;
    const url = buildWhatsAppURL(cartList, subtotal);
    window.open(url, "_blank");
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-end">
          {/* Dark Backdrop covering the entire viewport */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
          />

          {/* Solid White Drawer Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative z-[10000] w-full max-w-md h-full bg-white shadow-2xl flex flex-col border-l border-border"
          >
            {/* Header */}
            <div className="p-5 border-b border-border flex items-center justify-between bg-cream">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow/25 flex items-center justify-center text-dark">
                  <ShoppingBag className="w-5 h-5 text-yellow-800" />
                </div>
                <div>
                  <h2 className="font-fredoka text-dark text-xl">Your Cart</h2>
                  <p className="font-dm text-xs text-gray">
                    {totalCount > 0
                      ? `${totalCount} item${totalCount > 1 ? "s" : ""} in your order`
                      : "No items selected"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {cartList.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs font-nunito font-semibold text-gray-500 hover:text-red transition-colors px-2 py-1"
                    title="Empty cart"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={closeCart}
                  className="p-2 rounded-full hover:bg-black/5 text-gray-600 transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 bg-white scrollbar-none">
              {cartList.length === 0 ? (
                /* Empty State */
                <div className="h-full flex flex-col items-center justify-center text-center px-4 py-12">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-20 h-20 rounded-full bg-yellow/20 flex items-center justify-center mb-4"
                  >
                    <ShoppingBag className="w-10 h-10 text-yellow" />
                  </motion.div>
                  <h3 className="font-fredoka text-dark text-2xl mb-2">
                    Your Cart is Empty
                  </h3>
                  <p className="font-dm text-gray text-sm leading-relaxed max-w-xs mb-8">
                    You haven&apos;t added anything to your cart yet! Explore our signature sizzling steaks, artisan pastas, burgers, and refreshing drinks.
                  </p>
                  <Link
                    href="/menu"
                    onClick={closeCart}
                    className="btn-primary inline-flex items-center gap-2 text-sm shadow-md"
                  >
                    Browse Full Menu <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                /* Cart Items List */
                <div className="space-y-3.5">
                  {cartList.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="bg-white rounded-2xl p-3.5 border border-border shadow-sm flex gap-3.5 items-center"
                    >
                      {item.img && (
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-cream flex-shrink-0 relative">
                          <Image
                            src={getImageUrl(item.img, 150)}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h4 className="font-nunito font-bold text-dark text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="font-dm text-xs text-gray mt-0.5">
                          PKR {item.price.toLocaleString()} each
                        </p>
                        <p className="font-fredoka text-yellow text-sm mt-1">
                          PKR {(item.price * item.qty).toLocaleString()}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 bg-gray-50 p-1 rounded-full border border-border">
                        <button
                          onClick={() => decrement(item.id)}
                          className="w-6 h-6 rounded-full bg-white hover:bg-yellow text-dark flex items-center justify-center transition-colors shadow-xs"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-nunito font-bold text-dark text-xs w-5 text-center">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => increment(item.id)}
                          className="w-6 h-6 rounded-full bg-white hover:bg-yellow text-dark flex items-center justify-center transition-colors shadow-xs"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red transition-colors ml-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {cartList.length > 0 && (
              <div className="p-5 border-t border-border bg-cream space-y-3">
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-sm font-dm text-gray">
                    <span>Total Items:</span>
                    <span className="font-nunito font-bold text-dark">
                      {totalCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline pt-1 border-t border-border/60">
                    <span className="font-nunito font-bold text-dark text-base">
                      Estimated Total:
                    </span>
                    <span className="font-fredoka text-yellow text-2xl">
                      PKR {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray italic">
                    * All prices exclusive of GST. Direct takeaway or delivery details confirmed on WhatsApp.
                  </p>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-nunito font-bold rounded-full py-3.5 px-5 flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-98"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order on WhatsApp (PKR {subtotal.toLocaleString()})</span>
                </button>

                <div className="text-center">
                  <Link
                    href="/menu"
                    onClick={closeCart}
                    className="text-xs font-nunito font-bold text-dark hover:text-yellow transition-colors inline-flex items-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-yellow" /> Add more items from menu
                  </Link>
                </div>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
