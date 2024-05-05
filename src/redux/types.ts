import { IUserLogin } from "../components/Authorization/types/types.ts";
import { IProductBag } from "../utils/types.ts";

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

export type IssueInitialStateBag = {
  products: IProductBag[];
};

export const initialStateBag: IssueInitialStateBag = {
 products: []
};
