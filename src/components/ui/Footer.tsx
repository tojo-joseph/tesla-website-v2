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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
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
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm7.5 9.5c-.9-.3-1.9-.5-2.9-.6.3-.7.5-1.4.7-2.1 1.3.8 2.3 2 2.9 3.4-.2.1-.5.2-.7.3zm-1.6-4.7c-.3.8-.6 1.6-.9 2.4-1-.2-2-.3-3-.3s-2 .1-3 .3c-.3-.8-.6-1.6-.9-2.4C10.7 4.1 11.3 4 12 4s1.3.1 1.9.3c.7.2 1.3.5 1.9.8.1.1.1.1.1.2zm-3.9 14c-1.1 0-2.1-.2-3-.6.2-.9.5-1.8.9-2.6.9.3 1.9.5 2.9.5s2-.2 2.9-.5c.4.8.7 1.7.9 2.6-.9.4-1.9.6-3 .6zm-5.4-3.9c-.3-.7-.5-1.4-.7-2.1 1.3-.8 2.3-2 2.9-3.4.2.1.5.2.7.3.9.3 1.9.5 2.9.6-.3.7-.5 1.4-.7 2.1-1.3.8-2.3 2-2.9 3.4-.2-.1-.5-.2-.7-.3-.9-.3-1.9-.5-2.9-.6z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
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
