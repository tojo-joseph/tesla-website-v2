import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define the Car type (you may want to move this to a types file)
export interface Car {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  basePrice: number;
  description: string;
  topSpeed: number;
  zeroToSixty: number;
  range: number;
  createdAt: Date | string;
  variants: Variant[];
  colors: Color[];
  images: CarImage[];
  buildConfigs: BuildConfig[];
}

export interface Color {
  id: string;
  carId: string;
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface BuildConfig {
  id: string;
  carId: string;
  variantId: string;
  colorId: string;
  totalPrice: number;
  createdAt: Date | string;
  variant?: Variant;
  color?: Color;
}

export interface Variant {
  id: string;
  carId: string;
  name: string;
  price: number;
  horsepower: number;
  torque: number;
}

export interface CarImage {
  id: string;
  carId: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

interface CarState {
  cars: Car[];
  total: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: CarState = {
  cars: [],
  total: 0,
  totalPages: 0,
  loading: false,
  error: null,
};

// Async thunk for fetching cars
export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (params: {
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    limit?: number;
  }) => {
    const searchParams = new URLSearchParams();

    if (params.search) searchParams.set("search", params.search);
    if (params.minPrice !== undefined)
      searchParams.set("minPrice", params.minPrice.toString());
    if (params.maxPrice !== undefined)
      searchParams.set("maxPrice", params.maxPrice.toString());
    if (params.page) searchParams.set("page", params.page.toString());
    if (params.limit) searchParams.set("limit", params.limit.toString());

    const response = await fetch(`/api/cars?${searchParams.toString()}`);

    if (!response.ok) {
      throw new Error("Failed to fetch cars");
    }

    const data = await response.json();
    return data;
  },
);

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCars.fulfilled,
        (
          state,
          action: PayloadAction<{
            data: Car[];
            total: number;
            page: number;
            totalPages: number;
          }>,
        ) => {
          state.loading = false;
          state.cars = action.payload.data;
          state.total = action.payload.total;
          state.totalPages = action.payload.totalPages;
          state.error = null;
        },
      )
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch cars";
      });
  },
});

export const { clearError } = carSlice.actions;
export default carSlice.reducer;
