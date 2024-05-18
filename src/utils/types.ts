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

export interface IFavoriteCheckRequest {
  liked: boolean;
  like_id: number;
}

export interface IFavoritePost {
  item_id: number;
  user_id: number;
}

export interface IProduct {
  id: number;
  image: string;
  name: string;
  description: string;
  texture: string;
  price: number;
  category_id?: number;
  sex: string;
}

export interface IProductBag {
  product: IProduct;
  color: string;
  quantity: number;
  sizes: ISize[];
  selectedSize: string;
}

export interface IProductBagPost {
  item_id: number;
  user_id: number;
  colour: string;
  quantity: number;
  size: string;
}

export interface IColor {
  id?: number;
  name: string;
  image?: File;
}

export interface ISize {
  id?: number;
  size: number;
}

export interface IProductPost {
  id?: number;
  images: File[];
  image?: File;
  name: string;
  description: string;
  texture: string;
  price: number;
  category_id?: number;
  sex: string;
  colors: IColor[];
  sizes: ISize[];
}

export interface IProductGet {
  product?: IProduct;
  images: IImage[];
  colors: IColor[];
  sizes: ISize[];
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
  items_data: IProductGet;
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

export interface IOrderStatus {
  id: number;
  status: string;
}

export interface IOrder {
  id: number;
  status_id: number;
  user?: IUser;
  item: IItemOrder[];
  status: IOrderStatus;
}

export interface IItemOrder extends IProduct {
  image: string;
  color: IColor;
  size: ISize;
}

export interface IOrderCreate {
  products: IItemOrder[];
  paymentMethod: string;
  address: IDeliveryAddress;
  bankCard: IBankCard;
}

export interface IDeliveryAddress {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  postcode: string;
  city: string;
  streetAddress: string;
  paymentMethod: string;
}

export interface IBankCard {
  name: string;
  number: string;
  expirationMonth: number;
  expirationYear: number;
  cvv: number;
  postalCode: number;
}
