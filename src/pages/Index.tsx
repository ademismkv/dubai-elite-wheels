
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCars />
      <Footer />
    </div>
  );
};

export default Index;
