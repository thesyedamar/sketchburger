"use client";

import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-nunito font-bold text-yellow mb-4">ADDRESS</h3>
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="font-fredoka text-xl">
                <span className="text-yellow">MEAT&apos;n</span>
                <span className="text-white"> CHEESE</span>
              </span>
            </Link>
            <div className="flex flex-col gap-3 text-gray-300 font-dm text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-yellow mt-1 flex-shrink-0" />
                <span>Near Army Forte Dargai, Dargai, 23060</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow flex-shrink-0" />
                <span>0370 9119991</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow hover:text-dark transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/meatnncheese"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow hover:text-dark transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923709119991"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow hover:text-dark transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-nunito font-bold text-yellow mb-4">ORDER ONLINE</h3>
            <ul className="flex flex-col gap-3">
              {["WhatsApp Order", "Call Us", "View Menu", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-dm text-gray-300 hover:text-yellow transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-nunito font-bold text-yellow mb-4">OPENING HOURS</h3>
            <div className="font-dm text-gray-300 text-sm space-y-2">
              <p>Open Daily: 11:30 AM - 11:30 PM</p>
              <p>Delivery available</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green pulse-green"></span>
                <span className="text-green">Open Now</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-nunito font-bold text-yellow mb-4">STAY UPDATED</h3>
            <p className="font-dm text-gray-300 text-sm mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Your WhatsApp number"
                className="bg-dark border border-white/20 rounded-lg px-4 py-2 text-white font-dm text-sm focus:outline-none focus:border-yellow"
              />
              <button className="bg-yellow text-dark font-nunito font-bold rounded-lg px-4 py-2 hover:bg-yellow-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-dm text-gray-500 text-xs">
            © 2025 MEAT&apos;n CHEESE. All rights reserved.
          </p>
          <p className="font-dm text-gray-500 text-xs">
            Made with ❤️ in Dargai, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}