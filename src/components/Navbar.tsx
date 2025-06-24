
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

  const navigation = [
    { name: 'Fleet', href: '/fleet' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-white">AIWA</span>
              <span className="text-white/60 ml-2">RENT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm tracking-wider transition-all duration-300 hover:text-white relative ${
                  location.pathname === item.href ? 'text-white' : 'text-white/70'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-white text-black px-6 py-2 text-sm tracking-wider hover:bg-white/90 transition-all duration-300"
            >
              REQUEST CONCIERGE
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-6 py-6 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-white/70 hover:text-white transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="block w-full bg-white text-black text-center py-3 text-sm tracking-wider hover:bg-white/90 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                REQUEST CONCIERGE
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
