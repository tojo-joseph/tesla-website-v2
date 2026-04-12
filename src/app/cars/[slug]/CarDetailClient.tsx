"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/store";
import { setColor, setVariant } from "@/store/configSlice";
import { Car, Color, Variant } from "@/store/carSlice";
import Link from "next/link";

interface CarDetailClientProps {
  car: Car;
}

export default function CarDetailClient({ car }: CarDetailClientProps) {
  const dispatch = useAppDispatch();
  const { selectedColorId, selectedVariantId } = useAppSelector(
    (state) => state.config,
  );

  // Extract colors from car images (assuming each color has an image)
  const colors = car.images.map((img: any, index: number) => ({
    id: img.id,
    name: img.alt || `Color ${index + 1}`,
    hexCode: img.alt?.includes("Red")
      ? "#E31937"
      : img.alt?.includes("Blue")
        ? "#0066CC"
        : img.alt?.includes("White")
          ? "#FFFFFF"
          : img.alt?.includes("Black")
            ? "#000000"
            : "#808080",
    imageUrl: img.url,
  }));

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN - Sticky */}
        <div className="lg:sticky lg:top-24 h-fit">
          {/* Car Image */}
          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-6">
            <Image
              src={currentColor?.imageUrl || car.images[0]?.url}
              alt={`${car.name} in ${currentColor?.name || "default color"}`}
              fill
              className="object-cover transition-opacity duration-300"
              key={currentColor?.id} // Key to trigger re-render and fade
            />
          </div>

          {/* Color Selector */}
          <ColorSelector
            colors={colors}
            selectedColorId={selectedColorId || undefined}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          {/* Car Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-midlife-text mb-2 font-termina">
              {car.name}
            </h1>
            <p className="text-xl text-midlife-red mb-4 font-satoshi">
              {car.tagline}
            </p>
            <div className="text-3xl font-bold text-midlife-text mb-4 font-termina">
              ${totalPrice.toLocaleString()}
            </div>
            <p className="text-midlife-light-gray leading-relaxed font-satoshi">
              {car.description}
            </p>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-midlife-dark-gray rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-midlife-text font-termina">
                {car.range}
              </div>
              <div className="text-sm text-midlife-light-gray font-satoshi">
                Range (mi)
              </div>
            </div>
            <div className="bg-midlife-dark-gray rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-midlife-text font-termina">
                {car.zeroToSixty}s
              </div>
              <div className="text-sm text-midlife-light-gray font-satoshi">
                0-60 mph
              </div>
            </div>
            <div className="bg-midlife-dark-gray rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-midlife-text font-termina">
                {car.topSpeed}
              </div>
              <div className="text-sm text-midlife-light-gray font-satoshi">
                Top Speed
              </div>
            </div>
            <div className="bg-midlife-dark-gray rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-midlife-text font-termina">
                {currentVariant?.horsepower || car.variants[0]?.horsepower}
              </div>
              <div className="text-sm text-midlife-light-gray font-satoshi">
                Horsepower
              </div>
            </div>
          </div>

          {/* Variant Selector */}
          <VariantSelector
            variants={car.variants}
            selectedVariantId={selectedVariantId || undefined}
          />

          {/* Total Price Display */}
          <div className="bg-midlife-dark-gray rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-midlife-light-gray font-satoshi">
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
          </div>

          {/* Build and Price Button */}
          <Link
            href={`/configure/${car.slug}`}
            className="block w-full bg-midlife-red hover:bg-red-600 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center font-termina"
          >
            Build and Price
          </Link>
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
      <h3 className="text-lg font-medium text-midlife-text mb-4 font-termina">
        Color
      </h3>
      <div className="flex gap-3 flex-wrap">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => dispatch(setColor(color.id))}
            className={`w-12 h-12 rounded-full border-2 transition-all duration-200 ${
              selectedColorId === color.id
                ? "border-white scale-110"
                : "border-midlife-dark-gray hover:border-midlife-light-gray"
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
      <h3 className="text-lg font-medium text-midlife-text mb-4 font-termina">
        Trim
      </h3>
      <div className="space-y-3">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => dispatch(setVariant(variant.id))}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedVariantId === variant.id
                ? "border-midlife-red bg-midlife-red/10"
                : "border-midlife-dark-gray hover:border-midlife-light-gray bg-midlife-dark-gray/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-midlife-text font-medium font-termina">
                  {variant.name}
                </div>
                <div className="text-sm text-midlife-light-gray font-satoshi">
                  {variant.horsepower} hp / {variant.torque} lb-ft
                </div>
              </div>
              <div className="text-midlife-text font-bold font-termina">
                +${variant.price.toLocaleString()}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
