'use client';

import React from 'react';
import Link from 'next/link';
import { Watch, Gem, ShoppingBag, Glasses, Crown, Gift, ArrowRight, Sparkles, Heart, Truck, Star } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider, useCart } from '@/context/CartContext';

const AccessoriesContent: React.FC = () => {
  const { state } = useCart();

  const featuredCategories = [
    {
      icon: Watch,
      title: 'Watches & Timepieces',
      description: 'Luxury watches and smart timepieces for every occasion',
      products: 187,
      popular: true
    },
    {
      icon: Gem,
      title: 'Jewelry & Fine Accessories',
      description: 'Elegant jewelry and precious metal accessories',
      products: 234,
      popular: true
    },
    {
      icon: ShoppingBag,
      title: 'Bags & Handbags',
      description: 'Stylish bags for work, travel, and everyday use',
      products: 156,
      popular: false
    },
    {
      icon: Glasses,
      title: 'Sunglasses & Eyewear',
      description: 'Designer sunglasses and optical accessories',
      products: 98,
      popular: true
    },
    {
      icon: Crown,
      title: 'Hair Accessories',
      description: 'Beautiful hair clips, bands, and styling accessories',
      products: 89,
      popular: false
    },
    {
      icon: Gift,
      title: 'Gift Sets & Collections',
      description: 'Curated accessory sets perfect for gifting',
      products: 67,
      popular: false
    }
  ];

  const styles = [
    'Classic', 'Modern', 'Vintage', 'Luxury', 'Casual', 'Formal', 'Boho', 'Minimalist', 'Statement', 'Designer'
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Handpicked accessories from renowned designers and brands'
    },
    {
      icon: Heart,
      title: 'Style Expertise',
      description: 'Professional styling advice to complete your look'
    },
    {
      icon: Truck,
      title: 'Careful Packaging',
      description: 'Elegant packaging and secure shipping for all accessories'
    }
  ];

  const trendingAccessories = [
    {
      name: 'Vintage Gold Chain Necklaces',
      trend: '+45% this month',
      description: 'Layered gold chains are making a comeback'
    },
    {
      name: 'Smart Fitness Watches',
      trend: '+38% this month',
      description: 'Health-focused smartwatches with style'
    },
    {
      name: 'Sustainable Tote Bags',
      trend: '+29% this month',
      description: 'Eco-friendly bags for conscious consumers'
    },
    {
      name: 'Blue Light Glasses',
      trend: '+52% this month',
      description: 'Protective eyewear for digital lifestyles'
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
              <span className="text-primary">Accessories</span> Collection
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-museo leading-relaxed">
              Complete your style with our curated selection of premium accessories. 
              From elegant jewelry to functional bags, find the perfect pieces to express your personality.
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
              Shop by <span className="text-primary">Category</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCategories.map((category, index) => (
                <GlassCard key={index}>
                  <div className="p-8 text-center relative overflow-hidden group">
                    {category.popular && (
                      <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-xs font-bold font-museo">
                        TRENDING
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
                      Shop Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Trending Accessories */}
          <div className="mb-16">
            <GlassCard>
              <div className="p-8">
                <h2 className="text-3xl font-bold font-museo text-white mb-8 text-center">
                  <span className="text-primary">Trending</span> This Month
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trendingAccessories.map((item, index) => (
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

          {/* Style Categories */}
          <div className="mb-16">
            <GlassCard>
              <div className="p-8 text-center">
                <h2 className="text-3xl font-bold font-museo text-white mb-8">
                  Shop by <span className="text-primary">Style</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {styles.map((style, index) => (
                    <Link
                      key={index}
                      href={`/products?style=${style.toLowerCase()}`}
                      className="bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50 backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-300 cursor-pointer group"
                    >
                      <span className="text-white font-museo font-medium group-hover:text-primary transition-colors">
                        {style}
                      </span>
                    </Link>
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
                  Elevate Your <span className="text-primary">Style</span> Today
                </h2>
                <p className="text-gray-300 font-museo mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  Discover accessories that complement your unique style. From everyday essentials 
                  to statement pieces, find the perfect additions to your wardrobe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/products?category=accessories"
                    className="bg-primary text-black px-8 py-4 rounded-lg font-bold font-museo hover:bg-white transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    Shop All Accessories
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50 text-white px-8 py-4 rounded-lg font-bold font-museo backdrop-blur-sm transition-all duration-300"
                  >
                    Style Consultation
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

export default function AccessoriesPage() {
  return (
    <CartProvider>
      <AccessoriesContent />
    </CartProvider>
  );
}
