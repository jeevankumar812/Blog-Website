// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://blog-website-backend-wc4k.onrender.com/api", // ✅ updated
  withCredentials: false,
});

export default api;
