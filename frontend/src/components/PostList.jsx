// src/components/PostList.jsx
import React, { useState, useEffect } from "react";
import PostItem from "./PostItem";
import postService from "../services/postService";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await postService.getPosts();
        setPosts(response.data);
      } catch (err) {
        console.error("Failed to fetch posts", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return posts.length === 0 ? (
    <p className="text-center text-gray-500">No posts yet. Be the first!</p>
  ) : (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
