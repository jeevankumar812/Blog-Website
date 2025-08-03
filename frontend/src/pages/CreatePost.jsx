import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import postService from "../services/postService";

const quotes = [
  "Let your words inspire the world.",
  "Creativity is contagious. Pass it on.",
  "Your story deserves to be heard.",
  "Speak your truth, change a life.",
  "Share your vision, shape the future."
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (charIndex < quotes[currentQuoteIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + quotes[currentQuoteIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 2500);
      return () => clearTimeout(reset);
    }
  }, [charIndex, currentQuoteIndex]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postService.createPost({ title, content }, user?.token);
      alert("✅ Post created successfully!");
      navigate("/post-list");
    } catch (err) {
      alert("❌ Failed to create post.");
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/bgReg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 z-0" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 5 + 2 + "px",
              height: Math.random() * 5 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: "float 7s ease-in-out infinite",
              animationDelay: Math.random() * 5 + "s",
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left quote block */}
        <div className="flex-1 flex flex-col justify-center pl-8 md:pl-16 lg:pl-24 text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            ✍️ Share Your Voice
          </h1>
          <p className="text-2xl mt-4 border-r-2 border-white pr-2 animate-pulse h-16">
            {displayedText}
          </p>
        </div>

        {/* Right form block */}
        <div className="flex-1 flex justify-center items-center p-8">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl text-white shadow-xl"
          >
            <h2 className="text-3xl font-semibold text-center mb-6">
              Create a Post
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Your headline..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/20 p-4 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-indigo-400 transition"
                />
              </div>

              <div>
                <label className="block text-white/80 mb-1">Content</label>
                <textarea
                  placeholder="Write something impactful..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/20 p-4 rounded-xl text-white placeholder-white/60 resize-none focus:ring-2 focus:ring-indigo-400 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-100 transition hover:scale-105 duration-300"
            >
              🚀 Publish Post
            </button>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(180deg); }
          }
        `}
      </style>
    </div>
  );
};

export default CreatePost;
