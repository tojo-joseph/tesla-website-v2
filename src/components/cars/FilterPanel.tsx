"use client";

import { useState, useEffect, useCallback } from "react";
import { useAppSelector, useAppDispatch } from "@/store";
import {
  setSearch,
  setMinPrice,
  setMaxPrice,
  resetFilters,
} from "@/store/filterSlice";

export default function FilterPanel() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  // Redux state
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  // Initialize local search state
  useEffect(() => {
    setLocalSearch(filters.search);
  }, [filters.search]);

  // Debounced search
  const debouncedSearch = useCallback(
    (value: string) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }

      const timeout = setTimeout(() => {
        dispatch(setSearch(value));
      }, 300);

      setSearchTimeout(timeout);
    },
    [dispatch, searchTimeout],
  );

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    debouncedSearch(value);
  };

  // Handle price changes
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    // Ensure min price doesn't exceed max price
    if (filters.maxPrice > 0 && value > filters.maxPrice) {
      dispatch(setMinPrice(filters.maxPrice));
    } else {
      dispatch(setMinPrice(value));
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    // Ensure max price doesn't go below min price
    if (value < filters.minPrice) {
      dispatch(setMaxPrice(filters.minPrice));
    } else {
      dispatch(setMaxPrice(value));
    }
  };

  // Handle reset filters
  const handleResetFilters = () => {
    dispatch(resetFilters());
    setLocalSearch("");
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
    };
  }, [searchTimeout]);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Filter Panel */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Blurred Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Full Page Panel */}
          <div className="relative w-full h-full bg-midlife-bg overflow-y-auto">
            <div className="p-6 sm:p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-midlife-text font-termina uppercase">
                  Filters
                </h2>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-midlife-light-gray hover:text-midlife-text transition-colors p-2"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Filter Content */}
              <FilterContent
                localSearch={localSearch}
                onSearchChange={handleSearchChange}
                minPrice={filters.minPrice}
                maxPrice={filters.maxPrice}
                onMinPriceChange={handleMinPriceChange}
                onMaxPriceChange={handleMaxPriceChange}
                onResetFilters={handleResetFilters}
                onGoClick={() => setIsMobileOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-72 shrink-0">
        <div className="sticky top-24">
          <h2 className="text-2xl font-bold text-midlife-text mb-8 font-termina uppercase tracking-tight">
            Filters
          </h2>

          <FilterContent
            localSearch={localSearch}
            onSearchChange={handleSearchChange}
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            onMinPriceChange={handleMinPriceChange}
            onMaxPriceChange={handleMaxPriceChange}
            onResetFilters={handleResetFilters}
            onGoClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}

// Extracted filter content component for reusability
function FilterContent({
  localSearch,
  onSearchChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onResetFilters,
  onGoClick,
}: {
  localSearch: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetFilters: () => void;
  onGoClick: () => void;
}) {
  return (
    <div className="space-y-8">
      {/* Search Filter */}
      <div>
        <label className="block text-sm font-semibold text-midlife-text mb-4 font-satoshi uppercase tracking-wide">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-midlife-light-gray"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={localSearch}
            onChange={onSearchChange}
            placeholder="Search vehicles..."
            className="w-full pl-12 pr-14 py-3.5 bg-midlife-dark-gray/50 border border-midlife-dark-gray rounded-xl text-midlife-text placeholder-midlife-light-gray/50 focus:outline-none focus:ring-2 focus:ring-midlife-red focus:border-transparent transition-all duration-200 font-satoshi"
          />
          <button
            onClick={onGoClick}
            className="absolute inset-y-0 right-0 pr-2 flex items-center"
          >
            <span className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-3 py-1.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer font-satoshi">
              Go
            </span>
          </button>
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block text-sm font-semibold text-midlife-text mb-4 font-satoshi uppercase tracking-wide">
          Price Range
        </label>

        {/* Price Range Display */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-center">
            <span className="text-xs text-midlife-light-gray font-satoshi uppercase tracking-wider block mb-1">
              Min
            </span>
            <span className="text-base font-bold text-midlife-text font-termina">
              ${minPrice.toLocaleString()}
            </span>
          </div>
          <span className="text-midlife-light-gray">—</span>
          <div className="text-center">
            <span className="text-xs text-midlife-light-gray font-satoshi uppercase tracking-wider block mb-1">
              Max
            </span>
            <span className="text-base font-bold text-midlife-text font-termina">
              ${maxPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Dual Range Slider */}
        <div className="relative h-2 mb-6">
          {/* Track Background */}
          <div className="absolute w-full h-2 bg-midlife-dark-gray/50 rounded-lg" />

          {/* Active Range */}
          <div
            className="absolute h-2 bg-[#0EA5E9] rounded-lg"
            style={{
              left: `${(minPrice / 200000) * 100}%`,
              right: `${100 - (maxPrice / 200000) * 100}%`,
            }}
          />

          {/* Min Price Slider */}
          <input
            type="range"
            min="0"
            max="200000"
            step="1000"
            value={minPrice}
            onChange={onMinPriceChange}
            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0EA5E9] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0EA5E9] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-lg"
          />

          {/* Max Price Slider */}
          <input
            type="range"
            min="0"
            max="200000"
            step="1000"
            value={maxPrice}
            onChange={onMaxPriceChange}
            className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#0EA5E9] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#0EA5E9] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:shadow-lg"
          />
        </div>
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={onResetFilters}
        className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white py-3.5 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 font-satoshi uppercase tracking-wide text-sm cursor-pointer"
      >
        Reset Filters
      </button>
    </div>
  );
}
