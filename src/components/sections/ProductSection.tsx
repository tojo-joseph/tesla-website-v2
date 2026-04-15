"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function ProductSection() {
  const productRef = useRef(null);

  const { scrollYProgress: productScroll } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const productOpacity = useTransform(
    productScroll,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );
  const productY = useTransform(
    productScroll,
    [0, 0.3, 0.7, 1],
    [60, 0, 0, -60],
  );

  return (
    <motion.section
      ref={productRef}
      className="min-h-screen bg-midlife-bg px-4 sm:px-8 lg:px-16 py-20 lg:py-16"
      style={{ opacity: productOpacity, y: productY }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          {/* <motion.div
            className="text-midlife-red text-sm tracking-wider mb-4 font-satoshi"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            [ Engineering ]
          </motion.div> */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-midlife-text font-termina uppercase leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            GROUNDED IN SCIENCE
            <br />
            BAKED IN STYLE
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content Cards */}
          <div className="space-y-8">
            {/* How it Works Card */}
            <motion.div
              className="bg-midlife-dark-gray rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#0EA5E9]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-midlife-text mb-3 font-termina">
                    How it works
                  </h3>
                  <p className="text-midlife-light-gray leading-relaxed font-satoshi">
                    Electric motors with zero emissions, acceleration unlike
                    anything else on the road. Instant torque, seamless power
                    delivery.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Portfolio Card */}
            <motion.div
              className="bg-midlife-dark-gray rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#0EA5E9]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-midlife-text mb-3 font-termina">
                    Portfolio
                  </h3>
                  <p className="text-midlife-light-gray leading-relaxed font-satoshi">
                    A fleet forged around foundational engineering principles.
                    The Model S, Model 3, Model X, Model Y, Cybertruck, and
                    beyond.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Cybertruck Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-midlife-red/20">
              <motion.img
                src="https://images.unsplash.com/photo-1716304960614-67625112f271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Tesla Cybertruck"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0EA5E9]/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-midlife-dark-gray rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-midlife-red mb-2 font-termina">
              0-60
            </div>
            <div className="text-midlife-light-gray text-sm font-satoshi">
              In under 2 seconds
            </div>
          </div>
          <div className="bg-midlife-dark-gray rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-midlife-red mb-2 font-termina">
              400+
            </div>
            <div className="text-midlife-light-gray text-sm font-satoshi">
              Miles of range
            </div>
          </div>
          <div className="bg-midlife-dark-gray rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-midlife-red mb-2 font-termina">
              1,020
            </div>
            <div className="text-midlife-light-gray text-sm font-satoshi">
              Peak horsepower
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
