import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./types.ts";
import { IUser } from "../utils/types.ts";

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state)=>{
      state.user = initialState.user;
      state.isAuth = false;
    }
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
