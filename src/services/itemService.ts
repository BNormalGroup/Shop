import http from "../http.ts";
import axios from "axios";
import { IItemPost } from "../utils/types.ts";

export const AddItemService = async (item: IItemPost) => {
  try {
    await http.post<IItemPost>("/items/", item, {
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
