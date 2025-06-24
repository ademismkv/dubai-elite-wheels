
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  image: string;
  category: string;
  features: string[];
}

interface FeaturedCarsCarouselProps {
  cars: Car[];
}

const FeaturedCarsCarousel = ({ cars }: FeaturedCarsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth;
    
    if (direction === 'left') {
      setCurrentIndex(prev => (prev > 0 ? prev - 1 : cars.length - 1));
    } else {
      setCurrentIndex(prev => (prev < cars.length - 1 ? prev + 1 : 0));
    }
    
    const newScrollPosition = currentIndex * cardWidth;
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={24} />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      >
        <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={24} />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cars.map((car, index) => (
          <div
            key={car.id}
            className="min-w-full snap-center relative"
          >
            <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
              {/* Car Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${car.image}')`,
                  filter: 'grayscale(100%) contrast(1.2)'
                }}
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    
                    {/* Left Side - Car Info */}
                    <div className="text-white space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="heading-display text-3xl sm:text-4xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4 tracking-wider">
                          {car.brand}
                        </h2>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white/70 font-light tracking-wide">
                          {car.model} {car.year}
                        </h3>
                      </div>
                      
                      <div className="w-16 sm:w-24 h-px bg-white/30" />
                      
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-light">
                          {car.price.toLocaleString()} {car.currency}
                          <span className="text-lg sm:text-xl text-white/60 ml-2">per day</span>
                        </p>
                        
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {car.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs sm:text-sm tracking-wider text-white/60 border border-white/20 px-3 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                        <Link
                          to={`/car/${car.id}`}
                          className="bg-white text-black px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base tracking-[0.2em] hover:bg-white/90 transition-all duration-500 luxury-hover text-center"
                        >
                          VIEW DETAILS
                        </Link>
                        <Link
                          to={`/booking?car=${car.id}`}
                          className="border border-white/20 text-white px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 luxury-hover text-center"
                        >
                          RESERVE NOW
                        </Link>
                      </div>
                    </div>
                    
                    {/* Right Side - Spacer for mobile, content for desktop */}
                    <div className="hidden lg:block" />
                  </div>
                </div>
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
                {cars.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarsCarousel;
