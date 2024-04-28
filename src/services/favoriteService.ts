import http from "../http.ts";
import axios from "axios";
import { IFavoritePost, IProductGet } from "../utils/types.ts";

export const LikeService = async (productId: number, userId: number) => {
  try {
    const data: IFavoritePost = {
      productId: productId,
      userId: userId,
    };
    await http.post<IFavoritePost>("/likes/", data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};

export const GetLikesService = async (userId: number) => {
  try {
    const response = await http.get<IProductGet[]>("/likes/show/" + userId);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};
