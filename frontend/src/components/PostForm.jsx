import React, { useState, useEffect } from "react";

const PostForm = ({ initialData = { title: "", content: "" }, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Post Title"
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Write your content..."
        className="w-full border p-2 rounded h-40"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default PostForm;
