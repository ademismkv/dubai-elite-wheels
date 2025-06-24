
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            filter: 'grayscale(100%) contrast(1.2)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Parallax Dubai Skyline */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 bg-cover bg-center opacity-10 parallax-back"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          filter: 'grayscale(100%) contrast(1.5)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          {/* Main Headline */}
          <div className="overflow-hidden">
            <h1 className={`heading-display text-7xl md:text-9xl text-white transition-all duration-1000 ${
              isLoaded ? 'animate-text-reveal' : 'opacity-0'
            }`}>
              DRIVE DUBAI
              <span className="block text-4xl md:text-6xl text-white/60 font-light mt-6 tracking-wider">
                LIKE YOU OWN IT
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${
            isLoaded ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            <p className="text-luxury text-xl md:text-2xl text-white/80 max-w-4xl mx-auto">
              Where automotive artistry meets Arabian luxury. Experience the world's most coveted masterpieces 
              in the city that defines impossible.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center pt-12 transition-all duration-1000 delay-700 ${
            isLoaded ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            <Link
              to="/fleet"
              className="group relative bg-white text-black px-16 py-5 text-sm tracking-[0.2em] font-medium overflow-hidden luxury-hover"
            >
              <span className="relative z-10">EXPLORE THE COLLECTION</span>
            </Link>
            <Link
              to="/booking"
              className="group relative border border-white/20 text-white px-16 py-5 text-sm tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all duration-700 luxury-hover"
            >
              <span className="relative z-10">REQUEST CONCIERGE</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'animate-fade-in-delayed' : 'opacity-0'
        }`}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40" />
            <ChevronDown className="text-white/60 animate-bounce" size={20} />
          </div>
        </div>
      </div>

      {/* Ambient Glow Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-luxury-glow" />
      </div>
    </section>
  );
};

export default Hero;
