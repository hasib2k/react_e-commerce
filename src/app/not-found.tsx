'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.15)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.12)_0%,transparent_60%)]"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-primary font-museo mb-4">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-museo mb-4">Page Not Found</h2>
              <p className="text-gray-300 text-lg font-museo">
                Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-museo font-bold transition-all duration-300 transform hover:scale-105"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              
              <Link 
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-museo font-bold transition-all duration-300"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Products
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center text-gray-300 hover:text-primary transition-colors duration-300 font-museo"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
