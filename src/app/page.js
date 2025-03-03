"use client";
import HeroSection from "@/components/section/Hero";
import MarqueeSection from "@/components/ui/Marquee";
import ExperienceSection from "@/components/section/Experience";
import { motion } from "framer-motion";

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

      {/* Optional: Subtle gradient for visual depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 z-0"></div>
    </motion.div>
  );
}
