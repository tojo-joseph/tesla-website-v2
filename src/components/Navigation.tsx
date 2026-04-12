"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Vehicles", href: "/vehicles" },
    { label: "Energy", href: "/energy" },
    { label: "Charging", href: "#charging" },
    { label: "Discover", href: "#discover" },
    { label: "Shop", href: "#shop" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("/")) {
      // Page navigation
      window.location.href = href;
    } else {
      // Anchor navigation
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-midlife-bg/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-midlife-text font-bold text-3xl font-termina tracking-wider">
                TESLA
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-10">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className="text-midlife-light-gray hover:text-midlife-text px-4 py-2 text-sm font-medium transition-colors font-satoshi"
                  >
                    {item.label}
                  </button>
                ))}
                <button className="text-midlife-light-gray hover:text-midlife-text px-4 py-2 text-sm font-medium transition-colors font-satoshi">
                  Shop
                </button>
                <button className="text-midlife-light-gray hover:text-midlife-text px-4 py-2 text-sm font-medium transition-colors font-satoshi">
                  Account
                </button>
                <button className="bg-midlife-red hover:bg-red-600 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors font-termina">
                  Menu
                </button>
              </div>
            </div>

            {/* Mobile menu button - Hero style */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-sm tracking-wide hover:opacity-70 transition-opacity"
              >
                &#9776;
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-midlife-bg/95 backdrop-blur-md">
            <div className="fixed inset-x-0 top-0 p-4">
              <div className="flex items-center justify-between">
                <div className="w-3 h-3 rounded-full bg-midlife-red"></div>
                <div className="text-sm tracking-wide">
                  Made to focus, real and everything in between
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm tracking-wide hover:opacity-70 transition-opacity"
                >
                  &#9776;
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center h-full px-4">
              <div className="space-y-10 text-center">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                    className="text-3xl text-midlife-light-gray hover:text-midlife-text font-termina font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <button className="text-3xl text-midlife-light-gray hover:text-midlife-text font-termina font-medium transition-colors">
                  Shop
                </button>
                <button className="text-3xl text-midlife-light-gray hover:text-midlife-text font-termina font-medium transition-colors">
                  Account
                </button>
                <button className="bg-midlife-red hover:bg-red-600 text-white px-10 py-4 rounded-full text-xl font-medium transition-colors font-termina mt-12">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
