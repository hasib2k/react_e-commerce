'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import { useCart } from '@/context/CartContext';

// Sample products data (in a real app, this would come from an API or database)
const sampleProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop&q=80",
    description: "High-quality wireless headphones with noise cancellation",
    longDescription: "Experience premium audio quality with our flagship wireless headphones. Featuring advanced noise cancellation technology, 30-hour battery life, and superior comfort for extended listening sessions. Perfect for music lovers, professionals, and anyone who demands the best in audio technology.",
    category: "electronics",
    rating: 4.8,
    reviews: 127,
    inStock: true,
    features: [
      "Active Noise Cancellation Technology",
      "30-hour Ultra-Long Battery Life", 
      "Premium Build Quality with Memory Foam",
      "Wireless Bluetooth 5.0 Connectivity",
      "Quick Charge Technology (5min = 2hrs)",
      "Hi-Res Audio Certified",
      "Voice Assistant Compatible"
    ],
    specifications: {
      "Driver Size": "40mm Dynamic",
      "Frequency Response": "20Hz - 40kHz",
      "Battery Life": "30 hours (ANC on)",
      "Charging Time": "3 hours",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.0, USB-C"
    },
    warranty: "2 years",
    brand: "AudioTech Pro"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop&q=80",
    description: "Advanced smartwatch with health monitoring",
    longDescription: "Stay connected and healthy with our advanced smartwatch. Features comprehensive health monitoring, GPS tracking, water resistance, and seamless smartphone integration. Perfect for fitness enthusiasts and busy professionals.",
    category: "electronics",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    features: [
      "Advanced Health & Fitness Tracking",
      "Built-in GPS Navigation",
      "5ATM Water Resistant",
      "7-Day Ultra Battery Life",
      "Smart Notifications & Calls",
      "Sleep & Stress Monitoring",
      "100+ Workout Modes"
    ],
    specifications: {
      "Display": "1.4″ AMOLED",
      "Battery Life": "7 days typical use",
      "Water Rating": "5ATM (50m)",
      "Storage": "4GB",
      "Sensors": "Heart Rate, SpO2, GPS",
      "Compatibility": "iOS & Android"
    },
    warranty: "1 year",
    brand: "FitTech"
  },
  {
    id: 3,
    name: "Ergonomic Laptop Stand",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop",
    description: "Ergonomic laptop stand for better productivity",
    longDescription: "Improve your workspace ergonomics with our premium aluminum laptop stand. Adjustable height and angle settings ensure optimal viewing comfort while promoting better posture during long work sessions.",
    category: "accessories",
    rating: 4.7,
    reviews: 234,
    inStock: true,
    features: [
      "Adjustable Height & Angle (6 positions)",
      "Premium Aluminum Construction",
      "Enhanced Heat Dissipation Design",
      "Portable & Lightweight (1.2kg)",
      "Universal Compatibility (11-17″)",
      "Anti-Slip Silicone Pads",
      "Cable Management System"
    ],
    specifications: {
      "Material": "Aluminum Alloy",
      "Weight": "1.2kg",
      "Compatibility": "11-17 inch laptops",
      "Height Range": "15-25cm",
      "Angle Range": "0-30 degrees",
      "Load Capacity": "10kg"
    },
    warranty: "3 years",
    brand: "ErgoDesk"
  },
  {
    id: 4,
    name: "Wireless Gaming Mouse",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=600&fit=crop&q=80",
    description: "High-precision gaming mouse with RGB lighting",
    longDescription: "Dominate your games with our advanced wireless gaming mouse. Features ultra-low latency, customizable RGB lighting, and ergonomic design for extended gaming sessions.",
    category: "gaming",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    features: [
      "25,000 DPI High-Precision Sensor",
      "1ms Ultra-Low Latency",
      "Customizable RGB Lighting",
      "100-hour Battery Life",
      "Ergonomic Design",
      "6 Programmable Buttons",
      "Wireless & Wired Modes"
    ],
    specifications: {
      "DPI": "25,000 max",
      "Polling Rate": "1000Hz",
      "Battery": "100 hours",
      "Weight": "85g",
      "Connectivity": "2.4GHz, USB-C",
      "Buttons": "6 programmable"
    },
    warranty: "2 years",
    brand: "GamePro"
  },
  {
    id: 5,
    name: "4K USB Webcam",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=600&fit=crop&q=80",
    description: "Professional 4K webcam for streaming and conferences",
    longDescription: "Upgrade your video calls and streaming setup with our professional-grade 4K webcam. Features auto-focus, noise reduction, and plug-and-play compatibility.",
    category: "electronics",
    rating: 4.5,
    reviews: 78,
    inStock: true,
    features: [
      "4K Ultra HD Video Recording",
      "Auto-Focus & Auto-Exposure",
      "Built-in Noise Reduction",
      "Plug & Play Setup",
      "Privacy Shutter",
      "90° Wide Angle Lens",
      "Universal Compatibility"
    ],
    specifications: {
      "Resolution": "4K @ 30fps",
      "Field of View": "90 degrees",
      "Focus": "Auto-focus",
      "Microphone": "Dual stereo",
      "Connection": "USB 3.0",
      "Compatibility": "Windows, Mac, Linux"
    },
    warranty: "1 year",
    brand: "StreamTech"
  },
  {
    id: 6,
    name: "Mechanical Gaming Keyboard",
    price: 159.99,
    originalPrice: 219.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop&q=80",
    description: "RGB mechanical keyboard with tactile switches",
    longDescription: "Experience the ultimate gaming and typing experience with our premium mechanical keyboard. Features custom switches, per-key RGB lighting, and durable construction.",
    category: "gaming",
    rating: 4.8,
    reviews: 203,
    inStock: true,
    features: [
      "Custom Mechanical Switches",
      "Per-Key RGB Lighting",
      "Aluminum Frame Construction",
      "Detachable USB-C Cable",
      "Anti-Ghosting Technology",
      "Programmable Macros",
      "Media Control Knob"
    ],
    specifications: {
      "Switch Type": "Tactile Mechanical",
      "Actuation": "2mm",
      "Key Layout": "Full-size (104 keys)",
      "Lighting": "RGB per-key",
      "Connection": "USB-C",
      "Polling Rate": "1000Hz"
    },
    warranty: "2 years",
    brand: "MechMaster"
  }
];

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const product = sampleProducts.find(p => p.id === parseInt(resolvedParams.id));

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    console.log(`Added ${quantity} x ${product.name} to cart`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    console.log(`${isWishlisted ? 'Removed from' : 'Added to'} wishlist: ${product.name}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Liquid Glass Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Primary Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.12)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.08)_0%,transparent_60%)]"></div>
        
        {/* Animated Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary opacity-6 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-10 right-20 w-24 h-24 bg-blue-400 opacity-5 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-400 opacity-4 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      <div className="relative z-10 pt-8 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/products"
              className="group relative inline-flex items-center px-6 py-3 rounded-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-primary/30 rounded-2xl"></div>
              
              {/* Animated Liquid Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl animate-pulse"></div>
                <div className="absolute top-2 left-2 w-3 h-3 bg-white/30 rounded-full blur-sm animate-bounce"></div>
                <div className="absolute bottom-2 right-3 w-2 h-2 bg-primary/40 rounded-full blur-sm animate-bounce delay-200"></div>
              </div>
              
              {/* Content */}
              <ArrowLeft className="w-5 h-5 mr-3 text-primary group-hover:text-white transition-colors duration-300 relative z-10 group-hover:-translate-x-1" />
              <span className="text-primary group-hover:text-white font-museo font-bold transition-colors duration-300 relative z-10">Back to All Products</span>
              
              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Enhanced Product Image */}
            <div className="relative">
              <div className="relative group overflow-hidden rounded-3xl">
                {/* Enhanced Glass Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-primary/20 rounded-3xl"></div>
                
                {/* Animated Background Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-4 left-4 w-6 h-6 bg-primary/30 rounded-full blur-md animate-pulse"></div>
                  <div className="absolute bottom-6 right-6 w-4 h-4 bg-purple-400/30 rounded-full blur-md animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 right-4 w-3 h-3 bg-blue-400/30 rounded-full blur-md animate-bounce delay-150"></div>
                </div>
                
                <div className="relative p-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110 shadow-2xl"
                  />
                  
                  {/* Image Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Product Details */}
            <div className="space-y-8">
              <div>
                {/* Enhanced Brand Badge */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent backdrop-blur-xl border border-primary/30 rounded-2xl"></div>
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl animate-pulse"></div>
                    <span className="relative inline-block px-6 py-3 text-sm font-museo font-bold text-primary">
                      {product.brand}
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold font-museo text-white mb-6 leading-tight">
                  {product.name}
                </h1>
                
                {/* Enhanced Rating */}
                <div className="flex items-center mb-8 p-4 rounded-2xl" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-6 h-6 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-white font-museo ml-3 font-bold text-lg">{product.rating}</span>
                  <span className="text-gray-300 font-museo ml-3">({product.reviews} reviews)</span>
                </div>

                {/* Enhanced Price Section */}
                <div className="mb-8 p-6 rounded-3xl relative overflow-hidden" style={{
                  background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(20, 184, 166, 0.2)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-50"></div>
                  <div className="relative flex items-center space-x-6">
                    <span className="text-5xl font-bold text-primary font-museo">${product.price}</span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <div className="flex flex-col">
                        <span className="text-2xl text-gray-400 line-through font-museo">${product.originalPrice}</span>
                        <span className="text-sm text-green-400 font-bold">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                  {product.inStock ? (
                    <span className="text-green-400 font-museo mt-2 inline-block">✓ In Stock</span>
                  ) : (
                    <span className="text-red-400 font-museo mt-2 inline-block">✗ Out of Stock</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 font-museo text-lg leading-relaxed mb-8">
                  {product.longDescription}
                </p>

                {/* Enhanced Quantity and Actions */}
                <div className="space-y-8">
                  {/* Enhanced Quantity Selector */}
                  <div className="flex items-center space-x-6">
                    <label className="text-white font-museo font-bold text-lg">Quantity:</label>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-primary/30 rounded-2xl"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl animate-pulse"></div>
                      </div>
                      <div className="relative flex items-center rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-14 h-14 hover:bg-primary/20 text-white transition-all duration-300 flex items-center justify-center font-bold text-xl hover:scale-110 hover:text-primary"
                        >
                          -
                        </button>
                        <span className="w-20 h-14 text-white flex items-center justify-center font-museo font-bold text-xl border-x border-white/20 bg-white/5">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-14 h-14 hover:bg-primary/20 text-white transition-all duration-300 flex items-center justify-center font-bold text-xl hover:scale-110 hover:text-primary"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex space-x-4">
                    {/* Enhanced Add to Cart Button */}
                    <button
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className="group/cart flex-1 relative px-8 py-5 rounded-2xl font-museo font-bold text-lg transition-all duration-500 transform hover:scale-105 flex items-center justify-center overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {/* Liquid Glass Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80 backdrop-blur-xl rounded-2xl"></div>
                      
                      {/* Animated Liquid Effects */}
                      <div className="absolute inset-0 opacity-0 group-hover/cart:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-2xl animate-pulse"></div>
                        <div className="absolute top-2 left-4 w-3 h-3 bg-white/40 rounded-full blur-sm animate-bounce"></div>
                        <div className="absolute bottom-3 right-6 w-2 h-2 bg-white/30 rounded-full blur-sm animate-bounce delay-200"></div>
                        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/25 rounded-full blur-sm animate-pulse delay-300"></div>
                      </div>
                      
                      {/* Button Content */}
                      <ShoppingCart className="w-6 h-6 mr-3 relative z-10 text-white group-hover/cart:scale-110 transition-transform duration-300" />
                      <span className="relative z-10 text-white group-hover/cart:text-yellow-100 transition-colors duration-300">
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </span>
                      
                      {/* Border Glow */}
                      <div className="absolute inset-0 rounded-2xl border border-primary/40 group-hover/cart:border-white/30 transition-colors duration-500"></div>
                    </button>
                    
                    {/* Enhanced Wishlist Button */}
                    <button
                      onClick={handleWishlist}
                      className="group/wish relative px-6 py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl"></div>
                      
                      <div className="absolute inset-0 opacity-0 group-hover/wish:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/10 to-transparent rounded-2xl animate-pulse"></div>
                        <div className="absolute top-2 left-2 w-2 h-2 bg-pink-400/40 rounded-full blur-sm animate-bounce"></div>
                      </div>
                      
                      <Heart className={`w-6 h-6 text-white relative z-10 transition-all duration-300 ${
                        isWishlisted ? 'fill-current text-red-400 scale-110' : 'group-hover/wish:text-pink-400 group-hover/wish:scale-110'
                      }`} />
                    </button>
                    
                    {/* Enhanced Share Button */}
                    <button 
                      className="group/share relative px-6 py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl"></div>
                      
                      <div className="absolute inset-0 opacity-0 group-hover/share:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-transparent rounded-2xl animate-pulse"></div>
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-blue-400/40 rounded-full blur-sm animate-bounce delay-100"></div>
                      </div>
                      
                      <Share2 className="w-6 h-6 text-white relative z-10 group-hover/share:text-blue-400 group-hover/share:scale-110 transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Features */}
            <GlassCard className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white font-museo mb-6 flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300 font-museo">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            {/* Specifications */}
            <GlassCard className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white font-museo mb-6 flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Specifications
              </h3>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
                    <dt className="text-gray-400 font-museo">{key}:</dt>
                    <dd className="text-white font-museo font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>
            </GlassCard>

            {/* Warranty & Support */}
            <GlassCard className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white font-museo mb-6 flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Warranty & Support
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-gray-400 font-museo">Warranty:</span>
                  <span className="text-white font-museo font-semibold">{product.warranty}</span>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-6">
                  <div className="flex items-center">
                    <Truck className="w-6 h-6 text-primary mr-3" />
                    <div>
                      <div className="text-white font-museo font-bold">Free Shipping</div>
                      <div className="text-gray-400 text-sm">Orders over $50</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-primary mr-3" />
                    <div>
                      <div className="text-white font-museo font-bold">Protection Plan</div>
                      <div className="text-gray-400 text-sm">Extended coverage</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <RotateCcw className="w-6 h-6 text-primary mr-3" />
                    <div>
                      <div className="text-white font-museo font-bold">Returns</div>
                      <div className="text-gray-400 text-sm">60 day policy</div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
