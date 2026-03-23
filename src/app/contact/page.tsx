"use client";

import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, Instagram } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BounceUp from "@/components/ui/BounceUp";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    
    const text = `Hi! I'm ${name}.\n\nPhone: ${phone}\n\nOrder: ${message}`;
    const url = `https://wa.me/923411175466?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="bg-cream py-8">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 text-sm font-dm text-gray mb-2">
              <Link href="/" className="hover:text-yellow">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Contact</span>
            </div>
            <h1 className="font-fredoka text-dark text-5xl">Find Us</h1>
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <BounceUp>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <MapPin className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">ADDRESS</p>
                  <p className="font-dm text-gray text-sm mt-1">
                    Dargai Phattak, Near Avicena School, Malakand District, KPK, Pakistan
                  </p>
                </div>
              </BounceUp>

              <BounceUp delay={0.1}>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <Phone className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">PHONE</p>
                  <a href="tel:03411175466" className="font-dm text-gray text-sm hover:text-yellow">
                    0341-1175466
                  </a>
                </div>
              </BounceUp>

              <BounceUp delay={0.2}>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <MessageCircle className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">WHATSAPP</p>
                  <a
                    href="https://wa.me/923411175466"
                    className="inline-block mt-1 bg-[#25D366] text-white font-nunito font-bold text-sm px-4 py-2 rounded-full"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </BounceUp>

              <BounceUp delay={0.3}>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <Clock className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">OPENING HOURS</p>
                  <p className="font-dm text-gray text-sm mt-1">
                    10:00 AM – 11:00 PM (Daily)
                  </p>
                </div>
              </BounceUp>

              <BounceUp delay={0.4}>
                <div className="bg-white rounded-2xl shadow-card p-5 border border-border">
                  <Instagram className="w-8 h-8 text-yellow mb-2" />
                  <p className="font-nunito font-semibold text-dark text-sm">SOCIAL</p>
                  <a
                    href="https://instagram.com/sketchburgermkd"
                    className="font-dm text-gray text-sm hover:text-yellow"
                  >
                    @sketchburgermkd
                  </a>
                </div>
              </BounceUp>
            </div>

            <BounceUp delay={0.2}>
              <div className="h-72 rounded-2xl overflow-hidden border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=Dargai+Phattak+Malakand+Pakistan&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </BounceUp>

            <BounceUp delay={0.3}>
              <div className="bg-cream rounded-2xl p-6 border border-border h-full">
                <h2 className="font-fredoka text-dark text-2xl mb-6">Order Right Now</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border border-border px-4 py-3 font-dm text-sm focus:outline-none focus:border-yellow"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    required
                    className="w-full rounded-xl border border-border px-4 py-3 font-dm text-sm focus:outline-none focus:border-yellow"
                  />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your order..."
                    required
                    className="w-full rounded-xl border border-border px-4 py-3 font-dm text-sm focus:outline-none focus:border-yellow resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] text-white font-nunito font-bold rounded-full py-3.5 hover:bg-[#20bd5a] transition-colors"
                  >
                    Send Order on WhatsApp
                  </button>
                </form>
              </div>
            </BounceUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}