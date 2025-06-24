
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import carsData from '../data/cars.json';

const CarDetail = () => {
  const { id } = useParams();
  const car = carsData.find(c => c.id === parseInt(id || '0'));

  if (!car) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Vehicle Not Found</h1>
          <Link to="/fleet" className="text-white/60 hover:text-white">Return to Fleet</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${car.image}')`
          }}
        />
        
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32 w-full">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-wider">
                {car.brand}
              </h1>
              <p className="text-3xl md:text-5xl text-white/60 font-extralight mb-6">
                {car.model}
              </p>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                {car.description}
              </p>
              <div className="text-4xl font-light text-white">
                {car.price.toLocaleString()} {car.currency}
                <span className="text-lg text-white/60 ml-2">per day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Specs Panel */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
              <h2 className="text-3xl font-light text-white mb-12 tracking-wider">
                SPECIFICATIONS
              </h2>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'ENGINE', value: car.engine },
                  { label: 'POWER', value: car.power },
                  { label: 'ACCELERATION', value: car.acceleration },
                  { label: 'TOP SPEED', value: car.topSpeed },
                  { label: 'FUEL TYPE', value: car.fuel },
                  { label: 'SEATS', value: car.seats.toString() },
                  { label: 'BODY TYPE', value: car.bodyType },
                  { label: 'YEAR', value: car.year.toString() }
                ].map((spec, index) => (
                  <div key={index} className="border-b border-white/10 pb-4">
                    <p className="text-white/40 text-sm tracking-wider mb-2">{spec.label}</p>
                    <p className="text-white text-lg font-light">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-light text-white mb-12 tracking-wider">
                LUXURY FEATURES
              </h2>
              
              <div className="space-y-6">
                {car.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-white text-lg font-light">{feature}</span>
                  </div>
                ))}
              </div>

              {/* 360 View Placeholder */}
              <div className="mt-16 p-12 bg-white/5 backdrop-blur-sm border border-white/10 text-center">
                <h3 className="text-xl font-light text-white mb-4 tracking-wider">
                  360° VIRTUAL EXPERIENCE
                </h3>
                <p className="text-white/60 mb-6">
                  Immersive vehicle tour coming soon
                </p>
                <div className="w-24 h-24 mx-auto border-2 border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-white/40 rounded-full animate-spin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-light text-white mb-8 tracking-wider">
            RESERVE THIS MASTERPIECE
          </h2>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Our concierge team will contact you within 10 minutes to arrange your private viewing and delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to={`/booking?car=${car.id}`}
              className="bg-white text-black px-12 py-4 text-sm tracking-widest hover:bg-white/90 transition-all duration-500 transform hover:scale-105"
            >
              REQUEST IMMEDIATE BOOKING
            </Link>
            <a
              href={`https://wa.me/971501234567?text=I'm interested in the ${car.brand} ${car.model}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-12 py-4 text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500"
            >
              WHATSAPP CONCIERGE
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default CarDetail;
