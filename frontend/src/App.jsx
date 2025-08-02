import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Images from './components/BlogImages';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

const App = () => {
  const location = useLocation();
  const showNavbar = location.pathname === "/";

  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-x-hidden">
      {showNavbar && <Navbar />} {/* ✅ Show only on Home */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Images />
              <Footer />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
