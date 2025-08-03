import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#364A22] flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#E38A30] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-[#E38A30] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#E38A30] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Logo Placeholder */}
          <div className="flex justify-center mb-8">
            <img 
              src="/images/Logo.png" 
              alt="SARIRA Logo" 
              className="w-40 h-40 object-contain brightness-110 contrast-125"
            />
          </div>

          {/* Product Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            SARIRA
          </h1>
          
          {/* Product Description */}
          <div className="text-2xl md:text-3xl font-semibold text-[#E38A30] mb-4">
            Fig Malt
          </div>
          
          <div className="text-lg text-white/80 mb-6">
            with Organic Figs & Premium Nuts
          </div>
          
          <div className="text-sm text-white/70 mb-8">
            200g pouch
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Legacy of Tamil Wellness in a Spoon
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <button className="group bg-[#E38A30] hover:bg-[#E38A30]/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center mx-auto">
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;