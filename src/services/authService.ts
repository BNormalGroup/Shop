import http from "../http.ts";
import {
  IUserLogin,
  IUserRegister,
} from "../components/Authorization/types/types.ts";
import axios from "axios";

interface ResponseTypeLogin {
  access_token: string;
  user: IUserLogin;
  expires_in: number;
  token_type: string;
  isBanned: boolean;
}

export const RegisterService = async (user: IUserRegister) => {
  try {
    await http.post<IUserRegister>("/auth/register", user);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};

export const SingInService = async (user: IUserLogin) => {
  try {
    const response = await http.post("/auth/login", user);
    const responseData: ResponseTypeLogin = response.data;
    return responseData;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};