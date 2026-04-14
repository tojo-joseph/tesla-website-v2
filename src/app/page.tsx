import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Hero";
import MissionSection from "@/components/sections/MissionSection";
import ProductSection from "@/components/sections/ProductSection";
import FinalSection from "@/components/sections/FinalSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-midlife-bg">
      <main>
        <Hero />
        <MissionSection />
        <ProductSection />
        <FinalSection />
      </main>
    </div>
  );
}
