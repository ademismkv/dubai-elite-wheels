
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import carsData from '../data/cars.json';

const Fleet = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price');

  const filteredCars = carsData.filter(car => 
    filter === 'all' || car.category === filter
  );

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortBy === 'price') return b.price - a.price;
    if (sortBy === 'brand') return a.brand.localeCompare(b.brand);
    if (sortBy === 'year') return b.year - a.year;
    return 0;
  });

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wider">
              THE
              <span className="block text-4xl md:text-6xl text-white/50 font-extralight mt-2">
                COLLECTION
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Curated automotive masterpieces for the discerning connoisseur
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black/50 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="flex space-x-6">
              {[
                { key: 'all', label: 'ALL' },
                { key: 'supercar', label: 'SUPERCARS' },
                { key: 'luxury', label: 'LUXURY' },
                { key: 'sports', label: 'SPORTS' }
              ].map(category => (
                <button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`text-sm tracking-widest transition-colors duration-300 pb-1 border-b-2 ${
                    filter === category.key 
                      ? 'text-white border-white' 
                      : 'text-white/50 border-transparent hover:text-white/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-black/80 border border-white/20 text-white px-4 py-2 text-sm tracking-wider focus:outline-none focus:border-white/40"
            >
              <option value="price">SORT BY PRICE</option>
              <option value="brand">SORT BY BRAND</option>
              <option value="year">SORT BY YEAR</option>
            </select>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCars.map((car, index) => (
              <div
                key={car.id}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-700 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Car Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 border border-white/20">
                    <span className="text-white text-xs tracking-wider">
                      {car.price.toLocaleString()} {car.currency}
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-light text-white mb-1 tracking-wide">
                      {car.brand}
                    </h3>
                    <p className="text-white/60 text-base font-light">
                      {car.model}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                    <div>
                      <span className="text-white/40 block">POWER</span>
                      <span className="text-white">{car.power}</span>
                    </div>
                    <div>
                      <span className="text-white/40 block">0-100</span>
                      <span className="text-white">{car.acceleration}</span>
                    </div>
                  </div>

                  <Link
                    to={`/car/${car.id}`}
                    className="block w-full text-center border border-white/30 text-white py-2 text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-500"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {sortedCars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/40 text-lg">No vehicles match your selection</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;
