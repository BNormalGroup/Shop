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
        id: action.payload.id,
        isAdmin: action.payload.isAdmin,
        isBanned: action.payload.isBanned,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthday: action.payload.birthday,
        email: action.payload.email,
        password: "",
      };
      state.isAuth = true;
    },
  },
});

export const { login, logout, auth } = userSlice.actions;
export default userSlice.reducer;
