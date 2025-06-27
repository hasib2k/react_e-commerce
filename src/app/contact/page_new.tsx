'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HeadphonesIcon } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

const Contact: React.FC = () => {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'support@ecommerce.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Commerce Street',
      description: 'New York, NY 10001'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM',
      description: 'Weekend: 10AM-4PM'
    }
  ];

  const supportOptions = [
    {
      icon: HeadphonesIcon,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      available: true
    },
    {
      icon: MessageSquare,
      title: 'Help Center',
      description: 'Browse our comprehensive FAQ and guides',
      action: 'Visit Help Center',
      available: true
    },
    {
      icon: Phone,
      title: 'Call Support',
      description: 'Speak directly with our support team',
      action: 'Call Now',
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={state.itemCount} />
      
      {/* Breadcrumb */}
      <section className="px-4 pt-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'Contact' }]} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-museo text-white mb-4 sm:mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 font-museo max-w-4xl mx-auto px-4">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <GlassCard key={index} className="text-center hover-lift p-4 sm:p-6">
                <info.icon className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white font-museo mb-2">{info.title}</h3>
                <p className="text-primary font-museo text-sm sm:text-base mb-1">{info.content}</p>
                <p className="text-gray-300 text-xs sm:text-sm">{info.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Support Options */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <GlassCard>
              <h2 className="text-2xl sm:text-3xl font-bold font-museo text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-museo mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-museo mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-museo mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-museo mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-primary resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-opacity-80 text-white px-6 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </GlassCard>

            {/* Support Options */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-museo text-white mb-6">Other Ways to Reach Us</h2>
              
              {supportOptions.map((option, index) => (
                <GlassCard key={index} className="hover-lift">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-museo mb-1">{option.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base mb-3">{option.description}</p>
                      <button className="bg-primary hover:bg-opacity-80 text-white px-4 py-2 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 text-sm">
                        {option.action}
                      </button>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <GlassCard>
            <h2 className="text-2xl sm:text-3xl font-bold font-museo text-white mb-6 text-center">Visit Our Store</h2>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-white font-museo text-lg">Interactive Map</p>
                <p className="text-gray-300 text-sm mt-2">123 Commerce Street, New York, NY 10001</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
