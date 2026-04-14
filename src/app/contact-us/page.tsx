"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ContactUsPage() {
  const offices = [
    {
      name: "Tesla Headquarters - Gigafactory Texas",
      address: "1 Tesla Road",
      city: "Austin, TX 78725",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
      name: "Tesla Engineering Headquarters",
      address: "1501 Page Mill Road",
      city: "Palo Alto, CA 94304",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    },
    {
      name: "Tesla Factory",
      address: "45500 Fremont Boulevard",
      city: "Fremont, CA 94538",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    },
    {
      name: "Tesla Gigafactory",
      address: "Electric Avenue",
      city: "Sparks, NV 89434",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
      name: "Gigafactory New York",
      address: "1339 South Park Ave",
      city: "Buffalo, NY 14220",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    },
    {
      name: "Gigafactory Shanghai",
      address: "Zheng Jia Lu",
      city: "Fengxian District China",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    },
    {
      name: "Gigafactory Berlin—Brandenburg",
      address: "1 Tesla Straße",
      city: "15537 Grünheide, Brandenburg",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
      name: "Tesla Amsterdam Zuid-Oost",
      address: "Burgemeester Stramanweg 122",
      city: "1101 EN, Amsterdam Netherlands",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-midlife-bg">
      <main className="pt-24 pb-16">
        {/* Contact Section */}
        <section className="px-6 sm:px-8 lg:px-16 py-16 bg-black">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-16 font-termina"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column */}
              <div className="space-y-12">
                {/* Sales */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-termina">
                    Sales
                  </h3>
                  <p className="text-gray-300 font-satoshi">
                    <a
                      href="#"
                      className="underline hover:text-midlife-red transition-colors"
                    >
                      Locate your nearest Tesla location
                    </a>
                    .
                  </p>
                </motion.div>

                {/* Vehicle Customer Support */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-termina">
                    Vehicle Customer Support
                  </h3>
                  <p className="text-gray-300 font-satoshi">
                    <a
                      href="#"
                      className="underline hover:text-midlife-red transition-colors"
                    >
                      Find answers
                    </a>{" "}
                    about your order, delivery, ownership and product support.
                  </p>
                </motion.div>

                {/* Energy and Charging Product Customer Support */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-termina">
                    Energy and Charging Product Customer Support
                  </h3>
                  <p className="text-gray-300 font-satoshi mb-2">
                    For support with Powerwall, Solar Panels, Solar Roof and
                    other energy products, call our Customer Support team toll
                    free at{" "}
                    <a
                      href="tel:8777983752"
                      className="underline hover:text-midlife-red transition-colors"
                    >
                      (877) 798-3752
                    </a>{" "}
                    and select option 4, then option 2.
                  </p>
                  <p className="text-gray-300 font-satoshi">
                    For help with Wall Connector and other home charging
                    products, select option 3.
                  </p>
                </motion.div>

                {/* Roadside Assistance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-termina">
                    Roadside Assistance
                  </h3>
                  <p className="text-gray-300 font-satoshi">
                    Request roadside assistance from the Tesla app.{" "}
                    <a
                      href="#"
                      className="underline hover:text-midlife-red transition-colors"
                    >
                      Find international phone numbers
                    </a>{" "}
                    for emergency roadside assistance.
                  </p>
                </motion.div>

                {/* Service */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-termina">
                    Service
                  </h3>
                  <p className="text-gray-300 font-satoshi">
                    If your Tesla vehicle needs service, start by{" "}
                    <a
                      href="#"
                      className="underline hover:text-midlife-red transition-colors"
                    >
                      scheduling a service appointment
                    </a>{" "}
                    in the Tesla app.
                  </p>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                {/* Press */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-termina">
                    Press
                  </h3>
                  <div className="space-y-3 text-gray-300 font-satoshi">
                    <div>
                      <p className="font-semibold">Americas</p>
                      <a
                        href="mailto:press@tesla.com"
                        className="underline hover:text-midlife-red transition-colors"
                      >
                        press@tesla.com
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold">Europe & Middle East</p>
                      <a
                        href="mailto:eupress@tesla.com"
                        className="underline hover:text-midlife-red transition-colors"
                      >
                        eupress@tesla.com
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold">Australia & Asia</p>
                      <a
                        href="mailto:apacpress@tesla.com"
                        className="underline hover:text-midlife-red transition-colors"
                      >
                        apacpress@tesla.com
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold">China</p>
                      <a
                        href="mailto:china-press@tesla.com"
                        className="underline hover:text-midlife-red transition-colors"
                      >
                        china-press@tesla.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Worldwide Offices Section */}
        <section className="px-6 sm:px-8 lg:px-16 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-black mb-16 font-termina"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Worldwide Offices
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Office Image */}
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={office.image}
                      alt={office.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Office Info */}
                  <h3 className="text-xl font-bold text-black mb-3 font-termina">
                    {office.name}
                  </h3>
                  <p className="text-gray-700 font-satoshi mb-1">
                    {office.address}
                  </p>
                  <p className="text-gray-700 font-satoshi mb-4">
                    {office.city}
                  </p>
                  <a
                    href="#"
                    className="text-black underline hover:text-midlife-red transition-colors font-satoshi"
                  >
                    Directions
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
