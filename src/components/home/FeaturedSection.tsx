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
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-fredoka text-dark text-3xl">Best Burgers</h2>
          <Link
            href="/menu"
            className="font-nunito text-yellow text-sm font-semibold flex items-center gap-1 hover:underline"
          >
            See All <ArrowRight className="w-4 h-4" />
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