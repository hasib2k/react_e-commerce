'use client';

import React from 'react';
import { Truck, Clock, MapPin, Package, Globe, Shield, Calculator, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/GlassCard';
import { useCart } from '@/context/CartContext';

const ShippingInfo: React.FC = () => {
  const { state } = useCart();

  const shippingOptions = [
    {
      icon: Clock,
      name: 'Standard Shipping',
      time: '3-5 Business Days',
      cost: 'FREE on orders $50+',
      description: 'Perfect for regular deliveries with reliable tracking',
      features: ['Free on orders over $50', 'Tracking included', 'Insurance coverage']
    },
    {
      icon: Truck,
      name: 'Express Shipping',
      time: '1-2 Business Days',
      cost: '$9.99',
      description: 'Fast delivery for when you need it quickly',
      features: ['Priority handling', 'Real-time tracking', 'Signature required']
    },
    {
      icon: Package,
      name: 'Overnight Delivery',
      time: 'Next Business Day',
      cost: '$19.99',
      description: 'Ultra-fast delivery for urgent orders',
      features: ['Next day delivery', 'Priority processing', 'SMS notifications']
    }
  ];

  const internationalZones = [
    {
      zone: 'Zone 1 - North America',
      countries: 'Canada, Mexico',
      time: '5-7 Business Days',
      cost: 'Starting at $12.99'
    },
    {
      zone: 'Zone 2 - Europe',
      countries: 'UK, Germany, France, Italy, Spain',
      time: '7-10 Business Days',
      cost: 'Starting at $19.99'
    },
    {
      zone: 'Zone 3 - Asia Pacific',
      countries: 'Australia, Japan, Singapore, South Korea',
      time: '10-14 Business Days',
      cost: 'Starting at $24.99'
    },
    {
      zone: 'Zone 4 - Rest of World',
      countries: 'All other supported countries',
      time: '14-21 Business Days',
      cost: 'Starting at $29.99'
    }
  ];

  const packagingInfo = [
    {
      icon: Shield,
      title: 'Secure Packaging',
      description: 'All items are carefully packaged with protective materials to ensure safe delivery.'
    },
    {
      icon: Package,
      title: 'Eco-Friendly Materials',
      description: 'We use recyclable and biodegradable packaging materials whenever possible.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every package is inspected before shipping to ensure accuracy and quality.'
    }
  ];

  const shippingPolicies = [
    {
      title: 'Processing Time',
      content: 'Orders are typically processed within 1-2 business days. During peak seasons, processing may take up to 3 business days.'
    },
    {
      title: 'Order Cutoff',
      content: 'Orders placed before 2 PM EST Monday-Friday will be processed the same day. Weekend orders are processed on the next business day.'
    },
    {
      title: 'Address Accuracy',
      content: 'Please ensure your shipping address is accurate. We cannot be responsible for packages shipped to incorrect addresses.'
    },
    {
      title: 'Delivery Confirmation',
      content: 'All packages require signature confirmation for orders over $100. Smaller orders may be left at your doorstep.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={state.itemCount} />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <Truck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold font-museo text-white mb-6">
              Shipping <span className="text-primary">Information</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-museo max-w-4xl mx-auto">
              Fast, reliable, and secure shipping options to get your orders delivered safely and on time.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Shipping <span className="text-primary">Options</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingOptions.map((option, index) => (
              <GlassCard key={index} className="hover-lift border-2 border-primary/30">
                <div className="text-center mb-6">
                  <option.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white font-museo mb-2">{option.name}</h3>
                  <div className="text-primary text-xl font-bold mb-2">{option.time}</div>
                  <div className="text-gray-300 text-lg">{option.cost}</div>
                </div>
                
                <p className="text-gray-300 text-center mb-6">{option.description}</p>
                
                <div className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              International <span className="text-primary">Shipping</span>
            </h2>
            <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto">
              We ship to over 50 countries worldwide with reliable international carriers and full tracking support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalZones.map((zone, index) => (
              <GlassCard key={index} className="hover-lift">
                <div className="flex items-start">
                  <MapPin className="w-8 h-8 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white font-museo mb-2">{zone.zone}</h3>
                    <p className="text-gray-300 mb-3">{zone.countries}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-primary font-bold">{zone.time}</div>
                        <div className="text-gray-400 text-sm">{zone.cost}</div>
                      </div>
                      <button className="text-primary hover:text-primary/80 font-bold transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Packaging & <span className="text-primary">Protection</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagingInfo.map((info, index) => (
              <GlassCard key={index} className="text-center hover-lift">
                <info.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white font-museo mb-3">{info.title}</h3>
                <p className="text-gray-300">{info.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Calculator */}
      <section className="py-16 px-4 bg-black/10">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="border-2 border-primary/30">
            <div className="text-center mb-8">
              <Calculator className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold font-museo text-white mb-4">
                Shipping <span className="text-primary">Calculator</span>
              </h2>
              <p className="text-xl text-gray-300 font-museo">
                Calculate shipping costs and delivery times for your location
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-museo mb-2">Destination Country</label>
                <select className="w-full p-3 bg-white/10 border-2 border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary">
                  <option>Select Country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>Australia</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-museo mb-2">ZIP/Postal Code</label>
                <input
                  type="text"
                  placeholder="Enter ZIP code"
                  className="w-full p-3 bg-white/10 border-2 border-primary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
              </div>
            </div>
            
            <button className="w-full mt-6 bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
              Calculate Shipping
            </button>
          </GlassCard>
        </div>
      </section>

      {/* Shipping Policies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Shipping <span className="text-primary">Policies</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shippingPolicies.map((policy, index) => (
              <GlassCard key={index} className="hover-lift">
                <h3 className="text-xl font-bold text-white font-museo mb-3 border-b border-primary/20 pb-2">
                  {policy.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{policy.content}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingInfo;
