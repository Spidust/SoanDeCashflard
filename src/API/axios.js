import axios from "axios";
import store from "../redux/store";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  const token = store.getState().auth.token;
  if (!token) return config;
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});
export default instance;