"use client";
import { Navbar } from "@/components/ui/Navbar";
import HeroSection from "@/components/section/Hero";
import MarqueeSection from "@/components/ui/Marquee";
import ServicesSection from "@/components/section/Service";
import { motion } from "framer-motion";
import { HeroParallax } from "@/components/ui/Parallax";
import { products } from "@/components/ui/product";
import ContactForm from "@/components/section/ContactUs";
import CurvedLoop from "@/components/ui/CurvedLoop";
import RibbonSection from "@/components/section/Ribbon";
import { ParallaxHeroImagesDemo } from "@/components/section/ParallaxHero";
import { AboutSection } from "@/components/section/AboutUs";
import { ExperienceSection } from "@/components/section/WorkExperience";
import { ColorTransitionSection } from "@/components/section/Transition";
import SplashScreen from "@/components/section/SplashScreen";
import { useAppState } from "@/components/providers/AppStateProvider";

export default function Home() {
  const { hasSeenSplash, markSplashSeen } = useAppState();

  return (
    <SplashScreen
      enabled={!hasSeenSplash}
      onComplete={markSplashSeen}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-neutral-50 min-h-screen overflow-hidden"
      >
        <Navbar />
        <ParallaxHeroImagesDemo />
        <AboutSection />
        <ColorTransitionSection>
          <ExperienceSection />
        </ColorTransitionSection>
        <RibbonSection />
        <ServicesSection />
        {/* <CurvedLoop
        marqueeText="✦  NextJS  ✦  NestJS  ✦  NuxtJS  ✦  Flutter  ✦  Laravel  ✦   Go  ✦  Firebase  ✦  Docker  ✦  MongoDB  ✦  PostgreSQL  ✦  MySQL  ✦  REST API  ✦  Git  ✦  Jenkins "
        speed={1.1}
        className="text-2xl md:text-5xl fill-gray-900"
        curveAmount={200}
        direction="left"
        interactive={true}
      /> */}
        {/* <HeroParallax products={products} /> */}
        <ContactForm />
      </motion.div>
    </SplashScreen>
  );
}
