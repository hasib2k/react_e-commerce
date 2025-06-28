'use client';

import React, { useState, useMemo } from 'react';
import { Search, Zap, Wifi, Bluetooth, Battery } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import ProductCard from '@/components/ProductCard';
import { useCart, Product } from '@/context/CartContext';

const AllGadgets: React.FC = () => {
  const { dispatch } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [subCategoryFilter, setSubCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [sortBy, setSortBy] = useState('name');

  const gadgetsProducts = useMemo(() => [
    {
      id: 5,
      name: "USB-C Hub",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300&h=300&fit=crop&q=80",
      description: "Multi-port USB-C hub with 4K HDMI support",
      category: "gadgets",
      subCategory: "hub",
      rating: 4.6,
      reviews: 234
    },
    {
      id: 8,
      name: "Wireless Charger",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1609592328270-6077b8b2b0d6?w=300&h=300&fit=crop&q=80",
      description: "Fast wireless charging pad for smartphones",
      category: "gadgets",
      subCategory: "charger",
      rating: 4.5,
      reviews: 189
    },
    {
      id: 11,
      name: "Portable SSD",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop&q=80",
      description: "High-speed portable SSD with USB-C connectivity",
      category: "gadgets",
      subCategory: "storage",
      rating: 4.8,
      reviews: 312
    },
    {
      id: 20,
      name: "Smart Tracker",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1592912207913-0b6566b2d7c6?w=300&h=300&fit=crop&q=80",
      description: "Bluetooth tracker for keys, wallets, and more",
      category: "gadgets",
      subCategory: "tracker",
      rating: 4.4,
      reviews: 156
    },
    {
      id: 21,
      name: "Power Bank 20K",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1609592328270-6077b8b2b0d6?w=300&h=300&fit=crop&q=80",
      description: "High-capacity power bank with fast charging",
      category: "gadgets",
      subCategory: "power",
      rating: 4.7,
      reviews: 287
    },
    {
      id: 22,
      name: "Smart Light Strip",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1558002038-bb4237b54261?w=300&h=300&fit=crop&q=80",
      description: "RGB LED light strip with app control",
      category: "gadgets",
      subCategory: "lighting",
      rating: 4.6,
      reviews: 198
    },
    {
      id: 23,
      name: "Bluetooth Adapter",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop&q=80",
      description: "USB Bluetooth 5.0 adapter for PC and laptops",
      category: "gadgets",
      subCategory: "adapter",
      rating: 4.3,
      reviews: 145
    },
    {
      id: 24,
      name: "Car Mount Wireless Charger",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1609592328270-6077b8b2b0d6?w=300&h=300&fit=crop&q=80",
      description: "Magnetic car mount with wireless charging",
      category: "gadgets",
      subCategory: "mount",
      rating: 4.5,
      reviews: 203
    }
  ], []);

  const subCategories = [
    { id: 'all', name: 'All Gadgets', icon: Zap, count: gadgetsProducts.length },
    { id: 'charger', name: 'Chargers', icon: Battery, count: gadgetsProducts.filter(p => p.subCategory === 'charger').length },
    { id: 'hub', name: 'Hubs', icon: Wifi, count: gadgetsProducts.filter(p => p.subCategory === 'hub').length },
    { id: 'storage', name: 'Storage', icon: Zap, count: gadgetsProducts.filter(p => p.subCategory === 'storage').length },
    { id: 'tracker', name: 'Trackers', icon: Bluetooth, count: gadgetsProducts.filter(p => p.subCategory === 'tracker').length },
    { id: 'power', name: 'Power Banks', icon: Battery, count: gadgetsProducts.filter(p => p.subCategory === 'power').length }
  ];

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const filteredProducts = useMemo(() => {
    const filtered = gadgetsProducts.filter(product => {
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
  }, [gadgetsProducts, searchTerm, subCategoryFilter, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Breadcrumb */}
      <section className="pt-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'All Products', href: '/products' }, { label: 'Gadgets' }]} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-museo text-white mb-6">
              <span className="text-purple-400">Smart</span> <span className="text-primary">Gadgets</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 font-museo max-w-4xl mx-auto">
              Innovative gadgets and tech accessories to enhance your digital lifestyle.
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
                <label className="block text-white font-museo mb-2">Search Gadgets</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search gadgets..."
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
                  <option value="0-30">Under $30</option>
                  <option value="30-60">$30 - $60</option>
                  <option value="60-100">$60 - $100</option>
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
              {filteredProducts.length} {subCategoryFilter === 'all' ? 'Gadgets' : subCategories.find(c => c.id === subCategoryFilter)?.name} Found
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
                  <Zap className="w-12 h-12 text-primary" />
                </div>
                <p className="text-gray-300 text-xl font-museo mb-4">No gadgets found matching your criteria.</p>
                <p className="text-gray-400 font-museo">Try adjusting your filters or search terms.</p>
              </GlassCard>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllGadgets;
