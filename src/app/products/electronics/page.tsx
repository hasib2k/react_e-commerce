'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, Smartphone, Laptop, Headphones, Camera, Watch, Speaker } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import ProductCard from '@/components/ProductCard';
import { useCart, Product } from '@/context/CartContext';

const AllElectronics: React.FC = () => {
  const { state, dispatch } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [subCategoryFilter, setSubCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('name');

  const electronicsProducts = useMemo(() => [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&q=80",
      description: "High-quality wireless headphones with active noise cancellation",
      category: "electronics",
      subCategory: "audio",
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop&q=80",
      description: "Advanced smartwatch with health monitoring and GPS",
      category: "electronics",
      subCategory: "wearable",
      rating: 4.9,
      reviews: 256
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop&q=80",
      description: "Portable Bluetooth speaker with rich sound",
      category: "electronics",
      subCategory: "audio",
      rating: 4.7,
      reviews: 189
    },
    {
      id: 10,
      name: "4K Webcam",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300&h=300&fit=crop&q=80",
      description: "Ultra HD webcam for streaming and video calls",
      category: "electronics",
      subCategory: "camera",
      rating: 4.6,
      reviews: 145
    },
    {
      id: 13,
      name: "Gaming Laptop",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop&q=80",
      description: "High-performance gaming laptop with RTX graphics",
      category: "electronics",
      subCategory: "computer",
      rating: 4.9,
      reviews: 412
    },
    {
      id: 14,
      name: "Smartphone Pro Max",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&q=80",
      description: "Latest flagship smartphone with advanced camera system",
      category: "electronics",
      subCategory: "mobile",
      rating: 4.8,
      reviews: 567
    },
    {
      id: 15,
      name: "Wireless Earbuds Pro",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1590658165737-15a047b7cd40?w=300&h=300&fit=crop&q=80",
      description: "Premium wireless earbuds with spatial audio",
      category: "electronics",
      subCategory: "audio",
      rating: 4.7,
      reviews: 298
    },
    {
      id: 16,
      name: "DSLR Camera",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop&q=80",
      description: "Professional DSLR camera with 24MP sensor",
      category: "electronics",
      subCategory: "camera",
      rating: 4.9,
      reviews: 234
    }
  ], []);

  const subCategories = [
    { id: 'all', name: 'All Electronics', icon: Smartphone, count: electronicsProducts.length },
    { id: 'mobile', name: 'Smartphones', icon: Smartphone, count: electronicsProducts.filter(p => p.subCategory === 'mobile').length },
    { id: 'computer', name: 'Computers', icon: Laptop, count: electronicsProducts.filter(p => p.subCategory === 'computer').length },
    { id: 'audio', name: 'Audio', icon: Headphones, count: electronicsProducts.filter(p => p.subCategory === 'audio').length },
    { id: 'camera', name: 'Cameras', icon: Camera, count: electronicsProducts.filter(p => p.subCategory === 'camera').length },
    { id: 'wearable', name: 'Wearables', icon: Watch, count: electronicsProducts.filter(p => p.subCategory === 'wearable').length }
  ];

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const filteredProducts = useMemo(() => {
    const filtered = electronicsProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = subCategoryFilter === 'all' || product.subCategory === subCategoryFilter;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      return matchesSearch && matchesCategory && matchesPrice;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [electronicsProducts, searchTerm, subCategoryFilter, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Breadcrumb */}
      <section className="pt-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'All Products', href: '/products' }, { label: 'Electronics' }]} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-museo text-white mb-6">
              <span className="text-blue-400">Electronics</span> <span className="text-primary">Collection</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 font-museo max-w-4xl mx-auto">
              Discover cutting-edge electronics from smartphones to laptops, cameras to audio equipment.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Sub-Categories */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {subCategories.map((category) => (
              <GlassCard 
                key={category.id} 
                className={`text-center cursor-pointer hover-lift transition-all duration-300 p-4 ${
                  subCategoryFilter === category.id ? 'border-2 border-primary bg-primary/20' : ''
                }`}
                onClick={() => setSubCategoryFilter(category.id)}
              >
                <div className="flex justify-center mb-3">
                  <category.icon className="w-8 h-8 text-primary/80" />
                </div>
                <h3 className="text-sm font-bold text-white font-museo mb-1">{category.name}</h3>
                <p className="text-xs text-gray-400">{category.count} items</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <GlassCard>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* Search */}
              <div>
                <label className="block text-white font-museo mb-2">Search Electronics</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search electronics..."
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-white font-museo mb-2">Price Range</label>
                <select
                  value={`${priceRange.min}-${priceRange.max}`}
                  onChange={(e) => {
                    const [min, max] = e.target.value.split('-').map(Number);
                    setPriceRange({ min, max });
                  }}
                  className="w-full py-3 px-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  <option value="0-1000">All Prices</option>
                  <option value="0-100">Under $100</option>
                  <option value="100-300">$100 - $300</option>
                  <option value="300-500">$300 - $500</option>
                  <option value="500-1000">$500 - $1000</option>
                  <option value="1000-2000">$1000+</option>
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-white font-museo mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full py-3 px-4 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white font-museo">
              {filteredProducts.length} {subCategoryFilter === 'all' ? 'Electronics' : subCategories.find(c => c.id === subCategoryFilter)?.name} Found
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <GlassCard>
                <div className="w-24 h-24 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-12 h-12 text-primary" />
                </div>
                <p className="text-gray-300 text-xl font-museo mb-4">No electronics found matching your criteria.</p>
                <p className="text-gray-400 font-museo">Try adjusting your filters or search terms.</p>
              </GlassCard>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllElectronics;
