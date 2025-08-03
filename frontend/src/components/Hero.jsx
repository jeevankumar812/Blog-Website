import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const quotes = [
  "Write your thoughts.",
  "Share your story.",
  "Inspire the world.",
];

const Hero = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    if (charIndex < currentQuote.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentQuote.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const switchTimeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 2000);
      return () => clearTimeout(switchTimeout);
    }
  }, [charIndex, currentQuoteIndex]);

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative h-screen flex bg-cover bg-center min-w-screen"
      style={{ backgroundImage: `url('hero.jpg')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="relative z-10 flex items-center justify-start min-h-screen px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              {displayText}
              <span className="inline-block w-1 h-12 sm:h-16 md:h-20 lg:h-24 bg-white ml-2 animate-pulse" />
            </h1>
          </div>

          <div className="absolute bottom-10 left-10">
            <p className="text-gray-200 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mb-12">
              Turn your ideas into impactful stories. Make your voice heard with{" "}
              <span className="font-semibold text-white">Blog Website</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={scrollToFooter}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </button>

              <Link
                to="/"
                className="px-5 py-2 rounded-lg border border-white bg-white text-black text-center hover:bg-black hover:text-white transition duration-200"
              >
                Explore More
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-gray-300 text-sm font-medium">Easy Publishing</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-gray-300 text-sm font-medium">Rich Editor</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span className="text-gray-300 text-sm font-medium">Global Reach</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
