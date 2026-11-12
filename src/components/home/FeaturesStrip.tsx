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
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <div className="w-14 h-14 bg-yellow/20 rounded-xl flex items-center justify-center text-3xl mb-4">
                🥩
              </div>
              <h3 className="font-nunito font-bold text-dark text-lg mb-1">Prime Sizzling Steaks</h3>
              <p className="font-dm text-gray text-sm mb-4">Hand-cut undercut beef & flame-grilled chicken with signature sauces</p>
              <a href="/menu" className="inline-block bg-yellow text-dark text-sm font-nunito font-bold px-5 py-2 rounded-full hover:bg-yellow-light transition-colors">
                View Steaks
              </a>
            </div>
          </BounceUp>

          <BounceUp delay={0.1}>
            <div className="bg-yellow rounded-2xl overflow-hidden h-48 relative">
              <Image
                src={getImageUrl("photo-1558030006-450675393462", 600)}
                alt="Grill Yard Outdoor & Steakhouse"
                width={500}
                height={250}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent flex items-end p-4">
                <span className="text-white font-nunito font-bold text-sm">Outdoor Seating & Sports Screenings</span>
              </div>
            </div>
          </BounceUp>

          <BounceUp delay={0.2}>
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <div className="w-14 h-14 bg-yellow/20 rounded-xl flex items-center justify-center text-3xl mb-4">
                🌙
              </div>
              <h3 className="font-nunito font-bold text-dark text-lg mb-1">Open Late till 12 AM</h3>
              <p className="font-dm text-gray text-sm mb-4">Happy hour food, vegetarian options & late-night sizzling brownie treats</p>
              <a href="https://wa.me/923205401241" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow text-dark text-sm font-nunito font-bold px-5 py-2 rounded-full hover:bg-yellow-light transition-colors">
                WhatsApp Order
              </a>
            </div>
          </BounceUp>
        </div>
      </div>
    </section>
  );
}