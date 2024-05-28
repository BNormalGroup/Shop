import http from "../http.ts";
import axios from "axios";
import { IProduct, IProductGet, IProductPost } from "../utils/types.ts";

export const AddProductService = async (
  item: IProductPost,
): Promise<number> => {
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

export const GetItemListService = async (
  categoryId: number | string,
  page: number,
  sortField: string,
  sortDirection: string,
): Promise<IProductGet[]> => {
  try {
    const response = await http.get("/items/list", {
      params: {
        sort_field: sortField,
        sort_direction: sortDirection,
        per_page: 10,
        id_category: categoryId,
        page,
      },
    });

    // Повертаємо масив продуктів
    return response.data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response); // або throw error.response;
      throw error.response; // Якщо потрібно перехопити на вищому рівні
    } else {
      console.error("General error:", error.message);
      throw error; // Перекидання помилки, якщо не Axios
    }
  }
};

export const SearchItemListService = async (
  keyword: string,
): Promise<IProductGet[]> => {
  try {
    const response = await http.get<IProductGet[]>("/items/search", {
      params: {
        keyword: keyword,
      },
    });

    // Повертаємо масив продуктів
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response); // або throw error.response;
      throw error.response; // Якщо потрібно перехопити на вищому рівні
    } else {
      console.error("General error:", error.message);
      throw error; // Перекидання помилки, якщо не Axios
    }
  }
};
export const GetItemsService = async (): Promise<IProductGet[]> => {
  try {
    const response = await http.get<IProductGet[]>("/items/");
    // Повертаємо масив продуктів
    console.log(response);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response); // або throw error.response;
      throw error.response; // Якщо потрібно перехопити на вищому рівні
    } else {
      console.error("General error:", error.message);
      throw error; // Перекидання помилки, якщо не Axios
    }
  }
};
