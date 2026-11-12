"use client";

import Image from "next/image";
import { getImageUrl } from "@/lib/menuData";
import BounceUp from "@/components/ui/BounceUp";

export default function AboutStrip() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <BounceUp>
            <div className="relative inline-block">
              <Image
                src={getImageUrl("photo-1544025162-d76694265947", 600)}
                alt="Grill Yard Signature Sizzling Steaks"
                width={500}
                height={420}
                className="food-image-heavy rounded-2xl object-cover"
              />
              <span className="absolute top-4 right-4 bg-yellow text-dark text-xs font-nunito font-bold px-4 py-1.5 rounded-full shadow-md">
                Signature Sizzler
              </span>
            </div>
          </BounceUp>

          <BounceUp delay={0.1}>
            <span className="inline-block bg-yellow text-dark text-sm font-nunito font-semibold px-4 py-1 rounded-full mb-4">
              About Grill Yard
            </span>
            <h2 className="font-fredoka text-dark text-4xl mb-4 leading-tight">
              All About Taste & Quality
              <br />
              <span className="text-yellow">in I-8 Markaz</span>
            </h2>
            <p className="font-dm text-gray leading-relaxed mb-6">
              Located at EOBI Plaza near Save Mart in Sector I-8 Markaz, Grill Yard offers Islamabad a top-tier steakhouse and continental dining experience. From our fiery Peri Peri Steaks and classic New York cuts to creamy Chicken Kiev, Alfredo delights, and sizzling brownies — every dish is prepared fresh daily with the finest ingredients.
            </p>
            <div className="flex gap-4">
              <a
                href="/menu"
                className="bg-yellow text-dark font-nunito font-bold rounded-full px-8 py-3 hover:bg-yellow-light transition-colors"
              >
                View Full Menu
              </a>
              <a
                href="/contact"
                className="border border-border text-dark font-nunito font-bold rounded-full px-6 py-3 hover:bg-cream transition-colors"
              >
                Visit Us
              </a>
            </div>
          </BounceUp>
        </div>
      </div>
    </section>
  );
}