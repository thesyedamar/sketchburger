"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Star, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { getImageUrl } from "@/lib/menuData";
import { useCartStore } from "@/lib/cartStore";

interface ItemCardProps {
  id: number;
  name: string;
  price: number;
  desc: string;
  img: string;
  stars: number;
  badge?: string;
  showQtyControls?: boolean;
}

export default function ItemCard({
  id,
  name,
  price,
  desc,
  img,
  stars,
  badge,
  showQtyControls = false,
}: ItemCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem, increment, decrement, items } = useCartStore();
  const cartItem = items[id];
  const qty = cartItem?.qty || 0;

  const handleAdd = () => {
    addItem({ id, name, price, img });
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    increment(id);
  };

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    decrement(id);
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="bg-white rounded-2xl shadow-card p-4 border border-border relative overflow-visible"
    >
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
      >
        <Heart
          className={`w-4 h-4 ${isFavorite ? "fill-red text-red" : "text-gray"}`}
        />
      </button>

      {badge && (
        <span className="absolute top-3 left-3 bg-yellow text-dark text-xs font-nunito font-bold px-3 py-1 rounded-full z-10">
          {badge}
        </span>
      )}

      <div className="-mt-4 mb-3 relative">
        <motion.div whileHover={{ scale: 1.08, y: -4 }} transition={{ duration: 0.4 }}>
          <Image
            src={getImageUrl(img, 300)}
            alt={name}
            width={200}
            height={200}
            className="w-full aspect-square object-cover rounded-xl food-image mx-auto"
          />
        </motion.div>
      </div>

      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < stars ? "fill-yellow text-yellow" : "text-gray-300"}`}
          />
        ))}
      </div>

      <h3 className="font-nunito font-bold text-dark text-sm mb-1">{name}</h3>
      <p className="font-dm text-gray text-xs line-clamp-2 mb-3">{desc}</p>

      <div className="flex items-center justify-between">
        <span className="font-nunito font-bold text-yellow text-base">
          PKR {price}
        </span>

        {showQtyControls && qty > 0 ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleDecrement}
              className="w-7 h-7 rounded-full bg-yellow flex items-center justify-center"
            >
              <Minus className="w-4 h-4 text-dark" />
            </button>
            <span className="font-nunito font-bold text-dark w-6 text-center">{qty}</span>
            <button
              onClick={handleIncrement}
              className="w-7 h-7 rounded-full bg-yellow flex items-center justify-center"
            >
              <Plus className="w-4 h-4 text-dark" />
            </button>
          </div>
        ) : (
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={handleAdd}
            className="w-8 h-8 rounded-full bg-yellow flex items-center justify-center"
          >
            <Plus className="w-4 h-4 text-dark font-bold" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}