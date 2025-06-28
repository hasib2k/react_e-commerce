'use client';

import React, { useState } from 'react';
import { Filter, DollarSign, TrendingUp } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

interface ProductFiltersProps {
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
  onSortChange: (sort: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  onCategoryChange,
  onPriceRangeChange,
  onSortChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedSort, setSelectedSort] = useState('featured');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'gadgets', label: 'Gadgets' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under-50', label: 'Under $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: 'over-200', label: 'Over $200' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRange(range);
    onPriceRangeChange(range);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
    onSortChange(sort);
  };

  return (
    <GlassCard className="mb-3 relative overflow-hidden group hover-lift p-2">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        {/* Featured Products Heading/Description */}
        <div className="text-center mb-2">
          <h2 className="text-base md:text-lg font-bold font-museo text-white mb-0.5">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-xs text-gray-300 max-w-xl mx-auto font-museo">
            Discover our handpicked selection of premium products
          </p>
        </div>
        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Category Filter */}
          <div className="group">
            <label className="flex items-center text-white font-museo mb-1 text-xs font-bold">
              <Filter className="w-3 h-3 text-primary mr-1" />
              Category
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full p-1.5 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none cursor-pointer font-museo text-xs"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value} className="bg-gray-800 text-white py-2">
                    {category.label}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="group">
            <label className="flex items-center text-white font-museo mb-1 text-xs font-bold">
              <DollarSign className="w-3 h-3 text-primary mr-1" />
              Price Range
            </label>
            <div className="relative">
              <select
                value={selectedPriceRange}
                onChange={(e) => handlePriceRangeChange(e.target.value)}
                className="w-full p-1.5 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none cursor-pointer font-museo text-xs"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-gray-800 text-white py-2">
                    {range.label}
                  </option>
                ))}
              </select>
              <DollarSign className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>

          {/* Sort Options */}
          <div className="group">
            <label className="flex items-center text-white font-museo mb-1 text-xs font-bold">
              <TrendingUp className="w-3 h-3 text-primary mr-1" />
              Sort By
            </label>
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full p-1.5 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none cursor-pointer font-museo text-xs"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white py-2">
                    {option.label}
                  </option>
                ))}
              </select>
              <TrendingUp className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProductFilters;
