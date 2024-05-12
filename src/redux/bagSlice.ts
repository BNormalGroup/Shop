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
      const { product, color, selectedSize } = action.payload;
      const indexToDelete = state.products.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.color === color &&
          item.selectedSize === selectedSize
      );
      console.log('state.products[0].selectedSize',indexToDelete);
      if(state.products[0].product.id === product.id &&
        state.products[0].color === color &&
        state.products[0].selectedSize === selectedSize)
        console.log('true');
      if (indexToDelete !== -1) {
        state.products.splice(indexToDelete, 1);
      }
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
  },
});

export const { addProduct, deleteProduct, updateQuantity, addUserProducts } =
  BagSlice.actions;
export default BagSlice.reducer;
