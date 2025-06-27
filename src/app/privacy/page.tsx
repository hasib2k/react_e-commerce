'use client';

import React from 'react';
import { Shield, Eye, Lock, Users, Database, Bell, FileText, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/GlassCard';
import { useCart } from '@/context/CartContext';

const PrivacyPolicy: React.FC = () => {
  const { state } = useCart();

  const privacyPrinciples = [
    {
      icon: Lock,
      title: 'Data Security',
      description: 'We use industry-standard encryption and security measures to protect your information'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly explain what data we collect and how we use it'
    },
    {
      icon: Users,
      title: 'Your Control',
      description: 'You have full control over your personal data and privacy settings'
    },
    {
      icon: Shield,
      title: 'Protection',
      description: 'We never sell your personal information to third parties'
    }
  ];

  const dataTypes = [
    {
      category: 'Personal Information',
      items: [
        'Name and contact details',
        'Billing and shipping addresses',
        'Payment information (encrypted)',
        'Account credentials'
      ]
    },
    {
      category: 'Usage Data',
      items: [
        'Website interaction data',
        'Product preferences',
        'Search history',
        'Device and browser information'
      ]
    },
    {
      category: 'Communication Data',
      items: [
        'Email correspondence',
        'Customer service interactions',
        'Newsletter subscriptions',
        'Marketing preferences'
      ]
    }
  ];

  const yourRights = [
    {
      right: 'Access',
      description: 'Request a copy of all personal data we hold about you'
    },
    {
      right: 'Correction',
      description: 'Update or correct any inaccurate personal information'
    },
    {
      right: 'Deletion',
      description: 'Request deletion of your personal data (right to be forgotten)'
    },
    {
      right: 'Portability',
      description: 'Receive your data in a portable format to transfer elsewhere'
    },
    {
      right: 'Restriction',
      description: 'Limit how we process your personal information'
    },
    {
      right: 'Objection',
      description: 'Object to certain types of data processing'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={state.itemCount} />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold font-museo text-white mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-museo max-w-4xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="text-gray-400 font-museo">
              Last updated: December 27, 2024
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Our Privacy <span className="text-primary">Principles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <GlassCard key={index} className="text-center hover-lift border-2 border-primary/30">
                <principle.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white font-museo mb-3">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Database className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Information We <span className="text-primary">Collect</span>
            </h2>
            <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto">
              We collect different types of information to provide you with the best shopping experience and service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataTypes.map((type, index) => (
              <GlassCard key={index} className="hover-lift">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 text-center border-b border-primary/20 pb-4">
                  {type.category}
                </h3>
                <ul className="space-y-3">
                  {type.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            How We Use Your <span className="text-primary">Information</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard className="border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-white font-museo mb-6">Essential Services</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Order Processing:</strong>
                    <span className="text-gray-300"> To fulfill your orders and manage your account</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Customer Support:</strong>
                    <span className="text-gray-300"> To provide help and resolve any issues</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Security:</strong>
                    <span className="text-gray-300"> To protect against fraud and unauthorized access</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Legal Compliance:</strong>
                    <span className="text-gray-300"> To comply with applicable laws and regulations</span>
                  </div>
                </li>
              </ul>
            </GlassCard>
            
            <GlassCard className="border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-white font-museo mb-6">Improvements & Marketing</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Personalization:</strong>
                    <span className="text-gray-300"> To recommend products and customize your experience</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Communications:</strong>
                    <span className="text-gray-300"> To send order updates and promotional offers (with consent)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Analytics:</strong>
                    <span className="text-gray-300"> To improve our website and services</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Research:</strong>
                    <span className="text-gray-300"> To understand customer preferences and market trends</span>
                  </div>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-4 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Your <span className="text-primary">Rights</span>
            </h2>
            <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto">
              You have important rights regarding your personal data. Here&apos;s what you can do:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yourRights.map((right, index) => (
              <GlassCard key={index} className="hover-lift">
                <h3 className="text-xl font-bold text-white font-museo mb-3 text-center border-b border-primary/20 pb-2">
                  Right to {right.right}
                </h3>
                <p className="text-gray-300 text-center">{right.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Lock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Data <span className="text-primary">Security</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard className="border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-white font-museo mb-6">Technical Safeguards</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Encryption:</strong>
                    <p className="text-gray-300">All sensitive data is encrypted using industry-standard protocols</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Secure Servers:</strong>
                    <p className="text-gray-300">Data is stored on secure servers with restricted access</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Regular Audits:</strong>
                    <p className="text-gray-300">We conduct regular security audits and vulnerability assessments</p>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="border-2 border-primary/30">
              <h3 className="text-2xl font-bold text-white font-museo mb-6">Organizational Measures</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Access Control:</strong>
                    <p className="text-gray-300">Only authorized personnel have access to personal data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Staff Training:</strong>
                    <p className="text-gray-300">All employees receive privacy and security training</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <strong className="text-white">Incident Response:</strong>
                    <p className="text-gray-300">We have procedures in place to respond to security incidents</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Contact & Updates */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="border-2 border-primary/30">
            <Bell className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Stay <span className="text-primary">Informed</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-museo">
              We may update this privacy policy from time to time. We&apos;ll notify you of any significant changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                Download PDF
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300">
                Contact Privacy Team
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center text-gray-400">
                <FileText className="w-5 h-5 mr-2" />
                <span>For questions about this policy, contact us at: privacy@ecommerce.com</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
