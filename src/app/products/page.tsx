'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, Smartphone, Headphones, Watch, Laptop, Mouse, Gamepad2, Camera, Speaker, Cable, Home, Car, Dumbbell, ChevronLeft, ChevronRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { useCart, Product } from '@/context/CartContext';

const Products: React.FC = () => {
  const { dispatch } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 18;

  const allProducts = useMemo(() => [
    // Electronics (6 products)
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      description: "High-quality wireless headphones with active noise cancellation and premium sound quality",
      category: "electronics",
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      description: "Advanced smartwatch with health monitoring, GPS, and long battery life",
      category: "electronics",
      rating: 4.9,
      reviews: 256
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      description: "Waterproof Bluetooth speaker with rich bass and 20-hour battery life",
      category: "electronics",
      rating: 4.8,
      reviews: 298
    },
    {
      id: 4,
      name: "4K Webcam",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1623186482288-40cdcf6b6297?w=400&h=400&fit=crop",
      description: "Ultra HD webcam with auto-focus and noise-canceling microphone",
      category: "electronics",
      rating: 4.7,
      reviews: 145
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1590658165737-15a047b7cd40?w=400&h=400&fit=crop",
      description: "True wireless earbuds with active noise cancellation and touch controls",
      category: "electronics",
      rating: 4.5,
      reviews: 289
    },
    {
      id: 6,
      name: "Smart Phone Stand",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=400&fit=crop",
      description: "Adjustable smartphone stand with wireless charging capability",
      category: "electronics",
      rating: 4.6,
      reviews: 187
    },

    // Accessories (5 products)
    {
      id: 7,
      name: "Ergonomic Laptop Stand",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      description: "Adjustable laptop stand for better posture and improved productivity",
      category: "accessories",
      rating: 4.6,
      reviews: 189
    },
    {
      id: 8,
      name: "Wireless Gaming Mouse",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
      description: "Precision wireless mouse with customizable buttons for gaming and work",
      category: "accessories",
      rating: 4.7,
      reviews: 412
    },
    {
      id: 9,
      name: "Premium Phone Case",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
      description: "Protective phone case with wireless charging support and drop protection",
      category: "accessories",
      rating: 4.4,
      reviews: 543
    },
    {
      id: 10,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
      description: "RGB mechanical keyboard with blue switches and programmable keys",
      category: "accessories",
      rating: 4.9,
      reviews: 376
    },
    {
      id: 11,
      name: "USB Cable Set",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1558618666-fbd22c85cd12?w=400&h=400&fit=crop",
      description: "Premium USB-C, Lightning, and Micro USB cable set with fast charging",
      category: "accessories",
      rating: 4.3,
      reviews: 298
    },

    // Gadgets (4 products)
    {
      id: 12,
      name: "USB-C Hub Pro",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop",
      description: "Multi-port USB-C hub with 4K HDMI, USB 3.0, and fast charging support",
      category: "gadgets",
      rating: 4.5,
      reviews: 167
    },
    {
      id: 13,
      name: "Fast Wireless Charger",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      description: "15W fast wireless charging pad compatible with all Qi-enabled devices",
      category: "gadgets",
      rating: 4.6,
      reviews: 234
    },
    {
      id: 14,
      name: "Smart Home Hub",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400&h=400&fit=crop",
      description: "Central hub for all your smart home devices with voice control",
      category: "gadgets",
      rating: 4.6,
      reviews: 178
    },
    {
      id: 15,
      name: "Power Bank Pro",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1609592147739-61d86d0be700?w=400&h=400&fit=crop",
      description: "20000mAh power bank with fast charging and multiple ports",
      category: "gadgets",
      rating: 4.4,
      reviews: 321
    },

    // Audio (8 products)
    {
      id: 16,
      name: "Studio Monitor Headphones",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
      description: "Professional studio monitor headphones with flat frequency response",
      category: "audio",
      rating: 4.8,
      reviews: 187
    },
    {
      id: 17,
      name: "Bluetooth Soundbar",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
      description: "Premium soundbar with Dolby Atmos and wireless subwoofer",
      category: "audio",
      rating: 4.7,
      reviews: 234
    },
    {
      id: 18,
      name: "USB Microphone",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
      description: "Professional USB condenser microphone for streaming and recording",
      category: "audio",
      rating: 4.6,
      reviews: 156
    },
    {
      id: 19,
      name: "Vinyl Record Player",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      description: "Vintage-style turntable with USB conversion and built-in speakers",
      category: "audio",
      rating: 4.5,
      reviews: 89
    },
    {
      id: 20,
      name: "Noise Cancelling Earbuds",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop",
      description: "Premium earbuds with adaptive noise cancellation and transparency mode",
      category: "audio",
      rating: 4.8,
      reviews: 412
    },
    {
      id: 21,
      name: "Audio Interface",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
      description: "2-channel audio interface for home recording studios",
      category: "audio",
      rating: 4.7,
      reviews: 98
    },
    {
      id: 22,
      name: "Bluetooth Headset",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
      description: "Wireless headset with crystal clear calls and all-day battery",
      category: "audio",
      rating: 4.4,
      reviews: 267
    },
    {
      id: 23,
      name: "Desktop Speakers",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
      description: "High-quality desktop speakers with rich bass and clear highs",
      category: "audio",
      rating: 4.6,
      reviews: 189
    },

    // Wearables (5 products)
    {
      id: 24,
      name: "Fitness Tracker Band",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop",
      description: "Advanced fitness tracker with heart rate monitoring and GPS",
      category: "wearables",
      rating: 4.5,
      reviews: 234
    },
    {
      id: 25,
      name: "Smart Ring",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      description: "Sleek smart ring with health monitoring and payment capabilities",
      category: "wearables",
      rating: 4.3,
      reviews: 87
    },
    {
      id: 26,
      name: "VR Headset",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=400&fit=crop",
      description: "Immersive VR headset with 4K display and spatial tracking",
      category: "wearables",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 27,
      name: "Smart Glasses",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop",
      description: "AR smart glasses with built-in camera and voice assistant",
      category: "wearables",
      rating: 4.2,
      reviews: 67
    },
    {
      id: 28,
      name: "Health Monitor Watch",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop",
      description: "Medical-grade health monitoring smartwatch with ECG",
      category: "wearables",
      rating: 4.6,
      reviews: 198
    },

    // Gaming (12 products) 
    {
      id: 29,
      name: "Gaming Mechanical Keyboard",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop",
      description: "RGB mechanical gaming keyboard with custom switches and macros",
      category: "gaming",
      rating: 4.8,
      reviews: 445
    },
    {
      id: 30,
      name: "Pro Gaming Mouse",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
      description: "High-precision gaming mouse with customizable RGB and 12000 DPI",
      category: "gaming",
      rating: 4.7,
      reviews: 378
    },
    {
      id: 31,
      name: "Gaming Headset",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop",
      description: "7.1 surround sound gaming headset with noise-canceling microphone",
      category: "gaming",
      rating: 4.6,
      reviews: 289
    },
    {
      id: 32,
      name: "Gaming Chair",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      description: "Ergonomic gaming chair with lumbar support and RGB lighting",
      category: "gaming",
      rating: 4.5,
      reviews: 156
    },
    {
      id: 33,
      name: "Gaming Controller",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
      description: "Wireless gaming controller with haptic feedback and motion controls",
      category: "gaming",
      rating: 4.4,
      reviews: 234
    },
    {
      id: 34,
      name: "Gaming Monitor",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
      description: "27-inch 144Hz gaming monitor with 1ms response time and G-Sync",
      category: "gaming",
      rating: 4.9,
      reviews: 198
    },
    {
      id: 35,
      name: "Gaming Mousepad",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=400&fit=crop",
      description: "Large RGB gaming mousepad with wireless charging zone",
      category: "gaming",
      rating: 4.3,
      reviews: 167
    },
    {
      id: 36,
      name: "Stream Deck",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=400&fit=crop",
      description: "Customizable stream deck with LCD keys for content creators",
      category: "gaming",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 37,
      name: "Gaming Webcam",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1623186482288-40cdcf6b6297?w=400&h=400&fit=crop",
      description: "4K streaming webcam with auto-focus and background removal",
      category: "gaming",
      rating: 4.6,
      reviews: 112
    },
    {
      id: 38,
      name: "Gaming Desk",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      description: "Adjustable height gaming desk with cable management and RGB",
      category: "gaming",
      rating: 4.4,
      reviews: 78
    },
    {
      id: 39,
      name: "Gaming Speakers",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
      description: "2.1 gaming speaker system with subwoofer and RGB lighting",
      category: "gaming",
      rating: 4.5,
      reviews: 134
    },
    {
      id: 40,
      name: "Gaming Laptop Cooler",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
      description: "RGB laptop cooling pad with adjustable fans and height",
      category: "gaming",
      rating: 4.2,
      reviews: 189
    },

    // Computers (5 products - scaled down from 15)
    {
      id: 41,
      name: "Ultrabook Laptop",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      description: "Thin and light laptop with Intel i7, 16GB RAM, and 512GB SSD",
      category: "computers",
      rating: 4.8,
      reviews: 234
    },
    {
      id: 42,
      name: "Desktop PC Tower",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop",
      description: "Pre-built gaming PC with RTX graphics and RGB lighting",
      category: "computers",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 43,
      name: "All-in-One PC",
      price: 799.99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
      description: "24-inch all-in-one PC with touchscreen and wireless peripherals",
      category: "computers",
      rating: 4.5,
      reviews: 89
    },
    {
      id: 44,
      name: "Mini PC",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=400&h=400&fit=crop",
      description: "Compact mini PC perfect for home office and media streaming",
      category: "computers",
      rating: 4.4,
      reviews: 167
    },
    {
      id: 45,
      name: "External SSD",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
      description: "1TB portable SSD with USB-C and ultra-fast transfer speeds",
      category: "computers",
      rating: 4.6,
      reviews: 298
    },

    // Cameras (3 products - scaled down from 7)
    {
      id: 46,
      name: "DSLR Camera",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
      description: "Professional DSLR camera with 24MP sensor and 4K video",
      category: "cameras",
      rating: 4.8,
      reviews: 123
    },
    {
      id: 47,
      name: "Action Camera",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1495716868937-273203d9b2d5?w=400&h=400&fit=crop",
      description: "Waterproof 4K action camera with image stabilization",
      category: "cameras",
      rating: 4.6,
      reviews: 234
    },
    {
      id: 48,
      name: "Instant Camera",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1495716868937-273203d9b2d5?w=400&h=400&fit=crop",
      description: "Retro instant camera with built-in flash and multiple modes",
      category: "cameras",
      rating: 4.4,
      reviews: 167
    },

    // Speakers (2 products - scaled down from 9)
    {
      id: 49,
      name: "Smart Speaker",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
      description: "Voice-controlled smart speaker with premium sound quality",
      category: "speakers",
      rating: 4.5,
      reviews: 345
    },
    {
      id: 50,
      name: "Portable Speaker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      description: "Waterproof portable speaker with 360-degree sound",
      category: "speakers",
      rating: 4.3,
      reviews: 189
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length, icon: Grid },
    { id: 'electronics', name: 'Electronics', count: allProducts.filter(p => p.category === 'electronics').length, icon: Smartphone },
    { id: 'accessories', name: 'Accessories', count: allProducts.filter(p => p.category === 'accessories').length, icon: Mouse },
    { id: 'gadgets', name: 'Gadgets', count: allProducts.filter(p => p.category === 'gadgets').length, icon: Cable },
    { id: 'audio', name: 'Audio', count: allProducts.filter(p => p.category === 'audio').length, icon: Headphones },
    { id: 'wearables', name: 'Wearables', count: allProducts.filter(p => p.category === 'wearables').length, icon: Watch },
    { id: 'gaming', name: 'Gaming', count: allProducts.filter(p => p.category === 'gaming').length, icon: Gamepad2 },
    { id: 'computers', name: 'Computers', count: allProducts.filter(p => p.category === 'computers').length, icon: Laptop },
    { id: 'cameras', name: 'Cameras', count: allProducts.filter(p => p.category === 'cameras').length, icon: Camera },
    { id: 'speakers', name: 'Speakers', count: allProducts.filter(p => p.category === 'speakers').length, icon: Speaker },
    { id: 'smart-home', name: 'Smart Home', count: 0, icon: Home },
    { id: 'automotive', name: 'Automotive', count: 0, icon: Car },
    { id: 'fitness', name: 'Fitness', count: 0, icon: Dumbbell }
  ];

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchTerm, categoryFilter, priceRange, sortBy, allProducts]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  const resetPagination = () => {
    setCurrentPage(1);
  };

  // Update pagination when filters change
  React.useEffect(() => {
    resetPagination();
  }, [searchTerm, categoryFilter, priceRange, sortBy]);

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to the products grid section
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
      productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"></div>
        
        {/* Floating Theme Color Particles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-primary/3 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-3/4 w-20 h-20 bg-primary/4 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00e0d3 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10">
      
      {/* Enhanced Breadcrumb */}
      <section className="px-4 pt-8 pb-2 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            {/* Enhanced Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-white/8 to-white/5 backdrop-blur-3xl border border-primary/30 rounded-xl shadow-2xl group-hover:border-primary/50 transition-all duration-500"></div>
            
            {/* Subtle Animation Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-primary/40 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute bottom-2 right-4 w-1 h-1 bg-primary/30 rounded-full blur-sm animate-pulse delay-300"></div>
            </div>
            
            <div className="relative p-3">
              <Breadcrumb items={[{ label: 'All Products' }]} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Categories Section */}
      <section className="py-4 sm:py-6 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  onClick={() => setCategoryFilter(category.id)}
                  className={`group relative cursor-pointer hover-lift transition-all duration-500 transform hover:scale-105 ${
                    categoryFilter === category.id ? 'scale-105' : ''
                  }`}
                >
                  {/* Enhanced Glass Card Background */}
                  <div className={`absolute inset-0 backdrop-blur-2xl rounded-xl border transition-all duration-500 ${
                    categoryFilter === category.id 
                      ? 'bg-gradient-to-br from-primary/25 via-primary/15 to-transparent border-primary/60' 
                      : 'bg-gradient-to-br from-white/8 via-white/4 to-transparent border-white/15 group-hover:border-primary/30'
                  }`}></div>
                  
                  {/* Animated Liquid Effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1 left-2 w-1 h-1 bg-primary/40 rounded-full blur-sm animate-bounce"></div>
                    <div className="absolute bottom-2 right-2 w-0.5 h-0.5 bg-purple-400/40 rounded-full blur-sm animate-bounce delay-200"></div>
                  </div>
                  
                  <div className="relative p-2 sm:p-3 text-center">
                    {/* Transparent Icon */}
                    <div className={`flex justify-center mb-1 sm:mb-2 transition-all duration-300 ${
                      categoryFilter === category.id 
                        ? 'text-primary scale-110' 
                        : 'text-white/60 group-hover:text-primary group-hover:scale-110'
                    }`}>
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    
                    <h3 className={`text-xs sm:text-sm font-bold font-museo mb-0.5 sm:mb-1 transition-colors duration-300 leading-tight ${
                      categoryFilter === category.id 
                        ? 'text-primary' 
                        : 'text-white group-hover:text-primary'
                    }`}>
                      {category.name}
                    </h3>
                    <p className={`font-museo text-xs transition-colors duration-300 ${
                      categoryFilter === category.id 
                        ? 'text-primary/80' 
                        : 'text-gray-400 group-hover:text-primary/70'
                    }`}>
                      {category.count}
                    </p>
                  </div>
                  
                  {/* Selection Indicator */}
                  {categoryFilter === category.id && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15 animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Filters and Controls */}
      <section className="py-3 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            {/* Enhanced Glass Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-white/5 backdrop-blur-3xl border border-primary/30 rounded-3xl shadow-2xl group-hover:border-primary/50 transition-all duration-500"></div>
            
            {/* Premium Animated Background Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute top-6 left-8 w-3 h-3 bg-primary/40 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute bottom-8 right-12 w-2 h-2 bg-primary/30 rounded-full blur-lg animate-pulse delay-300"></div>
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-primary/25 rounded-full blur-lg animate-bounce delay-150"></div>
              <div className="absolute bottom-1/4 left-16 w-2.5 h-2.5 bg-primary/35 rounded-full blur-lg animate-pulse delay-700"></div>
            </div>
            
            {/* Gradient Border Animation */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            
            <div className="relative p-3 lg:p-4">
              {/* Section Title */}
              <div className="text-center mb-3">
                <h2 className="text-lg lg:text-xl font-bold font-museo text-white mb-1">
                  Filter & <span className="text-primary">Search</span>
                </h2>
                <p className="text-gray-300 font-museo text-xs">Find exactly what you&apos;re looking for</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
                {/* Enhanced Search */}
                <div className="space-y-1">
                  <label className="block text-white font-museo text-xs font-bold mb-1">
                    <span className="flex items-center space-x-1">
                      <Search className="w-3 h-3 text-primary" />
                      <span>Search</span>
                    </span>
                  </label>
                  <div className="relative group/search">
                    {/* Glass Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/8 backdrop-blur-2xl border border-primary/25 rounded-lg group-focus-within/search:border-primary/50 group-hover/search:border-primary/40 transition-all duration-500 shadow-lg"></div>
                    
                    {/* Animated Search Icon */}
                    <Search className="absolute left-2 top-2 w-3 h-3 text-gray-400 group-focus-within/search:text-primary group-hover/search:text-primary transition-all duration-300 z-10 group-focus-within/search:scale-110" />
                    
                    {/* Search Input */}
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search..."
                      className="relative w-full pl-7 pr-2 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:placeholder-gray-500 text-xs font-museo group-focus-within/search:text-primary transition-colors duration-300"
                    />
                    
                    {/* Input Glow Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-focus-within/search:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Enhanced Price Range */}
                <div className="space-y-1">
                  <label className="block text-white font-museo text-xs font-bold mb-1">
                    <span className="flex items-center space-x-1">
                      <span className="w-3 h-3 bg-primary rounded-full"></span>
                      <span>Price Range</span>
                    </span>
                  </label>
                  <div className="relative group/price">
                    {/* Glass Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/8 backdrop-blur-2xl border border-primary/25 rounded-lg group-focus-within/price:border-primary/50 group-hover/price:border-primary/40 transition-all duration-500 shadow-lg"></div>
                    
                    {/* Price Inputs Container */}
                    <div className="relative p-2">
                      {/* Side by Side Price Inputs */}
                      <div className="grid grid-cols-2 gap-2">
                        {/* Minimum Price Input */}
                        <div className="relative">
                          <label className="block text-gray-300 text-xs mb-1">Min</label>
                          <div className="relative">
                            <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-primary text-xs font-bold">$</span>
                            <input
                              type="number"
                              min="0"
                              max="500"
                              value={priceRange.min}
                              onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                              className="w-full pl-4 pr-1 py-1.5 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:text-primary text-xs font-museo border border-white/20 rounded focus:border-primary/50 transition-colors duration-300"
                              placeholder="0"
                            />
                          </div>
                        </div>
                        
                        {/* Maximum Price Input */}
                        <div className="relative">
                          <label className="block text-gray-300 text-xs mb-1">Max</label>
                          <div className="relative">
                            <span className="absolute left-1 top-1/2 transform -translate-y-1/2 text-primary text-xs font-bold">$</span>
                            <input
                              type="number"
                              min="0"
                              max="1000"
                              value={priceRange.max}
                              onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                              className="w-full pl-4 pr-1 py-1.5 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:text-primary text-xs font-museo border border-white/20 rounded focus:border-primary/50 transition-colors duration-300"
                              placeholder="1000"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Sort */}
                <div className="space-y-1">
                  <label className="block text-white font-museo text-xs font-bold mb-1">
                    <span className="flex items-center space-x-1">
                      <Filter className="w-3 h-3 text-primary" />
                      <span>Sort By</span>
                    </span>
                  </label>
                  <div className="relative group/select">
                    {/* Glass Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/8 backdrop-blur-2xl border border-primary/25 rounded-lg group-focus-within/select:border-primary/50 group-hover/select:border-primary/40 transition-all duration-500 shadow-lg"></div>
                    
                    {/* Custom Select */}
                    <div className="relative">
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="relative w-full p-2 bg-transparent text-white focus:outline-none text-xs font-museo appearance-none cursor-pointer group-focus-within/select:text-primary transition-colors duration-300"
                      >
                        <option value="name" className="bg-gray-800 text-white">Name A-Z</option>
                        <option value="price-low" className="bg-gray-800 text-white">Price: Low to High</option>
                        <option value="price-high" className="bg-gray-800 text-white">Price: High to Low</option>
                        <option value="rating" className="bg-gray-800 text-white">Highest Rated</option>
                        <option value="reviews" className="bg-gray-800 text-white">Most Reviews</option>
                      </select>
                      
                      {/* Custom Dropdown Arrow */}
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <div className="w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-primary group-focus-within/select:border-t-white transition-colors duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced View Mode */}
                <div className="space-y-1">
                  <label className="block text-white font-museo text-xs font-bold mb-1">
                    <span className="flex items-center space-x-1">
                      <span className="w-3 h-3 bg-primary rounded-full"></span>
                      <span>View</span>
                    </span>
                  </label>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`group/btn relative flex-1 p-2 rounded-lg transition-all duration-500 transform hover:scale-105 ${
                        viewMode === 'grid' 
                          ? 'bg-gradient-to-r from-primary/30 to-primary/20 border-primary/60 shadow-lg shadow-primary/25' 
                          : 'bg-gradient-to-r from-white/10 to-white/5 border-white/25 hover:border-primary/40'
                      } border backdrop-blur-2xl shadow-lg`}
                    >
                      {/* Button Glow Effect */}
                      {viewMode === 'grid' && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse"></div>
                      )}
                      
                      <Grid className={`w-4 h-4 transition-all duration-300 relative z-10 mx-auto ${
                        viewMode === 'grid' ? 'text-primary scale-110' : 'text-gray-400 group-hover/btn:text-primary group-hover/btn:scale-110'
                      }`} />
                    </button>
                    
                    <button
                      onClick={() => setViewMode('list')}
                      className={`group/btn relative flex-1 p-2 rounded-lg transition-all duration-500 transform hover:scale-105 ${
                        viewMode === 'list' 
                          ? 'bg-gradient-to-r from-primary/30 to-primary/20 border-primary/60 shadow-lg shadow-primary/25' 
                          : 'bg-gradient-to-r from-white/10 to-white/5 border-white/25 hover:border-primary/40'
                      } border backdrop-blur-2xl shadow-lg`}
                    >
                      {/* Button Glow Effect */}
                      {viewMode === 'list' && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 animate-pulse"></div>
                      )}
                      
                      <List className={`w-4 h-4 transition-all duration-300 relative z-10 mx-auto ${
                        viewMode === 'list' ? 'text-primary scale-110' : 'text-gray-400 group-hover/btn:text-primary group-hover/btn:scale-110'
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid */}
      <section id="products-grid" className="py-8 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/3 to-transparent backdrop-blur-xl border border-primary/20 rounded-xl"></div>
              <div className="relative p-4">
                <p className="text-gray-300 font-museo text-base font-medium">
                  Showing <span className="text-primary font-bold">{startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}</span> of <span className="text-primary font-bold">{filteredProducts.length}</span> products
                  {currentPage > 1 && <span className="text-gray-400 ml-2">(Page {currentPage} of {totalPages})</span>}
                </p>
              </div>
            </div>
          </div>
          
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {currentProducts.map((product) => (
                <div key={product.id} className="group relative hover-lift">
                  {/* Enhanced Glass Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-xl group-hover:border-primary/30 transition-all duration-500"></div>
                  
                  {/* Animated Liquid Effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-primary/40 rounded-full blur-sm animate-bounce"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-primary/30 rounded-full blur-sm animate-bounce delay-200"></div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-32 sm:h-36 object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <button className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-primary transition-all duration-300 hover:bg-primary/20">
                        <Heart className="w-3 h-3" />
                      </button>
                    </div>
                    
                    <div className="relative p-3">
                      <h3 className="text-sm font-bold text-white font-museo mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">{product.name}</h3>
                      <p className="text-gray-300 text-xs mb-2 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center mb-2">
                        <div className="flex text-primary">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-gray-300 text-xs ml-1">({product.reviews})</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary font-museo">${product.price}</span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="group/btn relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-2 py-1.5 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 flex items-center overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-full transition-all duration-500 transform -translate-x-full"></div>
                          <ShoppingCart className="w-3 h-3 relative z-10" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {currentProducts.map((product) => (
                <div key={product.id} className="group relative hover-lift">
                  {/* Enhanced Glass Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 rounded-xl group-hover:border-primary/30 transition-all duration-500"></div>
                  
                  {/* Animated Liquid Effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-3 left-4 w-2 h-2 bg-primary/40 rounded-full blur-sm animate-bounce"></div>
                    <div className="absolute bottom-4 right-6 w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-sm animate-bounce delay-200"></div>
                  </div>
                  
                  <div className="relative p-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative overflow-hidden rounded-lg">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={128}
                          height={128}
                          className="w-full sm:w-32 h-32 object-cover transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white font-museo mb-1 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                            <p className="text-gray-300 text-sm mb-2">{product.description}</p>
                          </div>
                          <button className="p-1.5 text-white hover:text-primary transition-colors duration-300 self-start">
                            <Heart className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                          <span className="text-gray-300 text-sm ml-2">({product.reviews} reviews)</span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <span className="text-2xl font-bold text-primary font-museo">${product.price}</span>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="group/btn relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-4 py-2 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-full transition-all duration-500 transform -translate-x-full"></div>
                            <ShoppingCart className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-primary/20 rounded-2xl"></div>
                <div className="relative p-12">
                  <p className="text-gray-300 text-xl font-museo mb-4">No products found matching your criteria.</p>
                  <p className="text-gray-400 font-museo">Try adjusting your search or filter options.</p>
                </div>
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-primary/20 rounded-2xl"></div>
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-museo transition-all duration-300 ${
                        currentPage === 1
                          ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-white/10 to-white/5 text-white hover:from-primary/20 hover:to-primary/10 hover:text-primary border border-white/20 hover:border-primary/30'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center space-x-2">
                      {getPageNumbers().map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-3 rounded-xl font-museo transition-all duration-300 ${
                            currentPage === page
                              ? 'bg-gradient-to-r from-primary/30 to-primary/20 text-primary border border-primary/50'
                              : 'bg-gradient-to-r from-white/10 to-white/5 text-white hover:from-primary/20 hover:to-primary/10 hover:text-primary border border-white/20 hover:border-primary/30'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-museo transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-white/10 to-white/5 text-white hover:from-primary/20 hover:to-primary/10 hover:text-primary border border-white/20 hover:border-primary/30'
                      }`}
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Page Info */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-300 text-sm font-museo">
                      Page <span className="text-primary font-bold">{currentPage}</span> of <span className="text-primary font-bold">{totalPages}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      </div>
    </div>
  );
};

export default Products;
