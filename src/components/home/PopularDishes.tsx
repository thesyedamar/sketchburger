"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BounceUp from "@/components/ui/BounceUp";
import SwiperCarousel from "@/components/ui/SwiperCarousel";
import ItemCard from "@/components/ui/ItemCard";
import { popularItems } from "@/lib/menuData";

export default function PopularDishes() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-fredoka text-dark text-3xl">Popular dishes</h2>
          <Link
            href="/menu"
            className="font-nunito text-yellow text-sm font-semibold flex items-center gap-1 hover:underline"
          >
            Log In <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SwiperCarousel>
          {popularItems.map((item, i) => (
            <BounceUp key={item.id} delay={i * 0.1}>
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
        </SwiperCarousel>
      </div>
    </section>
  );
}