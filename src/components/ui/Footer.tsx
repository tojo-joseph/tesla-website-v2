"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Cars", href: "/cars" },
    { label: "Energy", href: "/energy" },
    { label: "Charging", href: "/charging" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-midlife-bg border-t border-midlife-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Logo and Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-midlife-red rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-midlife-text font-termina tracking-wider">
                  TESLA
                </div>
              </div>
              <div className="space-y-2 text-midlife-light-gray font-satoshi">
                <p>+1 (888) 518-3752</p>
                <p>support@tesla.com</p>
              </div>
            </motion.div>
          </div>

          {/* Middle Column - Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-midlife-text mb-4 font-termina">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-midlife-light-gray hover:text-midlife-red transition-colors font-satoshi"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Address & Map */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-midlife-text mb-4 font-termina">
                Address
              </h3>
              <p className="text-midlife-light-gray mb-4 font-satoshi">
                3500 Deer Creek Road, Palo Alto, CA 94304, USA
              </p>
              <div className="w-full h-48 bg-midlife-dark-gray rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6395894076!2d-122.14967!3d37.39434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb07b9dba1c39%3A0x4027f5b8f0c4b50!2sTesla%20HQ!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-midlife-dark-gray flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-midlife-light-gray font-satoshi">
            © Copyright {new Date().getFullYear()}. All Rights Reserved by{" "}
            <Link href="/" className="text-midlife-red hover:underline">
              Tesla
            </Link>
          </p>
          <div className="flex items-center gap-2 text-sm text-midlife-light-gray font-satoshi">
            <span>Created by</span>
            <div className="w-6 h-6 rounded-full bg-midlife-red flex items-center justify-center text-white text-xs font-bold">
              T
            </div>
            <span className="text-midlife-text">Tesla Design Team</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
