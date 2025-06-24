
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

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          
          {/* Main Headline - Responsive Typography */}
          <div className="overflow-hidden">
            <h1 
              className={`heading-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] leading-[0.85] text-white transition-all duration-1500 ${
                isLoaded ? 'animate-text-reveal' : 'opacity-0'
              }`}
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}
            >
              DRIVE DUBAI
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white/60 font-light mt-4 sm:mt-6 lg:mt-8 tracking-[0.2em] sm:tracking-[0.3em]">
                LIKE YOU OWN IT
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className={`transition-all duration-1500 delay-700 ${
            isLoaded ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            <div className="w-16 sm:w-24 lg:w-32 h-px bg-white/30 mx-auto mb-6 sm:mb-8" />
            <p className="text-luxury text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 max-w-3xl lg:max-w-5xl mx-auto leading-relaxed px-4">
              Where automotive artistry meets Arabian luxury.<br className="hidden sm:block" />
              Experience the impossible in the city that defines it.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center transition-all duration-1500 delay-1000 ${
            isLoaded ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            <Link
              to="/fleet"
              className="group relative bg-white text-black px-12 sm:px-16 lg:px-20 py-4 sm:py-5 lg:py-6 text-sm sm:text-base tracking-[0.25em] font-medium overflow-hidden luxury-hover w-full sm:w-auto"
            >
              <span className="relative z-10">EXPLORE THE FLEET</span>
            </Link>
            <Link
              to="/booking"
              className="group relative border border-white/20 text-white px-12 sm:px-16 lg:px-20 py-4 sm:py-5 lg:py-6 text-sm sm:text-base tracking-[0.25em] font-medium hover:bg-white hover:text-black transition-all duration-700 luxury-hover w-full sm:w-auto"
            >
              <span className="relative z-10">REQUEST CONCIERGE</span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className={`transition-all duration-1500 delay-1200 ${
            isLoaded ? 'animate-fade-in-delayed' : 'opacity-0'
          }`}>
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              <span className="text-white/40 text-xs sm:text-sm tracking-[0.2em]">SCROLL TO DISCOVER</span>
              <div className="w-px h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-white/40 to-transparent" />
              <ChevronDown className="text-white/40 animate-bounce" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-white rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-luxury-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-white rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] animate-luxury-glow" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
};

export default Hero;
