'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Home, Package, Users, Mail, ChevronDown, Smartphone, Headphones, Watch } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Cart from '@/components/Cart';

interface NavbarProps {
  cartCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount = 0 }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { 
      href: '/products', 
      label: 'Products', 
      icon: Package,
      dropdown: [
        { href: '/electronics', label: 'Electronics', icon: Smartphone },
        { href: '/accessories', label: 'Accessories', icon: Headphones },
        { href: '/gadgets', label: 'Gadgets', icon: Watch }
      ]
    },
    { href: '/brands', label: 'Brands', icon: Users },
    { href: '/about', label: 'About', icon: Users },
    { href: '/contact', label: 'Contact', icon: Mail }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 p-2 sm:p-4">
        <GlassCard className="flex justify-between items-center backdrop-blur-2xl bg-black/30 border border-black/40 shadow-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
            <h1 className="text-xl sm:text-2xl font-bold font-museo text-white">
              <span className="text-primary">B</span>uyble
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === link.label ? null : link.label)}
                      className="text-white hover:text-primary transition-all duration-300 font-museo px-2 xl:px-4 py-2 rounded-lg bg-gradient-to-r from-black/10 to-black/20 hover:from-black/30 hover:to-black/40 backdrop-blur-sm relative overflow-hidden group flex items-center space-x-1 xl:space-x-2 transform hover:scale-105"
                    >
                      <link.icon className="w-4 h-4 relative z-10" />
                      <span className="relative z-10 text-sm xl:text-base hidden xl:inline">{link.label}</span>
                      <span className="relative z-10 text-xs xl:hidden">{link.label}</span>
                      <ChevronDown className={`w-3 h-3 relative z-10 transition-transform duration-200 ${dropdownOpen === link.label ? 'rotate-180' : ''}`} />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    {dropdownOpen === link.label && (
                      <div className="absolute top-full left-0 mt-2 w-56 z-50">
                        <GlassCard className="backdrop-blur-2xl bg-black/40 border border-black/50 shadow-2xl">
                          <div className="py-2">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center space-x-3 px-4 py-3 text-white hover:text-primary hover:bg-black/30 transition-all duration-300 font-museo"
                                onClick={() => setDropdownOpen(null)}
                              >
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm">{item.label}</span>
                              </Link>
                            ))}
                          </div>
                        </GlassCard>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary transition-all duration-300 font-museo px-2 xl:px-4 py-2 rounded-lg bg-gradient-to-r from-black/10 to-black/20 hover:from-black/30 hover:to-black/40 backdrop-blur-sm relative overflow-hidden group flex items-center space-x-1 xl:space-x-2 transform hover:scale-105"
                  >
                    <link.icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10 text-sm xl:text-base hidden xl:inline">{link.label}</span>
                    <span className="relative z-10 text-xs xl:hidden">{link.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-white hover:text-primary transition-all duration-300 font-museo flex items-center space-x-1 xl:space-x-2 px-2 xl:px-4 py-2 rounded-lg bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50 backdrop-blur-sm relative overflow-hidden group transform hover:scale-105"
            >
              <div className="relative z-10 flex items-center space-x-1 xl:space-x-2">
                <ShoppingCart className="w-4 h-4 xl:w-5 xl:h-5" />
                <span className="text-sm xl:text-base hidden xl:inline">Cart</span>
                <span className="text-xs xl:hidden">Cart</span>
                {cartCount > 0 && (
                  <span className="bg-primary text-black rounded-full w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Medium Screen (Tablet) Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary transition-all duration-300 font-museo px-2 py-2 rounded-lg bg-gradient-to-r from-black/10 to-black/20 hover:from-black/30 hover:to-black/40 backdrop-blur-sm relative overflow-hidden group transform hover:scale-105"
              >
                <link.icon className="w-5 h-5 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
            
            {/* More Menu for tablet */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-all duration-300 p-2 rounded-lg bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-white hover:text-primary transition-all duration-300 relative p-2 rounded-lg bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-black rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-all duration-300 p-2 rounded-lg bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </GlassCard>

        {/* Mobile/Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="block lg:hidden mt-2 sm:mt-4 transition-all duration-300 ease-in-out">
            <GlassCard className="backdrop-blur-2xl bg-black/40 border border-black/50 shadow-2xl overflow-hidden">
              <div className="flex flex-col space-y-1 p-2">
                {navLinks.map((link, index) => (
                  <div key={link.href}>
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setDropdownOpen(dropdownOpen === link.label ? null : link.label)}
                          className="w-full text-white hover:text-primary transition-all duration-300 font-museo py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-black/30 hover:to-black/40 flex items-center justify-between text-sm sm:text-base transform hover:scale-[1.02] relative overflow-hidden group"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex items-center space-x-3 relative z-10">
                            <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>{link.label}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 relative z-10 transition-transform duration-200 ${dropdownOpen === link.label ? 'rotate-180' : ''}`} />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                        
                        {dropdownOpen === link.label && (
                          <div className="ml-4 mt-1 space-y-1">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center space-x-3 py-2 px-4 text-gray-300 hover:text-primary hover:bg-black/10 transition-all duration-300 font-museo text-sm rounded-lg"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setDropdownOpen(null);
                                }}
                              >
                                <item.icon className="w-4 h-4" />
                                <span>{item.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white hover:text-primary transition-all duration-300 font-museo py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-black/30 hover:to-black/40 flex items-center space-x-3 text-sm sm:text-base transform hover:scale-[1.02] relative overflow-hidden group"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <link.icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                        <span className="relative z-10">{link.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </nav>
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
