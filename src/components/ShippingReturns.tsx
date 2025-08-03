import React, { useState } from 'react';
import { Truck, RotateCcw, Shield, Clock, ChevronDown, ChevronUp, FileText, Scale, HelpCircle } from 'lucide-react';

const ShippingReturns = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const policies = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description: "Free shipping on prepaid orders above ₹800",
      details: "Delivery charges vary by location for orders below ₹800"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Orders placed before 5 PM are processed within 1 business day",
      details: "Estimated delivery: 6-10 working days across India"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Easy Returns",
      description: "7-day return policy for unopened products in original packaging",
      details: "Full refund within 5-7 working days"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Damage Protection",
      description: "Contact us within 48 hours for damaged or incorrect items",
      details: "We arrange refund or replacement with photographic proof"
    }
  ];

  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
            Support Center
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about SARIRA Fig Malt - policies, FAQs, and support
          </p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <button
            onClick={() => toggleSection('shipping')}
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#E38A30]"
          >
            <Truck className="w-8 h-8 text-[#E38A30] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#364A22] mb-2">Shipping & Delivery</h3>
            <p className="text-gray-600 text-sm">Coverage, charges & timelines</p>
          </button>

          <button
            onClick={() => toggleSection('returns')}
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#E38A30]"
          >
            <RotateCcw className="w-8 h-8 text-[#E38A30] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#364A22] mb-2">Returns & Refunds</h3>
            <p className="text-gray-600 text-sm">Return policy & process</p>
          </button>

          <button
            onClick={() => toggleSection('privacy')}
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#E38A30]"
          >
            <Shield className="w-8 h-8 text-[#E38A30] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#364A22] mb-2">Privacy Policy</h3>
            <p className="text-gray-600 text-sm">How we protect your data</p>
          </button>

          <button
            onClick={() => toggleSection('terms')}
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#E38A30]"
          >
            <FileText className="w-8 h-8 text-[#E38A30] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#364A22] mb-2">Terms of Service</h3>
            <p className="text-gray-600 text-sm">Terms & conditions</p>
          </button>

          <button
            onClick={() => toggleSection('faqs')}
            className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#E38A30]"
          >
            <HelpCircle className="w-8 h-8 text-[#E38A30] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#364A22] mb-2">FAQs</h3>
            <p className="text-gray-600 text-sm">Common questions</p>
          </button>
        </div>

        {/* Expandable Sections */}
        {activeSection && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#364A22]">
                {activeSection === 'shipping' && 'Shipping & Delivery Policy'}
                {activeSection === 'returns' && 'Returns & Refunds Policy'}
                {activeSection === 'privacy' && 'Privacy Policy'}
                {activeSection === 'terms' && 'Terms of Service'}
                {activeSection === 'faqs' && 'Frequently Asked Questions (FAQs)'}
              </h3>
              <button
                onClick={() => setActiveSection(null)}
                className="text-gray-500 hover:text-[#E38A30] transition-colors duration-300"
              >
                <ChevronUp className="w-6 h-6" />
              </button>
            </div>

            {activeSection === 'shipping' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Shipping Coverage & Charges
                  </h4>
                  <div className="ml-11 space-y-2 text-gray-700">
                    <p>• We deliver across India (local areas in Tamil Nadu included), excluding certain remote regions.</p>
                    <p>• <strong className="text-[#E38A30]">Free shipping on prepaid orders above ₹800.</strong></p>
                    <p>• For orders below ₹800, delivery charges vary by location.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Order Processing Time
                  </h4>
                  <div className="ml-11 space-y-2 text-gray-700">
                    <p>• Orders placed before 5 PM are processed within 1 business day.</p>
                    <p>• Weekends & public holidays are not processing days.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Delivery Timeline
                  </h4>
                  <div className="ml-11 space-y-2 text-gray-700">
                    <p>• <strong>Estimated delivery: 6 – 10 working days</strong> across India, depending on your location.</p>
                    <p>• Courier tracking via email or SMS provided at dispatch.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Failed Deliveries or Erroneous Address
                  </h4>
                  <div className="ml-11 space-y-2 text-gray-700">
                    <p>• Customers are responsible for reshipping fees if the order is returned due to incomplete or incorrect address.</p>
                    <p>• SARIRA is not liable for lost packages from address errors.</p>
                  </div>
                </div>

                <div className="bg-[#E38A30]/10 border-l-4 border-[#E38A30] p-4 rounded-r-lg">
                  <h4 className="font-semibold text-[#364A22] mb-2">Order Cancellation & Refund</h4>
                  <p className="text-gray-700">
                    If the order is cancelled before dispatch or cannot be delivered to your location, we issue a 
                    <strong className="text-[#364A22]"> full refund—including shipping charges—within 48 business hours</strong> of processing.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'returns' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Eligible Returns
                  </h4>
                  <div className="ml-11 space-y-2 text-gray-700">
                    <p>• We accept <strong className="text-[#364A22]">unopened items in original packaging only</strong>, provided they are returned within <strong className="text-[#E38A30]">7 days of delivery</strong>.</p>
                    <p>• Guests outside this timeframe or with opened items are not eligible.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Damaged or Incorrect Items
                  </h4>
                  <div className="ml-11 space-y-2 text-gray-700">
                    <p>• If you receive a defective, damaged, or incorrect product, contact us within <strong className="text-[#E38A30]">48 hours</strong> with photographic proof.</p>
                    <p>• We will arrange a refund or ship a replacement.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Non-Returnable Items
                  </h4>
                  <div className="ml-11">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <p className="font-medium text-red-800 mb-2">The following items cannot be returned:</p>
                      <ul className="space-y-1 text-red-700">
                        <li>• Opened or used food products</li>
                        <li>• Items damaged due to your fault</li>
                        <li>• Returns made after 7 days of delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3 flex items-center">
                    <span className="w-8 h-8 bg-[#E38A30] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Refund Process
                  </h4>
                  <div className="ml-11">
                    <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                      <p className="text-gray-700">
                        Once approved, refunds are processed to the original payment method within 
                        <strong className="text-[#364A22]"> 5–7 working days</strong>—deducting any return shipping charges if applicable.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#E38A30]/10 border-l-4 border-[#E38A30] p-4 rounded-r-lg">
                  <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                    📩 Customer Support
                  </h4>
                  <p className="text-gray-700 mb-2">Need help? Reach us at:</p>
                  <p className="text-gray-700">📧 support@sarirawellness.com</p>
                  <p className="text-gray-700">Hours: Mon–Sat, 10 AM – 6 PM</p>
                </div>
              </div>
            )}

            {activeSection === 'privacy' && (
              <div className="space-y-6">
                <div className="bg-[#E38A30]/10 border-l-4 border-[#E38A30] p-4 rounded-r-lg mb-6">
                  <p className="text-gray-700">
                    Welcome to SARIRA. Your privacy is important to us, and we are committed to protecting the personal information you share with us.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">1. Information We Collect</h4>
                  <p className="text-gray-700 mb-4">When you use our website or place an order, we may collect the following types of information:</p>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-[#364A22]">Personal Information:</p>
                      <p className="text-gray-700 text-sm">Name, phone number, email address, shipping address, billing address</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-[#364A22]">Payment Information:</p>
                      <p className="text-gray-700 text-sm">Processed securely via third-party payment gateways (we do not store your card details)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-[#364A22]">Order History:</p>
                      <p className="text-gray-700 text-sm">Items purchased, quantity, order value, and delivery records</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-[#364A22]">Device/Usage Data:</p>
                      <p className="text-gray-700 text-sm">IP address, browser type, referring URL, and time spent on pages (for analytics)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-[#364A22]">Communication:</p>
                      <p className="text-gray-700 text-sm">Emails, WhatsApp, or feedback shared with us</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">2. How We Use Your Information</h4>
                  <p className="text-gray-700 mb-3">We use your data to:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Process and fulfill your orders</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Send order confirmations and delivery updates</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Provide customer support</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Send promotional emails (only with your consent)</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Improve our website, services, and user experience</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Prevent fraud and ensure secure transactions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">3. Sharing Your Information</h4>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mb-3">
                    <p className="text-gray-700 font-medium">We do not sell, rent, or trade your personal information.</p>
                  </div>
                  <p className="text-gray-700 mb-3">We only share it with:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Logistics and courier partners (to deliver your order)</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Payment gateways (to securely process your transaction)</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Email/SMS marketing tools (only if you opt-in for updates)</li>
                  </ul>
                  <p className="text-gray-700 mt-3">All partners are expected to comply with strict data protection standards.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">4. Cookies & Tracking</h4>
                  <p className="text-gray-700">
                    Our website uses cookies to enhance your browsing experience and help us understand user behavior. 
                    You can adjust your browser settings to disable cookies at any time, although this may impact site functionality.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">5. Data Security</h4>
                  <p className="text-gray-700">
                    We use industry-standard encryption and security protocols to protect your data from unauthorized access, 
                    misuse, or disclosure. Your payment details are handled by trusted third-party gateways that are PCI-DSS compliant.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">6. Your Rights</h4>
                  <p className="text-gray-700 mb-3">You may:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Request access to your personal data</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Ask for corrections or deletions</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Opt out of promotional emails at any time</li>
                    <li className="flex items-start"><span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>Request account deactivation</li>
                  </ul>
                  <p className="text-gray-700 mt-3">For any of the above, email us at support@sarirawellness.com.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">7. Children's Privacy</h4>
                  <p className="text-gray-700">
                    Our products are intended for purchase by adults. We do not knowingly collect personal data from children under 18.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">8. Policy Updates</h4>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. The latest version will always be available on our website, 
                    and your continued use indicates acceptance.
                  </p>
                </div>

                <div className="bg-[#E38A30]/10 border-l-4 border-[#E38A30] p-4 rounded-r-lg">
                  <h4 className="font-semibold text-[#364A22] mb-2">📩 Contact Us</h4>
                  <p className="text-gray-700">For questions, feedback, or privacy concerns, contact:</p>
                  <p className="text-gray-700 font-medium">SARIRA Wellness</p>
                  <p className="text-gray-700">Email: support@sarirawellness.com</p>
                </div>
              </div>
            )}

            {activeSection === 'terms' && (
              <div className="space-y-6">
                <div className="bg-[#E38A30]/10 border-l-4 border-[#E38A30] p-4 rounded-r-lg mb-6">
                  <p className="text-gray-700">
                    Welcome to www.sarirawellness.com (the "Website"), operated by SARIRA Wellness. By accessing or using our website, 
                    purchasing our products, or interacting with our services, you agree to the following terms and conditions.
                  </p>
                  <p className="text-gray-700 mt-2 font-medium">Please read them carefully before using this site.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">1. Eligibility</h4>
                  <p className="text-gray-700">
                    You must be at least 18 years of age to purchase from our website. By using the site, you confirm that you are 
                    legally capable of entering into a contract.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">2. Product Information</h4>
                  <p className="text-gray-700">
                    We make every effort to display product descriptions, ingredients, prices, and images accurately. However, 
                    SARIRA does not warrant that all product details are always current or error-free. We reserve the right to 
                    modify product specifications without prior notice.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">3. Orders & Payments</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      All orders placed through the website are subject to acceptance and availability.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      We reserve the right to refuse or cancel any order for any reason, including pricing errors or stock availability.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Payments must be made using approved payment methods (UPI, cards, net banking, etc.). We do not store your payment details.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">4. Shipping & Delivery</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Orders are processed within 1–2 business days. Delivery timelines are estimates and not guaranteed.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      For full details, please refer to our Shipping Policy.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">5. Returns & Refunds</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      We accept returns only in cases of damaged, defective, or incorrect items.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Refunds will be processed as per our Return Policy.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      SARIRA reserves the right to reject any return request that does not meet our criteria.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">6. Use of Website</h4>
                  <p className="text-gray-700 mb-3">You agree not to misuse the website or its content. You may not:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Use the website for unlawful or fraudulent purposes
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Attempt to gain unauthorized access to our systems
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Copy, distribute, or reproduce any content without permission
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">7. Intellectual Property</h4>
                  <p className="text-gray-700">
                    All content on this site — including logos, product descriptions, images, and text — is the property of SARIRA 
                    and protected under applicable copyright and trademark laws.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">8. Limitation of Liability</h4>
                  <p className="text-gray-700 mb-3">SARIRA shall not be liable for any direct, indirect, incidental, or consequential damages that result from:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      The use or inability to use the website
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Product misuse
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Delays or failure in delivery beyond our control
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">9. Privacy</h4>
                  <p className="text-gray-700">
                    Your personal information is handled in accordance with our Privacy Policy. By using our site, you consent to 
                    the collection and use of your data as described there.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">10. Modifications to Terms</h4>
                  <p className="text-gray-700">
                    We reserve the right to update or change these terms at any time. Continued use of the website after any changes 
                    implies acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#364A22] mb-3">11. Governing Law</h4>
                  <p className="text-gray-700">
                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be 
                    subject to the jurisdiction of the courts in Chennai, Tamil Nadu.
                  </p>
                </div>

                <div className="bg-[#E38A30]/10 border-l-4 border-[#E38A30] p-4 rounded-r-lg">
                  <h4 className="font-semibold text-[#364A22] mb-2">📩 Contact Us</h4>
                  <p className="text-gray-700">For questions about these Terms, contact us at:</p>
                  <p className="text-gray-700">📧 support@sarirawellness.com</p>
                  <div className="mt-3 pt-3 border-t border-[#E38A30]/20">
                    <p className="text-[#364A22] font-medium">SARIRA – Wellness with Transparency.</p>
                    <p className="text-gray-700">Thank you for choosing us to be part of your health journey.</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'faqs' && (
              <div className="space-y-6">
                <div className="bg-[#E38A30]/10 border-l-4 border-[#E38A30] p-4 rounded-r-lg mb-6">
                  <h4 className="font-semibold text-[#364A22] mb-2">SARIRA Fig Malt – Wellness Made Simple</h4>
                </div>

                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">🥄</span>
                      1. What is SARIRA Fig Malt made of?
                    </h4>
                    <p className="text-gray-700 ml-10">
                      SARIRA Fig Malt is made from <strong className="text-[#364A22]">100% organic figs and premium nuts</strong>. 
                      No preservatives, no refined sugar, and no artificial flavors — just clean, plant-based nutrition.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">🍼</span>
                      2. Is SARIRA safe for children and elders?
                    </h4>
                    <p className="text-gray-700 ml-10">
                      Yes! SARIRA is gentle, nutritious, and family-friendly, suitable for <strong className="text-[#E38A30]">children above 1 year</strong> 
                      and elders alike. It supports digestion, immunity, and energy in all age groups.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">🍯</span>
                      3. Can I use SARIRA as a sugar substitute?
                    </h4>
                    <p className="text-gray-700 ml-10">
                      Absolutely. SARIRA Fig Malt has a naturally sweet taste from figs and can be used in place of refined sugar 
                      in milk, tea, porridge, baking, or toast toppings.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">💪</span>
                      4. What are the health benefits of SARIRA?
                    </h4>
                    <div className="ml-10">
                      <p className="text-gray-700 mb-2">SARIRA supports:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Digestive health (rich in fiber)
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Energy and stamina
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Iron and calcium intake
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Gut-friendly sweetness
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Gentle detox and immunity support
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">🕒</span>
                      5. How do I consume SARIRA Fig Malt?
                    </h4>
                    <div className="ml-10">
                      <p className="text-gray-700 mb-2">You can:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Mix 1 tbsp with warm milk or water
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Add to smoothies or porridge
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Use as a toast topping
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-[#E38A30] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Bake into muffins or energy balls
                        </li>
                      </ul>
                      <p className="text-[#E38A30] mt-2 font-medium">Avoid boiling directly to preserve nutrients.</p>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">🚫</span>
                      6. Does SARIRA contain grains, preservatives, or added sugar?
                    </h4>
                    <div className="ml-10">
                      <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                        <p className="text-green-800 font-medium">No. SARIRA is grain-free, preservative-free, and refined sugar-free.</p>
                        <p className="text-green-700 mt-1">Just figs and nuts — nothing more.</p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">🔄</span>
                      7. What is the shelf life of SARIRA Fig Malt?
                    </h4>
                    <p className="text-gray-700 ml-10">
                      SARIRA has a shelf life of <strong className="text-[#E38A30]">6 months</strong> when stored in a cool, dry place. 
                      Always close the lid tightly after use.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">📦</span>
                      8. Where do you ship and how long does it take?
                    </h4>
                    <p className="text-gray-700 ml-10">
                      We ship across India. Orders are usually delivered in <strong className="text-[#E38A30]">3–7 business days</strong> 
                      depending on your location. Orders above <strong className="text-[#364A22]">₹800 are eligible for free shipping</strong>.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">💳</span>
                      9. What payment options do you accept?
                    </h4>
                    <p className="text-gray-700 ml-10">
                      We accept UPI, debit/credit cards, net banking, and Cash on Delivery (COD) in select locations.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-[#364A22] mb-2 flex items-center">
                      <span className="text-2xl mr-3">📩</span>
                      10. Who do I contact for queries or returns?
                    </h4>
                    <p className="text-gray-700 ml-10">
                      For any support, email us at <strong className="text-[#E38A30]">support@sarirawellness.com</strong> or 
                      WhatsApp us at <strong className="text-[#364A22]">+91-XXXXXXXXXX</strong>. 
                      We're available Mon–Sat, 10AM – 6PM.
                    </p>
                  </div>
                </div>

                <div className="bg-[#E38A30]/10 border-l-4 border-[#E38A30] p-4 rounded-r-lg">
                  <h4 className="font-semibold text-[#364A22] mb-2">Still have questions?</h4>
                  <p className="text-gray-700">
                    Feel free to contact our wellness team — we're here to help you on your journey to better living.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-[#E38A30] mb-4 flex justify-center">
                {policy.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#364A22] mb-2">
                {policy.title}
              </h3>
              <p className="text-gray-600 mb-3 text-sm">
                {policy.description}
              </p>
              <p className="text-[#E38A30] text-xs font-medium">
                {policy.details}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Need more help? Contact our support team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@sarirawellness.com" className="bg-[#E38A30] hover:bg-[#E38A30]/90 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
              📧 Email Support
            </a>
            <a href="https://wa.me/91XXXXXXXXXX" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium">
              💬 WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingReturns;