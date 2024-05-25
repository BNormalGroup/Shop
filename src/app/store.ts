import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice.ts";
import bagReducer from "../redux/bagSlice.ts";

export const store = configureStore({
  reducer: {
    users: userReducer,
    bag: bagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

let currentBagState = store.getState().bag;
store.subscribe(() => {
  const nextBagState = store.getState().bag;
  if (nextBagState !== currentBagState) {
    currentBagState = nextBagState;
    localStorage.setItem("productsInBag", JSON.stringify(currentBagState.products));
  }
});
