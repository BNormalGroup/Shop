import http from "../http.ts";
import axios from "axios";
import { IProductBag, IProductBagPost } from "../utils/types.ts";

export const AddToBag = async (product: IProductBagPost) => {
  try {
    await http.post<IProductBagPost>("/basket/", product);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};

export const ShowUserBag = async (userId: number) => {
  try {
    const { data }  = await http.get<IProductBag[]>("/basket/show/"+ userId);
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};
