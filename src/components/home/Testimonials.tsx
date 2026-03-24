"use client";

import { Star } from "lucide-react";
import BounceUp from "@/components/ui/BounceUp";

const testimonials = [
  {
    name: "Hamza K.",
    location: "Dargai",
    text: "The food here is absolutely amazing. Fresh ingredients every time. Best in Dargai without a doubt!",
    stars: 5,
  },
  {
    name: "Fatima R.",
    location: "Dargai",
    text: "Super fast delivery and the meals are perfectly tasty. Will definitely order again tomorrow!",
    stars: 5,
  },
  {
    name: "Usman T.",
    location: "Dargai",
    text: "The rolls blew my mind. Family loved everything. MEAT'n CHEESE is our weekly treat now.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-fredoka text-dark text-3xl text-center mb-12">
          What your client says
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
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