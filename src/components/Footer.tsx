
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold tracking-wider mb-6">
              <span className="text-white">AIWA</span>
              <span className="text-white/60 ml-2">RENT</span>
            </div>
            <p className="text-white/60 text-lg leading-relaxed max-w-md">
              Born in Dubai. Driven by obsession. Where automotive artistry meets Arabian luxury.
            </p>
            
            {/* Luxury Partners */}
            <div className="mt-8">
              <p className="text-white/40 text-sm tracking-wider mb-4">LUXURY PARTNERS</p>
              <div className="flex flex-wrap gap-6 text-white/30 text-sm">
                <span>Burj Al Arab</span>
                <span>Emirates Palace</span>
                <span>Atlantis The Royal</span>
                <span>One&Only</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg tracking-wider mb-6">EXPERIENCE</h3>
            <div className="space-y-4">
              <Link to="/fleet" className="block text-white/60 hover:text-white transition-colors">
                The Collection
              </Link>
              <Link to="/booking" className="block text-white/60 hover:text-white transition-colors">
                Concierge Service
              </Link>
              <Link to="/about" className="block text-white/60 hover:text-white transition-colors">
                Our Story
              </Link>
              <Link to="/contact" className="block text-white/60 hover:text-white transition-colors">
                Private Showroom
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg tracking-wider mb-6">CONCIERGE</h3>
            <div className="space-y-4 text-white/60">
              <div>
                <p className="text-sm text-white/40">24/7 HOTLINE</p>
                <p className="text-lg">+971 4 XXX XXXX</p>
              </div>
              <div>
                <p className="text-sm text-white/40">WHATSAPP</p>
                <p className="text-lg">+971 50 XXX XXXX</p>
              </div>
              <div>
                <p className="text-sm text-white/40">SHOWROOM</p>
                <p>Downtown Dubai</p>
                <p>Business Bay</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm">
            © 2024 Aiwa Rent. All rights reserved. Licensed in UAE.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white text-sm transition-colors">
              Terms
            </Link>
            <Link to="/faq" className="text-white/40 hover:text-white text-sm transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
