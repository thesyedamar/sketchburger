"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";
import { buildWhatsAppURL } from "@/lib/whatsapp";

export default function CartBar() {
  const [isVisible, setIsVisible] = useState(false);
  const items = useCartStore((s) => s.items);
  const totalItems = useCartStore((s) => s.totalItems);
  const totalPrice = useCartStore((s) => s.totalPrice);

  useEffect(() => {
    if (totalItems() > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleOrder = () => {
    const itemsList = Object.values(items);
    const url = buildWhatsAppURL(itemsList, totalPrice());
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-yellow shadow-lg px-4 pt-3 pb-5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-yellow" />
                <span className="font-nunito font-bold text-dark">
                  {totalItems()} items
                </span>
              </div>
              <span className="font-fredoka text-yellow text-xl">
                Total: PKR {totalPrice().toLocaleString()}
              </span>
            </div>
            <button
              onClick={handleOrder}
              className="wa-btn w-full h-14 text-lg flex items-center justify-center gap-2"
            >
              ORDER ON WHATSAPP 📱
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}