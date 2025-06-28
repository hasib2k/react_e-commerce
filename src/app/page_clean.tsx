'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Truck, HeadphonesIcon, CreditCard, Star, Users, Award, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import Footer from '@/components/Footer';
import GlassCard from '@/components/GlassCard';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Product data with reliable placeholder images
  const products = [
    { id: 1, name: 'Premium Headphones', price: 299, originalPrice: 399, category: 'electronics', rating: 4.8, reviews: 124, image: 'https://via.placeholder.com/300x300/1a1a2e/ffffff?text=Premium+Headphones', badge: 'Best Seller' },
    { id: 2, name: 'Smart Watch Pro', price: 449, originalPrice: 599, category: 'electronics', rating: 4.9, reviews: 89, image: 'https://via.placeholder.com/300x300/16213e/ffffff?text=Smart+Watch+Pro', badge: 'New' },
    { id: 3, name: 'Wireless Earbuds', price: 199, originalPrice: 249, category: 'electronics', rating: 4.7, reviews: 256, image: 'https://via.placeholder.com/300x300/0f3460/ffffff?text=Wireless+Earbuds', badge: 'Sale' },
    { id: 4, name: 'Gaming Mouse', price: 89, originalPrice: 129, category: 'electronics', rating: 4.6, reviews: 178, image: 'https://via.placeholder.com/300x300/533483/ffffff?text=Gaming+Mouse', badge: 'Hot' },
    { id: 5, name: 'USB-C Hub', price: 79, originalPrice: 99, category: 'gadgets', rating: 4.5, reviews: 93, image: 'https://via.placeholder.com/300x300/7209b7/ffffff?text=USB-C+Hub' },
    { id: 6, name: 'Portable Charger', price: 49, originalPrice: 69, category: 'gadgets', rating: 4.4, reviews: 67, image: 'https://via.placeholder.com/300x300/a663cc/ffffff?text=Portable+Charger' },
    { id: 7, name: 'Bluetooth Speaker', price: 129, originalPrice: 179, category: 'electronics', rating: 4.8, reviews: 203, image: 'https://via.placeholder.com/300x300/4c956c/ffffff?text=Bluetooth+Speaker', badge: 'Trending' },
    { id: 8, name: 'Phone Stand', price: 29, originalPrice: 39, category: 'accessories', rating: 4.3, reviews: 145, image: 'https://via.placeholder.com/300x300/2f9599/ffffff?text=Phone+Stand' },
    { id: 9, name: 'Laptop Sleeve', price: 39, originalPrice: 59, category: 'accessories', rating: 4.6, reviews: 112, image: 'https://via.placeholder.com/300x300/61a5c2/ffffff?text=Laptop+Sleeve' },
    { id: 10, name: 'Desk Organizer', price: 59, originalPrice: 79, category: 'accessories', rating: 4.5, reviews: 88, image: 'https://via.placeholder.com/300x300/a9d6e5/ffffff?text=Desk+Organizer' },
    { id: 11, name: 'LED Strip Lights', price: 35, originalPrice: 49, category: 'gadgets', rating: 4.7, reviews: 234, image: 'https://via.placeholder.com/300x300/e63946/ffffff?text=LED+Strip+Lights', badge: 'Popular' },
    { id: 12, name: 'Webcam HD', price: 89, originalPrice: 119, category: 'electronics', rating: 4.4, reviews: 156, image: 'https://via.placeholder.com/300x300/f77f00/ffffff?text=Webcam+HD' }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      let priceMatch = true;
      
      if (selectedPriceRange !== 'all') {
        const price = product.price;
        switch (selectedPriceRange) {
          case 'under-50':
            priceMatch = price < 50;
            break;
          case '50-100':
            priceMatch = price >= 50 && price <= 100;
            break;
          case '100-200':
            priceMatch = price >= 100 && price <= 200;
            break;
          case 'over-200':
            priceMatch = price > 200;
            break;
        }
      }
      
      return categoryMatch && priceMatch;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-lg font-bold text-primary mb-1">500K+</div>
            <div className="text-xs text-gray-300">Happy Customers</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-lg font-bold text-primary mb-1">50K+</div>
            <div className="text-xs text-gray-300">Products Sold</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-lg font-bold text-primary mb-1">4.9★</div>
            <div className="text-xs text-gray-300">Average Rating</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-all duration-300">
            <div className="text-lg font-bold text-primary mb-1">99%</div>
            <div className="text-xs text-gray-300">Satisfaction</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-4">
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-70">
            <div className="flex items-center text-gray-300">
              <Shield className="w-3 h-3 text-primary mr-1" />
              <span className="font-museo text-xs">Verified Reviews</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Users className="w-3 h-3 text-primary mr-1" />
              <span className="font-museo text-xs">Real Customers</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Award className="w-3 h-3 text-primary mr-1" />
              <span className="font-museo text-xs">Trusted Platform</span>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <section className="py-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-museo text-white mb-2">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-sm text-gray-300 max-w-xl mx-auto font-museo">
              Discover our handpicked selection of premium products
            </p>
          </div>
          
          <ProductFilters
            onCategoryChange={setSelectedCategory}
            onPriceRangeChange={setSelectedPriceRange}
            onSortChange={setSortBy}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <p className="text-gray-300 text-lg font-museo mb-2">No products found matching your criteria.</p>
              <p className="text-gray-400 text-sm font-museo">Try adjusting your filters or search terms.</p>
            </div>
          )}
          
          {/* View All Products Button */}
          <div className="text-center mt-6">
            <Link
              href="/products"
              className="group relative inline-flex items-center px-6 py-3 overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105"
            >
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center">
                <span className="text-white font-bold text-sm font-museo group-hover:text-primary transition-colors duration-300">
                  View All Products
                </span>
                <ArrowRight className="w-4 h-4 ml-2 text-white group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-museo text-white mb-4">
              Why Choose <span className="text-primary">Buyble</span>
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto font-museo">
              Experience premium shopping with our exclusive features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white font-museo mb-2">Secure Shopping</h3>
              <p className="text-gray-300 text-sm">Bank-level security for all transactions</p>
            </GlassCard>
            
            <GlassCard className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white font-museo mb-2">Fast Delivery</h3>
              <p className="text-gray-300 text-sm">Same-day delivery in major cities</p>
            </GlassCard>
            
            <GlassCard className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-3">
                <HeadphonesIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white font-museo mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Always here to help you</p>
            </GlassCard>
            
            <GlassCard className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-3">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white font-museo mb-2">Easy Returns</h3>
              <p className="text-gray-300 text-sm">60-day money-back guarantee</p>
            </GlassCard>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-museo text-white mb-2">
              Customer <span className="text-primary">Reviews</span>
            </h2>
            <p className="text-sm text-gray-300 max-w-xl mx-auto font-museo">
              See what our customers say about us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GlassCard className="p-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-3 text-sm">
                &quot;Amazing products and fast delivery. Highly recommended!&quot;
              </p>
              <div className="flex items-center">
                <Image 
                  src="https://via.placeholder.com/40x40/1a1a2e/fff?text=S" 
                  alt="Sarah J." 
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">Sarah J.</h4>
                  <p className="text-gray-400 text-xs">Verified Buyer</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-3 text-sm">
                &quot;Great quality products at competitive prices. Love shopping here!&quot;
              </p>
              <div className="flex items-center">
                <Image 
                  src="https://via.placeholder.com/40x40/16213e/fff?text=M" 
                  alt="Michael C." 
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">Michael C.</h4>
                  <p className="text-gray-400 text-xs">Tech Reviewer</p>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="p-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-3 text-sm">
                &quot;Excellent customer service and hassle-free returns. My go-to store!&quot;
              </p>
              <div className="flex items-center">
                <Image 
                  src="https://via.placeholder.com/40x40/0f3460/fff?text=E" 
                  alt="Emily D." 
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">Emily D.</h4>
                  <p className="text-gray-400 text-xs">Business Owner</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
