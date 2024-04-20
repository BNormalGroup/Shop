import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./types.ts";
import { IUserLogin } from "../components/Authorization/types/types.ts";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<IUserLogin>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = initialState.user;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
