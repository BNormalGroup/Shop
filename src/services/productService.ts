import http from "../http.ts";
import axios from "axios";
import { IProductGet, IProductPost } from "../utils/types.ts";

export const AddProductService = async (item: IProductPost): Promise<number> => {
  try {
    const response = await http.post<IProductPost>("/items/", item, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // Повертаємо статус HTTP-відповіді
    return response.status;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Якщо у відповіді є статус, повертаємо його
      if (error.response) {
        return error.response.status;
      }
    }
    console.error("General error:", error.message);
    // У випадку помилки, де немає статусу, можна повернути загальний код помилки, наприклад 500
    return 500;
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
