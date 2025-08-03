// src/pages/Profile.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import CreatePost from "./CreatePost";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="text-center mt-10 text-red-500">
        You must be logged in to view your profile.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-semibold mb-4">Welcome, {user.name}</h2>
      <p className="mb-6 text-gray-600">Email: {user.email}</p>
      <CreatePost />
    </div>
  );
};

export default Profile;
