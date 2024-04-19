import http from "../http.ts";
import {
  IUserLogin,
  IUserRegister,
} from "../components/Authorization/types/types.ts";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice.ts";

export const register = async (user: IUserRegister) => {
  try {
    await http.post<IUserRegister>("/auth/register", user);
  } catch (error: any) {
    throw error.response;
  }
};

export const singIn = async (user: IUserLogin) => {
  // const dispatch = useDispatch();

  try {
    console.log("ds");
    await http.post<IUserLogin>("/auth/login", user);
    // dispatch(login(user));
  } catch (error: any) {
    throw error.response;
  }
};
