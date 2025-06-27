'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, Gamepad2, Tablet, Monitor, Keyboard, Mouse, ArrowRight, Zap, Cpu, Wifi, Star } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider, useCart } from '@/context/CartContext';

const GadgetsContent: React.FC = () => {
  const { state } = useCart();

  const featuredCategories = [
    {
      icon: Smartphone,
      title: 'Smart Devices',
      description: 'Connected devices that make life easier and more efficient',
      products: 156,
      popular: true
    },
    {
      icon: Gamepad2,
      title: 'Gaming Gadgets',
      description: 'Controllers, accessories, and gaming peripherals',
      products: 134,
      popular: true
    },
    {
      icon: Tablet,
      title: 'Tablets & E-Readers',
      description: 'Portable screens for reading, drawing, and entertainment',
      products: 89,
      popular: false
    },
    {
      icon: Monitor,
      title: 'Display Technology',
      description: 'Monitors, projectors, and advanced display solutions',
      products: 67,
      popular: false
    },
    {
      icon: Keyboard,
      title: 'Input Devices',
      description: 'Mechanical keyboards, mice, and innovative input methods',
      products: 98,
      popular: true
    },
    {
      icon: Mouse,
      title: 'PC Accessories',
      description: 'Enhance your computer setup with premium accessories',
      products: 112,
      popular: false
    }
  ];

  const innovations = [
    'AI-Powered', 'IoT Connected', 'Wireless', 'Voice Controlled', 'Biometric', 'Solar Powered', 'Foldable', 'Modular'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Cutting-Edge Tech',
      description: 'Latest innovations and breakthrough technologies'
    },
    {
      icon: Cpu,
      title: 'Performance Optimized',
      description: 'High-performance gadgets for demanding users'
    },
    {
      icon: Wifi,
      title: 'Smart Connectivity',
      description: 'Seamless integration with your digital ecosystem'
    }
  ];

  const trendingGadgets = [
    {
      name: 'AI-Powered Smart Assistants',
      trend: '+67% this quarter',
      description: 'Voice-controlled home automation and personal assistants'
    },
    {
      name: 'Foldable Display Devices',
      trend: '+43% this quarter',
      description: 'Revolutionary foldable phones and tablets'
    },
    {
      name: 'Wireless Charging Stations',
      trend: '+38% this quarter',
      description: 'Fast wireless charging for multiple devices'
    },
    {
      name: 'VR/AR Headsets',
      trend: '+55% this quarter',
      description: 'Immersive virtual and augmented reality experiences'
    },
    {
      name: 'Smart Fitness Trackers',
      trend: '+41% this quarter',
      description: 'Advanced health monitoring and fitness tracking'
    },
    {
      name: 'Portable Power Banks',
      trend: '+29% this quarter',
      description: 'High-capacity portable charging solutions'
    }
  ];

  return (
    <div>
      <Navbar cartCount={state.itemCount} />
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold font-museo text-white mb-6">
              <span className="text-primary">Gadgets</span> & Innovation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-museo leading-relaxed">
              Explore the future of technology with our cutting-edge gadgets collection. 
              From smart home devices to gaming accessories, discover innovations that enhance your digital lifestyle.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <GlassCard key={index}>
                <div className="text-center p-6">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-museo text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-museo">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Categories Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-museo text-white mb-8 text-center">
              Gadget <span className="text-primary">Categories</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCategories.map((category, index) => (
                <GlassCard key={index}>
                  <div className="p-8 text-center relative overflow-hidden group">
                    {category.popular && (
                      <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold font-museo">
                        HOT
                      </div>
                    )}
                    <category.icon className="w-16 h-16 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold font-museo text-white mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 font-museo mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-primary font-bold font-museo">
                        {category.products} Items
                      </span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/products?category=${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center bg-primary text-black px-6 py-3 rounded-lg font-bold font-museo hover:bg-white transition-colors duration-300 group"
                    >
                      Explore
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Trending Gadgets */}
          <div className="mb-16">
            <GlassCard>
              <div className="p-8">
                <h2 className="text-3xl font-bold font-museo text-white mb-8 text-center">
                  <span className="text-primary">Trending</span> Gadgets
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trendingGadgets.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold font-museo text-white group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-primary font-bold font-museo text-sm bg-primary/20 px-2 py-1 rounded">
                          {item.trend}
                        </span>
                      </div>
                      <p className="text-gray-300 font-museo">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Innovation Types */}
          <div className="mb-16">
            <GlassCard>
              <div className="p-8 text-center">
                <h2 className="text-3xl font-bold font-museo text-white mb-8">
                  Innovation <span className="text-primary">Technologies</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {innovations.map((innovation, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50 backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-300 cursor-pointer group"
                    >
                      <span className="text-white font-museo font-medium group-hover:text-primary transition-colors">
                        {innovation}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <GlassCard>
              <div className="p-12">
                <h2 className="text-4xl font-bold font-museo text-white mb-6">
                  Embrace the <span className="text-primary">Future</span> Today
                </h2>
                <p className="text-gray-300 font-museo mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  Transform your digital lifestyle with cutting-edge gadgets. From productivity tools 
                  to entertainment devices, discover technology that enhances every aspect of your life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/products?category=gadgets"
                    className="bg-primary text-black px-8 py-4 rounded-lg font-bold font-museo hover:bg-white transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    Shop All Gadgets
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50 text-white px-8 py-4 rounded-lg font-bold font-museo backdrop-blur-sm transition-all duration-300"
                  >
                    Tech Consultation
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default function GadgetsPage() {
  return (
    <CartProvider>
      <GadgetsContent />
    </CartProvider>
  );
}
