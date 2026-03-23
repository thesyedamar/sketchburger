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
                src={getImageUrl("photo-1550547660-d9450f859349", 500)}
                alt="Our Food"
                width={450}
                height={400}
                className="food-image-heavy rounded-2xl"
              />
              <span className="absolute top-4 right-4 bg-yellow text-dark text-xs font-nunito font-bold px-4 py-1 rounded-full">
                Best Dish
              </span>
            </div>
          </BounceUp>

          <BounceUp delay={0.1}>
            <span className="inline-block bg-yellow text-dark text-sm font-nunito font-semibold px-4 py-1 rounded-full mb-4">
              About Our Food
            </span>
            <h2 className="font-fredoka text-dark text-4xl mb-4">
              From Dargai with
              <br />
              <span className="text-yellow">Pakistani Love</span>
            </h2>
            <p className="font-dm text-gray leading-relaxed mb-6">
              At Sketch Burger, every bite tells a story of fresh ingredients, secret recipes passed down with passion, and the dedication to give Dargai the best burger experience it deserves.
            </p>
            <button className="bg-yellow text-dark font-nunito font-bold rounded-full px-8 py-3 hover:bg-yellow-light transition-colors">
              Read More
            </button>
          </BounceUp>
        </div>
      </div>
    </section>
  );
}