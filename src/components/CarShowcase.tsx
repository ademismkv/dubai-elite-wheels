
import React from 'react';
import { Link } from 'react-router-dom';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: string;
  image: string;
  power: string;
  acceleration: string;
  topSpeed: string;
}

interface CarShowcaseProps {
  car: Car;
  index: number;
}

const CarShowcase: React.FC<CarShowcaseProps> = ({ car, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className={`min-h-screen flex items-center ${isEven ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Car Image */}
          <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            {/* Floating price */}
            <div className={`absolute top-8 right-8 ${isEven ? 'bg-white text-black' : 'bg-black text-white'} px-6 py-3 backdrop-blur-sm`}>
              <span className="text-sm tracking-wider">
                {car.price.toLocaleString()} {car.currency}
              </span>
            </div>
          </div>

          {/* Car Info */}
          <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
            <div className="space-y-8">
              
              {/* Year */}
              <div className={`heading-display text-8xl ${isEven ? 'text-white/20' : 'text-black/20'}`}>
                {car.year}
              </div>

              {/* Brand & Model */}
              <div>
                <h2 className={`heading-display text-5xl md:text-6xl ${isEven ? 'text-white' : 'text-black'} mb-4`}>
                  {car.brand}
                </h2>
                <h3 className={`heading-luxury text-2xl ${isEven ? 'text-white/60' : 'text-black/60'} tracking-[0.2em]`}>
                  {car.model}
                </h3>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <span className={`block text-xs tracking-wider ${isEven ? 'text-white/40' : 'text-black/40'} mb-2`}>
                    POWER
                  </span>
                  <span className={`text-lg ${isEven ? 'text-white' : 'text-black'}`}>
                    {car.power}
                  </span>
                </div>
                <div>
                  <span className={`block text-xs tracking-wider ${isEven ? 'text-white/40' : 'text-black/40'} mb-2`}>
                    0-100
                  </span>
                  <span className={`text-lg ${isEven ? 'text-white' : 'text-black'}`}>
                    {car.acceleration}
                  </span>
                </div>
                <div>
                  <span className={`block text-xs tracking-wider ${isEven ? 'text-white/40' : 'text-black/40'} mb-2`}>
                    TOP SPEED
                  </span>
                  <span className={`text-lg ${isEven ? 'text-white' : 'text-black'}`}>
                    {car.topSpeed}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className={`px-8 py-4 text-sm tracking-[0.15em] transition-all duration-500 ${
                  isEven 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'bg-black text-white hover:bg-black/90'
                }`}>
                  🌹 ADD ROSES
                </button>
                <button className={`px-8 py-4 text-sm tracking-[0.15em] border transition-all duration-500 ${
                  isEven
                    ? 'border-white/30 text-white hover:bg-white hover:text-black'
                    : 'border-black/30 text-black hover:bg-black hover:text-white'
                }`}>
                  🛎️ REQUEST CHAUFFEUR
                </button>
                <Link
                  to={`/car/${car.id}`}
                  className={`px-8 py-4 text-sm tracking-[0.15em] border transition-all duration-500 text-center ${
                    isEven
                      ? 'border-white/30 text-white hover:bg-white hover:text-black'
                      : 'border-black/30 text-black hover:bg-black hover:text-white'
                  }`}
                >
                  UNLOCK THIS RIDE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;
