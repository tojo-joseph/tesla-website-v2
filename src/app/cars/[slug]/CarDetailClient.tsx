"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/store";
import { setColor, setVariant } from "@/store/configSlice";
import { Car, Color, Variant } from "@/store/carSlice";
import Link from "next/link";
import { motion } from "motion/react";

interface CarDetailClientProps {
  car: Car;
}

export default function CarDetailClient({ car }: CarDetailClientProps) {
  const dispatch = useAppDispatch();
  const { selectedColorId, selectedVariantId } = useAppSelector(
    (state) => state.config,
  );

  // Use colors from the Color table
  const colors = car.colors || [];

  // Set default color and variant on mount
  useEffect(() => {
    if (colors.length > 0 && !selectedColorId) {
      dispatch(setColor(colors[0].id));
    }
    if (car.variants.length > 0 && !selectedVariantId) {
      dispatch(setVariant(car.variants[0].id));
    }
  }, [car, colors, selectedColorId, selectedVariantId, dispatch]);

  const currentColor =
    colors.find((c) => c.id === selectedColorId) || colors[0];
  const currentVariant =
    car.variants.find((v) => v.id === selectedVariantId) || car.variants[0];
  const totalPrice = car.basePrice + (currentVariant?.price || 0);

  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 py-8">
      {/* Header Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-midlife-text mb-3 font-termina uppercase tracking-tight">
          {car.name}
        </h1>
        <p className="text-lg md:text-xl text-midlife-red font-satoshi">
          {car.tagline}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN - Sticky */}
        <div className="lg:sticky lg:top-24 h-fit space-y-6">
          {/* Car Image */}
          <motion.div
            className="relative w-full h-[300px] lg:h-[400px] rounded-3xl overflow-hidden bg-midlife-dark-gray"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src={currentColor?.imageUrl || car.images[0]?.url}
              alt={`${car.name} in ${currentColor?.name || "default color"}`}
              fill
              className="object-cover transition-opacity duration-500"
              key={currentColor?.id}
            />
          </motion.div>

          {/* Color Selector - Only show if multiple colors available */}
          {colors.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ColorSelector
                colors={colors}
                selectedColorId={selectedColorId || undefined}
              />
            </motion.div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Price */}
          <motion.div
            className="flex items-baseline gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-midlife-text font-termina">
              ${totalPrice.toLocaleString()}
            </div>
            <div className="text-midlife-light-gray font-satoshi text-sm">
              Starting price
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-midlife-light-gray leading-relaxed font-satoshi"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {car.description}
          </motion.p>

          {/* Performance Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-midlife-dark-gray/50 rounded-2xl p-4 border border-midlife-dark-gray">
              <div className="text-3xl font-bold text-midlife-text font-termina mb-1">
                {car.range}
              </div>
              <div className="text-sm text-midlife-light-gray font-satoshi uppercase tracking-wider">
                Range (mi)
              </div>
            </div>
            <div className="bg-midlife-dark-gray/50 rounded-2xl p-4 border border-midlife-dark-gray">
              <div className="text-3xl font-bold text-midlife-text font-termina mb-1">
                {car.zeroToSixty}s
              </div>
              <div className="text-sm text-midlife-light-gray font-satoshi uppercase tracking-wider">
                0-60 mph
              </div>
            </div>
            <div className="bg-midlife-dark-gray/50 rounded-2xl p-4 border border-midlife-dark-gray">
              <div className="text-3xl font-bold text-midlife-text font-termina mb-1">
                {car.topSpeed}
              </div>
              <div className="text-sm text-midlife-light-gray font-satoshi uppercase tracking-wider">
                Top Speed (mph)
              </div>
            </div>
            <div className="bg-midlife-dark-gray/50 rounded-2xl p-4 border border-midlife-dark-gray">
              <div className="text-3xl font-bold text-midlife-text font-termina mb-1">
                {currentVariant?.horsepower || car.variants[0]?.horsepower}
              </div>
              <div className="text-sm text-midlife-light-gray font-satoshi uppercase tracking-wider">
                Horsepower
              </div>
            </div>
          </motion.div>

          {/* Variant Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <VariantSelector
              variants={car.variants}
              selectedVariantId={selectedVariantId || undefined}
            />
          </motion.div>

          {/* Total Price Display */}
          <motion.div
            className="bg-midlife-dark-gray/30 rounded-2xl p-6 border border-midlife-dark-gray"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-midlife-light-gray font-satoshi uppercase tracking-wide">
                Total Price
              </span>
              <span className="text-3xl font-bold text-midlife-text font-termina">
                ${totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="text-sm text-midlife-light-gray font-satoshi">
              Base: ${car.basePrice.toLocaleString()} + Variant: $
              {currentVariant?.price?.toLocaleString() || 0}
            </div>
          </motion.div>

          {/* Build and Price Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href={`/configure/${car.slug}`}
              className="block w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 text-center font-satoshi uppercase tracking-wide"
            >
              Build and Price
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Color Selector Component
function ColorSelector({
  colors,
  selectedColorId,
}: {
  colors: Array<{
    id: string;
    name: string;
    hexCode: string;
    imageUrl?: string;
  }>;
  selectedColorId?: string;
}) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3 className="text-lg font-bold text-midlife-text mb-4 font-termina uppercase tracking-tight">
        Color
      </h3>
      <div className="flex gap-3 flex-wrap">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => dispatch(setColor(color.id))}
            className={`w-12 h-12 rounded-full border-3 transition-all duration-300 ${
              selectedColorId === color.id
                ? "border-midlife-red scale-110 shadow-lg shadow-midlife-red/50"
                : "border-midlife-dark-gray hover:border-midlife-light-gray hover:scale-105"
            }`}
            style={{ backgroundColor: color.hexCode }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}

// Variant Selector Component
function VariantSelector({
  variants,
  selectedVariantId,
}: {
  variants: Array<{
    id: string;
    name: string;
    price: number;
    horsepower: number;
    torque: number;
  }>;
  selectedVariantId?: string;
}) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3 className="text-lg font-bold text-midlife-text mb-4 font-termina uppercase tracking-tight">
        Select Trim
      </h3>
      <div className="space-y-3">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => dispatch(setVariant(variant.id))}
            className={`w-full p-5 cursor-pointer rounded-2xl border-2 transition-all duration-300 text-left ${
              selectedVariantId === variant.id
                ? "border-[#0EA5E9] bg-[#0EA5E9]/10 shadow-lg"
                : "border-midlife-dark-gray hover:border-midlife-light-gray bg-midlife-dark-gray/30"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-xl text-midlife-text font-bold font-termina">
                {variant.name}
              </div>
              <div className="text-xl text-midlife-text font-bold font-termina">
                +${variant.price.toLocaleString()}
              </div>
            </div>
            <div className="text-sm text-midlife-light-gray font-satoshi">
              {variant.horsepower} hp / {variant.torque} lb-ft torque
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
