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
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-midlife-bg w-80 h-full shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-midlife-text font-termina">
                  Filters
                </h2>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-midlife-light-gray hover:text-midlife-text transition-colors"
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
}: {
  localSearch: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxPriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetFilters: () => void;
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
            className="w-full pl-12 pr-4 py-3.5 bg-midlife-dark-gray/50 border border-midlife-dark-gray rounded-xl text-midlife-text placeholder-midlife-light-gray/50 focus:outline-none focus:ring-2 focus:ring-midlife-red focus:border-transparent transition-all duration-200 font-satoshi"
          />
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="block text-sm font-semibold text-midlife-text mb-4 font-satoshi uppercase tracking-wide">
          Price Range
        </label>

        {/* Min Price */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-midlife-light-gray font-satoshi uppercase tracking-wider">
              Minimum
            </span>
            <span className="text-base font-bold text-midlife-text font-termina">
              ${minPrice.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="200000"
            step="1000"
            value={minPrice}
            onChange={onMinPriceChange}
            className="w-full h-2 bg-midlife-dark-gray/50 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Max Price */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-midlife-light-gray font-satoshi uppercase tracking-wider">
              Maximum
            </span>
            <span className="text-base font-bold text-midlife-text font-termina">
              ${maxPrice.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="200000"
            step="1000"
            value={maxPrice}
            onChange={onMaxPriceChange}
            className="w-full h-2 bg-midlife-dark-gray/50 rounded-lg appearance-none cursor-pointer slider"
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
