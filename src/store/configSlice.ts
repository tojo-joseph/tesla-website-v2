import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ConfigState {
  selectedColorId: string | null;
  selectedVariantId: string | null;
  totalPrice: number;
}

const initialState: ConfigState = {
  selectedColorId: null,
  selectedVariantId: null,
  totalPrice: 0,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string | null>) => {
      state.selectedColorId = action.payload;
    },
    setVariant: (state, action: PayloadAction<string | null>) => {
      state.selectedVariantId = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    resetConfig: (state) => {
      state.selectedColorId = null;
      state.selectedVariantId = null;
      state.totalPrice = 0;
    },
  },
});

export const { setColor, setVariant, setTotalPrice, resetConfig } = configSlice.actions;
export default configSlice.reducer;
