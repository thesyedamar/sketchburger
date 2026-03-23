"use client";

import { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SwiperCarouselProps {
  children: ReactNode[];
  className?: string;
}

export default function SwiperCarousel({ children, className = "" }: SwiperCarouselProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={`relative ${className}`}>
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow shadow-card flex items-center justify-center hover:bg-yellow-light transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-dark" />
      </button>
      
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-yellow shadow-card flex items-center justify-center hover:bg-yellow-light transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-dark" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            (swiper.params.navigation as Record<string, unknown>).prevEl = prevRef.current;
            (swiper.params.navigation as Record<string, unknown>).nextEl = nextRef.current;
          }
        }}
        loop
      >
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}