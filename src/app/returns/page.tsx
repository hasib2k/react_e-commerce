'use client';

import React from 'react';
import { RotateCcw, Package, Shield, Clock, CheckCircle, AlertCircle, RefreshCw, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/GlassCard';
import { useCart } from '@/context/CartContext';

const ReturnsExchanges: React.FC = () => {
  const { state } = useCart();

  const returnProcess = [
    {
      step: 1,
      icon: Package,
      title: 'Initiate Return',
      description: 'Start your return request online with your order number'
    },
    {
      step: 2,
      icon: Shield,
      title: 'Get Return Label',
      description: 'We&apos;ll email you a prepaid return shipping label'
    },
    {
      step: 3,
      icon: RotateCcw,
      title: 'Ship Item Back',
      description: 'Package your item and ship it back using our label'
    },
    {
      step: 4,
      icon: CheckCircle,
      title: 'Receive Refund',
      description: 'Get your refund within 3-5 business days'
    }
  ];

  const returnPolicy = [
    {
      icon: Clock,
      title: '30-Day Return Window',
      description: 'Items can be returned within 30 days of delivery for a full refund.'
    },
    {
      icon: Package,
      title: 'Original Condition Required',
      description: 'Items must be in original condition with all tags and packaging intact.'
    },
    {
      icon: Shield,
      title: 'Free Return Shipping',
      description: 'We provide prepaid return labels for all eligible returns.'
    },
    {
      icon: RefreshCw,
      title: 'Easy Exchanges',
      description: 'Exchange items for different sizes or colors at no extra cost.'
    }
  ];

  const eligibleItems = [
    'Clothing and accessories in original condition',
    'Electronics in original packaging with all accessories',
    'Home goods that haven&apos;t been used or damaged',
    'Books and media in sellable condition',
    'Jewelry and watches with original packaging'
  ];

  const nonEligibleItems = [
    'Personalized or customized items',
    'Perishable goods and food items',
    'Intimate apparel and swimwear',
    'Digital downloads and software',
    'Items damaged by misuse or normal wear'
  ];

  const exchangeOptions = [
    {
      title: 'Size Exchange',
      description: 'Exchange for a different size of the same item',
      timeframe: '2-3 business days processing'
    },
    {
      title: 'Color Exchange',
      description: 'Exchange for a different color or style variant',
      timeframe: '2-3 business days processing'
    },
    {
      title: 'Product Exchange',
      description: 'Exchange for a completely different product',
      timeframe: '3-5 business days processing'
    }
  ];

  const refundMethods = [
    {
      method: 'Original Payment Method',
      timeframe: '3-5 business days',
      description: 'Refund to the card or account used for purchase'
    },
    {
      method: 'Store Credit',
      timeframe: 'Instant',
      description: 'Receive immediate store credit for future purchases'
    },
    {
      method: 'Gift Card',
      timeframe: '1-2 business days',
      description: 'Digital gift card sent to your email address'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={state.itemCount} />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <RotateCcw className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold font-museo text-white mb-6">
              Returns & <span className="text-primary">Exchanges</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-museo max-w-4xl mx-auto">
              Easy returns and exchanges with our 30-day satisfaction guarantee. Shop with confidence knowing you can return or exchange any item hassle-free.
            </p>
            <button className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Start a Return
            </button>
          </GlassCard>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Return <span className="text-primary">Process</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {returnProcess.map((step, index) => (
              <div key={index} className="relative">
                <GlassCard className="text-center hover-lift border-2 border-primary/30">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <step.icon className="w-12 h-12 text-primary mx-auto mb-4 mt-4" />
                  <h3 className="text-xl font-bold text-white font-museo mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </GlassCard>
                {index < returnProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Policy Highlights */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Our <span className="text-primary">Policy</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnPolicy.map((policy, index) => (
              <GlassCard key={index} className="text-center hover-lift">
                <policy.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white font-museo mb-3">{policy.title}</h3>
                <p className="text-gray-300">{policy.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible vs Non-Eligible Items */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Return <span className="text-primary">Eligibility</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard className="border-2 border-green-500/30">
              <div className="text-center mb-6">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white font-museo">Eligible for Return</h3>
              </div>
              <ul className="space-y-3">
                {eligibleItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            
            <GlassCard className="border-2 border-red-500/30">
              <div className="text-center mb-6">
                <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white font-museo">Not Eligible for Return</h3>
              </div>
              <ul className="space-y-3">
                {nonEligibleItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Exchange Options */}
      <section className="py-16 px-4 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <RefreshCw className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Exchange <span className="text-primary">Options</span>
            </h2>
            <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto">
              Need a different size, color, or product? We make exchanges simple and fast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exchangeOptions.map((option, index) => (
              <GlassCard key={index} className="hover-lift border-2 border-primary/30">
                <h3 className="text-xl font-bold text-white font-museo mb-3 text-center">{option.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{option.description}</p>
                <div className="text-center">
                  <span className="text-primary font-bold">{option.timeframe}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Methods */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Refund <span className="text-primary">Methods</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {refundMethods.map((method, index) => (
              <GlassCard key={index} className="hover-lift">
                <h3 className="text-xl font-bold text-white font-museo mb-3">{method.method}</h3>
                <div className="text-primary font-bold mb-3">{method.timeframe}</div>
                <p className="text-gray-300">{method.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Start Return CTA */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="border-2 border-primary/30">
            <Package className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Ready to Start Your <span className="text-primary">Return?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-museo">
              Have your order number ready and we&apos;ll guide you through the process step by step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                Start Return Request
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300">
                Track Existing Return
              </button>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReturnsExchanges;
