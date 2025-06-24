
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            filter: 'grayscale(100%) contrast(1.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Dubai Skyline Parallax */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          filter: 'grayscale(100%) contrast(2)',
          transform: 'translateZ(-1px) scale(2)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          
          {/* Main Headline */}
          <div className="overflow-hidden">
            <h1 className={`heading-display text-8xl md:text-[12rem] leading-[0.8] text-white transition-all duration-1500 ${
              isLoaded ? 'animate-text-reveal' : 'opacity-0'
            }`}>
              DRIVE DUBAI
              <span className="block text-5xl md:text-7xl text-white/50 font-light mt-8 tracking-[0.3em]">
                LIKE YOU OWN IT
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className={`transition-all duration-1500 delay-700 ${
            isLoaded ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            <div className="w-32 h-px bg-white/30 mx-auto mb-8" />
            <p className="text-luxury text-2xl md:text-3xl text-white/70 max-w-5xl mx-auto leading-relaxed">
              Where automotive artistry meets Arabian luxury.<br />
              Experience the impossible in the city that defines it.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center transition-all duration-1500 delay-1000 ${
            isLoaded ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            <Link
              to="/fleet"
              className="group relative bg-white text-black px-20 py-6 text-base tracking-[0.25em] font-medium overflow-hidden luxury-hover"
            >
              <span className="relative z-10">EXPLORE THE FLEET</span>
            </Link>
            <Link
              to="/booking"
              className="group relative border border-white/20 text-white px-20 py-6 text-base tracking-[0.25em] font-medium hover:bg-white hover:text-black transition-all duration-700 luxury-hover"
            >
              <span className="relative z-10">REQUEST CONCIERGE</span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1500 delay-1200 ${
            isLoaded ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            <div className="flex flex-col items-center space-y-6">
              <span className="text-white/40 text-sm tracking-[0.2em]">SCROLL TO DISCOVER</span>
              <div className="w-px h-20 bg-gradient-to-b from-white/40 to-transparent" />
              <ChevronDown className="text-white/40 animate-bounce" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px] animate-luxury-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-white rounded-full blur-[100px] animate-luxury-glow" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
};

export default Hero;
