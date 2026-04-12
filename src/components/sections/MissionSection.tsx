"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function MissionSection() {
  const missionRef = useRef(null);

  const { scrollYProgress: missionScroll } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"],
  });

  const missionOpacity = useTransform(
    missionScroll,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );
  const missionY = useTransform(
    missionScroll,
    [0, 0.3, 0.7, 1],
    [60, 0, 0, -60],
  );

  return (
    <motion.section
      ref={missionRef}
      className="min-h-screen flex items-center justify-center px-8 py-32"
      style={{ opacity: missionOpacity, y: missionY }}
    >
      <div className="max-w-5xl">
        <div className="space-y-8">
          <div className="text-xs tracking-widest opacity-60 uppercase mb-6">
            // Our Mission //
          </div>

          <h2 className="text-4xl md:text-5xl leading-[1.3] font-normal">
            Our dedication to <span className="text-accent">innovation</span>,{" "}
            <span className="text-accent">sustainability</span>, and quality
            has earned us recognition from industry leaders.
          </h2>

          <div className="pt-4 space-y-3 text-sm">
            <p className="opacity-70">// Electric performance excellence</p>
            <p className="opacity-70">// Trusted by millions worldwide</p>
            <p className="opacity-70">// Innovation that accelerates</p>
          </div>

          {/* Car image with abstract border */}
          <div className="pt-16 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent blur-2xl opacity-30"></div>
            <div
              className="relative overflow-hidden"
              style={{ clipPath: "polygon(0 2%, 100% 0, 100% 98%, 0 100%)" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1767949374185-77f387080e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                alt="Blue Tesla Model 3"
                className="w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
