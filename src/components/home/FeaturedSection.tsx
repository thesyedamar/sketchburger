"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BounceUp from "@/components/ui/BounceUp";
import ItemCard from "@/components/ui/ItemCard";
import { bestBurgers } from "@/lib/menuData";

export default function FeaturedSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-nunito font-bold text-yellow uppercase tracking-wider">Master of the Grill</span>
            <h2 className="font-fredoka text-dark text-3xl md:text-4xl mt-1">Signature Steaks & Continental</h2>
          </div>
          <Link
            href="/menu"
            className="font-nunito text-dark hover:text-yellow text-sm font-bold flex items-center gap-1 transition-colors"
          >
            See All Steaks <ArrowRight className="w-4 h-4 text-yellow" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bestBurgers.map((item, i) => (
            <BounceUp key={item.id} delay={i * 0.05}>
              <ItemCard
                id={item.id}
                name={item.name}
                price={item.price}
                desc={item.desc}
                img={item.img}
                stars={item.stars}
                badge={item.badge}
              />
            </BounceUp>
          ))}
        </div>
      </div>
    </section>
  );
}