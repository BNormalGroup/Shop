import { number, string } from "yup";
import { IUserLogin } from "../components/Authorization/types/types.ts";

export interface ICategoryItem {
  id?: number;
  name: string;
  slug: string;
  description: string;
  parent_id?: number;
}

export interface ICategoryPostItem {
  name: string;
  slug: string;
  description: string;
  parent_id?: string;
}
export interface ICategoryParentItem {
  id?: number;
  name: string;
  slug: string;
  description: string;
  children?: ICategoryParentItem[];
}

export interface IBrandItem {
  id?: number;
  name: string;
  description: string;
}
export interface IItem {
  id?: number;
  name: string;
  description: string;
  price: number;
  brand_id?: number;
  category_id?: number;
  sex: string;
}

export interface IColor {
  id?: number;
  name: string;
  image: File;
}
export interface ISize {
  size: number;
}

export interface IItemPost extends IItem {
  images: File[];
  image?: File;
  colors: IColor[];
  sizes: ISize[];
}

export interface IItemGet {
  product: IItem;
  images: IImage[];
}

export interface ResponseTypeLogin {
  access_token: string;
  user: IUserLogin;
  expires_in: number;
  token_type: string;
  isBanned: boolean;
}

export interface IImage {
  id: number;
  url: string;
  item_id: number;
}

export interface IItemShow {
  status: string;
  items_data: IItemGet;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  isAdmin: boolean;
  isBanned: boolean;
}

export interface IUserBanned extends IUser {
  bans: IBan[];
}
export interface IBan {
  id: number;
  reason: string;
  user_id: number;
}

export type SexCategoryItems = {
  image: string;
  name: string;
};
