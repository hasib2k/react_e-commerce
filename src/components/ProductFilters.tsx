'use client';

import React, { useState } from 'react';
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
    <GlassCard className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Search */}
        <div>
          <label className="block text-white font-museo mb-2">Search Products</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for products..."
            className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-white font-museo mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:border-primary"
          >
            {categories.map((category) => (
              <option key={category} value={category} className="bg-gray-800 text-white">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-white font-museo mb-2">
            Price Range: ${priceRange.min} - ${priceRange.max}
          </label>
          <div className="flex space-x-2">
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange.min}
              onChange={(e) => handlePriceChange(Number(e.target.value), priceRange.max)}
              className="flex-1"
            />
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange.max}
              onChange={(e) => handlePriceChange(priceRange.min, Number(e.target.value))}
              className="flex-1"
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProductFilters;
