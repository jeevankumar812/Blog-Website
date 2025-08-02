import api from "./api";

const getCommentsByPostId = async (postId) => {
  const res = await api.get(`/posts/${postId}/comments`);
  return res.data;
};

const addComment = async (postId, comment, token) => {
  const res = await api.post(
    `/posts/${postId}/comments`,
    { text: comment },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

const commentService = {
  getCommentsByPostId,
  addComment,
};

export default commentService;
