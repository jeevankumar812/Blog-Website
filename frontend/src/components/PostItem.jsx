// src/components/PostItem.jsx
import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const PostItem = ({ post }) => {
  const [comments, setComments] = useState(post.comments || []);

  const handleAddComment = (newText) => {
    const newComment = { text: newText };
    setComments([...comments, newComment]); // local only
    // You can add backend support here too.
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-700 mb-2">{post.content}</p>

      <CommentForm onSubmit={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
};

export default PostItem;
