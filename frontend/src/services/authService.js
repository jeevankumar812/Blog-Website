import api from "./api";

const register = async (userData) => {
  const res = await api.post("/auth/register", userData);
  return res.data;
};

const login = async (credentials) => {
  const res = await api.post("/auth/login", credentials);
  return res.data;
};

const authService = {
  register,
  login,
};

export default authService;
