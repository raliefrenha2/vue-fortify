import axiosLib from "axios";
import Cookies from "js-cookie";

const axios = axiosLib.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
});

axios.defaults.withCredentials = true; // Mengizinkan pengiriman cookies

axios.interceptors.request.use(async (config) => {
  if (config.method && config.method.toLowerCase() !== "get") {
    await axios.get("/api/csrf-cookie");
    config.headers["X-XSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");
  }

  return config;
});

export default axios;
