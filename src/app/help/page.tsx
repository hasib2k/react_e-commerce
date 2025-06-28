'use client';

import React from 'react';
import { Search, MessageCircle, Phone, Mail, Book, HelpCircle, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlassCard from '@/components/GlassCard';
import { useCart } from '@/context/CartContext';

const HelpCenter: React.FC = () => {
  const { state } = useCart();

  const popularTopics = [
    {
      icon: CheckCircle,
      title: 'Order Status',
      description: 'Track your order and check delivery status',
      link: '/track-order'
    },
    {
      icon: Mail,
      title: 'Returns & Exchanges',
      description: 'Learn about our return policy and process',
      link: '/returns'
    },
    {
      icon: Phone,
      title: 'Payment Issues',
      description: 'Resolve payment and billing problems',
      link: '/help/payment'
    },
    {
      icon: Book,
      title: 'Product Information',
      description: 'Get detailed product specifications',
      link: '/help/products'
    }
  ];

  const faqCategories = [
    {
      category: 'Ordering',
      questions: [
        {
          question: 'How do I place an order?',
          answer: 'Simply browse our products, add items to your cart, and proceed to checkout. You&apos;ll need to provide shipping and payment information to complete your order.'
        },
        {
          question: 'Can I modify my order after placing it?',
          answer: 'Orders can be modified within 30 minutes of placement. After that, please contact customer service for assistance.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers.'
        }
      ]
    },
    {
      category: 'Shipping',
      questions: [
        {
          question: 'What are your shipping options?',
          answer: 'We offer standard shipping (3-5 business days), express shipping (1-2 business days), and overnight delivery for urgent orders.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to over 50 countries worldwide. International shipping times vary by destination.'
        },
        {
          question: 'How much does shipping cost?',
          answer: 'Shipping is free on orders over $50. For orders under $50, shipping costs start at $5.99.'
        }
      ]
    },
    {
      category: 'Returns',
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for most items. Products must be in original condition with tags attached.'
        },
        {
          question: 'How do I return an item?',
          answer: 'Visit our returns page to initiate a return request. We&apos;ll provide a prepaid shipping label for your convenience.'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'Refunds are processed within 3-5 business days after we receive your returned item.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      status: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      status: 'Mon-Fri 8AM-8PM EST',
      action: '+1 (555) 123-4567'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      status: 'Response within 24 hours',
      action: 'support@ecommerce.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={state.itemCount} />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold font-museo text-white mb-6">
              Help <span className="text-primary">Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-museo max-w-4xl mx-auto">
              Find answers to your questions, get support, and learn how to make the most of your shopping experience.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border-2 border-primary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition-all duration-300">
                Search
              </button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Popular <span className="text-primary">Topics</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTopics.map((topic, index) => (
              <GlassCard key={index} className="text-center hover-lift cursor-pointer group">
                <topic.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white font-museo mb-3">{topic.title}</h3>
                <p className="text-gray-300 mb-4">{topic.description}</p>
                <button className="text-primary hover:text-primary/80 font-bold flex items-center justify-center w-full group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <GlassCard key={categoryIndex} className="hover-lift">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 text-center border-b border-primary/20 pb-4">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-white/10 pb-4 last:border-b-0">
                      <h4 className="text-lg font-bold text-white font-museo mb-2">{faq.question}</h4>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
            Still Need <span className="text-primary">Help?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <GlassCard key={index} className="text-center hover-lift">
                <option.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white font-museo mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-2">{option.description}</p>
                <div className="flex items-center justify-center text-sm text-gray-400 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  {option.status}
                </div>
                <button className="w-full bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                  {option.action}
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard>
            <Book className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Browse Our <span className="text-primary">Knowledge Base</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-museo">
              Explore our comprehensive guides, tutorials, and documentation to get the most out of your shopping experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                Browse Articles
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-bold transition-all duration-300">
                Video Tutorials
              </button>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
