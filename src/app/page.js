"use client";
import HeroSection from "@/components/section/Hero";
import MarqueeSection from "@/components/ui/Marquee";
import ExperienceSection from "@/components/section/Experience";
import ServicesSection from "@/components/section/Service";
import { motion } from "framer-motion";
import { HeroParallax } from "@/components/ui/Parallax";
import { products } from "@/components/ui/product";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black min-h-screen overflow-hidden"
    >
      <HeroSection />
      <MarqueeSection />
      <ExperienceSection />
      <ServicesSection />
      <HeroParallax products={products} />
      <section className="h-screen"></section>
    </motion.div>
  );
}
