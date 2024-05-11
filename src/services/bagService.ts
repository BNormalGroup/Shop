import http from "../http.ts";
import axios from "axios";
import { IProductBagPost } from "../utils/types.ts";

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
