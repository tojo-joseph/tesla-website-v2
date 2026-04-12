import Navigation from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy - Tesla",
  description: "Power your home with Tesla's solar energy solutions - Solar Roof, Powerwall, and solar panels.",
};

export default function EnergyPage() {
  return (
    <div className="min-h-screen bg-midlife-bg">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-6xl md:text-7xl font-bold text-midlife-text mb-8 font-termina">
            Tesla Energy
          </h1>
          <p className="text-xl text-midlife-light-gray mb-12 font-satoshi max-w-3xl">
            Power your home and business with clean energy solutions from solar panels to battery storage.
          </p>
          
          {/* Energy Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-800 to-midlife-dark-gray rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-midlife-text mb-4 font-termina">Solar Roof</h3>
              <p className="text-midlife-light-gray mb-6 font-satoshi">Power your home with a beautiful solar roof that generates clean energy.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-midlife-light-gray font-satoshi">24/7 power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-midlife-light-gray font-satoshi">Integrated design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-midlife-light-gray font-satoshi">Weather resistant</span>
                </div>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 font-termina">
                Learn More
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-midlife-dark-gray rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-midlife-text mb-4 font-termina">Powerwall</h3>
              <p className="text-midlife-light-gray mb-6 font-satoshi">Store energy for when you need it most with our home battery system.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-midlife-light-gray font-satoshi">13.5 kWh capacity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-midlife-light-gray font-satoshi">Backup power</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="text-midlife-light-gray font-satoshi">Grid integration</span>
                </div>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 font-termina">
                Order Now
              </button>
            </div>
          </div>

          {/* Sustainability Stats */}
          <div className="mt-20 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-3xl p-12 lg:p-20 border border-green-500/20">
            <h3 className="text-4xl font-bold text-midlife-text mb-8 font-termina">Global Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2 font-termina">10M+</div>
                <div className="text-midlife-light-gray font-satoshi">Tons of CO2 Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2 font-termina">5M+</div>
                <div className="text-midlife-light-gray font-satoshi">Solar Installations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2 font-termina">50K+</div>
                <div className="text-midlife-light-gray font-satoshi">Powerwalls Installed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-green-500 mb-2 font-termina">100%</div>
                <div className="text-midlife-light-gray font-satoshi">Renewable Energy</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
