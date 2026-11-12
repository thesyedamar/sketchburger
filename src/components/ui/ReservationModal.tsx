"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Users, MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("08:00 PM");
  const [guests, setGuests] = useState("2 Guests");
  const [seating, setSeating] = useState("Outdoor Seating");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `*Grill Yard Table Reservation Request*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${name}`,
      `📞 *Phone:* ${phone}`,
      `📅 *Date:* ${date || "Today"}`,
      `⏰ *Time:* ${time}`,
      `👥 *Guests:* ${guests}`,
      `🪑 *Seating:* ${seating}`,
      notes ? `📝 *Notes/Occasion:* ${notes}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
      `📍 Location: Sector I-8 Markaz, Islamabad`,
      `Please confirm availability. Thank you!`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/923205401241?text=${encodeURIComponent(details)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 md:p-8 z-10 max-h-[92vh] overflow-y-auto scrollbar-none border border-border"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray transition-colors"
              aria-label="Close reservation modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-nunito font-bold text-dark bg-yellow/20 px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-3.5 h-3.5 text-yellow" /> Instant Table Booking
              </span>
              <h2 className="font-fredoka text-dark text-2xl md:text-3xl">Reserve a Table</h2>
              <p className="font-dm text-gray text-xs md:text-sm mt-1">
                Grill Yard Islamabad · EOBI Plaza, I-8 Markaz
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-nunito font-semibold text-xs text-dark mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Syed Amar"
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 font-dm text-sm focus:outline-none focus:border-yellow transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-nunito font-semibold text-xs text-dark mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0320 1234567"
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 font-dm text-sm focus:outline-none focus:border-yellow transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-nunito font-semibold text-xs text-dark mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-yellow" /> Reservation Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 font-dm text-sm focus:outline-none focus:border-yellow transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-nunito font-semibold text-xs text-dark mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-yellow" /> Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 font-dm text-sm focus:outline-none focus:border-yellow transition-colors bg-white"
                  >
                    <option value="12:30 PM">12:30 PM (Lunch)</option>
                    <option value="01:30 PM">01:30 PM (Lunch)</option>
                    <option value="03:00 PM">03:00 PM (Late Lunch)</option>
                    <option value="05:30 PM">05:30 PM (Evening)</option>
                    <option value="07:00 PM">07:00 PM (Dinner)</option>
                    <option value="08:00 PM">08:00 PM (Prime Dinner)</option>
                    <option value="09:00 PM">09:00 PM (Dinner)</option>
                    <option value="10:00 PM">10:00 PM (Late Night)</option>
                    <option value="11:00 PM">11:00 PM (Late Night)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-nunito font-semibold text-xs text-dark mb-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-yellow" /> Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 font-dm text-sm focus:outline-none focus:border-yellow transition-colors bg-white"
                  >
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3-4 Guests">3–4 Guests</option>
                    <option value="5-6 Guests">5–6 Guests</option>
                    <option value="7-10 Guests">7–10 Guests (Large Group)</option>
                    <option value="10+ Guests">10+ Guests (Private Area)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-nunito font-semibold text-xs text-dark mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-yellow" /> Seating Area
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full rounded-xl border border-border px-3.5 py-2.5 font-dm text-sm focus:outline-none focus:border-yellow transition-colors bg-white"
                  >
                    <option value="Outdoor Seating">Outdoor Seating (Open Air)</option>
                    <option value="Indoor AC Seating">Indoor AC Seating</option>
                    <option value="Sports Screening Area">Sports Screening Area</option>
                    <option value="First Available">First Available Table</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-nunito font-semibold text-xs text-dark mb-1">
                  Special Notes or Occasion (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Birthday celebration, anniversary, high chair needed..."
                  className="w-full rounded-xl border border-border px-3.5 py-2 font-dm text-sm focus:outline-none focus:border-yellow transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-nunito font-bold rounded-full py-3.5 px-6 flex items-center justify-center gap-2 shadow-md transition-transform active:scale-98"
                >
                  <MessageCircle className="w-5 h-5" />
                  Confirm Table on WhatsApp
                </button>
                <a
                  href="tel:03205401241"
                  className="w-full border border-border hover:border-yellow bg-gray-50 hover:bg-yellow/10 text-dark font-nunito font-semibold text-xs rounded-full py-2.5 flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-yellow" />
                  Prefer calling? 0320 5401241 / 051-2751370
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
