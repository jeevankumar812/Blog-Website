import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return <p>No posts yet. Be the first to write!</p>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
