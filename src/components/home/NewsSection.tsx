"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getImageUrl } from "@/lib/menuData";
import BounceUp from "@/components/ui/BounceUp";

const news = [
  {
    img: "photo-1551024709-8f23befc6f87",
    badge: "Sizzling Dessert",
    date: "4 days ago · @grillyardislamabad",
    title: "Your dessert cravings have found their match!",
    desc: "Rich moments, sweet memories, and a dessert worth every bite. Sizzling warm fudge brownie with vanilla ice cream.",
  },
  {
    img: "photo-1621996346565-e3d5d6281724",
    badge: "Pasta Obsession",
    date: "6 days ago · @grillyardislamabad",
    title: "POV: You just found your new pasta obsession! 🍝",
    desc: "Creamy cravings? Sorted. Taste buds? Happy. One plate is never enough with our creamy Alfredo Delight and Chef Special Pasta.",
  },
  {
    img: "photo-1558030006-450675393462",
    badge: "Steak Lover",
    date: "A week ago · @grillyardislamabad",
    title: "Serving looks & delicious moments in I-8 Markaz!",
    desc: "The perfect excuse to step out, chill outdoors, and enjoy tender sizzling Peri Peri Steak and Chinese & Continental platters.",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-nunito font-bold text-yellow uppercase tracking-wider">Follow @grillyardislamabad</span>
            <h2 className="font-fredoka text-dark text-3xl md:text-4xl mt-1">Latest from Social Media</h2>
          </div>
          <a
            href="https://instagram.com/grillyardislamabad"
            target="_blank"
            rel="noopener noreferrer"
            className="font-nunito text-dark hover:text-yellow text-sm font-bold flex items-center gap-1 transition-colors"
          >
            Visit Instagram <ArrowRight className="w-4 h-4 text-yellow" />
          </a>
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