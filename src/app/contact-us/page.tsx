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

            <div>
              <div className="space-y-12">
                {/* Sales */}
                {/* <motion.div
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
                </motion.div> */}

                {/* Vehicle Customer Support */}
                {/* <motion.div
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
                </motion.div> */}

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6 font-termina uppercase">
                    Send Us a Message
                  </h3>
                  <form
                    action={`mailto:tojoj130@gmail.com`}
                    method="post"
                    encType="text/plain"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-white font-satoshi mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-midlife-dark-gray/50 border border-midlife-dark-gray rounded-lg text-white font-satoshi focus:outline-none focus:border-midlife-red transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-white font-satoshi mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-midlife-dark-gray/50 border border-midlife-dark-gray rounded-lg text-white font-satoshi focus:outline-none focus:border-midlife-red transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-white font-satoshi mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 bg-midlife-dark-gray/50 border border-midlife-dark-gray rounded-lg text-white font-satoshi focus:outline-none focus:border-midlife-red transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-white font-satoshi mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 bg-midlife-dark-gray/50 border border-midlife-dark-gray rounded-lg text-white font-satoshi focus:outline-none focus:border-midlife-red transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="Test Drive">
                            Schedule Test Drive
                          </option>
                          <option value="Order Inquiry">Order Inquiry</option>
                          <option value="Support">Customer Support</option>
                          <option value="General">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-white font-satoshi mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-midlife-dark-gray/50 border border-midlife-dark-gray rounded-lg text-white font-satoshi focus:outline-none focus:border-midlife-red transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-4 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-bold rounded-xl transition-all duration-300 font-satoshi uppercase tracking-wide cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                </motion.div>

                {/* Roadside Assistance */}
                {/* <motion.div
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
                </motion.div> */}

                {/* Service */}
                {/* <motion.div
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
                </motion.div> */}
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
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${office.address}, ${office.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black underline hover:text-midlife-red transition-colors font-satoshi"
                  >
                    Locate on a map
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
