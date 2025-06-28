import React from 'react';
import Link from 'next/link';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import { Facebook, Users, MessageSquare, Calendar, Share2, Heart, TrendingUp, Award } from 'lucide-react';

const FacebookPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Facebook' }]} />
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30">
                <Facebook className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-museo text-white mb-3">
              Follow Us on <span className="text-blue-500">Facebook</span>
            </h1>
            <p className="text-lg text-gray-300 font-museo max-w-3xl mx-auto leading-relaxed">
            Stay connected with our e-commerce community and get the latest updates on products, deals, and tech innovations
          </p>
        </div>

        {/* Social Stats */}
        <GlassCard className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">25,000+</h3>
              <p className="text-gray-300 font-museo">Followers</p>
            </div>
            <div>
              <Heart className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">150K+</h3>
              <p className="text-gray-300 font-museo">Likes</p>
            </div>
            <div>
              <MessageSquare className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">5,000+</h3>
              <p className="text-gray-300 font-museo">Comments</p>
            </div>
            <div>
              <Share2 className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">12K+</h3>
              <p className="text-gray-300 font-museo">Shares</p>
            </div>
          </div>
        </GlassCard>

        {/* What You'll Find */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8 text-center">
            What You&apos;ll Find on Our <span className="text-blue-500">Facebook</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Product Launches</h3>
              <p className="text-gray-300 font-museo">
                Be the first to know about our latest electronics, gadgets, and accessories
              </p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Exclusive Deals</h3>
              <p className="text-gray-300 font-museo">
                Facebook-only promotions, flash sales, and special discounts for our community
              </p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Community Support</h3>
              <p className="text-gray-300 font-museo">
                Get help from our team and connect with other tech enthusiasts
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Recent Posts Preview */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8">Recent Posts</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 bg-white bg-opacity-5 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-gray-400 font-museo text-sm">2 days ago</span>
              </div>
              <h3 className="text-xl font-bold font-museo text-white mb-3">
                🎉 New Wireless Headphones Just Dropped!
              </h3>
              <p className="text-gray-300 font-museo mb-4">
                Introducing our latest Premium Wireless Headphones with active noise cancellation. 
                Early bird special: 20% off for the first 100 customers! What do you think of the new design?
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>❤️ 1.2K likes</span>
                <span>💬 89 comments</span>
                <span>🔄 156 shares</span>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 bg-white bg-opacity-5 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Calendar className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-400 font-museo text-sm">5 days ago</span>
              </div>
              <h3 className="text-xl font-bold font-museo text-white mb-3">
                💡 Tech Tip Tuesday: Optimize Your Workspace
              </h3>
              <p className="text-gray-300 font-museo mb-4">
                Here are 5 essential accessories to boost your productivity: ergonomic laptop stand, 
                wireless mouse, mechanical keyboard, USB-C hub, and blue light glasses. Which one has made the biggest difference for you?
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>❤️ 856 likes</span>
                <span>💬 124 comments</span>
                <span>🔄 67 shares</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 bg-white bg-opacity-5 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Calendar className="w-5 h-5 text-purple-500 mr-2" />
                <span className="text-gray-400 font-museo text-sm">1 week ago</span>
              </div>
              <h3 className="text-xl font-bold font-museo text-white mb-3">
                🏆 Customer Spotlight: Amazing Setup!
              </h3>
              <p className="text-gray-300 font-museo mb-4">
                Check out this incredible gaming setup from @TechEnthusiast featuring our wireless gaming mouse, 
                mechanical keyboard, and 4K webcam. Share your setup in the comments below for a chance to be featured!
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>❤️ 2.1K likes</span>
                <span>💬 203 comments</span>
                <span>🔄 412 shares</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Call to Action */}
        <GlassCard>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Facebook className="w-16 h-16 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold font-museo text-white mb-4">
              Join Our <span className="text-blue-500">Facebook Community</span>
            </h2>
            <p className="text-gray-300 font-museo mb-8 max-w-2xl mx-auto">
              Don&apos;t miss out on exclusive deals, product launches, and tech discussions. 
              Follow us today and become part of our growing community of tech enthusiasts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://facebook.com/ecommerce" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Facebook className="w-5 h-5" />
                <span>Follow on Facebook</span>
              </a>
              <Link 
                href="/" 
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-museo transition-all duration-300"
              >
                Back to Store
              </Link>
            </div>
          </div>
        </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default FacebookPage;
