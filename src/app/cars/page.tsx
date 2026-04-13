"use client";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store";
import { fetchCars } from "@/store/carSlice";
import { RootState } from "@/store";
import FilterPanel from "@/components/cars/FilterPanel";
import CarCard from "@/components/cars/CarCard";
import Pagination from "@/components/cars/Pagination";
import Navigation from "@/components/Navigation";

export default function CarsPage() {
  const dispatch = useAppDispatch();
  const { cars, loading, total, totalPages } = useAppSelector(
    (state: RootState) => state.cars,
  );
  const { search, minPrice, maxPrice, page } = useAppSelector(
    (state: RootState) => state.filters,
  );

  // Fetch cars on mount and when filters/page change
  useEffect(() => {
    dispatch(
      fetchCars({
        search,
        minPrice,
        maxPrice,
        page,
        limit: 12, // 12 cars per page
      }),
    );
  }, [dispatch, search, minPrice, maxPrice, page]);

  return (
    <div className="min-h-screen bg-midlife-bg">
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Panel - Left Sidebar */}
            <FilterPanel />

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-midlife-text mb-4 font-termina">
                  Tesla Vehicles
                </h1>
                <p className="text-midlife-light-gray font-satoshi">
                  {total > 0
                    ? `${total} vehicles found`
                    : "Browse our complete lineup of electric vehicles"}
                </p>
              </div>

              {/* Loading State */}
              {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-midlife-dark-gray rounded-2xl overflow-hidden"
                    >
                      {/* Skeleton Image */}
                      <div className="h-64 bg-gray-700 animate-pulse"></div>
                      {/* Skeleton Content */}
                      <div className="p-6 space-y-4">
                        <div className="h-8 bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                        <div className="h-6 bg-gray-700 rounded w-1/2 animate-pulse"></div>
                        <div className="flex gap-4">
                          <div className="h-12 bg-gray-700 rounded flex-1 animate-pulse"></div>
                          <div className="h-12 bg-gray-700 rounded flex-1 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Cars Grid */}
              {!loading && cars.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>
              )}

              {/* No Results State */}
              {!loading && cars.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">
                    {" "}
                    Electric Vehicle Not Found{" "}
                  </div>
                  <h3 className="text-2xl font-bold text-midlife-text mb-4 font-termina">
                    No results found
                  </h3>
                  <p className="text-midlife-light-gray mb-8 font-satoshi">
                    Try adjusting your filters or search terms to find what
                    you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      dispatch({ type: "filters/resetFilters" });
                    }}
                    className="bg-midlife-red hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 font-termina"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {!loading && cars.length > 0 && totalPages > 1 && (
                <Pagination currentPage={page} totalPages={totalPages} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
