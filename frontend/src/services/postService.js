// src/services/postService.js
import api from "./api";

const createPost = async (postData, token) => {
  return api.post("/posts", postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getPosts = async () => {
  return api.get("/posts");
};

export default {
  createPost,
  getPosts,
};
