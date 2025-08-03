import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id ="footer" className="bg-gray-900 text-white py-11 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section: Name & College */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-400">K Jeevan Kumar</h2>
          <h3 className="text-lg font-semibold text-gray-300 mt-2">
            Final Year B.E. | Alva's Institute of Engineering & Technology
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex space-x-8 text-3xl">
          <a
            href="https://github.com/jeevankumar812"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/k-jeevan-kumar-5b540b266/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-blue-500 transition duration-200"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 text-center text-sm text-gray-500 space-x-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
