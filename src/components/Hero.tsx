
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Parallax Dubai Skyline */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-64 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          filter: 'grayscale(100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider text-white leading-tight">
            DRIVE DUBAI
            <span className="block text-4xl md:text-6xl text-white/60 font-extralight mt-4">
              LIKE YOU OWN IT
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            Where automotive artistry meets Arabian luxury. Experience the world's most coveted supercars in the city that defines opulence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              to="/fleet"
              className="bg-white text-black px-12 py-4 text-sm tracking-widest hover:bg-white/90 transition-all duration-500 transform hover:scale-105"
            >
              EXPLORE THE COLLECTION
            </Link>
            <Link
              to="/booking"
              className="border border-white/30 text-white px-12 py-4 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500"
            >
              REQUEST CONCIERGE
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/50" size={24} />
        </div>
      </div>

      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
};

export default Hero;
