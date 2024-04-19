import http from "../http.ts";
import { IUser } from "../utils/types.ts";

const register = (user: IUser) => {
  return http.post("/register", { user });
};
