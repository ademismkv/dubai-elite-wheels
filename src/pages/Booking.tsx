
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import carsData from '../data/cars.json';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const selectedCarId = searchParams.get('car');
  const selectedCar = selectedCarId ? carsData.find(c => c.id === parseInt(selectedCarId)) : null;

  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    chauffeur: false,
    addOns: [] as string[],
    specialRequests: ''
  });

  const addOns = [
    'Rose Bouquet Arrangement',
    'Dom Pérignon Champagne',
    'Private Photography Session',
    'Airport Pickup/Dropoff',
    'Red Carpet Service',
    'Personal Concierge'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleAddOnChange = (addOn: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOn)
        ? prev.addOns.filter(a => a !== addOn)
        : [...prev.addOns, addOn]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking request:', formData);
    alert('Your concierge will contact you within 10 minutes.');
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wider">
              CONCIERGE
              <span className="block text-4xl md:text-6xl text-white/50 font-extralight mt-2">
                SERVICE
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Experience unparalleled luxury with our white-glove booking service
            </p>
          </div>
        </div>
      </section>

      {/* Selected Car */}
      {selectedCar && (
        <section className="py-16 bg-white/5 backdrop-blur-sm border-y border-white/10">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex items-center space-x-8">
              <img
                src={selectedCar.image}
                alt={`${selectedCar.brand} ${selectedCar.model}`}
                className="w-32 h-24 object-cover filter grayscale"
              />
              <div>
                <h3 className="text-2xl font-light text-white tracking-wide">
                  {selectedCar.brand} {selectedCar.model}
                </h3>
                <p className="text-white/60">
                  {selectedCar.price.toLocaleString()} {selectedCar.currency} per day
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Booking Form */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Personal Details */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
              <h2 className="text-2xl font-light text-white mb-8 tracking-wider">
                PERSONAL DETAILS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white/60 text-sm tracking-wider mb-3">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-white/20 text-white px-4 py-3 text-lg focus:outline-none focus:border-white/40"
                  />
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm tracking-wider mb-3">
                    WHATSAPP NUMBER *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-white/20 text-white px-4 py-3 text-lg focus:outline-none focus:border-white/40"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-white/60 text-sm tracking-wider mb-3">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-white/20 text-white px-4 py-3 text-lg focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>
            </div>

            {/* Rental Details */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
              <h2 className="text-2xl font-light text-white mb-8 tracking-wider">
                RENTAL PERIOD
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white/60 text-sm tracking-wider mb-3">
                    PICKUP DATE *
                  </label>
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-white/20 text-white px-4 py-3 text-lg focus:outline-none focus:border-white/40"
                  />
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm tracking-wider mb-3">
                    PICKUP TIME *
                  </label>
                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-white/20 text-white px-4 py-3 text-lg focus:outline-none focus:border-white/40"
                  />
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm tracking-wider mb-3">
                    RETURN DATE *
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-white/20 text-white px-4 py-3 text-lg focus:outline-none focus:border-white/40"
                  />
                </div>
                
                <div>
                  <label className="block text-white/60 text-sm tracking-wider mb-3">
                    RETURN TIME *
                  </label>
                  <input
                    type="time"
                    name="returnTime"
                    value={formData.returnTime}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/50 border border-white/20 text-white px-4 py-3 text-lg focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              {/* Chauffeur Option */}
              <div className="mt-8">
                <label className="flex items-center space-x-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="chauffeur"
                    checked={formData.chauffeur}
                    onChange={handleInputChange}
                    className="w-5 h-5 bg-black/50 border border-white/20 text-white focus:ring-white/20"
                  />
                  <span className="text-white text-lg">Include Professional Chauffeur</span>
                </label>
                <p className="text-white/40 text-sm mt-2 ml-9">
                  Experienced drivers familiar with Dubai's luxury destinations
                </p>
              </div>
            </div>

            {/* Luxury Add-ons */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
              <h2 className="text-2xl font-light text-white mb-8 tracking-wider">
                LUXURY ENHANCEMENTS
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {addOns.map((addOn) => (
                  <label key={addOn} className="flex items-center space-x-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.addOns.includes(addOn)}
                      onChange={() => handleAddOnChange(addOn)}
                      className="w-5 h-5 bg-black/50 border border-white/20 text-white focus:ring-white/20"
                    />
                    <span className="text-white">{addOn}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
              <h2 className="text-2xl font-light text-white mb-8 tracking-wider">
                SPECIAL REQUESTS
              </h2>
              
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={6}
                placeholder="Share any special requirements or preferences..."
                className="w-full bg-black/50 border border-white/20 text-white px-4 py-3 text-lg focus:outline-none focus:border-white/40 placeholder-white/40"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black px-16 py-4 text-sm tracking-widest hover:bg-white/90 transition-all duration-500 transform hover:scale-105"
              >
                SUBMIT REQUEST
              </button>
              <p className="text-white/40 text-sm mt-6">
                Your dedicated concierge will contact you within 10 minutes
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
