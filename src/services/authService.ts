import http from "../http.ts";
import { IUserRegister } from "../components/Authorization/types/types.ts";

export const register = async (user: IUserRegister) => {
  try {
    await http
      .post<IUserRegister>("/auth/register", user);
  } catch (error: any) {
    console.log(error);
    throw error.response;
  }
};
