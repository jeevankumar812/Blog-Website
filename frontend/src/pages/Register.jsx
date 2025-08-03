import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

const quotes = [
  "Join the community of creators.",
  "Your story starts with a click.",
  "Create your account. Inspire the world.",
  "Dream big. Create bigger.",
  "Where creativity meets opportunity.",
];

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (charIndex < quotes[currentQuoteIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + quotes[currentQuoteIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText("");
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 2500);
      return () => clearTimeout(resetTimeout);
    }
  }, [charIndex, currentQuoteIndex]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await authService.register({ username, email, password });
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
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

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 3 + "s",
              animation: "float 6s ease-in-out infinite",
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left: Quote display */}
        <div className="flex-1 flex flex-col justify-center items-start pl-8 md:pl-16 lg:pl-24 py-16 text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Create Account
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
              CreativeSpace
            </span>
          </h1>
          <div className="h-20 mt-4 text-white/90 text-2xl md:text-3xl lg:text-4xl leading-relaxed">
            <span className="inline-block border-r-2 border-white/60 pr-1 animate-pulse">
              {displayedText}
            </span>
          </div>
          <div className="mt-12 flex space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex-1 flex justify-center items-center p-8">
          <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl text-white mb-2">Register</h2>
                <p className="text-white/70 text-sm">Start your creative journey</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="username"
                  placeholder="Name"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/50 p-4 rounded-xl backdrop-blur-sm"
                  onChange={handleChange}
                  value={formData.username}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/50 p-4 rounded-xl backdrop-blur-sm"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/50 p-4 rounded-xl backdrop-blur-sm"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full bg-white/5 border border-white/20 text-white placeholder-white/50 p-4 rounded-xl backdrop-blur-sm"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  required
                />

                {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                {success && <p className="text-green-400 text-sm text-center">{success}</p>}

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Create Account
                </button>

                <div className="text-center mt-6">
                  <p className="text-white/60 text-sm">
                    Already have an account?{" "}
                    <button
                      onClick={() => navigate("/login")}
                      className="text-purple-300 hover:text-purple-200 font-medium underline transition duration-200"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
      `}</style>
    </div>
  );
};

export default Register;
