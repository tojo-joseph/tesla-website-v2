"use client";

import Image from "next/image";
import { Car } from "@/store/carSlice";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const primaryImage = car.images.find((img) => img.isPrimary) || car.images[0];

  const [modelType, setModelType] = useState<string>("");

  useEffect(() => {
    modelIdentifier(car);
  }, [car]);

  const modelIdentifier = (car: Car) => {
    if (car.name === "Model S") {
      setModelType("Luxury Sedan");
    } else if (car.name === "Model 3") {
      setModelType("Sport Sedan");
    } else if (car.name === "Model X") {
      setModelType("Luxury SUV");
    } else if (car.name === "Model Y") {
      setModelType("Midsize SUV");
    } else if (car.name === "Model 3") {
      setModelType("Sport Sedan");
    } else if (car.name === "Cybertruck") {
      setModelType("Utility Truck");
    } else if (car.name === "Tesla Model A") {
      setModelType("Sports Coupe");
    } else if (car.name === "Tesla Model B") {
      setModelType("Hatchback");
    } else if (car.name === "Tesla Model C") {
      setModelType("Sport Sedan");
    } else if (car.name === "Tesla Model D") {
      setModelType("SUV");
    } else if (car.name === "Tesla Model E") {
      setModelType("SUV");
    } else if (car.name === "Tesla Model F") {
      setModelType("Sedan");
    } else if (car.name === "Tesla Model G") {
      setModelType("SUV");
    } else if (car.name === "Tesla Model H") {
      setModelType("Sport Sedan");
    } else {
      setModelType("SUV");
    }
    return modelType;
  };

  return (
    <Link href={`/cars/${car.slug}`}>
      <div className="group cursor-pointer">
        {/* Car Image */}
        <div className="relative h-72 overflow-hidden rounded-3xl mb-4">
          <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
            <Image
              src={primaryImage?.url || "/images/placeholder-car.jpg"}
              alt={primaryImage?.alt || car.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Car Info */}
        <div className="space-y-3">
          {/* Meta Info */}
          {/* <div className="flex items-center gap-3 text-xs text-midlife-light-gray font-satoshi">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{new Date().getFullYear()}</span>
            </div>
            <span>/</span>
            <span>Electric Vehicle</span>
          </div> */}

          {/* Car Name with Badge */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-midlife-text font-termina group-hover:text-midlife-red transition-colors">
              {car.name}
            </h3>
            {modelType && (
              <span className="px-2 py-1 bg-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-semibold rounded-full font-satoshi">
                {modelType}
              </span>
            )}
          </div>

          {/* Car Description */}
          <p className="text-sm text-midlife-light-gray font-satoshi line-clamp-2">
            {car.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
