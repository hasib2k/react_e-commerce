import React from 'react';
import Image from 'next/image';
import GlassCard from '@/components/GlassCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <GlassCard className="w-full max-w-sm mx-auto hover-lift group">
      <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold font-museo text-white mb-2">{product.name}</h3>
      {product.description && (
        <p className="text-gray-300 text-sm mb-4">{product.description}</p>
      )}
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-primary">${product.price}</span>
        <button
          onClick={() => onAddToCart?.(product)}
          className="bg-primary hover:bg-opacity-80 text-white px-4 py-2 rounded-lg font-museo transition-all duration-300 transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </GlassCard>
  );
};

export default ProductCard;
