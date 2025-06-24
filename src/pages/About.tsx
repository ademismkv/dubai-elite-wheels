
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            filter: 'grayscale(100%)'
          }}
        />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-white mb-6 sm:mb-8 tracking-wider">
                BORN IN DUBAI
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white/50 font-extralight mt-4">
                  DRIVEN BY OBSESSION
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed">
                Where automotive artistry meets Arabian luxury in the world's most ambitious city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Desert Sand Tone */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        {/* Desert Sand Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(245, 245, 220, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(222, 184, 135, 0.08) 0%, transparent 50%),
              linear-gradient(135deg, rgba(245, 245, 220, 0.03) 0%, rgba(0, 0, 0, 0.95) 100%)
            `
          }}
        />
        
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f5f5dc' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3Ccircle cx='13' cy='43' r='1'/%3E%3Ccircle cx='47' cy='17' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8 sm:mb-12 tracking-wider">
                OUR PHILOSOPHY
              </h2>
              <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl text-white/70 leading-relaxed">
                <p>
                  In a city that rewrites the rules of possibility, Aiwa Rent was born from a singular obsession: 
                  to curate the world's most extraordinary automotive experiences.
                </p>
                <p>
                  We believe that luxury is not just about possession, but about the perfect moment when 
                  engineering excellence meets human emotion. Every vehicle in our collection tells a story 
                  of innovation, craftsmanship, and the relentless pursuit of perfection.
                </p>
                <p>
                  From the silent power of a Rolls-Royce to the raw emotion of a Lamborghini, 
                  we don't just rent cars – we unlock dreams.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-light text-white mb-4 tracking-wider">EXCLUSIVE PARTNERSHIPS</h3>
                <div className="grid grid-cols-2 gap-4 text-white/60">
                  <div>• Burj Al Arab</div>
                  <div>• Emirates Palace</div>
                  <div>• Atlantis The Royal</div>
                  <div>• One&Only The Palm</div>
                  <div>• Four Seasons Resort</div>
                  <div>• Armani Hotel Dubai</div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-light text-white mb-4 tracking-wider">CONCIERGE SERVICES</h3>
                <div className="space-y-3 text-white/60">
                  <div>• 24/7 White-Glove Service</div>
                  <div>• Private Showroom Viewings</div>
                  <div>• Bespoke Delivery Experiences</div>
                  <div>• Luxury Lifestyle Coordination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 sm:mb-8 tracking-wider">
              UNCOMPROMISING STANDARDS
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                title: 'PRECISION',
                description: 'Every detail meticulously curated. From the scent of leather to the sound of the engine, perfection is not negotiable.'
              },
              {
                title: 'EXCLUSIVITY',
                description: 'Access to vehicles that exist in limited numbers worldwide. Experience what few have the privilege to encounter.'
              },
              {
                title: 'DISCRETION',
                description: 'Your privacy is our priority. White-glove service that respects your need for confidentiality and elegance.'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 sm:p-12 text-center hover:border-white/30 transition-all duration-500"
              >
                <h3 className="text-xl sm:text-2xl font-light text-white mb-6 sm:mb-8 tracking-widest">
                  {value.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        {/* Subtle desert tone background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 70% 30%, rgba(245, 245, 220, 0.08) 0%, transparent 50%),
              linear-gradient(45deg, rgba(222, 184, 135, 0.05) 0%, rgba(0, 0, 0, 0.98) 100%)
            `
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8 sm:mb-12 tracking-wider">
            CRAFTED BY EXPERTS
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed mb-12 sm:mb-16">
            Our team combines decades of automotive expertise with Dubai's legendary hospitality. 
            From certified mechanics to luxury lifestyle consultants, every member shares our obsession with excellence.
          </p>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 sm:p-16">
            <blockquote className="text-xl sm:text-2xl font-light text-white/80 italic leading-relaxed">
              "We don't just deliver cars. We deliver moments that transform ordinary journeys 
              into extraordinary memories. In Dubai, anything is possible – and we make it happen."
            </blockquote>
            <div className="mt-6 sm:mt-8 text-white/60">
              <p className="text-lg">— The Aiwa Rent Concierge Team</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
