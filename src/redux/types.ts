import { IUser } from "../utils/types.ts";

export type IssueInitialState = {
  user: IUser;
  isAuth: boolean;
};
export const initialState: IssueInitialState = {
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    isAdmin: false,
    isBanned: false,
  },
  isAuth: false,
};
