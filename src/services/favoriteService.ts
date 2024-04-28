import http from "../http.ts";
import axios from "axios";
import { IFavoritePost, IProductGet } from "../utils/types.ts";

export const LikeService = async (productId: number, userId: number) => {
  try {
    const data: IFavoritePost = {
      item_id: productId,
      user_id: userId,
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

export const CheckLikedService =  async (userId: number, productId: number) => {
  try {
    const data: IFavoritePost = {
      item_id: productId,
      user_id: userId,
    };
    const response = await http.post<boolean>("/likes/check", data);
    console.log('resp',response.data);
    return response.data;

  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};
