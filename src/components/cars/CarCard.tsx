"use client";

import Image from "next/image";
import { Car } from "@/store/carSlice";
import Link from "next/link";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const primaryImage = car.images.find(img => img.isPrimary) || car.images[0];

  return (
    <div className="bg-midlife-dark-gray rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      {/* Car Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-midlife-dark-gray/50 to-transparent z-10"></div>
        <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
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
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 font-termina">
          {car.name}
        </h3>
        <p className="text-midlife-light-gray mb-4 font-satoshi">
          {car.tagline}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="text-3xl font-bold text-midlife-text font-termina">
            ${car.basePrice.toLocaleString()}
          </div>
          <div className="text-sm text-midlife-light-gray font-satoshi">
            Starting price
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link
            href={`/cars/${car.slug}`}
            className="flex-1 bg-transparent border border-midlife-light-gray hover:border-white text-midlife-light-gray hover:text-white py-3 px-6 rounded-lg text-center font-medium transition-all duration-300 font-satoshi"
          >
            Learn More
          </Link>
          <button className="flex-1 bg-midlife-red hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 font-termina">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
