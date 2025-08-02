// Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Images from '../components/BlogImages';
import Footer from '../components/Footer';
import Navbar from 'react';

const Home = () => {
  return (
    <>
     <Navbar/>
      <Hero />
      <Images />
      <Footer />
    </>
  );
};

export default Home;
