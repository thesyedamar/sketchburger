"use client";

import Image from "next/image";
import { getImageUrl } from "@/lib/menuData";
import BounceUp from "@/components/ui/BounceUp";

export default function FeaturesStrip() {
  return (
    <section className="bg-yellow/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <BounceUp>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="w-14 h-14 bg-yellow rounded-xl flex items-center justify-center text-3xl mb-4">
                🛍️
              </div>
              <h3 className="font-nunito font-bold text-dark text-lg mb-1">Choose what you want</h3>
              <p className="font-dm text-gray text-sm mb-4">select a pick up time</p>
              <button className="bg-yellow text-dark text-sm font-nunito font-bold px-5 py-2 rounded-full hover:bg-yellow-light transition-colors">
                Order Now
              </button>
            </div>
          </BounceUp>

          <BounceUp delay={0.1}>
            <div className="bg-yellow rounded-2xl overflow-hidden h-48">
              <Image
                src={getImageUrl("photo-1565299624946-b28f40a0ae38", 400)}
                alt="Delivery"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
          </BounceUp>

          <BounceUp delay={0.2}>
            <div className="bg-white rounded-2xl p-6 border border-border">
              <div className="w-14 h-14 bg-yellow rounded-xl flex items-center justify-center text-3xl mb-4">
                🏆
              </div>
              <h3 className="font-nunito font-bold text-dark text-lg mb-1">Earn points every</h3>
              <p className="font-dm text-gray text-sm mb-4">time you order online</p>
              <button className="bg-yellow text-dark text-sm font-nunito font-bold px-5 py-2 rounded-full hover:bg-yellow-light transition-colors">
                Order Now
              </button>
            </div>
          </BounceUp>
        </div>
      </div>
    </section>
  );
}