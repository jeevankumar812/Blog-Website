import api from "./api";

const getAllPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

const createPost = async (postData, token) => {
  const res = await api.post("/posts", postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const postService = {
  getAllPosts,
  createPost,
};

export default postService;
