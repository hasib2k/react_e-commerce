'use client';

import React, { useState } from 'react';
import { Ruler, User, Shirt, Footprints, Watch, Info, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Breadcrumb from '@/components/Breadcrumb';
import { useCart } from '@/context/CartContext';

const SizeGuide: React.FC = () => {
  const { state } = useCart();
  const [activeCategory, setActiveCategory] = useState('clothing');

  const categories = [
    { id: 'clothing', name: 'Clothing', icon: Shirt },
    { id: 'footwear', name: 'Footwear', icon: Footprints },
    { id: 'accessories', name: 'Accessories', icon: Watch }
  ];

  const clothingSizes = {
    men: [
      { size: 'XS', chest: '32-34', waist: '26-28', length: '26' },
      { size: 'S', chest: '34-36', waist: '28-30', length: '27' },
      { size: 'M', chest: '36-38', waist: '30-32', length: '28' },
      { size: 'L', chest: '38-40', waist: '32-34', length: '29' },
      { size: 'XL', chest: '40-42', waist: '34-36', length: '30' },
      { size: 'XXL', chest: '42-44', waist: '36-38', length: '31' }
    ],
    women: [
      { size: 'XS', bust: '30-32', waist: '24-26', hips: '34-36' },
      { size: 'S', bust: '32-34', waist: '26-28', hips: '36-38' },
      { size: 'M', bust: '34-36', waist: '28-30', hips: '38-40' },
      { size: 'L', bust: '36-38', waist: '30-32', hips: '40-42' },
      { size: 'XL', bust: '38-40', waist: '32-34', hips: '42-44' },
      { size: 'XXL', bust: '40-42', waist: '34-36', hips: '44-46' }
    ]
  };

  const footwearSizes = {
    men: [
      { us: '7', uk: '6.5', eu: '40', cm: '25' },
      { us: '8', uk: '7.5', eu: '41', cm: '26' },
      { us: '9', uk: '8.5', eu: '42', cm: '27' },
      { us: '10', uk: '9.5', eu: '43', cm: '28' },
      { us: '11', uk: '10.5', eu: '44', cm: '29' },
      { us: '12', uk: '11.5', eu: '45', cm: '30' }
    ],
    women: [
      { us: '5', uk: '3', eu: '36', cm: '22' },
      { us: '6', uk: '4', eu: '37', cm: '23' },
      { us: '7', uk: '5', eu: '38', cm: '24' },
      { us: '8', uk: '6', eu: '39', cm: '25' },
      { us: '9', uk: '7', eu: '40', cm: '26' },
      { us: '10', uk: '8', eu: '41', cm: '27' }
    ]
  };

  const measurementTips = [
    {
      title: 'Use a Soft Tape Measure',
      description: 'A flexible fabric tape measure gives the most accurate results. Avoid using a rigid ruler.'
    },
    {
      title: 'Measure Over Undergarments',
      description: 'Take measurements while wearing the undergarments you plan to wear with the item.'
    },
    {
      title: 'Stand Naturally',
      description: 'Keep your posture natural and relaxed. Don&apos;t suck in your stomach or puff out your chest.'
    },
    {
      title: 'Get Help if Possible',
      description: 'Having someone else take your measurements often provides more accurate results.'
    }
  ];

  const sizingGuides = {
    rings: [
      { size: '5', diameter: '15.7mm', circumference: '49.3mm' },
      { size: '6', diameter: '16.5mm', circumference: '51.9mm' },
      { size: '7', diameter: '17.3mm', circumference: '54.4mm' },
      { size: '8', diameter: '18.1mm', circumference: '57.0mm' },
      { size: '9', diameter: '19.0mm', circumference: '59.5mm' },
      { size: '10', diameter: '19.8mm', circumference: '62.1mm' }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Size Guide' }]} />
      
      {/* Hero Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <GlassCard className="py-6">
            <Ruler className="w-10 h-10 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold font-museo text-white mb-3">
              Size <span className="text-primary">Guide</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4 font-museo max-w-3xl mx-auto">
              Find your perfect fit with our comprehensive sizing charts and measurement guides for all product categories.
            </p>
          </GlassCard>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2 p-1 bg-white/10 rounded-lg backdrop-blur-sm border border-primary/30">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-museo font-bold transition-all duration-300 text-sm ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'text-gray-300 hover:text-primary hover:bg-primary/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clothing Sizes */}
      {activeCategory === 'clothing' && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
              Clothing <span className="text-primary">Sizes</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Men's Sizes */}
              <GlassCard className="border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 text-center border-b border-primary/20 pb-4">
                  Men&apos;s Clothing
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left text-primary font-bold py-2">Size</th>
                        <th className="text-left text-primary font-bold py-2">Chest (in)</th>
                        <th className="text-left text-primary font-bold py-2">Waist (in)</th>
                        <th className="text-left text-primary font-bold py-2">Length (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clothingSizes.men.map((size, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="text-white font-bold py-2">{size.size}</td>
                          <td className="text-gray-300 py-2">{size.chest}</td>
                          <td className="text-gray-300 py-2">{size.waist}</td>
                          <td className="text-gray-300 py-2">{size.length}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>

              {/* Women's Sizes */}
              <GlassCard className="border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 text-center border-b border-primary/20 pb-4">
                  Women&apos;s Clothing
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left text-primary font-bold py-2">Size</th>
                        <th className="text-left text-primary font-bold py-2">Bust (in)</th>
                        <th className="text-left text-primary font-bold py-2">Waist (in)</th>
                        <th className="text-left text-primary font-bold py-2">Hips (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clothingSizes.women.map((size, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="text-white font-bold py-2">{size.size}</td>
                          <td className="text-gray-300 py-2">{size.bust}</td>
                          <td className="text-gray-300 py-2">{size.waist}</td>
                          <td className="text-gray-300 py-2">{size.hips}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      )}

      {/* Footwear Sizes */}
      {activeCategory === 'footwear' && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
              Footwear <span className="text-primary">Sizes</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Men's Footwear */}
              <GlassCard className="border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 text-center border-b border-primary/20 pb-4">
                  Men&apos;s Footwear
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left text-primary font-bold py-2">US</th>
                        <th className="text-left text-primary font-bold py-2">UK</th>
                        <th className="text-left text-primary font-bold py-2">EU</th>
                        <th className="text-left text-primary font-bold py-2">CM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {footwearSizes.men.map((size, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="text-white font-bold py-2">{size.us}</td>
                          <td className="text-gray-300 py-2">{size.uk}</td>
                          <td className="text-gray-300 py-2">{size.eu}</td>
                          <td className="text-gray-300 py-2">{size.cm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>

              {/* Women's Footwear */}
              <GlassCard className="border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 text-center border-b border-primary/20 pb-4">
                  Women&apos;s Footwear
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left text-primary font-bold py-2">US</th>
                        <th className="text-left text-primary font-bold py-2">UK</th>
                        <th className="text-left text-primary font-bold py-2">EU</th>
                        <th className="text-left text-primary font-bold py-2">CM</th>
                      </tr>
                    </thead>
                    <tbody>
                      {footwearSizes.women.map((size, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="text-white font-bold py-2">{size.us}</td>
                          <td className="text-gray-300 py-2">{size.uk}</td>
                          <td className="text-gray-300 py-2">{size.eu}</td>
                          <td className="text-gray-300 py-2">{size.cm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      )}

      {/* Accessories Sizes */}
      {activeCategory === 'accessories' && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold font-museo text-white text-center mb-12">
              Accessories <span className="text-primary">Sizes</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ring Sizes */}
              <GlassCard className="border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 text-center border-b border-primary/20 pb-4">
                  Ring Sizes
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left text-primary font-bold py-2">Size</th>
                        <th className="text-left text-primary font-bold py-2">Diameter</th>
                        <th className="text-left text-primary font-bold py-2">Circumference</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizingGuides.rings.map((size, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="text-white font-bold py-2">{size.size}</td>
                          <td className="text-gray-300 py-2">{size.diameter}</td>
                          <td className="text-gray-300 py-2">{size.circumference}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </GlassCard>

              {/* Watch Sizes */}
              <GlassCard className="border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-white font-museo mb-6 text-center border-b border-primary/20 pb-4">
                  Watch Band Sizes
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white font-bold">Small</span>
                    <span className="text-gray-300">130-170mm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white font-bold">Medium</span>
                    <span className="text-gray-300">140-180mm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white font-bold">Large</span>
                    <span className="text-gray-300">150-190mm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">X-Large</span>
                    <span className="text-gray-300">160-200mm</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>
      )}

      {/* Measurement Tips */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <User className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Measurement <span className="text-primary">Tips</span>
            </h2>
            <p className="text-xl text-gray-300 font-museo max-w-3xl mx-auto">
              Follow these tips to ensure you get the most accurate measurements for the perfect fit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {measurementTips.map((tip, index) => (
              <GlassCard key={index} className="hover-lift">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white font-museo mb-2">{tip.title}</h3>
                    <p className="text-gray-300">{tip.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Size Finder Tool */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard className="border-2 border-primary/30">
            <Ruler className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold font-museo text-white mb-4">
              Size <span className="text-primary">Finder Tool</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-museo">
              Answer a few quick questions and we&apos;ll recommend the perfect size for you.
            </p>
            <button className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              Find My Size
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </GlassCard>
        </div>
      </section>

    </div>
  );
};

export default SizeGuide;
