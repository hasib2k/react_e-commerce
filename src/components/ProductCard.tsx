import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import GlassCard from '@/components/GlassCard';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description?: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(product);
    console.log(`Added ${product.name} to cart`);
  };

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <GlassCard 
      className="w-full hover-lift group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-1.5" 
      onClick={handleCardClick}
    >
      <div className="relative mb-1.5 overflow-hidden rounded-md">
        {product.badge && (
          <div className="absolute top-0.5 left-0.5 z-10 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-1 py-0.5 rounded">
            {product.badge}
          </div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={120}
          className="w-full h-16 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="space-y-1">
        <h3 className="text-xs font-bold font-museo text-white line-clamp-1">{product.name}</h3>
        
        <div className="flex items-center space-x-1">
          <div className="flex items-center">
            <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" />
            <span className="text-xs text-gray-300 ml-0.5">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        
        <div className="flex items-center space-x-1">
          <span className="text-xs font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>
        
        <button
          onClick={handleAddToCart}
          className="group/cart w-full relative px-1.5 py-1 rounded-md overflow-hidden transition-all duration-300 transform hover:scale-105 focus:outline-none bg-primary/80 hover:bg-primary border border-primary/40"
        >
          <div className="flex items-center justify-center text-white font-museo text-xs">
            <ShoppingCart className="w-2.5 h-2.5 mr-1 group-hover/cart:scale-110 transition-transform duration-300" />
            <span>Add</span>
          </div>
        </button>
      </div>
    </GlassCard>
  );
};

export default ProductCard;
