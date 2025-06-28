'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import GlassCard from './GlassCard';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: '2024 Tech Trends: What to Expect',
      excerpt: 'Discover the latest technology trends that will shape the future of consumer electronics and digital experiences.',
      image: 'https://via.placeholder.com/400x250/1a1a2e/ffffff?text=Tech+Trends+2024',
      author: 'Tech Team',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Laptop',
      excerpt: 'A comprehensive guide to selecting the right laptop for your needs, whether for work, gaming, or everyday use.',
      image: 'https://via.placeholder.com/400x250/16213e/ffffff?text=Laptop+Guide',
      author: 'Sarah Johnson',
      date: 'March 12, 2024',
      readTime: '8 min read',
      category: 'Buying Guide'
    },
    {
      id: 3,
      title: 'Smart Home Devices Worth Investing In',
      excerpt: 'Transform your home into a smart ecosystem with these carefully selected devices that offer real value.',
      image: 'https://via.placeholder.com/400x250/0f3460/ffffff?text=Smart+Home',
      author: 'Mike Chen',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Smart Home'
    }
  ];

  return (
    <section className="py-8 px-4 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold font-museo text-white mb-2">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-sm text-gray-300 font-museo max-w-2xl mx-auto">
            Stay informed with our latest articles, buying guides, and tech insights to make better purchasing decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <GlassCard key={post.id} className="hover-lift cursor-pointer group overflow-hidden p-2">
              <div className="relative overflow-hidden rounded-lg mb-2">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  width={400}
                  height={120}
                  className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <span className="bg-primary/90 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-2">
                <h3 className="text-sm font-bold text-white font-museo mb-1 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-2 line-clamp-2 text-xs">{post.excerpt}</p>
                
                <div className="flex items-center text-xs text-gray-400 mb-2">
                  <User className="w-3 h-3 mr-1" />
                  <span className="mr-2">{post.author}</span>
                  <Calendar className="w-3 h-3 mr-1" />
                  <span className="mr-2">{post.date}</span>
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <button className="flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-bold text-xs">
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <button className="glass-button bg-primary/20 hover:bg-primary/40 text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 border border-primary/30 text-sm">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
