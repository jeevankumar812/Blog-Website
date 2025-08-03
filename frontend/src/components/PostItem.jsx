import React, { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const PostItem = ({ post }) => {
  const [commentList, setCommentList] = useState(post.comments || []);

  const handleAddComment = (newCommentText) => {
    const newComment = { text: newCommentText };
    setCommentList((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/30 ring-1 ring-white/10 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 mb-6 text-white">
      <h2 className="text-2xl font-bold mb-3 drop-shadow">{post.title}</h2>
      <p className="text-gray-100 mb-4 leading-relaxed">{post.content}</p>

      <div className="border-t border-white/10 pt-4 mt-4">
        <CommentForm onSubmit={handleAddComment} />
        <CommentList comments={commentList} />
      </div>
    </div>
  );
};

export default PostItem;
