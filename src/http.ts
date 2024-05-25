import axios from "axios";
import { APP_ENV } from "./env";

const http = axios.create({
  baseURL: APP_ENV.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`
  },
});

export default http;
