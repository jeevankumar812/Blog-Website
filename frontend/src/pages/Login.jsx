import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { AuthContext } from "../context/AuthContext";

const quotes = [
  "Welcome back, creator.",
  "Your next post awaits.",
  "Login to unlock your ideas.",
  "Inspiration never sleeps.",
  "Let your story continue."
];

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < quotes[currentQuoteIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + quotes[currentQuoteIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 2500);
    }
  }, [charIndex, currentQuoteIndex]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login(formData);
      login(user); // context login
      navigate("/profile");
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Login failed. Please check your credentials.";
      alert(errorMessage);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/bgReg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animation: 'float 6s ease-in-out infinite',
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left: Quotes */}
        <div className="flex-1 flex flex-col justify-center items-start pl-8 md:pl-16 lg:pl-24 py-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Welcome Back
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent block">
                CreativeSpace
              </span>
            </h1>
            <div className="h-20 mt-4 text-white/90 text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              <span className="inline-block border-r-2 border-white/60 pr-1 animate-pulse">
                {displayedText}
              </span>
            </div>
            <div className="mt-12 flex space-x-4">
              <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 flex justify-center items-center p-8">
          <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-white mb-2">Login</h2>
                <p className="text-white/70 text-sm">
                  Access your dashboard and continue your journey
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/50 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 backdrop-blur-sm"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/50 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 backdrop-blur-sm"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-xl shadow-md 
                  hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition duration-300"
                >
                  Login
                </button>

                <div className="text-center mt-6">
                  <p className="text-white/60 text-sm">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => navigate("/register")}
                      className="text-purple-300 hover:text-purple-200 font-medium underline transition duration-200"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(120deg); }
            66% { transform: translateY(5px) rotate(240deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Login;
