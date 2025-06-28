'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart, Product } from '@/context/CartContext';

const Products: React.FC = () => {
  const { state, dispatch } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allProducts = useMemo(() => [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      description: "High-quality wireless headphones with active noise cancellation and premium sound quality",
      category: "electronics",
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      description: "Advanced smartwatch with health monitoring, GPS, and long battery life",
      category: "electronics",
      rating: 4.9,
      reviews: 256
    },
    {
      id: 3,
      name: "Ergonomic Laptop Stand",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      description: "Adjustable laptop stand for better posture and improved productivity",
      category: "accessories",
      rating: 4.6,
      reviews: 189
    },
    {
      id: 4,
      name: "Wireless Gaming Mouse",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
      description: "Precision wireless mouse with customizable buttons for gaming and work",
      category: "accessories",
      rating: 4.7,
      reviews: 412
    },
    {
      id: 5,
      name: "USB-C Hub Pro",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop",
      description: "Multi-port USB-C hub with 4K HDMI, USB 3.0, and fast charging support",
      category: "gadgets",
      rating: 4.5,
      reviews: 167
    },
    {
      id: 6,
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      description: "Waterproof Bluetooth speaker with rich bass and 20-hour battery life",
      category: "electronics",
      rating: 4.8,
      reviews: 298
    },
    {
      id: 7,
      name: "Premium Phone Case",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
      description: "Protective phone case with wireless charging support and drop protection",
      category: "accessories",
      rating: 4.4,
      reviews: 543
    },
    {
      id: 8,
      name: "Fast Wireless Charger",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      description: "15W fast wireless charging pad compatible with all Qi-enabled devices",
      category: "gadgets",
      rating: 4.6,
      reviews: 234
    },
    {
      id: 9,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
      description: "RGB mechanical keyboard with blue switches and programmable keys",
      category: "accessories",
      rating: 4.9,
      reviews: 376
    },
    {
      id: 10,
      name: "4K Webcam",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1623186482288-40cdcf6b6297?w=400&h=400&fit=crop",
      description: "Ultra HD webcam with auto-focus and noise-canceling microphone",
      category: "electronics",
      rating: 4.7,
      reviews: 145
    },
    {
      id: 11,
      name: "Wireless Earbuds",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1590658165737-15a047b7cd40?w=400&h=400&fit=crop",
      description: "True wireless earbuds with active noise cancellation and touch controls",
      category: "electronics",
      rating: 4.5,
      reviews: 289
    },
    {
      id: 12,
      name: "Smart Home Hub",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400&h=400&fit=crop",
      description: "Central hub for all your smart home devices with voice control",
      category: "gadgets",
      rating: 4.6,
      reviews: 178
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'electronics', name: 'Electronics', count: allProducts.filter(p => p.category === 'electronics').length },
    { id: 'accessories', name: 'Accessories', count: allProducts.filter(p => p.category === 'accessories').length },
    { id: 'gadgets', name: 'Gadgets', count: allProducts.filter(p => p.category === 'gadgets').length }
  ];

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      
      return matchesSearch && matchesCategory && matchesPrice;
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
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchTerm, categoryFilter, priceRange, sortBy, allProducts]);

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={state.itemCount} />
      
      {/* Breadcrumb */}
      <section className="px-4 pt-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Products' }]} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-museo text-white mb-4 sm:mb-6">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 font-museo max-w-4xl mx-auto px-4">
              Discover our carefully curated collection of premium electronics, accessories, and gadgets.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {categories.map((category) => (
              <GlassCard 
                key={category.id} 
                className={`text-center cursor-pointer hover-lift transition-all duration-300 p-4 sm:p-6 ${
                  categoryFilter === category.id ? 'border-2 border-primary bg-primary/10' : ''
                }`}
                onClick={() => setCategoryFilter(category.id)}
              >
                <h3 className="text-lg sm:text-xl font-bold text-white font-museo mb-1 sm:mb-2">{category.name}</h3>
                <p className="text-primary font-museo text-sm sm:text-base">{category.count} items</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <GlassCard>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-end">
              {/* Search */}
              <div>
                <label className="block text-white font-museo mb-2 text-sm sm:text-base">Search Products</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for products..."
                    className="w-full pl-10 pr-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-white font-museo mb-2 text-sm sm:text-base">
                  Price Range: ${priceRange.min} - ${priceRange.max}
                </label>
                <div className="flex space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-white font-museo mb-2 text-sm sm:text-base">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:border-primary text-sm sm:text-base"
                >
                  <option value="name" className="bg-secondary text-white">Name</option>
                  <option value="price-low" className="bg-secondary text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-secondary text-white">Price: High to Low</option>
                  <option value="rating" className="bg-secondary text-white">Highest Rated</option>
                  <option value="reviews" className="bg-secondary text-white">Most Reviews</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-white font-museo mb-2 text-sm sm:text-base">View</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white bg-opacity-20 text-gray-300'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-primary text-white' : 'bg-white bg-opacity-20 text-gray-300'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-gray-300 font-museo text-sm sm:text-base">
              Showing {filteredProducts.length} of {allProducts.length} products
            </p>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <GlassCard key={product.id} className="hover-lift group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={256}
                      className="w-full h-48 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:text-primary transition-colors duration-300">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-museo mb-2">{product.name}</h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-4">{product.description}</p>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm ml-2">({product.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary font-museo">${product.price}</span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-primary hover:bg-opacity-80 text-white px-4 py-2 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span className="hidden sm:inline">Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <GlassCard key={product.id} className="hover-lift">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={192}
                      height={192}
                      className="w-full sm:w-48 h-48 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 p-4 sm:p-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white font-museo mb-2">{product.name}</h3>
                          <p className="text-gray-300 mb-4">{product.description}</p>
                        </div>
                        <button className="p-2 text-white hover:text-primary transition-colors duration-300 self-start">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-gray-300 text-sm ml-2">({product.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <span className="text-3xl font-bold text-primary font-museo">${product.price}</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="bg-primary hover:bg-opacity-80 text-white px-6 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
