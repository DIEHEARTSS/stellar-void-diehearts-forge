
import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white font-display text-xl font-bold tracking-wider">
              DIE<span className="text-gray-400">HEARTS</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Edge-defining clothing for those who dare to stand out.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">All Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Featured</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Join our newsletter for the latest updates and exclusive offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-900 border-gray-800 text-white py-2 px-3 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-700 w-full"
              />
              <button className="bg-white text-black py-2 px-4 text-sm rounded-r-md hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-900 text-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} DIEHEARTS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
