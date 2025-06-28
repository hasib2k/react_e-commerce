'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Truck, HeadphonesIcon, CreditCard, Star, Users, Award, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
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
    const filtered = products.filter(product => {
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
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return filtered.sort((a, b) => b.id - a.id);
      default:
        // Featured - keep original order
        return filtered;
    }
  }, [selectedCategory, selectedPriceRange, sortBy, products]);

  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Image Slider Section */}
      <div className="container mx-auto px-2 mt-4 mb-6">
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Simple slider using overflow-x-scroll for now, can be replaced with a carousel lib for more features */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide rounded-xl">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" alt="Slider 1" className="h-40 md:h-56 rounded-xl object-cover min-w-[60%] md:min-w-[30%] shadow-lg border border-white/10" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Slider 2" className="h-40 md:h-56 rounded-xl object-cover min-w-[60%] md:min-w-[30%] shadow-lg border border-white/10" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Slider 3" className="h-40 md:h-56 rounded-xl object-cover min-w-[60%] md:min-w-[30%] shadow-lg border border-white/10" />
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Slider 4" className="h-40 md:h-56 rounded-xl object-cover min-w-[60%] md:min-w-[30%] shadow-lg border border-white/10" />
            <img src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80" alt="Slider 5" className="h-40 md:h-56 rounded-xl object-cover min-w-[60%] md:min-w-[30%] shadow-lg border border-white/10" />
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-4">
        {/* Moved Featured Products heading/description to ProductFilters */}
        <ProductFilters
          onCategoryChange={setSelectedCategory}
          onPriceRangeChange={setSelectedPriceRange}
          onSortChange={setSortBy}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <p className="text-gray-300 text-sm font-museo mb-1">No products found matching your criteria.</p>
            <p className="text-gray-400 text-xs font-museo">Try adjusting your filters or search terms.</p>
          </div>
        )}
        {/* View All Products Button */}
        <div className="text-center mt-4">
          <Link
            href="/products"
            className="group relative inline-flex items-center px-4 py-2 overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105"
          >
            {/* Liquid Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-xl"></div>
            {/* Content */}
            <div className="relative z-10 flex items-center">
              <span className="text-white font-bold text-xs font-museo group-hover:text-primary transition-colors duration-300">
                View All Products
              </span>
              <ArrowRight className="w-3 h-3 ml-1 text-white group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-6">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold font-museo text-white mb-2">
            Why Choose <span className="text-primary">Buyble</span>
          </h2>
          <p className="text-xs text-gray-300 max-w-2xl mx-auto font-museo">
            Experience premium shopping with our exclusive features
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <GlassCard className="text-center p-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-bold text-white font-museo mb-1">Secure Shopping</h3>
            <p className="text-gray-300 text-xs">Bank-level security for all transactions</p>
          </GlassCard>
          
          <GlassCard className="text-center p-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-2">
              <Truck className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-bold text-white font-museo mb-1">Fast Delivery</h3>
            <p className="text-gray-300 text-xs">Same-day delivery in major cities</p>
          </GlassCard>
          
          <GlassCard className="text-center p-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-2">
              <HeadphonesIcon className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-bold text-white font-museo mb-1">24/7 Support</h3>
            <p className="text-gray-300 text-xs">Always here to help you</p>
          </GlassCard>
          
          <GlassCard className="text-center p-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-2">
              <CreditCard className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-sm font-bold text-white font-museo mb-1">Easy Returns</h3>
            <p className="text-gray-300 text-xs">60-day money-back guarantee</p>
          </GlassCard>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-4">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold font-museo text-white mb-1">
            Customer <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-xs text-gray-300 max-w-xl mx-auto font-museo">
            See what our customers say about us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <GlassCard className="p-3">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-2 text-xs">
              &quot;Amazing products and fast delivery. Highly recommended!&quot;
            </p>
            <div className="flex items-center">
              <Image 
                src="https://via.placeholder.com/40x40/1a1a2e/fff?text=S" 
                alt="Sarah J." 
                width={24}
                height={24}
                className="w-6 h-6 rounded-full mr-2"
              />
              <div>
                <h4 className="text-white font-bold text-xs">Sarah J.</h4>
                <p className="text-gray-400 text-xs">Verified Buyer</p>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-3">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-2 text-xs">
              &quot;Great quality products at competitive prices. Love shopping here!&quot;
            </p>
            <div className="flex items-center">
              <Image 
                src="https://via.placeholder.com/40x40/16213e/fff?text=M" 
                alt="Michael C." 
                width={24}
                height={24}
                className="w-6 h-6 rounded-full mr-2"
              />
              <div>
                <h4 className="text-white font-bold text-xs">Michael C.</h4>
                <p className="text-gray-400 text-xs">Tech Reviewer</p>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-3">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 mb-2 text-xs">
              &quot;Excellent customer service and hassle-free returns. My go-to store!&quot;
            </p>
            <div className="flex items-center">
              <Image 
                src="https://via.placeholder.com/40x40/0f3460/fff?text=E" 
                alt="Emily D." 
                width={24}
                height={24}
                className="w-6 h-6 rounded-full mr-2"
              />
              <div>
                <h4 className="text-white font-bold text-xs">Emily D.</h4>
                <p className="text-gray-400 text-xs">Business Owner</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
