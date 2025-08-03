import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4  text-gray-800">
      <Link to="/" className="text-2xl font-bold text-blue-600">Blog Website</Link>

      <div className="flex gap-4 text-lg items-center">
        {user ? (
          <>
            <span className="hidden sm:inline text-gray-700">Hello, {user.name}</span>
            <Link
              to="/create"
              className="px-4 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              New Post
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-1 rounded-lg border border-white  text-white  hover:bg-black hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-1 rounded-lg border border-white bg-white text-black  hover:bg-black hover:text-white transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
