import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ Ensure this matches your backend
  withCredentials: false,
});

export default api;
