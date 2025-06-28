'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const sliderImages = [
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=900&q=80",
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[40vh] flex items-center justify-center px-4 py-6 relative overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {sliderImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Slider ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === idx ? 'opacity-60' : 'opacity-0'} select-none`}
            draggable={false}
          />
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Primary floating elements */}
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary opacity-12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary opacity-8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-primary opacity-15 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-3/4 right-1/6 w-36 h-36 bg-primary opacity-4 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary opacity-25 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-32 w-2 h-2 bg-primary opacity-35 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-24 left-32 w-2 h-2 bg-primary opacity-40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 right-20 w-4 h-4 bg-primary opacity-20 rounded-full animate-ping delay-1000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-20">
        {/* Main Content */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-museo text-white mb-3 leading-tight drop-shadow-lg">
            <span className="block">Welcome to</span>
            <span className="block animate-pulse">
              <span className="text-blue-400">B</span>
              <span className="text-purple-400">U</span>
              <span className="text-pink-400">Y</span>
              <span className="text-primary">B</span>
              <span className="text-yellow-400">L</span>
              <span className="text-green-400">E</span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm md:text-base lg:text-lg text-gray-100 mb-4 font-museo max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Experience the future of shopping with our 
            <span className="text-primary font-bold"> liquid glass interface</span>. 
            Premium quality, cutting-edge technology, exceptional service.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <Link
              href="/products"
              className="group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-6 py-2 rounded-xl text-sm font-museo font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center shadow-xl hover:shadow-primary/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ShoppingBag className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Start Shopping</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </Link>
            
            <button
              onClick={scrollToProducts}
              className="group relative border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-xl text-sm font-museo font-bold transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center backdrop-blur-xl bg-white/5 hover:bg-primary/100"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          {/* Removed stats row for compact hero */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
