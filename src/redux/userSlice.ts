import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./types.ts";
import {
  IUserAuth,
  IUserLogin,
} from "../components/Authorization/types/types.ts";

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
    auth: (state, action: PayloadAction<IUserAuth>) => {
      state.user = {
        id: 0,
        isAdmin: action.payload.isAdmin,
        isBanned: false,
        email: action.payload.email,
        password: "",
      };
      state.isAuth = true;
    },
  },
});

export const { login, logout, auth } = userSlice.actions;
export default userSlice.reducer;
