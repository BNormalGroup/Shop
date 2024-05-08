import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateBag } from "./types.ts";
import { IProductBag } from "../utils/types.ts";

export const BagSlice = createSlice({
  name: "bag",
  initialState: initialStateBag,
  reducers: {
    addProduct: (state, action: PayloadAction<IProductBag>) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.product.id != action.payload,
      );
    },
  },
});

export const { addProduct, deleteProduct } = BagSlice.actions;
export default BagSlice.reducer;
