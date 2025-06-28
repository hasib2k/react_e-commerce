'use client';

import React from 'react';
import Image from 'next/image';
import GlassCard from './GlassCard';

const BrandPartners: React.FC = () => {
  const brands = [
    {
      name: 'Apple',
      logo: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=120&h=80&fit=crop',
      description: 'Premium technology products'
    },
    {
      name: 'Samsung',
      logo: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=120&h=80&fit=crop',
      description: 'Innovation and quality combined'
    },
    {
      name: 'Sony',
      logo: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=120&h=80&fit=crop',
      description: 'Entertainment and electronics'
    },
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?w=120&h=80&fit=crop',
      description: 'Technology solutions'
    },
    {
      name: 'Dell',
      logo: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=120&h=80&fit=crop',
      description: 'Computing excellence'
    },
    {
      name: 'HP',
      logo: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=120&h=80&fit=crop',
      description: 'Reliable technology'
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold font-museo text-white text-center mb-4">
          Trusted <span className="text-primary">Brand Partners</span>
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12 font-museo max-w-3xl mx-auto">
          We partner with the world&apos;s leading brands to bring you authentic, high-quality products with full warranty coverage.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <GlassCard key={index} className="text-center hover-lift cursor-pointer group">
              <div className="relative overflow-hidden rounded-lg mb-3">
                <Image 
                  src={brand.logo} 
                  alt={brand.name}
                  width={120}
                  height={64}
                  className="w-full h-16 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <h3 className="text-lg font-bold text-white font-museo mb-2">{brand.name}</h3>
              <p className="text-sm text-gray-300">{brand.description}</p>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <GlassCard className="inline-block">
            <p className="text-gray-300 font-museo">
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
