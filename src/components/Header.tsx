import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#364A22]/95 backdrop-blur-sm border-b border-[#E38A30]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/Logo.png" 
              alt="SARIRA" 
              className="h-12 w-auto brightness-110 contrast-125"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-[#E38A30] transition-colors duration-300">Home</a>
            <a href="#story" className="text-white hover:text-[#E38A30] transition-colors duration-300">Our Story</a>
            <a href="#recipes" className="text-white hover:text-[#E38A30] transition-colors duration-300">Recipes</a>
            <a href="#gallery" className="text-white hover:text-[#E38A30] transition-colors duration-300">Gallery</a>
            <a href="#contact" className="text-white hover:text-[#E38A30] transition-colors duration-300">Contact</a>
          </nav>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center">
            <button className="text-white hover:text-[#E38A30] transition-colors duration-300">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#E38A30] transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#364A22] border-t border-[#E38A30]/20">
              <a href="#home" className="block px-3 py-2 text-white hover:text-[#E38A30] transition-colors duration-300">Home</a>
              <a href="#story" className="block px-3 py-2 text-white hover:text-[#E38A30] transition-colors duration-300">Our Story</a>
              <a href="#recipes" className="block px-3 py-2 text-white hover:text-[#E38A30] transition-colors duration-300">Recipes</a>
              <a href="#gallery" className="block px-3 py-2 text-white hover:text-[#E38A30] transition-colors duration-300">Gallery</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-[#E38A30] transition-colors duration-300">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;