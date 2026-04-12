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
      className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden"
      style={{ opacity: productOpacity, y: productY }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left content */}
            <div>
              <div className="text-xs tracking-widest opacity-60 uppercase mb-8">
                // Engineering //
              </div>

              <h2 className="text-5xl md:text-6xl leading-[1.1] tracking-tight lowercase mb-12">
                grounded in science
                <span className="inline-flex items-center mx-3 align-middle">
                  <motion.div
                    className="relative w-16 h-16 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="absolute inset-0 bg-accent/10 backdrop-blur-sm"
                      style={{
                        clipPath:
                          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                      }}
                    ></div>
                    <svg
                      className="w-8 h-8 text-accent relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </motion.div>
                </span>
                baked in style
              </h2>

              {/* Description */}
              <div className="space-y-8 text-sm">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="mb-3 opacity-60 uppercase tracking-wide text-xs">
                    How it works
                  </h3>
                  <p className="leading-relaxed">
                    Electric motors with zero emissions, acceleration unlike
                    anything else on the road. Instant torque, seamless power
                    delivery.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="mb-3 opacity-60 uppercase tracking-wide text-xs">
                    Portfolio
                  </h3>
                  <p className="leading-relaxed">
                    A fleet forged around foundational engineering principles.
                    The Model S, Model 3, Model X, Model Y, Cybertruck, and
                    beyond.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Cybertruck image */}
            <div className="relative mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-tl from-accent/20 via-transparent to-transparent blur-3xl opacity-40"></div>
                <motion.img
                  src="https://images.unsplash.com/photo-1716304960614-67625112f271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Tesla Cybertruck"
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                  initial={{ opacity: 0, x: 100, rotate: 3 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
