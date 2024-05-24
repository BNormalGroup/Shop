import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateBag } from "./types.ts";
import { IProductBag } from "../utils/types.ts";

export const BagSlice = createSlice({
  name: "bag",
  initialState: initialStateBag,
  reducers: {
    addProduct: (state, action: PayloadAction<IProductBag>) => {
      const existingProductIndex = state.products.findIndex(
        (product) =>
          product.product.id === action.payload.product.id &&
          product.selectedSize === action.payload.selectedSize &&
          product.color === action.payload.color,
      );
      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += 1;
      } else {
        state.products.push(action.payload);
      }
    },
    addUserProducts: (state, action: PayloadAction<IProductBag[]>) => {
      state.products = [...state.products, ...action.payload];
    },
    deleteProduct: (state, action: PayloadAction<IProductBag>) => {
      state.products = state.products.filter((item) => {
        const isMatch =
          item.product.id === action.payload.product.id &&
          item.color === action.payload.color &&
          item.selectedSize === action.payload.selectedSize;

        return !isMatch;
      });
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>,
    ) => {
      const { productId, quantity } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.product.id === productId,
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity =
          state.products[productIndex].quantity + quantity;
      }
    },
    clearBag: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProduct,
  clearBag,
  deleteProduct,
  updateQuantity,
  addUserProducts,
} = BagSlice.actions;
export default BagSlice.reducer;
