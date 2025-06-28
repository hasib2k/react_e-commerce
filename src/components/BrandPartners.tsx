'use client';

import React from 'react';
import Image from 'next/image';
import GlassCard from './GlassCard';

const BrandPartners: React.FC = () => {
  const brands = [
    {
      name: 'Apple',
      logo: 'https://via.placeholder.com/120x80/1a1a2e/ffffff?text=Apple',
      description: 'Premium technology products'
    },
    {
      name: 'Samsung',
      logo: 'https://via.placeholder.com/120x80/16213e/ffffff?text=Samsung',
      description: 'Innovation and quality combined'
    },
    {
      name: 'Sony',
      logo: 'https://via.placeholder.com/120x80/0f3460/ffffff?text=Sony',
      description: 'Entertainment and electronics'
    },
    {
      name: 'Microsoft',
      logo: 'https://via.placeholder.com/120x80/533483/ffffff?text=Microsoft',
      description: 'Technology solutions'
    },
    {
      name: 'Dell',
      logo: 'https://via.placeholder.com/120x80/7209b7/ffffff?text=Dell',
      description: 'Computing excellence'
    },
    {
      name: 'HP',
      logo: 'https://via.placeholder.com/120x80/a663cc/ffffff?text=HP',
      description: 'Reliable technology'
    }
  ];

  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-museo text-white text-center mb-2">
          Trusted <span className="text-primary">Brand Partners</span>
        </h2>
        <p className="text-sm text-gray-300 text-center mb-6 font-museo max-w-2xl mx-auto">
          We partner with the world&apos;s leading brands to bring you authentic, high-quality products with full warranty coverage.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {brands.map((brand, index) => (
            <GlassCard key={index} className="text-center hover-lift cursor-pointer group p-2">
              <div className="relative overflow-hidden rounded-lg mb-1.5">
                <Image 
                  src={brand.logo} 
                  alt={brand.name}
                  width={80}
                  height={40}
                  className="w-full h-10 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <h3 className="text-sm font-bold text-white font-museo mb-1">{brand.name}</h3>
              <p className="text-xs text-gray-300">{brand.description}</p>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <GlassCard className="inline-block p-2">
            <p className="text-gray-300 font-museo text-xs">
              <span className="text-primary font-bold">100%</span> Authentic Products • 
              <span className="text-primary font-bold"> Official</span> Warranty • 
              <span className="text-primary font-bold"> Authorized</span> Retailer
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
