import React from 'react';
import { MessageCircle, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to help you with any questions about SARIRA Fig Malt
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#364A22] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E38A30] p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#364A22] mb-1">
                      WhatsApp Support
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Quick responses for all your queries
                    </p>
                    <a
                      href="https://wa.me/91XXXXXXXXXX"
                      className="text-[#E38A30] hover:text-[#E38A30]/80 font-medium transition-colors duration-300"
                    >
                      +91 XXXXXXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E38A30] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#364A22] mb-1">
                      Email Support
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Detailed assistance via email
                    </p>
                    <a
                      href="mailto:support@sarirawellness.com"
                      className="text-[#E38A30] hover:text-[#E38A30]/80 font-medium transition-colors duration-300"
                    >
                      support@sarirawellness.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E38A30] p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#364A22] mb-1">
                      Business Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E38A30] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#364A22] mb-1">
                      Head Office
                    </h4>
                    <p className="text-gray-600">
                      123 Anna Salai<br />
                      Chennai, Tamil Nadu - 600002<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="block w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                <MessageCircle className="w-6 h-6 inline-block mr-2" />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:support@sarirawellness.com"
                className="block w-full bg-[#E38A30] hover:bg-[#E38A30]/90 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                <Mail className="w-6 h-6 inline-block mr-2" />
                Send Email
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#364A22] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#E38A30] transition-colors duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#E38A30] transition-colors duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#E38A30] transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#E38A30] transition-colors duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#E38A30] transition-colors duration-300">
                  <option value="">Select a subject</option>
                  <option value="product">Product Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="shipping">Shipping Question</option>
                  <option value="general">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#E38A30] transition-colors duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E38A30] hover:bg-[#E38A30]/90 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;