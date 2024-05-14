import http from "../http.ts";
import axios from "axios";
import { IOrder, IOrderStatus } from "../utils/types.ts";

export const GetOrdersService = async () => {
  try {
    const response = await http.get<IOrder[]>("/orders");
    console.log(response);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};
export const GetUserOrdersService = async (userId: number) => {
  try {
    const response = await http.get<IOrder[]>("/orders/user/" + userId);
    console.log(response);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};

export const GetOrderStatusesService = async () => {
  try {
    const response = await http.get<IOrderStatus[]>("/orders/statuses/");
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};

export const UpdateStatusOrderService = async (
  orderId: number,
  statusId: number,
) => {
  try {
    const data = {
      status_id: statusId,
    };
    return await http.post<any>(`/orders/updateStatus/${orderId}`, data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw error.response;
    } else {
      console.error("General error:", error.message);
    }
  }
};
