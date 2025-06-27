'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, Laptop, Headphones, Camera, Watch, Speaker, ArrowRight, Zap, Shield, Award, Star } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider, useCart } from '@/context/CartContext';

const ElectronicsContent: React.FC = () => {
  const { state } = useCart();

  const featuredCategories = [
    {
      icon: Smartphone,
      title: 'Smartphones',
      description: 'Latest flagship phones with cutting-edge technology',
      products: 245,
      popular: true
    },
    {
      icon: Laptop,
      title: 'Laptops & Computers',
      description: 'High-performance laptops for work and gaming',
      products: 189,
      popular: true
    },
    {
      icon: Headphones,
      title: 'Audio & Headphones',
      description: 'Premium sound quality for music lovers',
      products: 156,
      popular: false
    },
    {
      icon: Camera,
      title: 'Cameras & Photography',
      description: 'Professional cameras and photography equipment',
      products: 98,
      popular: false
    },
    {
      icon: Watch,
      title: 'Smartwatches',
      description: 'Advanced fitness and connectivity features',
      products: 87,
      popular: true
    },
    {
      icon: Speaker,
      title: 'Speakers & Sound',
      description: 'Home theater and portable audio systems',
      products: 134,
      popular: false
    }
  ];

  const brands = [
    'Apple', 'Samsung', 'Sony', 'Dell', 'HP', 'Lenovo', 'Canon', 'Nikon', 'Bose', 'JBL', 'LG', 'Microsoft'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'Cutting-edge electronics with the newest innovations'
    },
    {
      icon: Shield,
      title: 'Warranty Protection',
      description: 'Comprehensive warranty coverage on all electronics'
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'Only authentic products from authorized dealers'
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
              <span className="text-primary">Electronics</span> Collection
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-museo leading-relaxed">
              Discover the latest in technology with our comprehensive electronics collection. 
              From smartphones to laptops, we offer premium devices from top brands worldwide.
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
                        POPULAR
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
                        {category.products} Products
                      </span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/products?category=${category.title.toLowerCase()}`}
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

          {/* Popular Brands */}
          <div className="mb-16">
            <GlassCard>
              <div className="p-8 text-center">
                <h2 className="text-3xl font-bold font-museo text-white mb-8">
                  Top <span className="text-primary">Electronics</span> Brands
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50 backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-300 cursor-pointer group"
                    >
                      <span className="text-white font-museo font-medium group-hover:text-primary transition-colors">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Why Choose Our Electronics */}
          <div className="mb-16">
            <GlassCard>
              <div className="p-8">
                <h2 className="text-3xl font-bold font-museo text-white mb-8 text-center">
                  Why Choose Our <span className="text-primary">Electronics</span>?
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold font-museo text-primary mb-4">Quality Assurance</h3>
                    <p className="text-gray-300 font-museo mb-6 leading-relaxed">
                      Every electronic device in our collection undergoes rigorous quality testing. 
                      We partner only with authorized dealers and manufacturers to ensure authenticity 
                      and reliability.
                    </p>
                    <h3 className="text-xl font-bold font-museo text-primary mb-4">Expert Support</h3>
                    <p className="text-gray-300 font-museo leading-relaxed">
                      Our technical support team consists of certified professionals who can help 
                      you choose the right device and provide ongoing assistance with your purchases.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-museo text-primary mb-4">Competitive Pricing</h3>
                    <p className="text-gray-300 font-museo mb-6 leading-relaxed">
                      We offer competitive prices on all electronics with regular promotions and 
                      special deals. Our price match guarantee ensures you get the best value.
                    </p>
                    <h3 className="text-xl font-bold font-museo text-primary mb-4">Fast Shipping</h3>
                    <p className="text-gray-300 font-museo leading-relaxed">
                      Free standard shipping on orders over $99, with express delivery options 
                      available. All electronics are carefully packaged to prevent damage during transit.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <GlassCard>
              <div className="p-12">
                <h2 className="text-4xl font-bold font-museo text-white mb-6">
                  Ready to Upgrade Your <span className="text-primary">Tech</span>?
                </h2>
                <p className="text-gray-300 font-museo mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  Browse our complete electronics collection and find the perfect device for your needs. 
                  From everyday essentials to cutting-edge innovations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/products?category=electronics"
                    className="bg-primary text-black px-8 py-4 rounded-lg font-bold font-museo hover:bg-white transition-colors duration-300 inline-flex items-center justify-center"
                  >
                    View All Electronics
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50 text-white px-8 py-4 rounded-lg font-bold font-museo backdrop-blur-sm transition-all duration-300"
                  >
                    Get Expert Advice
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

export default function ElectronicsPage() {
  return (
    <CartProvider>
      <ElectronicsContent />
    </CartProvider>
  );
}
