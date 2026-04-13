"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

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
      className="min-h-screen bg-midlife-bg px-4 sm:px-8 lg:px-16 py-20 lg:py-16"
      style={{ opacity: missionOpacity, y: missionY }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            className="text-midlife-red text-sm tracking-wider mb-4 font-satoshi"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            [ Who We Are ]
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-midlife-text font-termina uppercase leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            WE ARE LEADING ELECTRIC
            <br />
            VEHICLE COMPANY
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image and Badge */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-midlife-red/20">
              <Image
                src="/images/about_img.jpg"
                alt="Tesla Vision"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Badge Overlay */}
              {/* <div className="absolute bottom-6 left-6 bg-white rounded-full p-4 shadow-xl">
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="w-12 h-12 text-midlife-red"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <div className="text-xs font-bold text-gray-800 mt-1 text-center">
                    ELECTRIC
                    <br />
                    INNOVATION
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Right Column - Content Cards */}
          <div className="space-y-8">
            {/* Our Story Card */}
            <motion.div
              className="bg-midlife-dark-gray rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-midlife-text mb-4 font-termina">
                Our story
              </h3>
              <p className="text-midlife-light-gray leading-relaxed font-satoshi">
                Our dedication to innovation, sustainability, and quality has
                earned us recognition from industry leaders. We specialize in
                crafting custom electric solutions, including performance
                optimization, battery technology, autonomous driving, and
                sustainable energy, tailored to meet the world's needs.
              </p>
            </motion.div>

            {/* Second Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/images/about2_img.jpg"
                alt="Tesla Innovation"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-midlife-text mb-2 font-termina">
              15<span className="text-midlife-red">+</span>
            </div>
            <div className="text-midlife-light-gray text-sm font-satoshi">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-midlife-text mb-2 font-termina">
              500<span className="text-midlife-red">+</span>
            </div>
            <div className="text-midlife-light-gray text-sm font-satoshi">
              Projects Done
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-midlife-text mb-2 font-termina">
              1M<span className="text-midlife-red">+</span>
            </div>
            <div className="text-midlife-light-gray text-sm font-satoshi">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-midlife-text mb-2 font-termina">
              99<span className="text-midlife-red">%</span>
            </div>
            <div className="text-midlife-light-gray text-sm font-satoshi">
              Satisfied Clients
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Text */}
        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-midlife-light-gray text-lg font-satoshi">
            We work with the world's top companies
          </p>
        </motion.div> */}
      </div>
    </motion.section>
  );
}
