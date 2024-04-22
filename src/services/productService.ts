import http from "../http.ts";
import axios from "axios";
import { IProductGet, IProductPost } from "../utils/types.ts";

export const AddProductService = async (item: IProductPost) => {
  try {
    await http.post<IProductPost>("/items/", item, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};

export const GetItemService = async (productId: string) => {
  try {
    const response = await http.get<IProductGet>("/items/show/" + productId);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};
