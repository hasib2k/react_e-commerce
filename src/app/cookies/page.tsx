import React from 'react';
import GlassCard from '@/components/GlassCard';
import { Cookie, Shield, Settings, Info, Eye, FileText } from 'lucide-react';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30">
              <Cookie className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-museo text-white mb-6">
            Cookie <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto leading-relaxed">
            Learn how we use cookies to enhance your browsing experience and improve our services
          </p>
          <div className="mt-8 inline-flex items-center space-x-2 text-gray-400 font-museo">
            <span>Last updated: December 2024</span>
          </div>
        </div>

        {/* Cookie Types Section */}
        <GlassCard className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-museo text-white mb-3">Essential Cookies</h3>
              <p className="text-gray-300 font-museo">
                Required for basic website functionality and security
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-museo text-white mb-3">Analytics Cookies</h3>
              <p className="text-gray-300 font-museo">
                Help us understand how visitors interact with our website
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Settings className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-museo text-white mb-3">Preference Cookies</h3>
              <p className="text-gray-300 font-museo">
                Remember your settings and personalize your experience
              </p>
            </div>
          </div>
        </GlassCard>

        {/* What Are Cookies Section */}
        <GlassCard className="mb-12">
          <div className="flex items-center mb-6">
            <Info className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-3xl font-bold font-museo text-white">What Are Cookies?</h2>
          </div>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 font-museo leading-relaxed mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="text-gray-300 font-museo leading-relaxed">
              We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts. 
              You have the right to choose whether or not to accept cookies and have explained below how you can exercise this right.
            </p>
          </div>
        </GlassCard>

        {/* Cookie Categories Section */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-8">Cookie Categories</h2>
          
          <div className="space-y-8">
            {/* Essential Cookies */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold font-museo text-white mb-4">Essential Cookies</h3>
              <p className="text-gray-300 font-museo mb-4">
                These cookies are necessary for the website to function and cannot be switched off in our systems. 
                They are usually only set in response to actions made by you which amount to a request for services.
              </p>
              <div className="bg-white bg-opacity-5 rounded-lg p-4">
                <h4 className="font-bold font-museo text-white mb-2">Examples:</h4>
                <ul className="text-gray-300 font-museo space-y-1">
                  <li>• Session management and authentication</li>
                  <li>• Shopping cart functionality</li>
                  <li>• Security and fraud prevention</li>
                  <li>• Load balancing and performance</li>
                </ul>
              </div>
            </div>

            {/* Performance Cookies */}
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="text-2xl font-bold font-museo text-white mb-4">Performance & Analytics Cookies</h3>
              <p className="text-gray-300 font-museo mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve 
                the performance of our site. They help us to know which pages are the most and least popular.
              </p>
              <div className="bg-white bg-opacity-5 rounded-lg p-4">
                <h4 className="font-bold font-museo text-white mb-2">Examples:</h4>
                <ul className="text-gray-300 font-museo space-y-1">
                  <li>• Google Analytics</li>
                  <li>• Page view tracking</li>
                  <li>• User behavior analysis</li>
                  <li>• Site performance monitoring</li>
                </ul>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-2xl font-bold font-museo text-white mb-4">Functional Cookies</h3>
              <p className="text-gray-300 font-museo mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              <div className="bg-white bg-opacity-5 rounded-lg p-4">
                <h4 className="font-bold font-museo text-white mb-2">Examples:</h4>
                <ul className="text-gray-300 font-museo space-y-1">
                  <li>• Language preferences</li>
                  <li>• Theme settings</li>
                  <li>• User interface customization</li>
                  <li>• Recently viewed products</li>
                </ul>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Cookie Management Section */}
        <GlassCard className="mb-12">
          <div className="flex items-center mb-6">
            <Settings className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-3xl font-bold font-museo text-white">Managing Your Cookies</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold font-museo text-white mb-4">Browser Settings</h3>
              <p className="text-gray-300 font-museo mb-4">
                Most web browsers allow you to control cookies through their settings preferences. 
                You can set your browser to refuse cookies or delete certain cookies.
              </p>
              <div className="space-y-2">
                <a href="#" className="block text-primary hover:text-white transition-colors font-museo">
                  → Chrome Cookie Settings
                </a>
                <a href="#" className="block text-primary hover:text-white transition-colors font-museo">
                  → Firefox Cookie Settings
                </a>
                <a href="#" className="block text-primary hover:text-white transition-colors font-museo">
                  → Safari Cookie Settings
                </a>
                <a href="#" className="block text-primary hover:text-white transition-colors font-museo">
                  → Edge Cookie Settings
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold font-museo text-white mb-4">Our Cookie Preferences</h3>
              <p className="text-gray-300 font-museo mb-4">
                You can also manage your cookie preferences directly on our website using our cookie preference center.
              </p>
              <button className="bg-primary hover:bg-opacity-80 text-white px-6 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105">
                Cookie Preferences
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Third-Party Cookies Section */}
        <GlassCard className="mb-12">
          <h2 className="text-3xl font-bold font-museo text-white mb-6">Third-Party Cookies</h2>
          <p className="text-gray-300 font-museo mb-6">
            Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-5 rounded-lg p-6">
              <h3 className="text-lg font-bold font-museo text-white mb-2">Google Analytics</h3>
              <p className="text-gray-300 font-museo text-sm mb-3">
                Web analytics service to understand user behavior
              </p>
              <a href="#" className="text-primary hover:text-white transition-colors font-museo text-sm">
                Learn more about Google's privacy policy
              </a>
            </div>
            
            <div className="bg-white bg-opacity-5 rounded-lg p-6">
              <h3 className="text-lg font-bold font-museo text-white mb-2">Payment Processors</h3>
              <p className="text-gray-300 font-museo text-sm mb-3">
                Secure payment processing and fraud prevention
              </p>
              <a href="#" className="text-primary hover:text-white transition-colors font-museo text-sm">
                View payment security information
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Contact Section */}
        <GlassCard>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <FileText className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold font-museo text-white mb-4">
              Questions About Our <span className="text-primary">Cookie Policy</span>?
            </h2>
            <p className="text-gray-300 font-museo mb-8 max-w-2xl mx-auto">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-primary hover:bg-opacity-80 text-white px-8 py-3 rounded-lg font-museo transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a 
                href="/privacy" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-museo transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default CookiesPage;
