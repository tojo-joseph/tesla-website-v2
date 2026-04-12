"use client";

import HeroSection from "./sections/HeroSection";
import MissionSection from "./sections/MissionSection";
import ProductSection from "./sections/ProductSection";
import FinalSection from "./sections/FinalSection";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-background">
      <HeroSection />
      <MissionSection />
      <ProductSection />
      <FinalSection />
    </div>
  );
}
