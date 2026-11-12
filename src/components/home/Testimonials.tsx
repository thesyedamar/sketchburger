"use client";

import { Star } from "lucide-react";
import BounceUp from "@/components/ui/BounceUp";

const testimonials = [
  {
    name: "Sabeen Naz",
    location: "Google Review · Local Guide",
    dish: "Peri Peri Steak & Chef Special Pasta",
    text: "The Peri Peri Steak and Chef Special Pasta were truly exceptional. Tender meat cooked to perfection, rich sauces, and wonderful vibrant outdoor seating in I-8 Markaz.",
    stars: 5,
  },
  {
    name: "Charlie",
    location: "Google Review",
    dish: "Chicken Kiev & Sizzling Brownie",
    text: "Best Chicken Kiev in Islamabad without a doubt! The garlic herb butter gushed out perfectly. The Sizzling Brownie with ice cream was a showstopper dessert.",
    stars: 5,
  },
  {
    name: "Saad Ur Rehman",
    location: "Google Review",
    dish: "Chef Special Beef Steak & Margherita",
    text: "Amazing atmosphere for watching sports matches outdoors with friends while savoring a juicy medium steak and chilled Mint Margherita. 10/10 experience!",
    stars: 5,
  },
  {
    name: "Usama Tariq",
    location: "Google Review",
    dish: "Twin Steak & Loaded Fries",
    text: "Consistency and taste are top-notch at Grill Yard. Steaks are tender and juicy, sides are generous, and the staff is genuinely welcoming. Highly recommended in I-8!",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow/20 px-4 py-1.5 rounded-full mb-3">
            <span className="font-nunito font-bold text-dark text-sm">4.5 ⭐ Google Rating</span>
            <span className="text-gray-500 text-xs">· Based on 649+ Verified Reviews</span>
          </div>
          <h2 className="font-fredoka text-dark text-3xl md:text-4xl">
            What Food Lovers Say About Grill Yard
          </h2>
          <p className="font-dm text-gray text-sm mt-2">Real feedback from diners in Sector I-8 Markaz, Islamabad</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <BounceUp key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl shadow-card p-6 hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow/20 flex items-center justify-center">
                    <span className="font-nunito font-bold text-yellow">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-nunito font-bold text-dark">{t.name}</h4>
                    <p className="font-dm text-gray text-sm">{t.location}</p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className={`w-4 h-4 ${
                          j < t.stars ? "fill-yellow text-yellow" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="font-dm text-gray text-sm italic leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </BounceUp>
          ))}
        </div>
      </div>
    </section>
  );
}