'use client';

import React, { useState, useMemo } from 'react';
import { Shield, Truck, HeadphonesIcon, CreditCard, Star, Users, Award, CheckCircle, Mail, ArrowRight, Quote, Zap, Smartphone, Laptop, Headphones, Mouse, Gamepad2, Camera, TrendingUp, Clock, Globe } from 'lucide-react';
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
      
      <section id="products" className="py-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 bg-primary opacity-15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary opacity-5 rounded-full blur-2xl animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
              Featured <span className="text-primary">Products</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-museo">
              Discover our handpicked selection of premium products, chosen for their innovation, quality, and customer satisfaction.
            </p>
          </div>
          
          <ProductFilters
            onSearch={setSearchTerm}
            onCategoryFilter={setCategoryFilter}
            onPriceFilter={(min, max) => setPriceRange({ min, max })}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-12 h-12 text-primary" />
              </div>
              <p className="text-gray-300 text-xl font-museo mb-4">No products found matching your criteria.</p>
              <p className="text-gray-400 font-museo">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      <CategoriesShowcase />

      {/* Enhanced Features Section */}
      <section className="py-20 px-4 bg-black/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary opacity-10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
              Why <span className="text-primary">Choose Buyble</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-museo">
              Experience the future of online shopping with our premium features designed for your convenience and satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-4">Bank-Level Security</h3>
                <p className="text-gray-300 leading-relaxed">Advanced encryption and multi-layer security protocols protect every transaction with military-grade protection.</p>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-4">Lightning Fast Delivery</h3>
                <p className="text-gray-300 leading-relaxed">Same-day delivery in major cities, with real-time tracking and premium packaging for all orders over $50.</p>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <HeadphonesIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-4">AI-Powered Support</h3>
                <p className="text-gray-300 leading-relaxed">24/7 intelligent customer support with instant responses, live chat, and expert product consultations.</p>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-4">Zero-Risk Returns</h3>
                <p className="text-gray-300 leading-relaxed">60-day money-back guarantee with free return shipping and instant refunds to your original payment method.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl animate-ping"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
              Trusted by <span className="text-primary">Millions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-museo">
              Join the growing community of satisfied customers who have made Buyble their preferred shopping destination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-6xl font-bold text-white font-museo mb-4 group-hover:text-primary transition-colors duration-300">2.5M+</h3>
                <p className="text-gray-300 text-xl font-museo">Happy Customers Worldwide</p>
                <div className="mt-4 text-sm text-gray-400">
                  Growing by 10,000+ monthly
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-6xl font-bold text-white font-museo mb-4 group-hover:text-primary transition-colors duration-300">4.9/5</h3>
                <p className="text-gray-300 text-xl font-museo">Average Customer Rating</p>
                <div className="mt-4 flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-6xl font-bold text-white font-museo mb-4 group-hover:text-primary transition-colors duration-300">25+</h3>
                <p className="text-gray-300 text-xl font-museo">Industry Awards & Recognition</p>
                <div className="mt-4 text-sm text-gray-400">
                  Including "Best E-commerce Platform 2024"
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 px-4 bg-black/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-accent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
              Love from Our <span className="text-primary">Community</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-museo">
              Discover why customers around the world choose Buyble for their premium shopping experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard className="hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-primary mb-4" />
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">
                  "The shopping experience at Buyble is absolutely phenomenal! The glassmorphism design is stunning, products arrive faster than promised, and the quality exceeds expectations every single time."
                </p>
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=60&h=60&fit=crop&crop=face" 
                      alt="Sarah Johnson" 
                      className="w-16 h-16 rounded-full mr-4 border-2 border-primary/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-museo text-lg">Sarah Johnson</h4>
                    <p className="text-gray-400 text-sm">Verified Buyer • Premium Member</p>
                    <p className="text-primary text-xs">Bought 15+ products</p>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-primary mb-4" />
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">
                  "As a tech enthusiast, I'm impressed by Buyble's curated selection and competitive pricing. Their AI-powered recommendations helped me find exactly what I needed. Outstanding service!"
                </p>
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                      alt="Michael Chen" 
                      className="w-16 h-16 rounded-full mr-4 border-2 border-primary/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-museo text-lg">Michael Chen</h4>
                    <p className="text-gray-400 text-sm">Tech Reviewer • Elite Member</p>
                    <p className="text-primary text-xs">Member since 2023</p>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-primary mb-4" />
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">
                  "Buyble has revolutionized my online shopping experience. The zero-risk returns and lightning-fast delivery make it my go-to platform. Exceptional quality and customer service!"
                </p>
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" 
                      alt="Emily Davis" 
                      className="w-16 h-16 rounded-full mr-4 border-2 border-primary/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background"></div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-museo text-lg">Emily Davis</h4>
                    <p className="text-gray-400 text-sm">Business Owner • VIP Member</p>
                    <p className="text-primary text-xs">5-star reviewer</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center text-gray-300">
                <Shield className="w-5 h-5 text-primary mr-2" />
                <span className="font-museo">Verified Reviews</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 text-primary mr-2" />
                <span className="font-museo">Real Customers</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Award className="w-5 h-5 text-primary mr-2" />
                <span className="font-museo">Trusted Platform</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-accent opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold font-museo text-white mb-8">
                Experience the <span className="text-primary">Buyble Advantage</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 font-museo leading-relaxed">
                Discover why millions of customers worldwide trust Buyble for their premium shopping needs. We're not just an e-commerce platform – we're your technology partner.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-museo mb-3 group-hover:text-primary transition-colors duration-300">Premium Quality Assurance</h3>
                    <p className="text-gray-300 leading-relaxed">Every product undergoes rigorous testing by our expert quality team. We partner only with certified manufacturers and provide comprehensive quality guarantees.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-museo mb-3 group-hover:text-primary transition-colors duration-300">AI-Powered Price Matching</h3>
                    <p className="text-gray-300 leading-relaxed">Our intelligent algorithms monitor global markets 24/7 to ensure you always get the best prices. Find it cheaper elsewhere? We'll match it instantly.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-museo mb-3 group-hover:text-primary transition-colors duration-300">Extended Warranty Coverage</h3>
                    <p className="text-gray-300 leading-relaxed">Enjoy peace of mind with our comprehensive warranty protection, extended coverage options, and white-glove repair services for all electronics.</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white font-museo mb-3 group-hover:text-primary transition-colors duration-300">Personal Shopping Assistant</h3>
                    <p className="text-gray-300 leading-relaxed">Get personalized product recommendations from our AI shopping assistant, trained on millions of customer preferences and expert reviews.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <GlassCard className="hover-lift overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=500&fit=crop" 
                    alt="Premium Shopping Experience" 
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <h4 className="font-bold font-museo text-lg">Premium Experience</h4>
                        <p className="text-gray-200">Curated for Excellence</p>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-primary/60 rounded-full animate-pulse delay-200"></div>
                        <div className="w-3 h-3 bg-primary/40 rounded-full animate-pulse delay-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 w-32 h-32">
                <GlassCard className="w-full h-full flex flex-col items-center justify-center text-center group hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-primary mb-2" />
                  <span className="text-white font-bold text-sm font-museo">Award Winner</span>
                </GlassCard>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-32 h-32">
                <GlassCard className="w-full h-full flex flex-col items-center justify-center text-center group hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <span className="text-white font-bold text-sm font-museo">Secure</span>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-black/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-accent/5 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-museo">
              Real results from real customers who've transformed their digital experience with Buyble.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-400 font-museo mb-2">300%</h3>
                <h4 className="text-xl font-bold text-white font-museo mb-4">Productivity Boost</h4>
                <p className="text-gray-300 mb-4">
                  "The laptop and accessories I bought from Buyble increased my work efficiency dramatically. Best investment ever!"
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Alex Thompson</strong> • Content Creator
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-400 font-museo mb-2">24hrs</h3>
                <h4 className="text-xl font-bold text-white font-museo mb-4">Lightning Delivery</h4>
                <p className="text-gray-300 mb-4">
                  "Ordered a gaming setup at midnight, received it the next evening. The packaging was premium quality!"
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Jordan Kim</strong> • Gamer & Streamer
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-purple-400 font-museo mb-2">50+</h3>
                <h4 className="text-xl font-bold text-white font-museo mb-4">Countries Served</h4>
                <p className="text-gray-300 mb-4">
                  "International shipping was seamless. My smart home devices arrived perfectly packaged from across the globe."
                </p>
                <div className="text-sm text-gray-400">
                  <strong>Maria Santos</strong> • Smart Home Enthusiast
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <GlassCard className="inline-block hover-lift">
              <div className="px-8 py-6">
                <h3 className="text-2xl font-bold text-white font-museo mb-4">Ready to Join Our Success Stories?</h3>
                <p className="text-gray-300 mb-6 font-museo">Start your journey with Buyble today and experience the difference.</p>
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-xl hover:from-primary/90 hover:to-primary transition-all duration-300 flex items-center justify-center mx-auto text-lg font-museo">
                  Start Shopping
                  <ArrowRight className="w-6 h-6 ml-2" />
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-20 px-4 bg-black/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-accent/5 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <GlassCard className="hover-lift group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 px-8 py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
                Stay <span className="text-primary">Connected</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 font-museo leading-relaxed max-w-3xl mx-auto">
                Join our exclusive community and be the first to discover cutting-edge products, limited-time offers, and insider deals. Plus, get <span className="text-primary font-bold">20% off</span> your first order!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 backdrop-blur-xl transition-all duration-300 text-lg font-museo"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
                <button className="px-10 py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-bold rounded-xl hover:from-primary/90 hover:to-primary transition-all duration-300 flex items-center justify-center text-lg font-museo group-button shadow-2xl hover:shadow-primary/25">
                  Get 20% Off
                  <ArrowRight className="w-6 h-6 ml-2 group-button-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400 max-w-3xl mx-auto">
                <div className="flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary mr-2" />
                  <span>Privacy Protected</span>
                </div>
                <div className="flex items-center justify-center">
                  <Star className="w-4 h-4 text-primary mr-2" />
                  <span>Exclusive Member Deals</span>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary mr-2" />
                  <span>Join 2.5M+ Subscribers</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 font-museo">
                  ✨ <span className="text-primary">Instant welcome bonus</span> • 📧 Weekly tech insights • 🎁 Member-only flash sales • 🔄 Unsubscribe anytime
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary opacity-10 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl animate-ping"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
              Cutting-Edge <span className="text-primary">Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-museo">
              Discover the latest innovations and trending tech products, carefully curated by our experts for the modern digital lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Featured Tech Categories */}
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-4">Smart Devices</h3>
                <p className="text-gray-300 mb-6">Latest smartphones, tablets, and wearables with cutting-edge features.</p>
                <div className="text-primary font-bold font-museo">500+ Products</div>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-4">Computing</h3>
                <p className="text-gray-300 mb-6">High-performance laptops, desktops, and workstations for professionals.</p>
                <div className="text-primary font-bold font-museo">300+ Products</div>
              </div>
            </GlassCard>
            
            <GlassCard className="text-center hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-museo mb-4">Audio & Visual</h3>
                <p className="text-gray-300 mb-6">Premium headphones, speakers, and entertainment systems.</p>
                <div className="text-primary font-bold font-museo">250+ Products</div>
              </div>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold font-museo text-white mb-6">
                Innovation at Your <span className="text-primary">Fingertips</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 font-museo leading-relaxed">
                Stay ahead of the curve with our carefully selected collection of revolutionary products. From AI-powered gadgets to sustainable tech solutions, we bring you tomorrow's technology today.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold font-museo mb-2">AI-Powered</h4>
                  <p className="text-gray-400 text-sm">Smart technology that learns and adapts</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold font-museo mb-2">Secure</h4>
                  <p className="text-gray-400 text-sm">Enterprise-grade security features</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="hover-lift group">
                <div className="text-center p-4">
                  <Mouse className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-museo font-bold">Gaming Gear</h4>
                  <p className="text-gray-400 text-sm mt-2">Pro-level accessories</p>
                </div>
              </GlassCard>
              
              <GlassCard className="hover-lift group">
                <div className="text-center p-4">
                  <Camera className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-museo font-bold">Photography</h4>
                  <p className="text-gray-400 text-sm mt-2">Creator tools</p>
                </div>
              </GlassCard>
              
              <GlassCard className="hover-lift group">
                <div className="text-center p-4">
                  <Gamepad2 className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-museo font-bold">Gaming</h4>
                  <p className="text-gray-400 text-sm mt-2">Console & PC</p>
                </div>
              </GlassCard>
              
              <GlassCard className="hover-lift group">
                <div className="text-center p-4">
                  <Smartphone className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-museo font-bold">Mobility</h4>
                  <p className="text-gray-400 text-sm mt-2">On-the-go tech</p>
                </div>
              </GlassCard>
            </div>
          </div>
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
