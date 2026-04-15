"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/store";
import { setColor, setVariant } from "@/store/configSlice";
import { Car } from "@/store/carSlice";
import Link from "next/link";
import { motion } from "motion/react";

interface ConfigureClientProps {
  car: Car;
}

export default function ConfigureClient({ car }: ConfigureClientProps) {
  const dispatch = useAppDispatch();
  const { selectedColorId, selectedVariantId } = useAppSelector(
    (state) => state.config,
  );

  const [currentStep, setCurrentStep] = useState(1);
  const colors = car.colors || [];
  const variants = car.variants || [];

  // Set default selections on mount
  useEffect(() => {
    if (colors.length > 0 && !selectedColorId) {
      dispatch(setColor(colors[0].id));
    }
    if (variants.length > 0 && !selectedVariantId) {
      dispatch(setVariant(variants[0].id));
    }
  }, [car, colors, variants, selectedColorId, selectedVariantId, dispatch]);

  const currentColor =
    colors.find((c) => c.id === selectedColorId) || colors[0];
  const currentVariant =
    variants.find((v) => v.id === selectedVariantId) || variants[0];
  const totalPrice = car.basePrice + (currentVariant?.price || 0);

  const steps = [
    { number: 1, name: "Variant", description: "Choose your performance" },
    { number: 2, name: "Color", description: "Select exterior color" },
    { number: 3, name: "Review", description: "Review your configuration" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-black text-white py-6 px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-termina uppercase">
                {car.name}
              </h1>
              <p className="text-midlife-light-gray font-satoshi mt-1">
                {car.tagline}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-midlife-light-gray font-satoshi uppercase tracking-wide mb-1">
                Total Price
              </div>
              <div className="text-3xl md:text-4xl font-bold font-termina">
                ${totalPrice.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-midlife-dark-gray/30 border-b border-midlife-dark-gray">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 py-6">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step.number)}
                  className={`flex items-center gap-3 transition-all ${
                    currentStep === step.number
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-termina transition-all ${
                      currentStep === step.number
                        ? "bg-[#0EA5E9] text-white"
                        : "bg-midlife-dark-gray text-midlife-light-gray"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="hidden md:block text-left">
                    <div
                      className={`font-bold font-termina ${
                        currentStep === step.number
                          ? "text-midlife-text"
                          : "text-midlife-light-gray"
                      }`}
                    >
                      {step.name}
                    </div>
                    <div className="text-xs text-midlife-light-gray font-satoshi">
                      {step.description}
                    </div>
                  </div>
                </button>
                {index < steps.length - 1 && (
                  <div className="w-8 md:w-16 h-0.5 bg-midlife-dark-gray mx-2 md:mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Car Preview */}
          <div className="lg:col-span-2">
            <motion.div
              className="sticky top-24"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Car Image */}
              <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden bg-midlife-dark-gray mb-6">
                <Image
                  src={
                    currentColor?.imageUrl ||
                    car.images[0]?.url ||
                    "/placeholder.jpg"
                  }
                  alt={`${car.name} in ${currentColor?.name || "default color"}`}
                  fill
                  className="object-cover transition-opacity duration-500"
                  key={currentColor?.id}
                />
              </div>

              {/* Current Selection Info */}
              <div className="bg-midlife-dark-gray/30 rounded-2xl p-6 border border-midlife-dark-gray">
                <h3 className="text-lg font-bold text-midlife-text mb-4 font-termina uppercase">
                  Current Configuration
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-midlife-light-gray font-satoshi">
                      Variant
                    </span>
                    <span className="text-midlife-text font-semibold font-satoshi">
                      {currentVariant?.name || "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-midlife-light-gray font-satoshi">
                      Color
                    </span>
                    <span className="text-midlife-text font-semibold font-satoshi">
                      {currentColor?.name || "Not selected"}
                    </span>
                  </div>
                  <div className="border-t border-midlife-dark-gray pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-midlife-light-gray font-satoshi">
                        Base Price
                      </span>
                      <span className="text-midlife-text font-satoshi">
                        ${car.basePrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-midlife-light-gray font-satoshi">
                        Variant
                      </span>
                      <span className="text-midlife-text font-satoshi">
                        +${(currentVariant?.price || 0).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-midlife-dark-gray">
                      <span className="text-lg font-bold text-midlife-text font-termina uppercase">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-midlife-text font-termina">
                        ${totalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Configuration Options */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Step 1: Variant Selection */}
              {currentStep === 1 && variants.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-midlife-text mb-6 font-termina uppercase">
                    Choose Your Variant
                  </h2>
                  <div className="space-y-4">
                    {variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => dispatch(setVariant(variant.id))}
                        className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                          selectedVariantId === variant.id
                            ? "border-[#0EA5E9] bg-[#0EA5E9]/10 shadow-lg"
                            : "border-midlife-dark-gray hover:border-midlife-light-gray bg-midlife-dark-gray/30"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-xl text-midlife-text font-bold font-termina">
                            {variant.name}
                          </div>
                          <div className="text-xl text-midlife-text font-bold font-termina">
                            +${variant.price.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-sm text-midlife-light-gray font-satoshi mb-2">
                          {variant.horsepower} hp / {variant.torque} lb-ft
                          torque
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="w-full mt-6 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 font-satoshi uppercase tracking-wide"
                  >
                    Continue to Color
                  </button>
                </motion.div>
              )}

              {/* Step 2: Color Selection */}
              {currentStep === 2 && colors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-midlife-text mb-6 font-termina uppercase">
                    Choose Your Color
                  </h2>
                  <div className="space-y-4">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => dispatch(setColor(color.id))}
                        className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                          selectedColorId === color.id
                            ? "border-[#0EA5E9] bg-[#0EA5E9]/10 shadow-lg"
                            : "border-midlife-dark-gray hover:border-midlife-light-gray bg-midlife-dark-gray/30"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-16 h-16 rounded-full border-4 border-midlife-dark-gray"
                            style={{ backgroundColor: color.hexCode }}
                          />
                          <div className="flex-1">
                            <div className="text-lg text-midlife-text font-bold font-termina">
                              {color.name}
                            </div>
                            <div className="text-sm text-midlife-light-gray font-satoshi">
                              Included
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 bg-midlife-dark-gray hover:bg-midlife-dark-gray/70 text-midlife-text py-4 px-6 rounded-xl font-bold transition-all duration-300 font-satoshi uppercase tracking-wide"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="flex-1 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 font-satoshi uppercase tracking-wide"
                    >
                      Review Order
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Review */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-midlife-text mb-6 font-termina uppercase">
                    Review Your Order
                  </h2>

                  <div className="bg-midlife-dark-gray/30 rounded-2xl p-6 border border-midlife-dark-gray mb-6">
                    <h3 className="text-lg font-bold text-midlife-text mb-4 font-termina">
                      {car.name}
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-midlife-light-gray font-satoshi">
                          Variant:
                        </span>
                        <span className="text-midlife-text font-satoshi">
                          {currentVariant?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-midlife-light-gray font-satoshi">
                          Color:
                        </span>
                        <span className="text-midlife-text font-satoshi">
                          {currentColor?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-midlife-light-gray font-satoshi">
                          Performance:
                        </span>
                        <span className="text-midlife-text font-satoshi">
                          {currentVariant?.horsepower} hp
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-midlife-light-gray font-satoshi">
                          Range:
                        </span>
                        <span className="text-midlife-text font-satoshi">
                          {car.range} miles
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-midlife-light-gray font-satoshi">
                          0-60 mph:
                        </span>
                        <span className="text-midlife-text font-satoshi">
                          {car.zeroToSixty}s
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-midlife-dark-gray/30 rounded-2xl p-6 border border-midlife-dark-gray mb-6">
                    <h3 className="text-lg font-bold text-midlife-text mb-4 font-termina uppercase">
                      Price Summary
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-midlife-light-gray font-satoshi">
                        <span>Base Price</span>
                        <span>${car.basePrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-midlife-light-gray font-satoshi">
                        <span>{currentVariant?.name}</span>
                        <span>
                          +${(currentVariant?.price || 0).toLocaleString()}
                        </span>
                      </div>
                      <div className="border-t border-midlife-dark-gray pt-3 mt-3 flex justify-between">
                        <span className="text-xl font-bold text-midlife-text font-termina">
                          Total
                        </span>
                        <span className="text-2xl font-bold text-midlife-text font-termina">
                          ${totalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a
                      href={`mailto:tojoj130@gmail.com?subject=Order Request - ${car.name}&body=Hi,%0D%0A%0D%0AI would like to order the following configuration:%0D%0A%0D%0ACar: ${car.name}%0D%0AVariant: ${currentVariant?.name}%0D%0AColor: ${currentColor?.name}%0D%0ATotal Price: $${totalPrice.toLocaleString()}%0D%0A%0D%0APlease contact me to proceed with the order.%0D%0A%0D%0AThank you!`}
                      className="block w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 font-satoshi uppercase tracking-wide text-center"
                    >
                      Order Now
                    </a>
                    <Link
                      href={`/contact-us?type=test-drive&car=${car.name}&variant=${currentVariant?.name}&color=${currentColor?.name}`}
                      className="block w-full bg-transparent border-2 border-midlife-text text-midlife-text hover:bg-midlife-text hover:text-midlife-bg py-4 px-6 rounded-xl font-bold transition-all duration-300 font-satoshi uppercase tracking-wide text-center"
                    >
                      Schedule Test Drive
                    </Link>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="w-full bg-midlife-dark-gray hover:bg-midlife-dark-gray/70 text-midlife-text py-4 px-6 rounded-xl font-bold transition-all duration-300 font-satoshi uppercase tracking-wide"
                    >
                      Back to Color
                    </button>
                    <Link
                      href={`/cars/${car.slug}`}
                      className="block w-full text-center text-midlife-light-gray hover:text-midlife-text py-3 font-satoshi transition-colors"
                    >
                      Return to Details
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Fallback for cars without variants or colors */}
              {variants.length === 0 && currentStep === 1 && (
                <div className="text-center py-12">
                  <p className="text-midlife-light-gray font-satoshi mb-6">
                    No variants available for this model.
                  </p>
                  <Link
                    href={`/cars/${car.slug}`}
                    className="inline-block bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 font-satoshi uppercase tracking-wide"
                  >
                    Back to Details
                  </Link>
                </div>
              )}

              {colors.length === 0 && currentStep === 2 && (
                <div className="text-center py-12">
                  <p className="text-midlife-light-gray font-satoshi mb-6">
                    No color options available for this model.
                  </p>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-4 px-8 rounded-xl font-bold transition-all duration-300 font-satoshi uppercase tracking-wide"
                  >
                    Back to Variant
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
