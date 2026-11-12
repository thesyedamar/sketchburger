"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Instagram,
  ChevronRight,
  UtensilsCrossed,
  CalendarCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BounceUp from "@/components/ui/BounceUp";
import ReservationModal from "@/components/ui/ReservationModal";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const text = `Hi Grill Yard Islamabad! I'm ${name}.\n\nPhone: ${phone}\n\nOrder / Reservation Request:\n${message}`;
    const url = `https://wa.me/923205401241?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-cream py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 text-sm font-dm text-gray mb-2">
              <Link href="/" className="hover:text-yellow">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span>Contact</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="font-fredoka text-dark text-4xl sm:text-5xl">
                  Visit Grill Yard
                </h1>
                <p className="font-dm text-gray text-base mt-2">
                  EOBI Plaza, Near Save Mart, Sector I-8 Markaz, Islamabad
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="self-start md:self-auto bg-yellow hover:brightness-105 text-dark font-nunito font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-btn transition-transform active:scale-95 text-sm"
              >
                <CalendarCheck className="w-4 h-4 text-dark" />
                Book a Table
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-4 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-4">
              <BounceUp>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <MapPin className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">ADDRESS</p>
                  <p className="font-dm text-gray text-sm mt-1">
                    EOBI Plaza, Near Save Mart, Sector I-8 Markaz, Islamabad, 44790
                  </p>
                </div>
              </BounceUp>

              <BounceUp delay={0.1}>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <Phone className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">
                    PHONE & RESERVATIONS
                  </p>
                  <div className="mt-1 flex flex-col gap-1">
                    <a
                      href="tel:03205401241"
                      className="font-dm text-gray text-sm hover:text-yellow font-medium"
                    >
                      0320 5401241
                    </a>
                    <a
                      href="tel:0512751370"
                      className="font-dm text-gray text-sm hover:text-yellow"
                    >
                      051-2751370
                    </a>
                  </div>
                </div>
              </BounceUp>

              <BounceUp delay={0.2}>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <MessageCircle className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">
                    WHATSAPP ORDERING & DESK
                  </p>
                  <a
                    href="https://wa.me/923205401241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-[#25D366] text-white font-nunito font-bold text-sm px-4 py-2 rounded-full hover:bg-[#20bd5a] transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </BounceUp>

              <BounceUp delay={0.3}>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <Clock className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">
                    OPENING HOURS
                  </p>
                  <p className="font-dm text-gray text-sm mt-1">
                    Open Daily: 12:00 PM – 12:00 AM (Midnight)
                  </p>
                  <p className="font-dm text-xs text-yellow mt-0.5">
                    Outdoor Seating · Sports Screening · Late-Night Dining
                  </p>
                </div>
              </BounceUp>

              <BounceUp delay={0.4}>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <Instagram className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">
                    INSTAGRAM
                  </p>
                  <a
                    href="https://instagram.com/grillyardislamabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-dm text-gray text-sm hover:text-yellow inline-block mt-1"
                  >
                    @grillyardislamabad (5.2K+ followers)
                  </a>
                </div>
              </BounceUp>
            </div>

            <BounceUp delay={0.2}>
              <div className="h-full min-h-[300px] rounded-2xl overflow-hidden border border-border shadow-card">
                <iframe
                  src="https://maps.google.com/maps?q=EOBI+Plaza+I-8+Markaz+Islamabad+Pakistan&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  title="Grill Yard Islamabad Location"
                />
              </div>
            </BounceUp>

            <BounceUp delay={0.3}>
              <div className="bg-cream rounded-2xl p-6 border border-border h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-fredoka text-dark text-2xl">
                      Order or Reserve
                    </h2>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="text-xs font-nunito font-bold text-dark bg-yellow/30 hover:bg-yellow px-3 py-1 rounded-full transition-colors flex items-center gap-1"
                    >
                      <UtensilsCrossed className="w-3 h-3" /> Quick Booking
                    </button>
                  </div>
                  <p className="font-dm text-gray text-xs mb-6">
                    Direct message to Grill Yard front desk on WhatsApp.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full rounded-xl border border-border px-4 py-3 font-dm text-sm focus:outline-none focus:border-yellow bg-white"
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Your Phone Number"
                      required
                      className="w-full rounded-xl border border-border px-4 py-3 font-dm text-sm focus:outline-none focus:border-yellow bg-white"
                    />
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Your order items or reservation time/guests..."
                      required
                      className="w-full rounded-xl border border-border px-4 py-3 font-dm text-sm focus:outline-none focus:border-yellow resize-none bg-white"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#25D366] text-white font-nunito font-bold rounded-full py-3.5 hover:bg-[#20bd5a] transition-colors"
                    >
                      Send Message to Grill Yard
                    </button>
                  </form>
                </div>
              </div>
            </BounceUp>
          </div>
        </section>
      </main>
      <Footer />

      {/* Floating 'Book Table' Button on Bottom-Right */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-yellow text-dark font-nunito font-bold px-5 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 border-2 border-dark/10 hover:brightness-105 transition-all group"
        aria-label="Book a table at Grill Yard"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red"></span>
        </span>
        <UtensilsCrossed className="w-5 h-5 text-dark group-hover:rotate-12 transition-transform" />
        <span className="text-sm tracking-wide">Book Table</span>
      </motion.button>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}