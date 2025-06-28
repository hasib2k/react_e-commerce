'use client';

import React from 'react';
import { Search, MessageCircle, Phone, Mail, Book, HelpCircle, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
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
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Help Center' }]} />
      
      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <GlassCard className="py-6">
              <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h1 className="text-3xl md:text-4xl font-bold font-museo text-white mb-3">
                Help <span className="text-primary">Center</span>
              </h1>
              <p className="text-lg text-gray-300 mb-4 font-museo max-w-2xl mx-auto">
                Find answers to your questions, get support, and learn how to make the most of your shopping experience.
              </p>
            
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  className="w-full pl-10 pr-20 py-3 bg-white/10 border border-primary/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm"
                  aria-label="Search help topics"
                />
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-lg hover:bg-primary/80 transition-all duration-300 text-sm"
                  aria-label="Search help center"
                >
                  Search
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold font-museo text-white text-center mb-6">
            Popular <span className="text-primary">Topics</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTopics.map((topic, index) => (
              <GlassCard key={index} className="text-center hover-lift cursor-pointer group py-4">
                <topic.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white font-museo mb-2">{topic.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{topic.description}</p>
                <button 
                  className="text-primary hover:text-primary/80 font-bold flex items-center justify-center w-full group-hover:translate-x-1 transition-transform text-sm"
                  aria-label={`Learn more about ${topic.title}`}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold font-museo text-white text-center mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {faqCategories.map((category, categoryIndex) => (
              <GlassCard key={categoryIndex} className="hover-lift py-4">
                <h3 className="text-lg font-bold text-white font-museo mb-4 text-center border-b border-primary/20 pb-2">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.questions.map((faq, faqIndex) => {
                    const [open, setOpen] = React.useState(false);
                    return (
                      <div key={faqIndex} className="border-b border-white/10 last:border-b-0">
                        <button
                          className="w-full flex justify-between items-center text-left text-sm font-bold text-white font-museo py-2 focus:outline-primary transition-colors"
                          aria-expanded={open}
                          aria-controls={`faq-answer-${categoryIndex}-${faqIndex}`}
                          onClick={() => setOpen((prev) => !prev)}
                        >
                          <span>{faq.question}</span>
                          <svg
                            className={`w-4 h-4 ml-2 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
                            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        <div
                          id={`faq-answer-${categoryIndex}-${faqIndex}`}
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
                          aria-hidden={!open}
                        >
                          <p className="text-gray-300 leading-relaxed text-xs pl-2 pr-1">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold font-museo text-white text-center mb-6">
            Still Need <span className="text-primary">Help?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactOptions.map((option, index) => (
              <GlassCard key={index} className="text-center hover-lift py-4">
                <option.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white font-museo mb-2">{option.title}</h3>
                <p className="text-gray-300 mb-2 text-sm">{option.description}</p>
                <div className="flex items-center justify-center text-xs text-gray-400 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {option.status}
                </div>
                <button 
                  className="w-full bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm"
                  aria-label={`${option.action} for ${option.title}`}
                >
                  {option.action}
                </button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-8 px-4 bg-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="py-6">
            <Book className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold font-museo text-white mb-3">
              Browse Our <span className="text-primary">Knowledge Base</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4 font-museo">
              Explore our comprehensive guides, tutorials, and documentation to get the most out of your shopping experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm"
                aria-label="Browse knowledge base articles"
              >
                Browse Articles
              </button>
              <button 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-bold transition-all duration-300 text-sm"
                aria-label="Watch video tutorials"
              >
                Video Tutorials
              </button>
            </div>
          </GlassCard>
        </div>
      </section>

    </div>
  );
};

export default HelpCenter;
