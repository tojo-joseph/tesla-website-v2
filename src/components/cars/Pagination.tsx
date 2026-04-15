"use client";

import { useAppDispatch } from "@/store";
import { setPage } from "@/store/filterSlice";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const dispatch = useAppDispatch();

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const getVisiblePages = () => {
    const pages: number[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisible - 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-3 rounded-lg transition-all duration-300 ${
          currentPage === 1
            ? "text-midlife-dark-gray cursor-not-allowed"
            : "text-midlife-light-gray hover:text-white hover:bg-midlife-dark-gray cursor-pointer"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {getVisiblePages().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 font-termina ${
              currentPage === page
                ? "bg-[#0EA5E9] text-white"
                : "text-midlife-light-gray hover:text-white hover:bg-midlife-dark-gray cursor-pointer"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-3 rounded-lg transition-all duration-300 ${
          currentPage === totalPages
            ? "text-midlife-dark-gray cursor-not-allowed"
            : "text-midlife-light-gray hover:text-white hover:bg-midlife-dark-gray cursor-pointer"
        }`}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
