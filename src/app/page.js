import HeroSection from "@/components/section/Hero";
import ServicesSection from "@/components/section/Service";
import MarqueeSection from "@/components/ui/Marquee";

export default function Home() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
    </div>
  );
}
