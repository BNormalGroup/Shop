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
    deleteProduct: (state, action: PayloadAction<IProductBag>) => {
      /*@todo fix bug last delete*/
      state.products = state.products.filter(
        (product) =>
          product.product.id !== action.payload.product.id &&
          product.selectedSize !== action.payload.selectedSize &&
          product.color !== action.payload.color,
      );
    },
  },
});

export const { addProduct, deleteProduct } = BagSlice.actions;
export default BagSlice.reducer;
