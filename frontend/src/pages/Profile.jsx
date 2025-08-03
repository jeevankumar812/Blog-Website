// src/pages/Profile.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import CreatePost from "./CreatePost";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-red-400 text-xl">
        You must be logged in to view your profile.
      </div>
    );
  }

  return <CreatePost />;
};

export default Profile;
