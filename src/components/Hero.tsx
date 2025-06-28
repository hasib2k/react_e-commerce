'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Star, Users, Award, TrendingUp } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating elements */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-primary opacity-20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-3/4 right-1/6 w-48 h-48 bg-primary opacity-5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary opacity-30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-primary opacity-40 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-primary opacity-50 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 right-20 w-5 h-5 bg-primary opacity-25 rounded-full animate-ping delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-museo text-white mb-8 leading-tight">
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
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 font-museo max-w-5xl mx-auto leading-relaxed">
            Experience the future of shopping with our 
            <span className="text-primary font-bold"> liquid glass interface</span>. 
            Premium quality, cutting-edge technology, exceptional service.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/products"
              className="group relative bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-12 py-5 rounded-2xl text-xl font-museo font-bold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 w-full sm:w-auto justify-center shadow-2xl hover:shadow-primary/25 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ShoppingBag className="w-7 h-7 relative z-10" />
              <span className="relative z-10">Start Shopping</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Link>
            
            <button
              onClick={scrollToProducts}
              className="group relative border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-5 rounded-2xl text-xl font-museo font-bold transition-all duration-300 flex items-center space-x-3 w-full sm:w-auto justify-center backdrop-blur-xl bg-white/5 hover:bg-primary/100"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <GlassCard className="text-center hover-lift group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-1">2.5M+</h3>
                <p className="text-gray-300 font-museo text-sm">Happy Customers</p>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-1">4.9/5</h3>
                <p className="text-gray-300 font-museo text-sm">Customer Rating</p>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-1">24hrs</h3>
                <p className="text-gray-300 font-museo text-sm">Fast Delivery</p>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-1">25+</h3>
                <p className="text-gray-300 font-museo text-sm">Industry Awards</p>
              </div>
            </GlassCard>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
