import React, { useState } from "react";

const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        className="w-full border rounded p-2"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button
        type="submit"
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
