import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navbarData from '../data/navbar.json';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo and Name */}
          <div className="flex items-center gap-3 cursor-pointer group z-50">
            <div className="w-12 h-12 flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/logos/logo-black.png" 
                alt={`${navbarData.name} Logo`} 
                className={`w-full h-full object-contain transition-all duration-300 ${!isScrolled && !isMobileMenuOpen ? 'brightness-0 invert drop-shadow-md' : ''}`}
              />
            </div>
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary-600 ${isScrolled || isMobileMenuOpen ? 'text-secondary-900' : 'text-white drop-shadow-md'}`}>
                {navbarData.name}
              </h1>
              <p className={`text-xs font-medium tracking-wider uppercase hidden sm:block ${isScrolled || isMobileMenuOpen ? 'text-secondary-500' : 'text-gray-200 drop-shadow-sm'}`}>
                {navbarData.subtitle}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navbarData.navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-lg font-bold hover:text-primary-600 transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary-500 hover:after:w-full after:transition-all after:duration-300 ${isScrolled ? 'text-secondary-800' : 'text-white drop-shadow-md'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            {/* Desktop Contact Button */}
            <Link 
              to="/contact" 
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white px-5 py-2.5 rounded-full font-semibold shadow-lg shadow-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{navbarData.bookNow}</span>
            </Link>

            {/* Mobile/Tablet Hamburger Button */}
            <button 
              className={`lg:hidden p-2 rounded-lg focus:outline-none transition-colors ${isScrolled || isMobileMenuOpen ? 'text-secondary-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-4 px-6 flex flex-col gap-4">
          {navbarData.navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold text-secondary-900 hover:text-primary-600 border-b border-gray-100 pb-3"
            >
              {item.name}
            </Link>
          ))}
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-3.5 mt-2 rounded-full font-bold shadow-md hover:from-[#128C7E] hover:to-[#075E54] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{navbarData.bookNow}</span>
            </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
