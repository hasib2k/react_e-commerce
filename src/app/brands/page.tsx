import React from 'react';
import GlassCard from '@/components/GlassCard';
import { Award, Users, Globe, TrendingUp, Shield, Star, Handshake, Target } from 'lucide-react';

const BrandsPage: React.FC = () => {
  const brandPartners = [
    {
      name: 'TechCore',
      category: 'Electronics',
      description: 'Leading manufacturer of premium audio equipment and wireless headphones',
      partnership: 'Exclusive Distribution',
      years: '5+ years',
      products: ['Wireless Headphones', 'Bluetooth Speakers', 'Audio Accessories']
    },
    {
      name: 'SmartDevices Pro',
      category: 'Smart Gadgets',
      description: 'Innovative smart home and wearable technology solutions',
      partnership: 'Strategic Alliance',
      years: '3+ years',
      products: ['Smart Watches', 'Home Hubs', 'IoT Devices']
    },
    {
      name: 'AccessoryMax',
      category: 'Accessories',
      description: 'Premium computer and mobile accessories for professionals',
      partnership: 'Preferred Vendor',
      years: '4+ years',
      products: ['Laptop Stands', 'Wireless Mice', 'USB-C Hubs']
    },
    {
      name: 'GadgetWorks',
      category: 'Consumer Electronics',
      description: 'Cutting-edge consumer electronics and productivity tools',
      partnership: 'Exclusive Retailer',
      years: '2+ years',
      products: ['Webcams', 'Keyboards', 'Charging Solutions']
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Best E-commerce Platform 2024',
      organization: 'Tech Retail Awards',
      description: 'Recognized for outstanding customer experience and product curation'
    },
    {
      icon: Users,
      title: 'Customer Choice Award',
      organization: 'Consumer Reports',
      description: 'Highest customer satisfaction in electronics retail category'
    },
    {
      icon: Shield,
      title: 'Trusted Retailer Certification',
      organization: 'Digital Commerce Association',
      description: 'Certified for secure transactions and customer data protection'
    },
    {
      icon: Globe,
      title: 'Global Expansion Excellence',
      organization: 'International E-commerce Council',
      description: 'Outstanding achievement in international market expansion'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30">
              <Handshake className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
            Our <span className="text-primary">Brand Partners</span>
          </h1>
          <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry-leading brands to bring you the highest quality electronics, 
            gadgets, and accessories at competitive prices.
          </p>
        </div>

        {/* Partnership Stats */}
        <GlassCard className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Handshake className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">50+</h3>
              <p className="text-gray-300 font-museo">Brand Partners</p>
            </div>
            <div>
              <Globe className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">25</h3>
              <p className="text-gray-300 font-museo">Countries</p>
            </div>
            <div>
              <TrendingUp className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">98%</h3>
              <p className="text-gray-300 font-museo">Quality Rating</p>
            </div>
            <div>
              <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">4.9/5</h3>
              <p className="text-gray-300 font-museo">Customer Satisfaction</p>
            </div>
          </div>
        </GlassCard>

        {/* Featured Brand Partners */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Featured <span className="text-primary">Partners</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandPartners.map((brand, index) => (
              <GlassCard key={index} className="hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-museo text-white mb-2">{brand.name}</h3>
                    <span className="text-primary font-museo text-sm font-semibold">{brand.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 font-museo text-sm">{brand.partnership}</p>
                    <p className="text-primary font-museo text-sm font-bold">{brand.years}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 font-museo mb-6 leading-relaxed">
                  {brand.description}
                </p>
                
                <div>
                  <h4 className="text-white font-museo font-bold mb-3">Featured Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {brand.products.map((product, productIndex) => (
                      <span 
                        key={productIndex}
                        className="bg-primary/20 text-primary px-3 py-1 rounded-full font-museo text-sm border border-primary/30"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Awards & <span className="text-primary">Recognition</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <GlassCard key={index}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <achievement.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-museo text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-primary font-museo font-semibold mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-300 font-museo">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <GlassCard className="mb-16">
          <h2 className="text-3xl font-bold font-museo text-white text-center mb-8">
            Why Brands Choose <span className="text-primary">Us</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Targeted Reach</h3>
              <p className="text-gray-300 font-museo">
                Access to a highly engaged audience of tech enthusiasts and early adopters
              </p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Growth Partner</h3>
              <p className="text-gray-300 font-museo">
                Collaborative marketing strategies and data-driven insights for mutual growth
              </p>
            </div>
            
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Trust & Security</h3>
              <p className="text-gray-300 font-museo">
                Secure platform with robust payment processing and customer data protection
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Partnership Inquiry */}
        <GlassCard>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Handshake className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-3xl font-bold font-museo text-white mb-4">
              Interested in <span className="text-primary">Partnership</span>?
            </h2>
            <p className="text-gray-300 font-museo mb-8 max-w-2xl mx-auto">
              Join our network of premium brands and reach millions of customers worldwide. 
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-primary hover:bg-opacity-80 text-white px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105"
              >
                Partnership Inquiry
              </a>
              <a 
                href="/about" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-museo transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default BrandsPage;
