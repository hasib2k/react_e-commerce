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
      bgColor: 'bg-primary/20'
    },
    {
      icon: Gift,
      title: 'FREE SHIPPING',
      description: 'Orders Over $50',
      detail: 'No minimum required',
      bgColor: 'bg-primary/15'
    },
    {
      icon: Zap,
      title: 'FLASH DEAL',
      description: 'Limited Time',
      detail: 'Up to 70% off',
      bgColor: 'bg-primary/25'
    },
    {
      icon: Clock,
      title: '24H DELIVERY',
      description: 'Express Shipping',
      detail: 'For premium members',
      bgColor: 'bg-primary/10'
    }
  ];

  return (
    <section className="py-6 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {promos.map((promo, index) => (
            <GlassCard key={index} className={`text-center hover-lift ${promo.bgColor} border-2 border-primary/30 group relative overflow-hidden p-3`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <promo.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white font-museo mb-1">{promo.title}</h3>
                <p className="text-sm text-gray-200 font-museo mb-1">{promo.description}</p>
                <p className="text-xs text-gray-300">{promo.detail}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
