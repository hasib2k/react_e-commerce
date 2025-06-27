'use client';

import React, { useState, useMemo } from 'react';
import { Shield, Truck, HeadphonesIcon, CreditCard, Star, Users, Award, CheckCircle, Mail, ArrowRight, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import Footer from '@/components/Footer';
import GlassCard from '@/components/GlassCard';
import PromoBanner from '@/components/PromoBanner';
import CategoriesShowcase from '@/components/CategoriesShowcase';
import BrandPartners from '@/components/BrandPartners';
import BlogSection from '@/components/BlogSection';
import { CartProvider, useCart, Product } from '@/context/CartContext';

// Expanded products data
const sampleProducts: (Product & { category: string })[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "High-quality wireless headphones with noise cancellation",
    category: "electronics"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced smartwatch with health monitoring",
    category: "electronics"
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    description: "Ergonomic laptop stand for better productivity",
    category: "accessories"
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    description: "Precision wireless mouse for work and gaming",
    category: "accessories"
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop",
    description: "Multi-port USB-C hub with 4K HDMI support",
    category: "gadgets"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Portable Bluetooth speaker with rich sound",
    category: "electronics"
  },
  {
    id: 7,
    name: "Phone Case",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
    description: "Protective phone case with wireless charging support",
    category: "accessories"
  },
  {
    id: 8,
    name: "Wireless Charger",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    description: "Fast wireless charging pad for smartphones",
    category: "gadgets"
  }
];

const MainContent: React.FC = () => {
  const { state, dispatch } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, categoryFilter, priceRange]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={state.itemCount} />
      
      <Hero />
      
      <PromoBanner />
      
      <section id="products" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Featured <span className="text-primary">Products</span>
          </h2>
          
          <ProductFilters
            onSearch={setSearchTerm}
            onCategoryFilter={setCategoryFilter}
            onPriceFilter={(min, max) => setPriceRange({ min, max })}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <CategoriesShowcase />

      {/* Features Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Why <span className="text-primary">Choose Us</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center hover-lift">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white font-museo mb-3">Secure Payments</h3>
              <p className="text-gray-300">Your transactions are protected with bank-level encryption and secure payment gateways.</p>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift">
              <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white font-museo mb-3">Fast Shipping</h3>
              <p className="text-gray-300">Free shipping on orders over $50. Get your products delivered within 2-3 business days.</p>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift">
              <HeadphonesIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white font-museo mb-3">24/7 Support</h3>
              <p className="text-gray-300">Our dedicated support team is available round the clock to assist you with any queries.</p>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift">
              <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white font-museo mb-3">Easy Returns</h3>
              <p className="text-gray-300">30-day hassle-free returns. Not satisfied? Get your money back with no questions asked.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="text-center hover-lift">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white font-museo mb-2">50,000+</h3>
              <p className="text-gray-300 text-lg font-museo">Happy Customers</p>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift">
              <Star className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white font-museo mb-2">4.9/5</h3>
              <p className="text-gray-300 text-lg font-museo">Average Rating</p>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-white font-museo mb-2">15+</h3>
              <p className="text-gray-300 text-lg font-museo">Industry Awards</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="hover-lift">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-300 mb-6 italic">
                &quot;Absolutely love the quality of products and the fast shipping. The customer service is top-notch!&quot;
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=50&h=50&fit=crop&crop=face" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-bold font-museo">Sarah Johnson</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover-lift">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-300 mb-6 italic">
                &quot;The best online shopping experience I&apos;ve had. Great products at competitive prices!&quot;
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-bold font-museo">Michael Chen</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover-lift">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-300 mb-6 italic">
                &quot;Outstanding quality and excellent customer support. Highly recommend to everyone!&quot;
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-bold font-museo">Emily Davis</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-museo text-white mb-8">
                Experience the <span className="text-primary">Difference</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white font-museo mb-2">Premium Quality</h3>
                    <p className="text-gray-300">Every product is carefully selected and tested to ensure the highest quality standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white font-museo mb-2">Competitive Pricing</h3>
                    <p className="text-gray-300">Get the best value for your money with our competitive pricing and regular discounts.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white font-museo mb-2">Warranty Protection</h3>
                    <p className="text-gray-300">All products come with comprehensive warranty coverage for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white font-museo mb-2">Expert Recommendations</h3>
                    <p className="text-gray-300">Our team of experts carefully curates products to match your needs and preferences.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <GlassCard className="hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop" 
                alt="Premium Shopping Experience" 
                className="w-full h-80 object-cover rounded-lg"
              />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="hover-lift">
            <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Stay <span className="text-primary">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-museo">
              Subscribe to our newsletter and be the first to know about new products, exclusive deals, and special offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button className="glass-button px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              * We respect your privacy. Unsubscribe at any time.
            </p>
          </GlassCard>
        </div>
      </section>

      <BlogSection />

      <BrandPartners />
      
      <Footer />
    </div>
  );
};

export default function Home() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}
