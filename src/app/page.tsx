import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutStrip from "@/components/home/AboutStrip";
import FeaturesStrip from "@/components/home/FeaturesStrip";
import PopularDishes from "@/components/home/PopularDishes";
import Testimonials from "@/components/home/Testimonials";
import CategoryPromo from "@/components/home/CategoryPromo";
import FeaturedSection from "@/components/home/FeaturedSection";
import FullBanner from "@/components/home/FullBanner";
import NewsSection from "@/components/home/NewsSection";
import NewsletterBanner from "@/components/home/NewsletterBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AboutStrip />
        <FeaturesStrip />
        <PopularDishes />
        <Testimonials />
        <CategoryPromo />
        <FeaturedSection />
        <FullBanner />
        <NewsSection />
        <NewsletterBanner />
      </main>
      <Footer />
    </>
  );
}