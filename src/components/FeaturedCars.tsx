
import React from 'react';
import { Link } from 'react-router-dom';
import carsData from '../data/cars.json';

const FeaturedCars = () => {
  const featuredCars = carsData.filter(car => car.featured);

  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wider">
            SIGNATURE
            <span className="block text-3xl md:text-5xl text-white/50 font-extralight mt-2">
              COLLECTION
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Handpicked masterpieces that define automotive excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-700 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Car Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm px-4 py-2 border border-white/20">
                  <span className="text-white text-sm tracking-wider">
                    {car.price.toLocaleString()} {car.currency}/DAY
                  </span>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-light text-white mb-2 tracking-wide">
                    {car.brand}
                  </h3>
                  <p className="text-white/60 text-lg font-light">
                    {car.model}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                  <div>
                    <span className="text-white/40 block">POWER</span>
                    <span className="text-white">{car.power}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">0-100</span>
                    <span className="text-white">{car.acceleration}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">ENGINE</span>
                    <span className="text-white">{car.engine}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">TOP SPEED</span>
                    <span className="text-white">{car.topSpeed}</span>
                  </div>
                </div>

                <Link
                  to={`/car/${car.id}`}
                  className="block w-full text-center border border-white/30 text-white py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500"
                >
                  REQUEST THIS MASTERPIECE
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/fleet"
            className="inline-block text-white/60 hover:text-white text-sm tracking-widest transition-colors duration-300 border-b border-white/20 hover:border-white pb-1"
          >
            VIEW COMPLETE COLLECTION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
