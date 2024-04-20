import { IUserLogin } from "../components/Authorization/types/types.ts";

export type IssueInitialState = {
  user: IUserLogin;
  isAuth: boolean;
};
export const initialState: IssueInitialState = {
  user: {
    id: 0,
    isAdmin: false,
    isBanned: false,
    email: "",
    password: "",
  },
  isAuth: false,
};
