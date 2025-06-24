
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CarShowcase from '../components/CarShowcase';
import Chatbot from '../components/Chatbot';
import carsData from '../data/cars.json';

const Fleet = () => {
  const [filter, setFilter] = useState('all');

  const filteredCars = carsData.filter(car => 
    filter === 'all' || car.category === filter
  );

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-display text-7xl md:text-9xl text-white mb-8 tracking-wider animate-text-reveal">
              THE FLEET
            </h1>
            <p className="text-luxury text-xl text-white/60 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
              Every vehicle in our collection represents the pinnacle of automotive excellence
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-12">
              {[
                { key: 'all', label: 'ALL VEHICLES' },
                { key: 'supercar', label: 'SUPERCARS' },
                { key: 'luxury', label: 'LUXURY SEDANS' },
                { key: 'sports', label: 'SPORTS CARS' }
              ].map(category => (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`heading-luxury text-lg tracking-[0.2em] transition-colors duration-300 pb-2 border-b-2 ${
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

      {/* Car Showcases */}
      <div>
        {filteredCars.map((car, index) => (
          <CarShowcase key={car.id} car={car} index={index} />
        ))}
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
