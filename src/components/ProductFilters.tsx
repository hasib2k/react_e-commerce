'use client';

import React, { useState } from 'react';
import { Search, Filter, DollarSign } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

interface ProductFiltersProps {
  onSearch: (term: string) => void;
  onCategoryFilter: (category: string) => void;
  onPriceFilter: (min: number, max: number) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  onSearch,
  onCategoryFilter,
  onPriceFilter,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const categories = ['all', 'electronics', 'accessories', 'gadgets'];

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    onPriceFilter(min, max);
  };

  return (
    <GlassCard className="mb-8 relative overflow-hidden group hover-lift">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white font-museo mb-2">
            Find Your Perfect <span className="text-primary">Product</span>
          </h3>
          <p className="text-gray-300 font-museo">Use our advanced filters to discover exactly what you're looking for</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Enhanced Search */}
          <div className="group">
            <label className="flex items-center text-white font-museo mb-3 text-lg font-bold">
              <Search className="w-5 h-5 text-primary mr-2" />
              Search Products
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for products..."
                className="w-full p-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 pr-12 font-museo"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>

          {/* Enhanced Category Filter */}
          <div className="group">
            <label className="flex items-center text-white font-museo mb-3 text-lg font-bold">
              <Filter className="w-5 h-5 text-primary mr-2" />
              Category
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full p-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none cursor-pointer font-museo"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-gray-800 text-white py-2">
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>

          {/* Enhanced Price Range */}
          <div className="group">
            <label className="flex items-center text-white font-museo mb-3 text-lg font-bold">
              <DollarSign className="w-5 h-5 text-primary mr-2" />
              Price Range
            </label>
            <div className="bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-xl p-4 group-hover:border-primary/30 transition-all duration-300">
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-primary font-museo">${priceRange.min}</span>
                <span className="text-gray-400 mx-2">to</span>
                <span className="text-2xl font-bold text-primary font-museo">${priceRange.max}</span>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-400 font-museo mb-1 block">Minimum: ${priceRange.min}</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange.min}
                    onChange={(e) => handlePriceChange(Number(e.target.value), priceRange.max)}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 font-museo mb-1 block">Maximum: ${priceRange.max}</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange.max}
                    onChange={(e) => handlePriceChange(priceRange.min, Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProductFilters;
