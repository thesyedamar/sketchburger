"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getImageUrl } from "@/lib/menuData";
import BounceUp from "@/components/ui/BounceUp";

const news = [
  {
    img: "photo-1568901346375-23c9450c58cd",
    badge: "Offer",
    date: "March 20, 2025",
    title: "Try our new Smash Burger combo!",
    desc: "Get 2 smash burgers + fries + 2 drinks for only PKR 1,200",
  },
  {
    img: "photo-1628840042765-356cda07504e",
    badge: "New",
    date: "March 15, 2025",
    title: "Pizza is back on the menu",
    desc: "Stone-baked margherita and pepperoni pizza now available every evening",
  },
  {
    img: "photo-1546173159-315724a31696",
    badge: "New",
    date: "March 10, 2025",
    title: "Fresh shake flavors this season",
    desc: "Mango, strawberry and lychee shakes now available at the counter",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-fredoka text-dark text-3xl">Latest news</h2>
          <Link
            href="/#"
            className="font-nunito text-yellow text-sm font-semibold flex items-center gap-1 hover:underline"
          >
            See All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <BounceUp key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-border">
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={getImageUrl(item.img, 400)}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-yellow text-dark text-xs font-nunito font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-dm text-gray text-xs">{item.date}</p>
                  <h3 className="font-nunito font-bold text-dark text-base mt-1 hover:text-yellow transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-dm text-gray text-sm mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                  <Link
                    href="/#"
                    className="font-nunito text-yellow text-sm font-semibold flex items-center gap-1 mt-3"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </BounceUp>
          ))}
        </div>
      </div>
    </section>
  );
}