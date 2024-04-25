import http from "../http.ts";
import axios, {AxiosResponse} from "axios";
import {ICategoryItem, ICategoryPostItem} from "../utils/types.ts";

export const AddCategoryService = async (category: ICategoryPostItem): Promise<AxiosResponse<any>> => {
    return http.post<ICategoryPostItem>("/categories/", category, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
        .then((r) => {
            return r;
        });
};

export const GetCategoriesService = async (): Promise<ICategoryItem[]> => {
    try {
        const response = await http.get<ICategoryItem[]>("/categories/");

        // Повернення даних відповіді
        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            // Кидання помилки з даними відповіді
            throw error.response;
        } else {
            // Інший тип помилки, виводимо в консоль і кидаємо нову помилку
            console.error("General error:", error.message);
            throw new Error("An unexpected error occurred");
        }
    }
};
