"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterBanner() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-cream py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-fredoka text-dark text-2xl mb-6"
        >
          Join For Hot Offers
        </motion.h2>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Your WhatsApp number"
              className="flex-1 rounded-full border border-border bg-white px-6 py-3 font-dm text-sm focus:outline-none focus:border-yellow"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow text-dark font-nunito font-bold rounded-full px-8 py-3 hover:bg-yellow-light transition-colors"
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}