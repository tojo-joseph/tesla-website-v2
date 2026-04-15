"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Content fade out as we scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentX = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Video expansion - starts at 50% width, expands to 100%
  const videoWidth = useTransform(scrollYProgress, [0.2, 0.6], ["50%", "100%"]);
  const videoHeight = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    ["70vh", "100vh"],
  );
  const videoBorderRadius = useTransform(scrollYProgress, [0.2, 0.6], [24, 0]);
  const videoPadding = useTransform(scrollYProgress, [0.2, 0.6], [64, 0]);

  // Badge fade out during expansion
  const badgeOpacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  return (
    <section ref={heroRef} className="relative bg-midlife-bg lg:h-[200vh]">
      {/* Mobile Layout - Simple Vertical Stack */}
      <div className="lg:hidden min-h-screen flex flex-col">
        {/* Content Section - Mobile */}
        <div className="w-full flex items-center justify-center px-8 py-20 pt-24">
          <div className="max-w-2xl">
            {/* Eyebrow Text */}
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-[#0EA5E9] text-2xl">⚡</span>
              <span className="text-midlife-light-gray text-sm tracking-wider font-satoshi uppercase">
                The Future is Electric
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-4xl lg:text-4xl font-bold leading-none mb-6 text-midlife-text font-termina uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              DRIVE THE
              <br />
              REVOLUTION
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-base sm:text-lg text-midlife-light-gray mb-8 leading-relaxed font-satoshi"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Zero emissions. Maximum performance. Experience the perfect fusion
              of sustainable innovation and exhilarating power.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/cars">
                <button className="group relative bg-transparent border-2 border-[#0EA5E9] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 font-termina flex items-center gap-3 overflow-hidden hover:bg-[#0EA5E9] cursor-pointer">
                  <span className="relative z-10">Explore Our Fleet</span>
                  <span className="relative z-10 bg-[#0EA5E9] group-hover:bg-white/20 p-2 rounded transition-all duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Video Section - Mobile */}
        <div className="w-full px-4 pb-8">
          <motion.div
            className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/tojo-joseph/video/upload/v1776070240/tesla_v2_hero_ljypfd.mp4"
                type="video/mp4"
              />
            </video>

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-4 right-4 bg-[#0EA5E9] text-white px-4 py-3 rounded-full shadow-2xl"
              initial={{ opacity: 0, rotate: -45, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-xs font-semibold font-termina whitespace-nowrap">
                  CREATING WORK
                  <br />
                  THAT INSPIRES
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout - Scroll Effect */}
      <div className="hidden lg:block sticky top-0 h-screen overflow-hidden">
        <div className="h-screen flex flex-col lg:flex-row items-center relative">
          {/* Left Section - Content */}
          <motion.div
            className="w-full lg:w-1/2 h-full flex items-center justify-center px-8 lg:px-16 py-20 lg:py-0 absolute left-0 z-10"
            style={{ opacity: contentOpacity, x: contentX }}
          >
            <div className="max-w-2xl">
              {/* Eyebrow Text */}
              <motion.div
                className="flex items-center gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-[#0EA5E9] text-2xl">⚡</span>
                <span className="text-midlife-light-gray text-sm tracking-wider font-satoshi uppercase">
                  The Future is Electric
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-7xl md:text-7xl lg:text-8xl font-bold leading-none mb-6 text-midlife-text font-termina uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                DRIVE THE
                <br />
                REVOLUTION
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-lg md:text-xl text-midlife-light-gray mb-8 leading-relaxed font-satoshi max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Zero emissions. Maximum performance. Experience the perfect
                fusion of sustainable innovation and exhilarating power.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/cars">
                  <button className="group relative bg-transparent border-2 border-[#0EA5E9] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 font-termina flex items-center gap-3 overflow-hidden hover:bg-[#0EA5E9] cursor-pointer">
                    <span className="relative z-10">Explore Our Fleet</span>
                    <span className="relative z-10 bg-[#0EA5E9] group-hover:bg-white/20 p-2 rounded transition-all duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Video (Expanding) */}
          <motion.div
            className="absolute right-0 h-full flex items-center justify-center"
            style={{
              width: videoWidth,
              padding: videoPadding,
            }}
          >
            <motion.div
              className="relative w-full overflow-hidden"
              style={{
                height: videoHeight,
                borderRadius: videoBorderRadius,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Video Container */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://res.cloudinary.com/tojo-joseph/video/upload/v1776070240/tesla_v2_hero_ljypfd.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-8 right-8 bg-[#0EA5E9] text-white px-6 py-4 rounded-full shadow-2xl"
                style={{ opacity: badgeOpacity }}
                initial={{ opacity: 0, rotate: -45, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-sm font-semibold font-termina whitespace-nowrap">
                    CREATING WORK
                    <br />
                    THAT INSPIRES
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
