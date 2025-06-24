
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wider">
              CONTACT
              <span className="block text-4xl md:text-6xl text-white/50 font-extralight mt-2">
                CONCIERGE
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Your luxury automotive experience is just one conversation away
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-16">
              {/* 24/7 Hotline */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
                <h2 className="text-2xl font-light text-white mb-8 tracking-wider">
                  24/7 LUXURY HOTLINE
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/40 text-sm tracking-wider mb-2">DIRECT LINE</p>
                    <a href="tel:+97141234567" className="text-3xl font-light text-white hover:text-white/80 transition-colors">
                      +971 4 123 4567
                    </a>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm tracking-wider mb-2">WHATSAPP CONCIERGE</p>
                    <a 
                      href="https://wa.me/971501234567" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl font-light text-white hover:text-white/80 transition-colors"
                    >
                      +971 50 123 4567
                    </a>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/60">
                      Our concierge team is available around the clock to ensure your luxury experience is seamless.
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
                <h2 className="text-2xl font-light text-white mb-8 tracking-wider">
                  DIGITAL CONCIERGE
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/40 text-sm tracking-wider mb-2">RESERVATIONS</p>
                    <a href="mailto:concierge@aiwarent.ae" className="text-xl text-white hover:text-white/80 transition-colors">
                      concierge@aiwarent.ae
                    </a>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm tracking-wider mb-2">VIP SERVICES</p>
                    <a href="mailto:vip@aiwarent.ae" className="text-xl text-white hover:text-white/80 transition-colors">
                      vip@aiwarent.ae
                    </a>
                  </div>
                  <div>
                    <p className="text-white/40 text-sm tracking-wider mb-2">PARTNERSHIPS</p>
                    <a href="mailto:partnerships@aiwarent.ae" className="text-xl text-white hover:text-white/80 transition-colors">
                      partnerships@aiwarent.ae
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
                <h2 className="text-2xl font-light text-white mb-8 tracking-wider">
                  SHOWROOM HOURS
                </h2>
                <div className="space-y-4 text-white/70">
                  <div className="flex justify-between">
                    <span>Saturday - Wednesday</span>
                    <span>10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday - Friday</span>
                    <span>10:00 AM - 12:00 AM</span>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/40 text-sm">
                      Private viewings available by appointment 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-16">
              {/* Primary Showroom */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
                <h2 className="text-2xl font-light text-white mb-8 tracking-wider">
                  FLAGSHIP SHOWROOM
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/40 text-sm tracking-wider mb-2">ADDRESS</p>
                    <address className="text-white text-lg not-italic leading-relaxed">
                      The Dubai Mall<br />
                      Fashion Avenue Extension<br />
                      Downtown Dubai, UAE
                    </address>
                  </div>
                  <div>
                    <p className="text-white/60">
                      Located in the heart of Downtown Dubai, our flagship showroom offers an immersive luxury experience 
                      with private viewing suites and exclusive collection displays.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Location */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
                <h2 className="text-2xl font-light text-white mb-8 tracking-wider">
                  BUSINESS BAY LOUNGE
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/40 text-sm tracking-wider mb-2">ADDRESS</p>
                    <address className="text-white text-lg not-italic leading-relaxed">
                      Bay Square Building 1<br />
                      Business Bay Boulevard<br />
                      Business Bay, Dubai, UAE
                    </address>
                  </div>
                  <div>
                    <p className="text-white/60">
                      Our Business Bay location caters to corporate clients and offers express concierge services 
                      for the discerning business traveler.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 text-center">
                <h3 className="text-xl font-light text-white mb-6 tracking-wider">
                  INTERACTIVE MAP
                </h3>
                <div className="h-64 bg-black/50 border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 border-2 border-white/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-white/40 rounded-full" />
                    </div>
                    <p className="text-white/60">
                      Interactive location map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12">
            <h2 className="text-3xl font-light text-white mb-6 tracking-wider">
              EMERGENCY ASSISTANCE
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              For urgent requests or emergency assistance while using our vehicles, 
              our dedicated support team is available immediately.
            </p>
            <a 
              href="tel:+971800123456"
              className="inline-block bg-white text-black px-12 py-4 text-sm tracking-widest hover:bg-white/90 transition-all duration-500"
            >
              EMERGENCY HOTLINE: +971 800 123 456
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
