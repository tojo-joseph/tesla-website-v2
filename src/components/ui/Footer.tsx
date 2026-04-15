"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  const pageLinks = [
    { label: "Home", href: "/" },
    { label: "Cars", href: "/cars" },
  ];

  const infoLinks = [{ label: "Contact", href: "/contact-us" }];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left Column - Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src="/images/logo.svg"
                  alt="Tesla Logo"
                  className="w-14 h-14 object-contain"
                />
                <div className="text-xl font-bold text-white font-termina">
                  Tesla
                </div>
              </div>
              <p className="text-sm text-gray-400 font-satoshi mb-6 leading-relaxed">
                Your favourite business management software. Built for early
                startup founders.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/tesla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Middle Column - Pages */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xs font-bold text-white mb-4 font-satoshi uppercase tracking-wider">
                Pages
              </h3>
              <ul className="space-y-3">
                {pageLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors font-satoshi cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xs font-bold text-white mb-4 font-satoshi uppercase tracking-wider">
                Information
              </h3>
              <ul className="space-y-3">
                {infoLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors font-satoshi cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-gray-400 font-satoshi">
            {new Date().getFullYear()} Tesla. Created by{" "}
            <span className="text-white font-semibold">Tojo Joseph</span>
          </p>
          <p className="text-xs text-gray-400 font-satoshi">
            Built in <span className="text-white font-semibold">Framer</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
