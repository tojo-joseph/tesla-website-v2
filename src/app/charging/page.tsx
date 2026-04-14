"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ChargingPage() {
  return (
    <div className="min-h-screen bg-midlife-bg">
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 sm:px-8 lg:px-16 py-20 text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-midlife-text mb-6 font-termina uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Plug In, Charge and Go
          </motion.h1>
          <motion.p
            className="text-midlife-light-gray text-lg max-w-3xl mx-auto mb-8 font-satoshi"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            With plenty of range for both daily drives and road trips, Tesla
            vehicles get you where you want to go. Charging is fast, convenient
            and available anywhere with electricity.
          </motion.p>
          <motion.button
            className="bg-transparent border-2 border-midlife-text text-midlife-text hover:bg-midlife-text hover:text-midlife-bg px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-satoshi"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Help Me Charge
          </motion.button>
        </section>

        {/* Charging Options Grid */}
        <section className="px-6 sm:px-8 lg:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* While You Sleep */}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop"
                    alt="Home Charging"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-midlife-text mb-3 font-termina">
                  While You Sleep
                </h3>
                <p className="text-midlife-light-gray font-satoshi">
                  <span className="underline">Plug in at home</span> or at
                  nearby public chargers.
                </p>
              </motion.div>

              {/* During the Day */}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1617704548623-340376564e68?w=800&h=600&fit=crop"
                    alt="Supercharger"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-midlife-text mb-3 font-termina">
                  During the Day
                </h3>
                <p className="text-midlife-light-gray font-satoshi">
                  Charge at a{" "}
                  <span className="underline">local Supercharger</span> or at
                  your workplace.
                </p>
              </motion.div>

              {/* On Road Trips */}
              <motion.div
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?w=800&h=600&fit=crop"
                    alt="Road Trip Charging"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-midlife-text mb-3 font-termina">
                  On Road Trips
                </h3>
                <p className="text-midlife-light-gray font-satoshi">
                  Recharge at Superchargers on the way or at{" "}
                  <span className="underline">your destination</span>.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Home Charging Section */}
        <section className="px-6 sm:px-8 lg:px-16 py-20" style={{ backgroundColor: '#FCFCFC' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&h=800&fit=crop"
                  alt="Tesla Home Charging"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-termina">
                  Start Your Day Fully Charged
                </h2>
                <p className="text-gray-700 text-lg mb-8 font-satoshi leading-relaxed">
                  Charge at home and wake up to a charged battery every day. Our
                  charging options are designed for every property.
                </p>
                <button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-satoshi">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Savings Section */}
        <section className="px-6 sm:px-8 lg:px-16 py-20 bg-midlife-bg">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-midlife-text mb-6 font-termina">
                  Skip the Gas Station
                </h2>
                <p className="text-midlife-light-gray text-lg mb-8 font-satoshi leading-relaxed">
                  Reduce your cost per mile and never pay for gas again.
                  Charging with electricity typically costs less than paying for
                  gas at your local station.
                </p>
                <button className="bg-transparent border-2 border-midlife-text text-midlife-text hover:bg-midlife-text hover:text-midlife-bg px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-satoshi">
                  Calculate Savings
                </button>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=1200&h=800&fit=crop"
                  alt="Electric Savings"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Battery Maintenance Section */}
        <section className="px-6 sm:px-8 lg:px-16 py-20" style={{ backgroundColor: '#FCFCFC' }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1609969184143-6c5eee2e1b82?w=1200&h=800&fit=crop"
                  alt="Tesla Battery"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-termina">
                  No Required Battery Maintenance
                </h2>
                <p className="text-gray-700 text-lg mb-4 font-satoshi leading-relaxed">
                  Our batteries don't require any regular maintenance and are
                  designed to outlast your vehicle. Just in case, every new Tesla
                  vehicle purchase includes an eight-year battery warranty.
                  <sup className="text-sm">1</sup>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
