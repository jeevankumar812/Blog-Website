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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white text-xl">
        Loading posts...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/bgReg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 z-0"></div>

      <div className="relative z-10 px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
           Recent Posts
        </h2>

        {posts.length === 0 ? (
          <p className="text-center text-white/80 text-lg">
            No posts yet. Be the first to create one!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 mb-6 text-white"
            >
              <PostItem post={post} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostList;
