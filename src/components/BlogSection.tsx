'use client';

import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import GlassCard from './GlassCard';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: '2024 Tech Trends: What to Expect',
      excerpt: 'Discover the latest technology trends that will shape the future of consumer electronics and digital experiences.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
      author: 'Tech Team',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Laptop',
      excerpt: 'A comprehensive guide to selecting the right laptop for your needs, whether for work, gaming, or everyday use.',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=250&fit=crop',
      author: 'Sarah Johnson',
      date: 'March 12, 2024',
      readTime: '8 min read',
      category: 'Buying Guide'
    },
    {
      id: 3,
      title: 'Smart Home Devices Worth Investing In',
      excerpt: 'Transform your home into a smart ecosystem with these carefully selected devices that offer real value.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      author: 'Mike Chen',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Smart Home'
    }
  ];

  return (
    <section className="py-16 px-4 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-museo text-white mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto">
            Stay informed with our latest articles, buying guides, and tech insights to make better purchasing decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <GlassCard key={post.id} className="hover-lift cursor-pointer group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-white font-museo mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <button className="flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-bold">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="glass-button bg-primary/20 hover:bg-primary/40 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 border border-primary/30">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
