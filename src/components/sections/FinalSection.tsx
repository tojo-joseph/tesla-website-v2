"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function FinalSection() {
  const finalRef = useRef(null);

  const { scrollYProgress: finalScroll } = useScroll({
    target: finalRef,
    offset: ["start end", "end start"],
  });

  const finalOpacity = useTransform(
    finalScroll,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.8],
  );
  const finalY = useTransform(finalScroll, [0, 0.3], [60, 0]);

  return (
    <motion.section
      ref={finalRef}
      className="min-h-screen flex items-center justify-center px-8 py-32"
      style={{ opacity: finalOpacity, y: finalY }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Red Tesla image */}
            <motion.div
              initial={{ opacity: 0, x: -80, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-accent/30 via-transparent to-transparent blur-2xl opacity-50"></div>
                <motion.img
                  src="https://images.unsplash.com/photo-1767949374128-58d3592a273d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Red Tesla Model 3"
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-xs tracking-widest opacity-60 uppercase mb-8">
                // Philosophy //
              </div>
              <h2 className="text-5xl md:text-7xl leading-[1.1] tracking-tight lowercase">
                built on
                <br />
                purposefulness
              </h2>
              <p className="mt-8 text-lg opacity-70 leading-relaxed max-w-lg">
                Every design decision, every engineering choice, rooted in a
                singular vision of sustainable transportation.
              </p>
            </motion.div>
          </div>

          {/* Social links */}
          <motion.div
            className="flex gap-6 justify-center mt-32 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              &#120146;
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              &#8508;
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              &#8424;
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              &#8477;
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
