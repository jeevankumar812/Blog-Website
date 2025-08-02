import React from "react";

const PostItem = ({ post }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
};

export default PostItem;
