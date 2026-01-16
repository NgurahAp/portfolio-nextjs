"use client";
import { Navbar } from "@/components/ui/Navbar";
import HeroSection from "@/components/section/Hero";
import MarqueeSection from "@/components/ui/Marquee";
import ExperienceSection from "@/components/section/Experience";
import ServicesSection from "@/components/section/Service";
import { motion } from "framer-motion";
import { HeroParallax } from "@/components/ui/Parallax";
import { products } from "@/components/ui/product";
import ContactForm from "@/components/section/ContactUs";
import CurvedLoop from "@/components/ui/CurvedLoop";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 min-h-screen overflow-hidden"
    >
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <CurvedLoop
        marqueeText="✦  NextJS  ✦  NestJS  ✦  NuxtJS  ✦  Flutter  ✦  Laravel  ✦   Go  ✦  Firebase  ✦  Docker  ✦  MongoDB  ✦  PostgreSQL  ✦  MySQL  ✦  REST API  ✦  Git  ✦  Jenkins "
        speed={1.1}
        className="text-2xl md:text-5xl fill-gray-900"
        curveAmount={200}
        direction="left"
        interactive={true}
      />
      <ServicesSection />
      <HeroParallax products={products} />
      <ContactForm />
    </motion.div>
  );
}
