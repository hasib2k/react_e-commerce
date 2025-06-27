'use client';

import React from 'react';
import { Laptop, Smartphone, Headphones, Watch, Camera, Gamepad2 } from 'lucide-react';
import GlassCard from './GlassCard';

const CategoriesShowcase: React.FC = () => {
  const categories = [
    {
      icon: Laptop,
      name: 'Laptops',
      count: '250+ items',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop'
    },
    {
      icon: Smartphone,
      name: 'Smartphones',
      count: '180+ items',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop'
    },
    {
      icon: Headphones,
      name: 'Audio',
      count: '95+ items',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop'
    },
    {
      icon: Watch,
      name: 'Wearables',
      count: '75+ items',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop'
    },
    {
      icon: Camera,
      name: 'Cameras',
      count: '60+ items',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=200&fit=crop'
    },
    {
      icon: Gamepad2,
      name: 'Gaming',
      count: '120+ items',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-16 px-4 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
          Shop by <span className="text-primary">Category</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <GlassCard key={index} className="group hover-lift cursor-pointer overflow-hidden">
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
                <category.icon className="absolute top-4 right-4 w-8 h-8 text-primary" />
              </div>
              
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white font-museo mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.count}</p>
                <button className="w-full glass-button bg-primary/20 hover:bg-primary/40 text-white py-2 px-4 rounded-lg transition-all duration-300 border border-primary/30">
                  Explore Category
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;
