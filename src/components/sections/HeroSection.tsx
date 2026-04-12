"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 1], [0, -100]);
  const heroScale = useTransform(heroScroll, [0, 0.5], [1, 0.95]);

  return (
    <motion.section
      ref={heroRef}
      className="relative h-screen overflow-hidden"
      style={{ opacity: heroOpacity }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/tesla_v2_hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Left-aligned Text Overlay */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-start"
        style={{ y: heroY, scale: heroScale }}
      >
        <div className="w-full max-w-4xl mx-auto px-8 lg:px-16">
          {/* Tesla Typography */}
          <div className="text-left">
            <motion.div
              className="mb-4 text-xs tracking-widest opacity-60 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8 }}
            >
              // Electric Vehicles //
            </motion.div>

            <motion.h1
              className="text-8xl md:text-9xl leading-[0.9] tracking-tight lowercase select-none text-midlife-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Tesla
            </motion.h1>

            <motion.p
              className="mt-8 text-2xl md:text-3xl max-w-2xl leading-relaxed text-midlife-light-gray"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Accelerating the world's transition to{" "}
              <span className="text-accent">sustainable energy</span> through
              innovation and <span className="text-accent">performance</span>.
            </motion.p>
          </div>

          {/* Bottom credits */}
          <motion.div
            className="absolute bottom-8 left-8 text-xs text-midlife-light-gray"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            © model harmony
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-8 text-xs text-midlife-light-gray"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            © 2026 made by <span className="underline">Ghost</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
