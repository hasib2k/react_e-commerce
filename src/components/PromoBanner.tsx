'use client';

import React from 'react';
import { Zap, Gift, Percent, Clock } from 'lucide-react';
import GlassCard from './GlassCard';

const PromoBanner: React.FC = () => {
  const promos = [
    {
      icon: Percent,
      title: '50% OFF',
      description: 'Summer Sale',
      detail: 'On selected electronics',
      bgColor: 'bg-red-500/20'
    },
    {
      icon: Gift,
      title: 'FREE SHIPPING',
      description: 'Orders Over $50',
      detail: 'No minimum required',
      bgColor: 'bg-green-500/20'
    },
    {
      icon: Zap,
      title: 'FLASH DEAL',
      description: 'Limited Time',
      detail: 'Up to 70% off',
      bgColor: 'bg-yellow-500/20'
    },
    {
      icon: Clock,
      title: '24H DELIVERY',
      description: 'Express Shipping',
      detail: 'For premium members',
      bgColor: 'bg-blue-500/20'
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo, index) => (
            <GlassCard key={index} className={`text-center hover-lift ${promo.bgColor} border-2 border-primary/30`}>
              <promo.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white font-museo mb-2">{promo.title}</h3>
              <p className="text-lg text-gray-200 font-museo mb-1">{promo.description}</p>
              <p className="text-sm text-gray-300">{promo.detail}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
