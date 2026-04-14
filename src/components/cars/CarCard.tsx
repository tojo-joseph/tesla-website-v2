"use client";

import Image from "next/image";
import { Car } from "@/store/carSlice";
import Link from "next/link";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const primaryImage = car.images.find((img) => img.isPrimary) || car.images[0];

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
          <div className="flex items-center gap-3 text-xs text-midlife-light-gray font-satoshi">
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
          </div>

          {/* Car Name */}
          <h3 className="text-2xl font-bold text-midlife-text font-termina group-hover:text-midlife-red transition-colors">
            {car.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
