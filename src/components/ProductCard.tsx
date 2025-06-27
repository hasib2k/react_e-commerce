import React from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart?.(product);
    // Optional: Show a toast notification or confirmation
    console.log(`Added ${product.name} to cart`);
    // Route to cart after adding the product
    setTimeout(() => {
      router.push('/cart');
    }, 500); // Small delay to show the action completed
  };

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <GlassCard 
      className="w-full max-w-xs mx-auto hover-lift group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 p-2" 
      onClick={handleCardClick}
    >
      <div className="aspect-w-16 aspect-h-9 mb-2 overflow-hidden rounded-lg relative">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={120}
          className="w-full h-20 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent rounded-lg"></div>
      </div>
      <h3 className="text-xs font-bold font-museo text-white mb-1 line-clamp-2">{product.name}</h3>
      {product.description && (
        <p className="text-gray-300 text-xs mb-1 line-clamp-1">{product.description}</p>
      )}
      <div className="flex justify-center items-center mb-1">
        <span className="text-sm font-bold text-primary">${product.price}</span>
      </div>
      <button
        onClick={handleAddToCart}
        className="group/cart w-full relative px-2 py-1 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30 focus:outline-none"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.8) 0%, rgba(20, 184, 166, 0.6) 100%)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(20, 184, 166, 0.4)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/cart:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center justify-center text-white font-museo text-xs">
          <ShoppingCart className="w-3 h-3 mr-1 group-hover/cart:scale-110 transition-transform duration-300" />
          <span className="group-hover/cart:font-bold transition-all duration-300">Add to Cart</span>
        </div>
      </button>
    </GlassCard>
  );
};

export default ProductCard;
