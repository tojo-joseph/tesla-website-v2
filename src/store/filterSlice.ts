import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  search: string;
  minPrice: number;
  maxPrice: number;
  page: number;
}

const initialState: FilterState = {
  search: '',
  minPrice: 0,
  maxPrice: 200000,
  page: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.page = 1; // Reset to first page when searching
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
      state.page = 1; // Reset to first page when filtering
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
      state.page = 1; // Reset to first page when filtering
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetFilters: (state) => {
      state.search = '';
      state.minPrice = 0;
      state.maxPrice = 200000;
      state.page = 1;
    },
  },
});

export const { setSearch, setMinPrice, setMaxPrice, setPage, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
