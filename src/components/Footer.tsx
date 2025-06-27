import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const Footer: React.FC = () => {
  // Use a static year to prevent hydration mismatch
  const currentYear = 2025;

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' }
  ];

  const categories = [
    { href: '/electronics', label: 'Electronics' },
    { href: '/accessories', label: 'Accessories' },
    { href: '/gadgets', label: 'Gadgets' },
    { href: '/products', label: 'All Products' }
  ];

  const customerService = [
    { href: '/help', label: 'Help Center' },
    { href: '/shipping', label: 'Shipping Info' },
    { href: '/returns', label: 'Returns & Exchanges' },
    { href: '/size-guide', label: 'Size Guide' },
    { href: '/track-order', label: 'Track Your Order' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '/facebook', label: 'Facebook' },
    { icon: Twitter, href: '/twitter', label: 'Twitter' },
    { icon: Instagram, href: '/instagram', label: 'Instagram' },
    { icon: Linkedin, href: '/linkedin', label: 'LinkedIn' }
  ];

  return (
    <footer className="py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <GlassCard>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <h3 className="text-3xl font-bold font-museo text-white mb-4">
                  <span className="text-primary">E</span>-Commerce
                </h3>
              </Link>
              <p className="text-gray-300 mb-6 font-museo leading-relaxed">
                Modern e-commerce platform built with React and Next.js, featuring 
                responsive design, state management, and a beautiful glassmorphism interface.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:support@ecommerce.com" className="text-gray-300 hover:text-primary transition-colors font-museo">
                    support@ecommerce.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+1555123456" className="text-gray-300 hover:text-primary transition-colors font-museo">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-300 font-museo">123 Commerce St, NY 10001</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-r from-black/20 to-black/30 hover:from-black/40 hover:to-black/50 rounded-lg flex items-center justify-center text-primary hover:text-white transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold font-museo text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-white hover:text-primary transition-all duration-300 font-museo px-4 py-2 rounded-lg bg-gradient-to-r from-black/10 to-black/20 hover:from-black/30 hover:to-black/40 backdrop-blur-sm relative overflow-hidden group block"
                    >
                      <span className="relative z-10 group-hover:translate-x-1 transition-transform">{link.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xl font-bold font-museo text-white mb-6">Categories</h4>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link 
                      href={category.href} 
                      className="text-white hover:text-primary transition-all duration-300 font-museo px-4 py-2 rounded-lg bg-gradient-to-r from-black/10 to-black/20 hover:from-black/30 hover:to-black/40 backdrop-blur-sm relative overflow-hidden group block"
                    >
                      <span className="relative z-10 group-hover:translate-x-1 transition-transform">{category.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-xl font-bold font-museo text-white mb-6">Customer Service</h4>
              <ul className="space-y-3">
                {customerService.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href} 
                      className="text-white hover:text-primary transition-all duration-300 font-museo px-4 py-2 rounded-lg bg-gradient-to-r from-black/10 to-black/20 hover:from-black/30 hover:to-black/40 backdrop-blur-sm relative overflow-hidden group block"
                    >
                      <span className="relative z-10 group-hover:translate-x-1 transition-transform">{service.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white border-opacity-20 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300 font-museo text-center md:text-left">
                © {currentYear} E-Commerce Platform. All rights reserved. Built with React & Next.js
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-white hover:text-primary transition-all duration-300 font-museo text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-black/10 to-black/20 hover:from-black/30 hover:to-black/40 backdrop-blur-sm relative overflow-hidden group">
                  <span className="relative z-10">Privacy Policy</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/terms" className="text-white hover:text-primary transition-all duration-300 font-museo text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-black/10 to-black/20 hover:from-black/30 hover:to-black/40 backdrop-blur-sm relative overflow-hidden group">
                  <span className="relative z-10">Terms of Service</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/cookies" className="text-white hover:text-primary transition-all duration-300 font-museo text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-black/10 to-black/20 hover:from-black/30 hover:to-black/40 backdrop-blur-sm relative overflow-hidden group">
                  <span className="relative z-10">Cookies</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;
