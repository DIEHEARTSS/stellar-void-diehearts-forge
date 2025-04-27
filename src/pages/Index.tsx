
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import StarBackground from '../components/StarBackground';
import ThreeDModel from '../components/ThreeDModel';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  const featuredRef = useRef<HTMLDivElement>(null);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <StarBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-tight tracking-tighter mb-6 dh-text-gradient">
            DIE<span className="text-gray-400">HEARTS</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Avant-garde clothing for those who live on the edge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="bg-white hover:bg-gray-200 text-black px-8 py-6 text-lg rounded-none">
              SHOP NOW
            </Button>
            <Button variant="outline" className="border-gray-700 hover:bg-gray-900 px-8 py-6 text-lg rounded-none">
              EXPLORE COLLECTION
            </Button>
          </div>
          
          <button 
            onClick={scrollToFeatured}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-pulse-slow"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-10 w-10" />
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={featuredRef} className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            FEATURED <span className="text-gray-400">PIECES</span>
          </h2>
          
          <div className="mb-16">
            <ThreeDModel className="w-full" />
            <div className="text-center mt-6">
              <p className="text-xl font-medium">Dark Essence Collection</p>
              <p className="text-gray-400 mt-2">Experience our latest 3D showcase</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group hover-trigger bg-gray-900 bg-opacity-40 backdrop-blur-sm p-6 flex flex-col hover:translate-y-[-5px] transition-all duration-300">
                <div className="h-64 bg-black flex items-center justify-center mb-4">
                  <div className="w-1/2 h-4/5 bg-gray-800"></div>
                </div>
                <h3 className="text-xl font-medium">Shadow Tee {item}</h3>
                <p className="text-gray-400 mt-1">$99.00</p>
                <Button variant="ghost" className="mt-4 hover-target self-start pl-0 flex items-center gap-2">
                  SHOP NOW <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-700 px-8">
              VIEW ALL PRODUCTS
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              OUR <span className="text-gray-400">STORY</span>
            </h2>
            <p className="text-gray-400 mb-8">
              DIEHEARTS was born from the desire to create clothing that embodies the avant-garde spirit. 
              Our pieces blend darkness and light, creating a unique aesthetic that challenges convention.
            </p>
            <Button variant="outline" className="border-gray-700">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm p-10 md:p-16 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-display font-bold mb-6">JOIN THE CULT</h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter for exclusive access to new drops, special offers and events.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-black border-gray-800 text-white py-3 px-4 rounded-none focus:outline-none focus:ring-1 focus:ring-gray-700 w-full"
                />
                <Button className="bg-white hover:bg-gray-200 text-black rounded-none">
                  SUBSCRIBE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
