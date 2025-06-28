'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Package, Search, MapPin, Clock, CheckCircle, Truck, Home, User } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import { useCart } from '@/context/CartContext';

const TrackOrder: React.FC = () => {
  const { state } = useCart();
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  // Sample tracking data
  const sampleTrackingData = {
    orderNumber: 'EC-2024-12345',
    status: 'In Transit',
    estimatedDelivery: 'Tomorrow, Dec 28',
    items: [
      { name: 'Premium Wireless Headphones', quantity: 1, image: 'https://via.placeholder.com/100x100/1a1a2e/ffffff?text=Headphones' },
      { name: 'Smart Watch Pro', quantity: 1, image: 'https://via.placeholder.com/100x100/16213e/ffffff?text=Watch' }
    ],
    trackingHistory: [
      {
        status: 'Order Placed',
        description: 'Your order has been confirmed and is being prepared',
        date: 'Dec 24, 2024',
        time: '2:30 PM',
        completed: true,
        icon: CheckCircle
      },
      {
        status: 'Order Processed',
        description: 'Your order has been processed and is ready for shipment',
        date: 'Dec 25, 2024',
        time: '9:15 AM',
        completed: true,
        icon: Package
      },
      {
        status: 'Shipped',
        description: 'Your package has been picked up by our carrier',
        date: 'Dec 26, 2024',
        time: '11:45 AM',
        completed: true,
        icon: Truck
      },
      {
        status: 'In Transit',
        description: 'Your package is on the way to your delivery address',
        date: 'Dec 27, 2024',
        time: '8:20 AM',
        completed: true,
        icon: MapPin
      },
      {
        status: 'Out for Delivery',
        description: 'Your package is out for delivery and will arrive today',
        date: 'Dec 28, 2024',
        time: 'Expected',
        completed: false,
        icon: Truck
      },
      {
        status: 'Delivered',
        description: 'Your package has been delivered successfully',
        date: 'Dec 28, 2024',
        time: 'Pending',
        completed: false,
        icon: Home
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001'
    },
    carrier: 'FedEx',
    trackingNumber: 'FX123456789012'
  };

  const handleTrackOrder = () => {
    setIsTracking(true);
    // Simulate API call delay
    setTimeout(() => {
      setIsTracking(false);
    }, 1000);
  };

  const trackingFeatures = [
    {
      icon: MapPin,
      title: 'Real-Time Location',
      description: 'See exactly where your package is on its journey to you'
    },
    {
      icon: Clock,
      title: 'Delivery Updates',
      description: 'Get notifications for every status change and delivery attempt'
    },
    {
      icon: Truck,
      title: 'Carrier Information',
      description: 'Know which carrier is handling your delivery'
    },
    {
      icon: User,
      title: 'Delivery Instructions',
      description: 'Add special delivery instructions or change delivery preferences'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Track Order' }]} />
      
      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <GlassCard className="py-6">
            <Package className="w-10 h-10 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold font-museo text-white mb-3">
              Track Your <span className="text-primary">Order</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4 font-museo max-w-3xl mx-auto">
              Stay updated on your order status with real-time tracking information and delivery updates.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Order Tracking Form */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="border border-primary/30 py-6">
            <div className="text-center mb-6">
              <Search className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold font-museo text-white mb-4">
                Enter Your Order Details
              </h2>
              <p className="text-gray-300 font-museo">
                Enter your order number and email address to track your package
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-museo mb-2">Order Number</label>
                <input
                  type="text"
                  placeholder="EC-2024-12345"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="w-full p-4 bg-white/10 border-2 border-primary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <label className="block text-white font-museo mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 bg-white/10 border-2 border-primary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            
            <button
              onClick={handleTrackOrder}
              disabled={isTracking}
              className="w-full bg-primary hover:bg-primary/80 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isTracking ? 'Tracking...' : 'Track Order'}
            </button>
          </GlassCard>
        </div>
      </section>

      {/* Sample Tracking Results */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <GlassCard className="border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 border-b border-primary/20 pb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Order Number:</span>
                    <span className="text-white font-bold">{sampleTrackingData.orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Status:</span>
                    <span className="text-primary font-bold">{sampleTrackingData.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Estimated Delivery:</span>
                    <span className="text-white font-bold">{sampleTrackingData.estimatedDelivery}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Carrier:</span>
                    <span className="text-white font-bold">{sampleTrackingData.carrier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tracking Number:</span>
                    <span className="text-white font-bold">{sampleTrackingData.trackingNumber}</span>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-lg font-bold text-white font-museo mb-4">Items Ordered</h4>
                  <div className="space-y-3">
                    {sampleTrackingData.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Image src={item.image} alt={item.name} width={48} height={48} className="w-12 h-12 rounded-lg object-cover" />
                        <div className="flex-1">
                          <div className="text-white font-semibold">{item.name}</div>
                          <div className="text-gray-400 text-sm">Qty: {item.quantity}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-6 mt-6">
                  <h4 className="text-lg font-bold text-white font-museo mb-4">Shipping Address</h4>
                  <div className="text-gray-300">
                    <div className="font-semibold text-white">{sampleTrackingData.shippingAddress.name}</div>
                    <div>{sampleTrackingData.shippingAddress.address}</div>
                    <div>
                      {sampleTrackingData.shippingAddress.city}, {sampleTrackingData.shippingAddress.state} {sampleTrackingData.shippingAddress.zip}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Tracking Timeline */}
            <div className="lg:col-span-2">
              <GlassCard className="border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 border-b border-primary/20 pb-4">
                  Tracking History
                </h3>
                
                <div className="space-y-6">
                  {sampleTrackingData.trackingHistory.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                        event.completed 
                          ? 'bg-primary border-primary' 
                          : 'bg-gray-600 border-gray-600'
                      }`}>
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <h4 className={`text-lg font-bold font-museo ${
                            event.completed ? 'text-white' : 'text-gray-400'
                          }`}>
                            {event.status}
                          </h4>
                          <div className={`text-sm ${
                            event.completed ? 'text-gray-300' : 'text-gray-500'
                          }`}>
                            {event.date} {event.time !== 'Pending' && event.time !== 'Expected' && `at ${event.time}`}
                          </div>
                        </div>
                        <p className={`mt-1 ${
                          event.completed ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {event.description}
                        </p>
                      </div>
                      
                      {event.completed && (
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Features */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Tracking <span className="text-primary">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingFeatures.map((feature, index) => (
              <GlassCard key={index} className="text-center hover-lift">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white font-museo mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="border-2 border-primary/30">
            <User className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Need <span className="text-primary">Help?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-museo">
              Can&apos;t find your order or having tracking issues? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300">
                FAQ
              </button>
            </div>
          </GlassCard>
        </div>
      </section>

    </div>
  );
};

export default TrackOrder;
