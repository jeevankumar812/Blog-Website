import React, { useState, useContext } from "react";
import postService from "../services/postService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.createPost(formData, user.token);
      alert("Post created!");
      navigate("/");
    } catch (err) {
      alert("Failed to create post");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Write your post..."
          className="w-full border p-2 mb-4 rounded h-40"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
