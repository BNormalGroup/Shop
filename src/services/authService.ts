import http from "../http.ts";
import {
  IUserLogin,
  IUserRegister,
} from "../components/Authorization/types/types.ts";
import axios, { AxiosError, AxiosResponse } from "axios";
import {
  ICategoryPostItem,
  IChangePassword,
  ResponseTypeChangePassword,
  ResponseTypeLogin,
  ResponseTypeUpdateUser,
} from "../utils/types.ts";

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

export const UpdateUserService = async (
  user: IUserLogin,
  token: string,
): Promise<AxiosResponse<ResponseTypeUpdateUser>> => {
  return await http
    .post<ResponseTypeUpdateUser>("/auth/update", user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => {
      return r;
    });
};

export const ChangePasswordService = async (
  password: IChangePassword,
  token: string,
): Promise<AxiosResponse<ResponseTypeChangePassword>> => {
  try {
    const response = await http.post<ResponseTypeChangePassword>(
      "/auth/updatePassword",
      password,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log("response: ", response);
    return response;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Error changing password: ", error);
      if (error.response) return error.response;
      throw new Error("Unexpected error");
    } else {
      console.error("Unexpected error: ", error);
      throw new Error("Unexpected error");
    }
  }
};
