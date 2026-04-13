import Navigation from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicles - Tesla",
  description:
    "Explore Tesla's complete lineup of electric vehicles - Model S, Model 3, Model X, Model Y, and Cybertruck.",
};

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-midlife-bg">
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-6xl md:text-7xl font-bold text-midlife-text mb-8 font-termina">
            Tesla Vehicles
          </h1>
          <p className="text-xl text-midlife-light-gray mb-12 font-satoshi max-w-3xl">
            Discover our complete lineup of electric vehicles, each designed to
            accelerate the world's transition to sustainable energy.
          </p>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Model S",
                tagline: "Beyond Ludicrous",
                description: "The highest performing sedan ever built",
                range: "405 mi",
                acceleration: "1.99 s",
                topSpeed: "200 mph",
              },
              {
                name: "Model 3",
                tagline: "Beyond Ordinary",
                description: "The perfect electric sedan for everyday driving",
                range: "363 mi",
                acceleration: "3.1 s",
                topSpeed: "162 mph",
              },
              {
                name: "Model X",
                tagline: "Beyond Expectations",
                description: "The SUV that's designed for maximum efficiency",
                range: "348 mi",
                acceleration: "2.5 s",
                topSpeed: "155 mph",
              },
              {
                name: "Model Y",
                tagline: "Beyond Compare",
                description: "The compact SUV built for any adventure",
                range: "330 mi",
                acceleration: "3.5 s",
                topSpeed: "135 mph",
              },
              {
                name: "Cybertruck",
                tagline: "Better Utility",
                description:
                  "More powerful than any truck, more versatile than any sports car",
                range: "500+ mi",
                acceleration: "2.9 s",
                topSpeed: "130 mph",
              },
            ].map((vehicle) => (
              <div
                key={vehicle.name}
                className="bg-midlife-dark-gray rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-midlife-text mb-2 font-termina">
                  {vehicle.name}
                </h3>
                <p className="text-midlife-red mb-4 font-satoshi">
                  {vehicle.tagline}
                </p>
                <p className="text-midlife-light-gray mb-6 font-satoshi">
                  {vehicle.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-midlife-dark-gray">Range:</span>
                    <span className="text-midlife-text font-termina">
                      {vehicle.range}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-midlife-dark-gray">0-60 mph:</span>
                    <span className="text-midlife-text font-termina">
                      {vehicle.acceleration}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-midlife-dark-gray">Top Speed:</span>
                    <span className="text-midlife-text font-termina">
                      {vehicle.topSpeed}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
