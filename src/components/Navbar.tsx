
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Fleet', path: '/fleet' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled ? 'glass-panel' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 border border-white/30 flex items-center justify-center group-hover:border-white transition-colors duration-500">
              <span className="text-white font-light text-xl tracking-[0.2em]">A</span>
            </div>
            <span className="text-white heading-luxury text-xl tracking-[0.15em]">
              AIWA RENT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-[0.1em] font-light transition-colors duration-500 relative group ${
                  location.pathname === link.path 
                    ? 'text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-500 ${
                  location.pathname === link.path 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/booking"
              className="border border-white/30 text-white px-8 py-3 text-sm tracking-[0.1em] font-light hover:bg-white hover:text-black transition-all duration-500 luxury-hover"
            >
              RESERVE NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="glass-panel border-t border-white/10">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg tracking-[0.1em] font-light transition-colors duration-300 ${
                  location.pathname === link.path 
                    ? 'text-white' 
                    : 'text-white/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center border border-white/30 text-white py-3 text-sm tracking-[0.1em] font-light"
            >
              RESERVE NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
