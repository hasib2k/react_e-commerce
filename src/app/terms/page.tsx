'use client';

import React from 'react';
import { FileText, Scale, ShoppingCart, Shield, AlertTriangle, Users, Clock, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/GlassCard';
import { useCart } from '@/context/CartContext';

const TermsOfService: React.FC = () => {
  const { state } = useCart();

  const keyTerms = [
    {
      icon: ShoppingCart,
      title: 'Purchase Terms',
      description: 'Guidelines for making purchases, payments, and order processing'
    },
    {
      icon: Shield,
      title: 'User Responsibilities',
      description: 'Your obligations when using our platform and services'
    },
    {
      icon: Scale,
      title: 'Legal Rights',
      description: 'Your rights and our rights under these terms'
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      description: 'Important limitations and disclaimers you should know'
    }
  ];

  const userObligations = [
    'Provide accurate and complete information when creating an account',
    'Keep your account credentials secure and confidential',
    'Use the platform only for lawful purposes',
    'Respect intellectual property rights',
    'Not attempt to compromise the security of our systems',
    'Follow all applicable laws and regulations'
  ];

  const purchaseTerms = [
    {
      title: 'Order Acceptance',
      content: 'All orders are subject to acceptance by us. We reserve the right to refuse or cancel any order for any reason, including pricing errors, product unavailability, or suspected fraudulent activity.'
    },
    {
      title: 'Pricing & Payment',
      content: 'All prices are displayed in USD and include applicable taxes. Payment is due at the time of purchase. We accept major credit cards, PayPal, and other specified payment methods.'
    },
    {
      title: 'Shipping & Delivery',
      content: 'We will make reasonable efforts to ship products within the estimated timeframes. Delivery dates are estimates and not guaranteed. Risk of loss transfers to you upon delivery to the carrier.'
    },
    {
      title: 'Returns & Refunds',
      content: 'Returns are accepted within 30 days of delivery in accordance with our return policy. Refunds will be processed to the original payment method within 3-5 business days after we receive the returned item.'
    }
  ];

  const prohibitedUses = [
    'Violating any applicable laws or regulations',
    'Transmitting harmful or malicious code',
    'Attempting to gain unauthorized access to our systems',
    'Interfering with other users&apos; use of the platform',
    'Collecting user information without consent',
    'Using the platform for spam or unsolicited communications',
    'Infringing on intellectual property rights',
    'Engaging in fraudulent or deceptive practices'
  ];

  const limitations = [
    {
      title: 'Service Availability',
      content: 'We strive to maintain continuous service availability but cannot guarantee uninterrupted access. Maintenance, updates, or technical issues may temporarily affect service.'
    },
    {
      title: 'Liability Limitations',
      content: 'Our liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages arising from your use of our services.'
    },
    {
      title: 'Product Information',
      content: 'While we strive for accuracy, product descriptions, images, and specifications may contain errors. We reserve the right to correct any errors and update information at any time.'
    },
    {
      title: 'Third-Party Services',
      content: 'Our platform may integrate with third-party services. We are not responsible for the availability, accuracy, or content of third-party services.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={state.itemCount} />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <Scale className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold font-museo text-white mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-museo max-w-4xl mx-auto">
              These terms govern your use of our platform and services. Please read them carefully before using our website.
            </p>
            <div className="text-gray-400 font-museo">
              Last updated: December 27, 2024 • Effective: January 1, 2025
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Key <span className="text-primary">Terms</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyTerms.map((term, index) => (
              <GlassCard key={index} className="text-center hover-lift border-2 border-primary/30">
                <term.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white font-museo mb-3">{term.title}</h3>
                <p className="text-gray-300">{term.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Acceptance of Terms */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="border-2 border-primary/30">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-bold font-museo text-white mb-4">
                Acceptance of <span className="text-primary">Terms</span>
              </h2>
            </div>
            
            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg">
              <p className="mb-6">
                By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
              </p>
              <p className="mb-6">
                These terms constitute a legally binding agreement between you and Buyble. We reserve the right to update these terms at any time, and your continued use of our services constitutes acceptance of any changes.
              </p>
              <p>
                If you are using our services on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
              </p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              User <span className="text-primary">Obligations</span>
            </h2>
            <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto">
              As a user of our platform, you agree to comply with the following obligations:
            </p>
          </div>
          
          <GlassCard className="border-2 border-primary/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userObligations.map((obligation, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{obligation}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Purchase Terms */}
      <section className="py-16 px-4 bg-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ShoppingCart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Purchase <span className="text-primary">Terms</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {purchaseTerms.map((term, index) => (
              <GlassCard key={index} className="hover-lift border-2 border-primary/30">
                <h3 className="text-xl font-bold text-white font-museo mb-4 border-b border-primary/20 pb-2">
                  {term.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{term.content}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Uses */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Prohibited <span className="text-red-400">Uses</span>
            </h2>
            <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto">
              The following activities are strictly prohibited when using our platform:
            </p>
          </div>
          
          <GlassCard className="border-2 border-red-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prohibitedUses.map((use, index) => (
                <div key={index} className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{use}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Limitations and Disclaimers */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Limitations & <span className="text-primary">Disclaimers</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {limitations.map((limitation, index) => (
              <GlassCard key={index} className="hover-lift border-2 border-primary/30">
                <h3 className="text-xl font-bold text-white font-museo mb-4 border-b border-primary/20 pb-2">
                  {limitation.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{limitation.content}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard className="border-2 border-primary/30">
              <div className="text-center mb-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white font-museo">Termination by You</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>You may terminate your account at any time by:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1" />
                    <span>Contacting our customer support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1" />
                    <span>Using the account deletion feature</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-1" />
                    <span>Sending a written request</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
            
            <GlassCard className="border-2 border-primary/30">
              <div className="text-center mb-6">
                <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white font-museo">Termination by Us</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We may terminate your account if you:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-1" />
                    <span>Violate these terms of service</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-1" />
                    <span>Engage in fraudulent activity</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-400 mr-2 mt-1" />
                    <span>Cause harm to our platform or users</span>
                  </li>
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="border-2 border-primary/30">
            <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Questions About These <span className="text-primary">Terms?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-museo">
              If you have any questions about these Terms of Service, please don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                Contact Legal Team
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300">
                Download Terms PDF
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="text-gray-400 space-y-2">
                <div>Email: legal@ecommerce.com</div>
                <div>Address: 123 Commerce Street, New York, NY 10001</div>
                <div>Phone: +1 (555) 123-4567</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
