
import React from 'react';
import CarShowcase from './CarShowcase';
import carsData from '../data/cars.json';

const FeaturedCars = () => {
  // Show only the first 3 cars as featured
  const featuredCars = carsData.slice(0, 3);

  return (
    <div>
      {/* Section Header */}
      <section className="section-padding bg-black text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-display text-6xl md:text-7xl text-white mb-8 animate-fade-in-up">
            FEATURED COLLECTION
          </h2>
          <p className="text-luxury text-xl text-white/60 leading-relaxed animate-fade-in-delayed">
            Handpicked automotive masterpieces for the discerning elite
          </p>
        </div>
      </section>

      {/* Car Showcases */}
      {featuredCars.map((car, index) => (
        <CarShowcase key={car.id} car={car} index={index} />
      ))}
    </div>
  );
};

export default FeaturedCars;
