'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/GlassCard';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.08)_0%,transparent_50%)]"></div>
      </div>

      <Navbar cartCount={state.itemCount} />
      
      <div className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/"
              className="group inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 mb-6"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(20, 184, 166, 0.2)',
              }}
            >
              <ArrowLeft className="w-5 h-5 mr-2 text-primary group-hover:text-white transition-colors duration-300" />
              <span className="text-primary group-hover:text-white font-museo transition-colors duration-300">Continue Shopping</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold font-museo text-white mb-4">
              Shopping Cart
            </h1>
            <p className="text-gray-300 font-museo text-lg">
              {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>

          {state.items.length === 0 ? (
            // Empty Cart
            <div className="text-center py-16">
              <GlassCard className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-primary/20 border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-white font-museo mb-4">Your cart is empty</h2>
                <p className="text-gray-300 font-museo mb-6">Add some products to get started!</p>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 rounded-xl font-museo font-bold text-white transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.8) 0%, rgba(20, 184, 166, 0.6) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(20, 184, 166, 0.4)',
                  }}
                >
                  Start Shopping
                </Link>
              </GlassCard>
            </div>
          ) : (
            // Cart Items
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {state.items.map((item) => (
                  <GlassCard key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold font-museo text-white mb-1 truncate">{item.name}</h3>
                        {item.description && (
                          <p className="text-gray-300 text-sm font-museo truncate">{item.description}</p>
                        )}
                        <p className="text-primary font-bold font-museo mt-2">${item.price}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-white font-museo font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all duration-300"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </GlassCard>
                ))}

                {/* Clear Cart Button */}
                <div className="flex justify-end mt-6">
                  <button
                    onClick={clearCart}
                    className="px-4 py-2 text-red-400 hover:text-red-300 font-museo transition-colors duration-300"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <GlassCard className="p-6 sticky top-24">
                  <h2 className="text-2xl font-bold font-museo text-white mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300 font-museo">
                      <span>Subtotal ({state.itemCount} items)</span>
                      <span>${state.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-300 font-museo">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-gray-300 font-museo">
                      <span>Tax</span>
                      <span>${(state.total * 0.08).toFixed(2)}</span>
                    </div>
                    <hr className="border-white/10" />
                    <div className="flex justify-between text-white font-museo font-bold text-lg">
                      <span>Total</span>
                      <span>${(state.total * 1.08).toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    className="w-full py-4 rounded-xl font-museo font-bold text-white transition-all duration-300 transform hover:scale-105 mb-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.8) 0%, rgba(20, 184, 166, 0.6) 100%)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(20, 184, 166, 0.4)',
                    }}
                  >
                    Proceed to Checkout
                  </button>

                  <Link
                    href="/"
                    className="block w-full py-3 text-center text-primary hover:text-white font-museo transition-colors duration-300"
                  >
                    Continue Shopping
                  </Link>
                </GlassCard>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
