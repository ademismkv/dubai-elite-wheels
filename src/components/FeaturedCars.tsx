
import React from 'react';
import { Link } from 'react-router-dom';
import carsData from '../data/cars.json';

const FeaturedCars = () => {
  const featuredCars = carsData.filter(car => car.featured).slice(0, 3);

  return (
    <section className="section-padding bg-black relative">
      {/* Section Header */}
      <div className="text-center mb-32">
        <div className="overflow-hidden">
          <h2 className="heading-display text-6xl md:text-8xl text-white mb-8 animate-fade-in-up">
            SIGNATURE
            <span className="block text-3xl md:text-5xl text-white/40 font-light mt-4 tracking-[0.1em]">
              MASTERPIECES
            </span>
          </h2>
        </div>
        <p className="text-luxury text-xl text-white/60 max-w-3xl mx-auto animate-fade-in-delayed">
          Handpicked automotive legends that redefine the art of motion
        </p>
      </div>

      {/* Featured Cars Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="group relative glass-panel glass-panel-hover"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Car Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-6 right-6 glass-panel px-6 py-3">
                  <span className="text-white text-sm tracking-[0.15em] font-light">
                    {car.price.toLocaleString()} {car.currency}
                  </span>
                </div>

                {/* Luxury Brand Badge */}
                <div className="absolute top-6 left-6 glass-panel px-6 py-3">
                  <span className="text-white/80 text-xs tracking-[0.2em] font-light uppercase">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-12">
                <div className="mb-10">
                  <h3 className="heading-luxury text-3xl text-white mb-3 tracking-[0.05em]">
                    {car.brand}
                  </h3>
                  <p className="text-white/60 text-xl font-light">
                    {car.model}
                  </p>
                </div>

                {/* Essential Specs */}
                <div className="grid grid-cols-2 gap-8 mb-12 text-sm">
                  <div>
                    <span className="text-white/40 block tracking-[0.1em] mb-2">POWER</span>
                    <span className="text-white font-light">{car.power}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block tracking-[0.1em] mb-2">ACCELERATION</span>
                    <span className="text-white font-light">{car.acceleration}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={`/car/${car.id}`}
                  className="block w-full text-center border border-white/20 text-white py-4 text-sm tracking-[0.15em] font-light hover:bg-white hover:text-black transition-all duration-700 luxury-hover uppercase"
                >
                  Request This Masterpiece
                </Link>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* View Collection Link */}
        <div className="text-center mt-24">
          <Link
            to="/fleet"
            className="inline-flex items-center text-white/60 hover:text-white text-sm tracking-[0.15em] transition-colors duration-500 group"
          >
            <span className="border-b border-white/20 group-hover:border-white pb-1 transition-colors duration-500">
              VIEW COMPLETE COLLECTION
            </span>
            <svg className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
