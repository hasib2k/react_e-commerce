'use client';

import React, { useState, useMemo } from 'react';
import { Search, Mouse, Keyboard, Cable, Monitor, ArrowRight, Star } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import ProductCard from '@/components/ProductCard';
import { useCart, Product } from '@/context/CartContext';

const AllAccessories: React.FC = () => {
  const { state, dispatch } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [subCategoryFilter, setSubCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [sortBy, setSortBy] = useState('name');

  const accessoriesProducts = useMemo(() => [
    {
      id: 3,
      name: "Laptop Stand",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop&q=80",
      description: "Ergonomic laptop stand for better productivity",
      category: "accessories",
      subCategory: "stand",
      rating: 4.6,
      reviews: 189
    },
    {
      id: 4,
      name: "Wireless Gaming Mouse",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300&h=300&fit=crop&q=80",
      description: "Precision wireless mouse for work and gaming",
      category: "accessories",
      subCategory: "mouse",
      rating: 4.7,
      reviews: 234
    },
    {
      id: 7,
      name: "Phone Case",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1556618304-d1ab6ead8dea?w=300&h=300&fit=crop&q=80",
      description: "Protective phone case with wireless charging support",
      category: "accessories",
      subCategory: "case",
      rating: 4.5,
      reviews: 156
    },
    {
      id: 9,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop&q=80",
      description: "RGB mechanical keyboard with tactile switches",
      category: "accessories",
      subCategory: "keyboard",
      rating: 4.9,
      reviews: 376
    },
    {
      id: 12,
      name: "Desk Organizer",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop&q=80",
      description: "Bamboo desk organizer with wireless charging",
      category: "accessories",
      subCategory: "organizer",
      rating: 4.4,
      reviews: 98
    },
    {
      id: 17,
      name: "USB-C Cable 3-Pack",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&q=80",
      description: "High-speed USB-C cables with fast charging support",
      category: "accessories",
      subCategory: "cable",
      rating: 4.6,
      reviews: 287
    },
    {
      id: 18,
      name: "Webcam Privacy Cover",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=300&fit=crop&q=80",
      description: "Ultra-thin privacy cover for webcams and laptops",
      category: "accessories",
      subCategory: "privacy",
      rating: 4.3,
      reviews: 145
    },
    {
      id: 19,
      name: "Monitor Mount Arm",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop&q=80",
      description: "Adjustable dual monitor mount with full articulation",
      category: "accessories",
      subCategory: "mount",
      rating: 4.8,
      reviews: 312
    }
  ], []);

  const subCategories = [
    { id: 'all', name: 'All Accessories', icon: Mouse, count: accessoriesProducts.length },
    { id: 'mouse', name: 'Mice', icon: Mouse, count: accessoriesProducts.filter(p => p.subCategory === 'mouse').length },
    { id: 'keyboard', name: 'Keyboards', icon: Keyboard, count: accessoriesProducts.filter(p => p.subCategory === 'keyboard').length },
    { id: 'cable', name: 'Cables', icon: Cable, count: accessoriesProducts.filter(p => p.subCategory === 'cable').length },
    { id: 'stand', name: 'Stands', icon: Monitor, count: accessoriesProducts.filter(p => p.subCategory === 'stand').length },
    { id: 'case', name: 'Cases', icon: Mouse, count: accessoriesProducts.filter(p => p.subCategory === 'case').length }
  ];

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const filteredProducts = useMemo(() => {
    const filtered = accessoriesProducts.filter(product => {
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
  }, [accessoriesProducts, searchTerm, subCategoryFilter, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Breadcrumb */}
      <section className="pt-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'All Products', href: '/products' }, { label: 'Accessories' }]} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-museo text-white mb-6">
              <span className="text-green-400">Tech</span> <span className="text-primary">Accessories</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 font-museo max-w-4xl mx-auto">
              Essential accessories to enhance your tech setup and boost productivity.
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
                <label className="block text-white font-museo mb-2">Search Accessories</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search accessories..."
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
                  <option value="0-500">All Prices</option>
                  <option value="0-25">Under $25</option>
                  <option value="25-50">$25 - $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-500">$200+</option>
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
              {filteredProducts.length} {subCategoryFilter === 'all' ? 'Accessories' : subCategories.find(c => c.id === subCategoryFilter)?.name} Found
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
                  <Mouse className="w-12 h-12 text-primary" />
                </div>
                <p className="text-gray-300 text-xl font-museo mb-4">No accessories found matching your criteria.</p>
                <p className="text-gray-400 font-museo">Try adjusting your filters or search terms.</p>
              </GlassCard>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllAccessories;
