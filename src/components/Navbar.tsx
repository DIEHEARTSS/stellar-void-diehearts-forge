
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-white font-display text-2xl font-bold tracking-widest">
          DIE<span className="text-gray-400">HEARTS</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="dh-nav-link">SHOP</a>
          <a href="#" className="dh-nav-link">COLLECTION</a>
          <a href="#" className="dh-nav-link">ABOUT</a>
          <a href="#" className="dh-nav-link">CONTACT</a>
          <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-900">
            <ShoppingBag className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg fixed inset-0 z-50 pt-20 px-6">
          <div className="flex flex-col space-y-6 items-center">
            <a href="#" className="text-white text-xl py-2" onClick={toggleMenu}>SHOP</a>
            <a href="#" className="text-white text-xl py-2" onClick={toggleMenu}>COLLECTION</a>
            <a href="#" className="text-white text-xl py-2" onClick={toggleMenu}>ABOUT</a>
            <a href="#" className="text-white text-xl py-2" onClick={toggleMenu}>CONTACT</a>
            <Button variant="outline" className="w-full border-gray-700 mt-4">
              <ShoppingBag className="mr-2 h-5 w-5" />
              CART
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
