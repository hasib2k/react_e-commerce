import React from 'react';
import Link from 'next/link';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import { Twitter, MessageCircle, Repeat2, Heart, TrendingUp, Zap, Users } from 'lucide-react';

const TwitterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Twitter' }]} />
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-sky-400/20 to-sky-500/20 border border-sky-400/30">
                <Twitter className="w-8 h-8 text-sky-400" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-museo text-white mb-3">
              Follow Us on <span className="text-sky-400">Twitter</span>
            </h1>
            <p className="text-lg text-gray-300 font-museo max-w-3xl mx-auto leading-relaxed">
              Get real-time updates, tech news, and instant customer support on our Twitter channel
            </p>
          </div>

          {/* Twitter Stats */}
          <GlassCard className="mb-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <Users className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold font-museo text-white mb-1">18.5K</h3>
              <p className="text-gray-300 font-museo">Followers</p>
            </div>
            <div>
              <MessageCircle className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">2,400</h3>
              <p className="text-gray-300 font-museo">Tweets</p>
            </div>
            <div>
              <Repeat2 className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">45K</h3>
              <p className="text-gray-300 font-museo">Retweets</p>
            </div>
            <div>
              <Heart className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">89K</h3>
              <p className="text-gray-300 font-museo">Likes</p>
            </div>
          </div>
        </GlassCard>

        {/* What You'll Find */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8 text-center">
            Why Follow Us on <span className="text-sky-400">Twitter</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Instant Updates</h3>
              <p className="text-gray-300 font-museo">
                Real-time notifications about flash sales, new arrivals, and limited-time offers
              </p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Tech Trends</h3>
              <p className="text-gray-300 font-museo">
                Latest technology news, product reviews, and industry insights shared daily
              </p>
            </div>
            
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-sky-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Quick Support</h3>
              <p className="text-gray-300 font-museo">
                Fast customer service responses and direct communication with our team
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Recent Tweets */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8">Recent Tweets</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-sky-400 pl-6 bg-white bg-opacity-5 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">EC</span>
                </div>
                <div>
                  <h4 className="text-white font-museo font-bold">@ECommerceTech</h4>
                  <span className="text-gray-400 text-sm">2h</span>
                </div>
              </div>
              <p className="text-white font-museo mb-4">
                🚀 FLASH SALE ALERT! Get 30% OFF on all wireless headphones for the next 6 hours only! 
                Perfect timing for your weekend listening sessions 🎧 
                <span className="text-sky-400">#TechDeals #FlashSale #WirelessHeadphones</span>
              </p>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>24</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Repeat2 className="w-4 h-4" />
                  <span>89</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>156</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 bg-white bg-opacity-5 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">EC</span>
                </div>
                <div>
                  <h4 className="text-white font-museo font-bold">@ECommerceTech</h4>
                  <span className="text-gray-400 text-sm">1d</span>
                </div>
              </div>
              <p className="text-white font-museo mb-4">
                💡 Pro Tip: Did you know our USB-C Hub Pro supports up to 100W power delivery? 
                Perfect for charging your laptop while connecting multiple devices! 
                <span className="text-sky-400">#TechTips #Productivity #USBC</span>
              </p>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>31</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Repeat2 className="w-4 h-4" />
                  <span>67</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>203</span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 bg-white bg-opacity-5 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">EC</span>
                </div>
                <div>
                  <h4 className="text-white font-museo font-bold">@ECommerceTech</h4>
                  <span className="text-gray-400 text-sm">3d</span>
                </div>
              </div>
              <p className="text-white font-museo mb-4">
                🎉 Milestone Alert! We&apos;ve just reached 18K followers! Thank you for being part of our tech community. 
                As a celebration, we&apos;re giving away a premium wireless mouse to one lucky follower! RT to enter! 
                <span className="text-sky-400">#Giveaway #TechCommunity #Milestone</span>
              </p>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>187</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Repeat2 className="w-4 h-4" />
                  <span>1.2K</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>856</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Trending Hashtags */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-6">Trending Hashtags</h2>
          <div className="flex flex-wrap gap-3">
            {['#TechDeals', '#WirelessHeadphones', '#SmartGadgets', '#ProductivityTools', '#TechReviews', '#FlashSale', '#CustomerSupport', '#TechTips'].map((hashtag, index) => (
              <span key={index} className="bg-sky-400/20 text-sky-400 px-4 py-2 rounded-full font-museo text-sm border border-sky-400/30 hover:bg-sky-400/30 transition-colors cursor-pointer">
                {hashtag}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Call to Action */}
        <GlassCard>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Twitter className="w-16 h-16 text-sky-400" />
            </div>
            <h2 className="text-3xl font-bold font-museo text-white mb-4">
              Join the Conversation on <span className="text-sky-400">Twitter</span>
            </h2>
            <p className="text-gray-300 font-museo mb-8 max-w-2xl mx-auto">
              Stay in the loop with instant updates, exclusive deals, and tech discussions. 
              Follow us for real-time customer support and the latest in technology!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://twitter.com/ecommerce" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-400 hover:bg-sky-500 text-white px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Twitter className="w-5 h-5" />
                <span>Follow @ECommerceTech</span>
              </a>
              <Link 
                href="/" 
                className="border-2 border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white px-8 py-3 rounded-lg font-museo transition-all duration-300"
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

export default TwitterPage;
