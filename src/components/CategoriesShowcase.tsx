'use client';

import React from 'react';
import { Laptop, Smartphone, Headphones, Watch, Camera, Gamepad2 } from 'lucide-react';

const CategoriesShowcase: React.FC = () => {
  const categories = [
    {
      icon: Laptop,
      name: 'Laptops',
      count: '250+ items'
    },
    {
      icon: Smartphone,
      name: 'Smartphones',
      count: '180+ items'
    },
    {
      icon: Headphones,
      name: 'Audio',
      count: '95+ items'
    },
    {
      icon: Watch,
      name: 'Wearables',
      count: '75+ items'
    },
    {
      icon: Camera,
      name: 'Cameras',
      count: '60+ items'
    },
    {
      icon: Gamepad2,
      name: 'Gaming',
      count: '120+ items'
    }
  ];

  return (
    <section className="py-8 px-4 bg-black/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold font-museo text-white text-center mb-6">
          Shop by <span className="text-primary">Category</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="group hover-lift cursor-pointer">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:border-primary/30">
                <div className="flex justify-center mb-3">
                  <category.icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-white font-museo mb-1">{category.name}</h3>
                <p className="text-xs text-gray-400">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;
