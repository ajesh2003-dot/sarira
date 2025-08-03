import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#364A22] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <img 
              src="/images/Logo.png" 
              alt="SARIRA" 
              className="h-12 w-auto mb-4 brightness-110 contrast-125"
            />
            <p className="text-white/80 mb-6 leading-relaxed">
              Bringing the legacy of Tamil wellness to modern families through our premium Fig Malt 
              with Organic Figs & Premium Nuts, crafted with traditional wisdom and natural goodness.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#recipes" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#support" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#support" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#support" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#support" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E38A30] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">
                    123 Anna Salai<br />
                    Chennai, Tamil Nadu - 600002
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#E38A30] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm">
                  +91 XXXXXXXXXX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#E38A30] flex-shrink-0" />
                <a href="mailto:support@sarirawellness.com" className="text-white/80 hover:text-[#E38A30] transition-colors duration-300 text-sm">
                  support@sarirawellness.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 SARIRA Wellness. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#support" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#support" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#support" className="text-white/60 hover:text-[#E38A30] transition-colors duration-300">
                Returns & Refunds
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;