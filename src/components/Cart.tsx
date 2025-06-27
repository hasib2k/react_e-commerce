'use client';

import React from 'react';
import Image from 'next/image';
import GlassCard from '@/components/GlassCard';
import { useCart, CartItem } from '@/context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <GlassCard className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-museo text-white">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-primary transition-colors text-2xl"
          >
            ×
          </button>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-300 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {state.items.map((item: CartItem) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-museo font-semibold">{item.name}</h3>
                    <p className="text-primary">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80"
                    >
                      -
                    </button>
                    <span className="text-white w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-80"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-accent hover:text-red-400 ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-white border-opacity-20 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold font-museo text-white">
                  Total: ${state.total.toFixed(2)}
                </span>
                <button
                  onClick={clearCart}
                  className="text-accent hover:text-red-400 font-museo"
                >
                  Clear Cart
                </button>
              </div>
              
              <div className="space-y-3">
                <button className="w-full bg-primary hover:bg-opacity-80 text-white py-3 rounded-lg font-museo transition-all duration-300">
                  Proceed to Checkout
                </button>
                <button
                  onClick={onClose}
                  className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-lg font-museo transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </GlassCard>
    </div>
  );
};

export default Cart;
