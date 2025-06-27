import React from 'react';
import GlassCard from '@/components/GlassCard';
import { Star, Quote, ThumbsUp, MessageCircle, Award, Users, ShoppingBag, Heart } from 'lucide-react';

const ReviewsPage: React.FC = () => {
  const customerReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      product: 'Premium Wireless Headphones',
      review: 'Absolutely incredible sound quality! The noise cancellation is perfect for my daily commute. Customer service was also top-notch when I had questions about the warranty.',
      date: '2 weeks ago',
      verified: true,
      helpful: 34
    },
    {
      id: 2,
      name: 'Mike Chen',
      location: 'Toronto, Canada',
      rating: 5,
      product: 'Smart Watch Pro',
      review: 'This smartwatch has completely changed my fitness routine. The health tracking features are accurate and the battery life is amazing. Highly recommend!',
      date: '1 month ago',
      verified: true,
      helpful: 28
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Madrid, Spain',
      rating: 4,
      product: 'USB-C Hub Pro',
      review: 'Great build quality and works perfectly with my MacBook. The 4K output is crystal clear. Only minor issue is it gets a bit warm during heavy use, but overall very satisfied.',
      date: '3 weeks ago',
      verified: true,
      helpful: 19
    },
    {
      id: 4,
      name: 'David Kim',
      location: 'Seoul, South Korea',
      rating: 5,
      product: 'Mechanical Keyboard',
      review: 'As a programmer, I spend 10+ hours typing daily. This keyboard is a game-changer! The tactile feedback is perfect and the RGB lighting is beautiful.',
      date: '1 week ago',
      verified: true,
      helpful: 42
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      location: 'London, UK',
      rating: 5,
      product: 'Wireless Gaming Mouse',
      review: 'Fast shipping, excellent packaging, and the mouse performs flawlessly in competitive gaming. The customizable buttons are exactly what I needed.',
      date: '4 days ago',
      verified: true,
      helpful: 15
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Sydney, Australia',
      rating: 5,
      product: 'Bluetooth Speaker',
      review: 'Took this speaker on my camping trip and it exceeded all expectations. Waterproof design worked perfectly and the sound quality is incredible for the size.',
      date: '2 months ago',
      verified: true,
      helpful: 56
    }
  ];

  const reviewStats = [
    { stars: 5, count: 2847, percentage: 89 },
    { stars: 4, count: 312, percentage: 10 },
    { stars: 3, count: 28, percentage: 1 },
    { stars: 2, count: 5, percentage: 0 },
    { stars: 1, count: 3, percentage: 0 }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30">
              <Star className="w-12 h-12 text-yellow-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
            Customer <span className="text-yellow-400">Reviews</span>
          </h1>
          <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto leading-relaxed">
            Discover what our customers are saying about their experience with our products and service
          </p>
        </div>

        {/* Review Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Overall Rating */}
          <GlassCard>
            <div className="text-center">
              <h3 className="text-2xl font-bold font-museo text-white mb-4">Overall Rating</h3>
              <div className="text-6xl font-bold font-museo text-yellow-400 mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-300 font-museo">Based on 3,195 reviews</p>
            </div>
          </GlassCard>

          {/* Stats */}
          <GlassCard>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="text-xl font-bold font-museo text-white">25,000+</h4>
                <p className="text-gray-300 font-museo text-sm">Happy Customers</p>
              </div>
              <div>
                <ShoppingBag className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h4 className="text-xl font-bold font-museo text-white">98%</h4>
                <p className="text-gray-300 font-museo text-sm">Satisfaction Rate</p>
              </div>
              <div>
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h4 className="text-xl font-bold font-museo text-white">15+</h4>
                <p className="text-gray-300 font-museo text-sm">Awards Won</p>
              </div>
              <div>
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="text-xl font-bold font-museo text-white">92%</h4>
                <p className="text-gray-300 font-museo text-sm">Would Recommend</p>
              </div>
            </div>
          </GlassCard>

          {/* Rating Breakdown */}
          <GlassCard>
            <h3 className="text-xl font-bold font-museo text-white mb-4">Rating Breakdown</h3>
            <div className="space-y-3">
              {reviewStats.map((stat) => (
                <div key={stat.stars} className="flex items-center space-x-3">
                  <span className="text-white font-museo text-sm w-6">{stat.stars}★</span>
                  <div className="flex-1 bg-white bg-opacity-10 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-300 font-museo text-sm w-12">{stat.count}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Customer Reviews */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-museo text-white text-center mb-12">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customerReviews.map((review) => (
              <GlassCard key={review.id} className="relative">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-primary opacity-30" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold font-museo text-white">{review.name}</h4>
                    <p className="text-gray-400 font-museo text-sm">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-1 mb-1">
                      {renderStars(review.rating)}
                    </div>
                    {review.verified && (
                      <span className="text-green-400 font-museo text-xs">✓ Verified Purchase</span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-museo text-sm border border-primary/30">
                    {review.product}
                  </span>
                </div>

                <p className="text-gray-300 font-museo leading-relaxed mb-4">
                  "{review.review}"
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="font-museo">{review.date}</span>
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Review Highlights */}
        <GlassCard className="mb-16">
          <h2 className="text-3xl font-bold font-museo text-white text-center mb-8">
            Most Praised <span className="text-primary">Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold font-museo text-white mb-2">Fast Shipping</h3>
              <p className="text-gray-300 font-museo">
                "Orders arrive quickly and packaging is excellent" - mentioned in 89% of reviews
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold font-museo text-white mb-2">Product Quality</h3>
              <p className="text-gray-300 font-museo">
                "High-quality products that exceed expectations" - mentioned in 94% of reviews
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold font-museo text-white mb-2">Customer Support</h3>
              <p className="text-gray-300 font-museo">
                "Helpful and responsive customer service team" - mentioned in 91% of reviews
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Call to Action */}
        <GlassCard>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Star className="w-16 h-16 text-yellow-400" />
            </div>
            <h2 className="text-3xl font-bold font-museo text-white mb-4">
              Share Your <span className="text-yellow-400">Experience</span>
            </h2>
            <p className="text-gray-300 font-museo mb-8 max-w-2xl mx-auto">
              Have you purchased from us? We'd love to hear about your experience! 
              Your feedback helps us improve and helps other customers make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 font-bold"
              >
                Write a Review
              </a>
              <a 
                href="/products" 
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 rounded-lg font-museo transition-all duration-300"
              >
                Shop Our Products
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ReviewsPage;
