import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice.ts";
import bagReducer from "../redux/bagSlice.ts"

export const store = configureStore({
  reducer: {
    users: userReducer,
    bag: bagReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
