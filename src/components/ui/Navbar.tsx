"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Cars", href: "/cars" },
    { label: "Solar", href: "/solar" },
    { label: "Charging", href: "/charging" },
    { label: "Discover", href: "/discover" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-midlife-bg/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1536px] mx-auto">
          {/* Tesla Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/">
              <div className="text-midlife-text font-bold text-2xl tracking-widest font-termina">
                TESLA
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link href={link.href} key={link.label}>
                  <button className="text-midlife-light-gray hover:text-midlife-text px-3 py-2 text-sm font-medium transition-colors font-satoshi whitespace-nowrap">
                    {link.label}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-midlife-light-gray hover:text-midlife-text p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-midlife-bg/98 backdrop-blur-lg">
          <div className="h-full w-full flex flex-col">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-midlife-dark-gray shrink-0">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="text-midlife-text font-bold text-2xl tracking-widest font-termina">
                  TESLA
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-midlife-light-gray hover:text-midlife-text p-2"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-4 pt-8">
                {navLinks.map((link) => (
                  <Link href={link.href} key={link.label}>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left text-midlife-light-gray hover:text-midlife-text py-4 text-xl font-medium transition-colors font-satoshi border-b border-midlife-dark-gray/30"
                    >
                      {link.label}
                    </button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
