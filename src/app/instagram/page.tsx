import React from 'react';
import Link from 'next/link';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import { Instagram, Heart, MessageCircle, Users, Camera, Video, Bookmark } from 'lucide-react';

const InstagramPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Instagram' }]} />
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30">
                <Instagram className="w-8 h-8 text-pink-500" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-museo text-white mb-3">
              Follow Us on <span className="text-pink-500">Instagram</span>
            </h1>
            <p className="text-lg text-gray-300 font-museo max-w-3xl mx-auto leading-relaxed">
              Discover our products through stunning visuals, behind-the-scenes content, and user-generated posts
            </p>
          </div>

          {/* Instagram Stats */}
          <GlassCard className="mb-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <Users className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold font-museo text-white mb-1">32.8K</h3>
              <p className="text-gray-300 font-museo">Followers</p>
            </div>
            <div>
              <Camera className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">1,245</h3>
              <p className="text-gray-300 font-museo">Posts</p>
            </div>
            <div>
              <Heart className="w-10 h-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">180K</h3>
              <p className="text-gray-300 font-museo">Likes</p>
            </div>
            <div>
              <Video className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">89</h3>
              <p className="text-gray-300 font-museo">Reels</p>
            </div>
          </div>
        </GlassCard>

        {/* What You'll See */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8 text-center">
            What You&apos;ll See on Our <span className="text-pink-500">Instagram</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Product Photography</h3>
              <p className="text-gray-300 font-museo">
                Stunning high-quality images showcasing our electronics and gadgets in action
              </p>
            </div>
            
            <div className="text-center">
              <Video className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Demo Videos</h3>
              <p className="text-gray-300 font-museo">
                Quick tutorials, unboxing videos, and product demonstrations through Instagram Reels
              </p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">User Content</h3>
              <p className="text-gray-300 font-museo">
                Real customer photos and reviews featuring our products in their daily lives
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Recent Posts */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8">Recent Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Post 1 */}
            <div className="bg-white bg-opacity-5 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                  <p className="text-white font-museo">Wireless Headphones</p>
                  <p className="text-gray-300 text-sm">Product Showcase</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-white text-sm">1,234</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-white text-sm">89</span>
                    </div>
                  </div>
                  <Bookmark className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-white font-museo text-sm">
                  New premium wireless headphones with ANC! 🎧 What&apos;s your favorite color? 
                  <span className="text-pink-500">#TechLife #Audio</span>
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white bg-opacity-5 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Video className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-white font-museo">Smart Watch Demo</p>
                  <p className="text-gray-300 text-sm">Instagram Reel</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-white text-sm">2,567</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-white text-sm">156</span>
                    </div>
                  </div>
                  <Bookmark className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-white font-museo text-sm">
                  Check out these amazing health tracking features! ⌚ 
                  <span className="text-pink-500">#SmartWatch #HealthTech #Fitness</span>
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white bg-opacity-5 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-white font-museo">Customer Feature</p>
                  <p className="text-gray-300 text-sm">User Generated</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-white text-sm">891</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-white text-sm">42</span>
                    </div>
                  </div>
                  <Bookmark className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-white font-museo text-sm">
                  Amazing setup by @customer_username! 🔥 Tag us in your setup photos! 
                  <span className="text-pink-500">#CustomerFeature #TechSetup</span>
                </p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Stories Highlights */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-6">Story Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'New Arrivals', icon: '🆕' },
              { name: 'Unboxing', icon: '📦' },
              { name: 'Reviews', icon: '⭐' },
              { name: 'Behind Scenes', icon: '🎬' },
              { name: 'Tips & Tricks', icon: '💡' },
              { name: 'Customer Love', icon: '❤️' }
            ].map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-2 border-pink-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">{highlight.icon}</span>
                </div>
                <p className="text-white font-museo text-sm">{highlight.name}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* User Generated Content */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-6">
            Share Your <span className="text-pink-500">#TechLife</span>
          </h2>
          <p className="text-gray-300 font-museo mb-6">
            Tag us in your photos and use our hashtags for a chance to be featured on our Instagram!
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {['#ECommerceTech', '#TechLife', '#GadgetLove', '#TechSetup', '#ProductReview', '#TechDaily'].map((hashtag, index) => (
              <span key={index} className="bg-pink-500/20 text-pink-500 px-4 py-2 rounded-full font-museo text-sm border border-pink-500/30">
                {hashtag}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Call to Action */}
        <GlassCard>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Instagram className="w-16 h-16 text-pink-500" />
            </div>
            <h2 className="text-3xl font-bold font-museo text-white mb-4">
              Follow Us on <span className="text-pink-500">Instagram</span>
            </h2>
            <p className="text-gray-300 font-museo mb-8 max-w-2xl mx-auto">
              Get inspired by our product photography, watch demo videos, and see how our customers 
              use our products in their daily tech life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://instagram.com/ecommerce" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow @ECommerceTech</span>
              </a>
              <Link 
                href="/" 
                className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-lg font-museo transition-all duration-300"
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

export default InstagramPage;
