import axios from "axios";
import { APP_ENV } from "./env";

const http = axios.create({
  baseURL: APP_ENV.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] =
      `Bearer ${localStorage.getItem("authToken")}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default http;
