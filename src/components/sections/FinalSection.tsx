"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

export default function FinalSection() {
  const finalRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceNeeded: "Vehicle Purchase Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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
      className="min-h-screen px-4 sm:px-8 lg:px-16 py-20 lg:py-16 flex items-center"
      style={{ opacity: finalOpacity, y: finalY, backgroundColor: "#FCFCFC" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile & Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-midlife-red text-sm tracking-wider mb-6 font-satoshi">
              {"{ Get in touch }"}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 font-termina uppercase leading-tight">
              LET'S START YOUR
              <br />
              ELECTRIC JOURNEY TODAY
            </h2>

            {/* Profile Card */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-midlife-dark-gray overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="Tesla Representative"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black font-termina">
                  Tesla Team
                </h3>
                <p className="text-sm text-gray-600 font-satoshi">
                  Customer Experience Specialist
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed font-satoshi">
              At Tesla, we believe in accelerating the world's transition to
              sustainable energy. If you have questions or need guidance about
              our vehicles, energy products, or services, we're here to support
              you. Your journey to sustainable transportation starts here —
              let's create something incredible together.
            </p>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setSubmitStatus({ type: null, message: "" });

                try {
                  const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...formData, source: "homepage" }),
                  });

                  const data = await response.json();

                  if (response.ok) {
                    setSubmitStatus({
                      type: "success",
                      message: data.message,
                    });
                    setFormData({
                      name: "",
                      email: "",
                      serviceNeeded: "Vehicle Purchase Inquiry",
                      message: "",
                    });
                  } else {
                    setSubmitStatus({
                      type: "error",
                      message: data.error || "Failed to submit form",
                    });
                  }
                } catch (error) {
                  setSubmitStatus({
                    type: "error",
                    message: "Network error. Please try again.",
                  });
                }

                setIsSubmitting(false);
              }}
            >
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-satoshi">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-white text-black rounded-lg border border-gray-300 focus:border-midlife-red outline-none transition-colors font-satoshi"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-satoshi">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="johnsmith@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 bg-white text-black rounded-lg border border-gray-300 focus:border-midlife-red outline-none transition-colors font-satoshi"
                  />
                </div>
              </div>

              {/* Service Needed */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-satoshi">
                  Service Needed ?
                </label>
                <select
                  value={formData.serviceNeeded}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceNeeded: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-white text-black rounded-lg border border-gray-300 focus:border-midlife-red outline-none transition-colors font-satoshi appearance-none cursor-pointer"
                >
                  <option>Vehicle Purchase Inquiry</option>
                  <option>Test Drive Booking</option>
                  <option>Energy Products</option>
                  <option>Service & Support</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-satoshi">
                  What Can I Help You...
                </label>
                <textarea
                  rows={6}
                  placeholder="Hello, I'd like to enquire about..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-white text-black rounded-lg border border-gray-300 focus:border-midlife-red outline-none transition-colors resize-none font-satoshi"
                ></textarea>
              </div>

              {/* Submit Status */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <p className="font-satoshi text-sm">{submitStatus.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#0EA5E9] text-white rounded-full font-bold text-lg hover:bg-[#0EA5E9]/90 transition-colors font-satoshi cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Contact Us"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
