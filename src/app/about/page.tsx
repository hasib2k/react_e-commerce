'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Target, Award, Heart, ShoppingBag, Truck, Shield, Star } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import { useCart } from '@/context/CartContext';

const About: React.FC = () => {
  const { state } = useCart();

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: ShoppingBag, label: 'Products Sold', value: '50,000+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize our customers&apos; satisfaction above everything else, ensuring exceptional service and support.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks to ensure you receive only the best items.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping with real-time tracking to get your orders to you safely and on time.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly innovate to bring you the latest technology and cutting-edge products.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/300x300/1a1a2e/ffffff?text=SJ',
      description: 'Visionary leader with 10+ years in e-commerce'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://via.placeholder.com/300x300/16213e/ffffff?text=MC',
      description: 'Tech expert passionate about user experience'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      image: 'https://via.placeholder.com/300x300/0f3460/ffffff?text=ED',
      description: 'Creative designer focused on beautiful interfaces'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Breadcrumb */}
      <section className="px-4 pt-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: 'About' }]} />
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GlassCard>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold font-museo text-white mb-4 sm:mb-6">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 font-museo max-w-4xl mx-auto px-4">
              We&apos;re passionate about bringing you the best products with cutting-edge technology 
              and exceptional customer service. Our mission is to make shopping enjoyable and accessible for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-primary hover:bg-opacity-80 text-white px-6 sm:px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Learn More
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Contact Us
              </button>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center hover-lift p-4 sm:p-6">
                <stat.icon className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-2 sm:mb-4" />
                <h3 className="text-xl sm:text-3xl font-bold text-white font-museo mb-1 sm:mb-2">{stat.value}</h3>
                <p className="text-gray-300 font-museo text-sm sm:text-base">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <GlassCard>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold font-museo text-white mb-6">Our Story</h2>
                <p className="text-gray-300 font-museo mb-6 text-lg leading-relaxed">
                  Founded in 2020, Buyble started with a simple vision: to create 
                  a seamless shopping experience that combines cutting-edge technology with exceptional 
                  customer service.
                </p>
                <p className="text-gray-300 font-museo mb-6 text-lg leading-relaxed">
                  Today, Buyble has grown to serve thousands of customers worldwide, offering carefully 
                  curated products from electronics to accessories. Our commitment to quality and 
                  innovation drives everything we do.
                </p>
                <button className="bg-primary hover:bg-opacity-80 text-white px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
              <div className="relative">
                <Image
                  src="https://via.placeholder.com/600x400/533483/ffffff?text=Our+Office"
                  alt="Our Story"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-300 font-museo">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <GlassCard key={index} className="text-center hover-lift">
                <value.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white font-museo mb-3">{value.title}</h3>
                <p className="text-gray-300 font-museo">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-gray-300 font-museo">
              The talented people behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <GlassCard key={index} className="text-center hover-lift">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white font-museo mb-1">{member.name}</h3>
                <p className="text-primary font-museo mb-3">{member.role}</p>
                <p className="text-gray-300 font-museo">{member.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
