import React from 'react';
import GlassCard from '@/components/GlassCard';
import { Linkedin, Users, Briefcase, TrendingUp, Award, Building, Target, Globe } from 'lucide-react';

const LinkedInPage: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-700/20 border-2 border-blue-600/30">
              <Linkedin className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
            Connect on <span className="text-blue-600">LinkedIn</span>
          </h1>
          <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto leading-relaxed">
            Join our professional network for industry insights, company updates, and business opportunities
          </p>
        </div>

        {/* LinkedIn Stats */}
        <GlassCard className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">15.2K</h3>
              <p className="text-gray-300 font-museo">Followers</p>
            </div>
            <div>
              <Briefcase className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">850</h3>
              <p className="text-gray-300 font-museo">Employees</p>
            </div>
            <div>
              <Building className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">50+</h3>
              <p className="text-gray-300 font-museo">Partners</p>
            </div>
            <div>
              <Globe className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-museo text-white mb-2">25</h3>
              <p className="text-gray-300 font-museo">Countries</p>
            </div>
          </div>
        </GlassCard>

        {/* What You'll Find */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8 text-center">
            Why Follow Us on <span className="text-blue-600">LinkedIn</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Industry Insights</h3>
              <p className="text-gray-300 font-museo">
                Latest trends in e-commerce, technology, and digital innovation from our expert team
              </p>
            </div>
            
            <div className="text-center">
              <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Career Opportunities</h3>
              <p className="text-gray-300 font-museo">
                Join our growing team with exciting positions in tech, marketing, and customer success
              </p>
            </div>
            
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Business Updates</h3>
              <p className="text-gray-300 font-museo">
                Company milestones, partnership announcements, and strategic business developments
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Recent Posts */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8">Recent Professional Updates</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 bg-white bg-opacity-5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-museo font-bold text-lg">E-Commerce Tech Inc.</h4>
                  <span className="text-gray-400 text-sm">3 days ago • Company Update</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-museo text-white mb-3">
                🚀 Exciting Partnership Announcement
              </h3>
              <p className="text-gray-300 font-museo mb-4">
                We're thrilled to announce our strategic partnership with leading logistics providers to enhance 
                our global shipping capabilities. This collaboration will reduce delivery times by 40% and expand 
                our reach to 25 new countries. 
                <br/><br/>
                What does this mean for our customers? Faster deliveries, better tracking, and expanded international 
                shipping options. We're committed to providing the best e-commerce experience possible.
              </p>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <span>👍 342 reactions</span>
                <span>💬 67 comments</span>
                <span>🔄 89 shares</span>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 bg-white bg-opacity-5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-museo font-bold text-lg">E-Commerce Tech Inc.</h4>
                  <span className="text-gray-400 text-sm">1 week ago • Career Opportunity</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-museo text-white mb-3">
                🌟 We're Hiring: Senior Full-Stack Developer
              </h3>
              <p className="text-gray-300 font-museo mb-4">
                Join our innovative technology team! We're looking for a passionate Senior Full-Stack Developer 
                to help build the next generation of e-commerce solutions.
                <br/><br/>
                <strong>What we offer:</strong><br/>
                • Competitive salary + equity<br/>
                • Remote-first culture<br/>
                • Latest tech stack (React, Node.js, AWS)<br/>
                • Professional development budget<br/>
                • Health & wellness benefits
                <br/><br/>
                Ready to make an impact in e-commerce technology? Send us your portfolio!
              </p>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <span>👍 156 reactions</span>
                <span>💬 23 comments</span>
                <span>🔄 45 shares</span>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 bg-white bg-opacity-5 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-museo font-bold text-lg">E-Commerce Tech Inc.</h4>
                  <span className="text-gray-400 text-sm">2 weeks ago • Industry Insight</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-museo text-white mb-3">
                📊 The Future of E-Commerce: 5 Trends to Watch in 2025
              </h3>
              <p className="text-gray-300 font-museo mb-4">
                Our CEO recently shared insights at the Global E-Commerce Summit. Here are the key trends 
                shaping our industry:
                <br/><br/>
                1. <strong>AI-Powered Personalization</strong> - Custom shopping experiences for every user<br/>
                2. <strong>Sustainable Packaging</strong> - Eco-friendly solutions driving customer choice<br/>
                3. <strong>Voice Commerce</strong> - Shopping through smart speakers and voice assistants<br/>
                4. <strong>AR/VR Integration</strong> - Virtual try-before-you-buy experiences<br/>
                5. <strong>Social Commerce</strong> - Direct purchasing through social media platforms
                <br/><br/>
                How is your business adapting to these trends? Share your thoughts below!
              </p>
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <span>👍 289 reactions</span>
                <span>💬 78 comments</span>
                <span>🔄 134 shares</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Company Culture */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8">Our Company Culture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Innovation First</h3>
              <p className="text-gray-300 font-museo">
                We foster creativity and encourage innovative solutions to complex e-commerce challenges
              </p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Team Collaboration</h3>
              <p className="text-gray-300 font-museo">
                Cross-functional teams working together to deliver exceptional customer experiences
              </p>
            </div>
            
            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold font-museo text-white mb-3">Global Impact</h3>
              <p className="text-gray-300 font-museo">
                Making technology accessible worldwide while maintaining sustainable business practices
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Call to Action */}
        <GlassCard>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Linkedin className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold font-museo text-white mb-4">
              Connect with Us on <span className="text-blue-600">LinkedIn</span>
            </h2>
            <p className="text-gray-300 font-museo mb-8 max-w-2xl mx-auto">
              Stay updated with our latest business developments, career opportunities, and industry insights. 
              Let's build the future of e-commerce together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://linkedin.com/company/ecommerce" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>Follow Our Company</span>
              </a>
              <a 
                href="/" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-museo transition-all duration-300"
              >
                Back to Store
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default LinkedInPage;
