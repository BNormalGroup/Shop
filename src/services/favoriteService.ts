import http from "../http.ts";
import axios from "axios";
import { IFavoritePost } from "../utils/types.ts";

export const LikeService = async (productId: number, userId: number) => {
  try {
    const data: IFavoritePost = {
      productId: productId,
      userId: userId
    }
    await http.post<IFavoritePost>("/likes/", data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};
