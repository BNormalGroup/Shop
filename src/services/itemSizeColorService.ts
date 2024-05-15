import http from "../http.ts";
import axios from "axios";

export const DeleteSizeService = async (sizeId: number | undefined) => {
    try {
        return await http.delete<any>("/size/" + sizeId);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        } else {
            console.error("General error:", error.message);
        }
    }
};
export const DeleteColorService = async (colorId: number | undefined) => {
    try {
        return await http.delete<any>("/color/" + colorId);
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        } else {
            console.error("General error:", error.message);
        }
    }
};
