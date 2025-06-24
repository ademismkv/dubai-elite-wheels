
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarShowcase from '../components/CarShowcase';
import Chatbot from '../components/Chatbot';
import { ToggleLeft, ToggleRight } from 'lucide-react';
import carsData from '../data/cars.json';

const Fleet = () => {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'cinematic' | 'compact'>('cinematic');

  const filteredCars = carsData.filter(car => 
    filter === 'all' || car.category === filter
  );

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-6 sm:mb-8 tracking-wider animate-text-reveal">
              THE FLEET
            </h1>
            <p className="text-luxury text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              Every vehicle in our collection represents the pinnacle of automotive excellence
            </p>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* View Toggle */}
          <div className="flex justify-end mb-8">
            <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded-full">
              <span className={`text-sm font-medium transition-colors ${
                viewMode === 'cinematic' ? 'text-black' : 'text-gray-500'
              }`}>
                Cinematic
              </span>
              <button
                onClick={() => setViewMode(viewMode === 'cinematic' ? 'compact' : 'cinematic')}
                className="p-1"
              >
                {viewMode === 'cinematic' ? (
                  <ToggleLeft className="text-gray-400" size={24} />
                ) : (
                  <ToggleRight className="text-black" size={24} />
                )}
              </button>
              <span className={`text-sm font-medium transition-colors ${
                viewMode === 'compact' ? 'text-black' : 'text-gray-500'
              }`}>
                Compact
              </span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12">
              {[
                { key: 'all', label: 'ALL VEHICLES' },
                { key: 'supercar', label: 'SUPERCARS' },
                { key: 'luxury', label: 'LUXURY SEDANS' },
                { key: 'sports', label: 'SPORTS CARS' }
              ].map(category => (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`heading-luxury text-sm sm:text-base lg:text-lg tracking-[0.2em] transition-colors duration-300 pb-2 border-b-2 ${
                    filter === category.key 
                      ? 'text-black border-black' 
                      : 'text-black/40 border-transparent hover:text-black/70'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Car Display */}
      <div>
        {viewMode === 'cinematic' ? (
          // Cinematic View (existing full-screen showcases)
          filteredCars.map((car, index) => (
            <CarShowcase key={car.id} car={car} index={index} />
          ))
        ) : (
          // Compact View (grid layout)
          <section className="py-16 sm:py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="glass-panel glass-panel-hover p-6 sm:p-8 group cursor-pointer"
                  >
                    <div className="aspect-video mb-6 overflow-hidden">
                      <img
                        src={car.image}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="heading-luxury text-xl sm:text-2xl text-white mb-2 tracking-wider">
                          {car.brand} {car.model}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {car.year} • {car.category}
                        </p>
                      </div>
                      
                      <div className="w-full h-px bg-white/10" />
                      
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-light text-white">
                          {car.price.toLocaleString()} {car.currency}
                          <span className="text-sm text-white/60 ml-1">/ day</span>
                        </span>
                        
                        <button className="bg-white text-black px-6 py-2 text-sm tracking-wider hover:bg-white/90 transition-colors">
                          VIEW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {filteredCars.length === 0 && (
        <section className="py-24 bg-black text-center">
          <p className="text-white/40 text-xl">No vehicles match your selection</p>
        </section>
      )}

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Fleet;
