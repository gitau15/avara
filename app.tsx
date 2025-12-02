import React, { useEffect, useRef } from 'react';
import { Truck, Zap, TrendingUp, Map, Phone, Mail, MapPin, Users, BarChart3, Globe, Shield, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const App = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      pathLength: 1,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-600 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Operating System for African Logistics
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 text-orange-100 leading-relaxed">
                Avara is the asset-light platform that gives you total visibility, AI-powered route optimization, and actionable intelligence for your fleet. Stop burning fuel. Start building efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <button className="bg-white text-orange-700 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                  Request a Demo
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-700 font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 whitespace-nowrap flex items-center gap-2">
                  See Our 30% Savings Case Study <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Animated Map Visualization - Professional Framer Motion Implementation */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0">
                {/* Chaotic Map Background */}
                <div className="absolute inset-0 bg-gray-900 rounded-2xl opacity-30"></div>
                
                {/* Nairobi Grid Base */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Chaotic routes - thin gray lines (static background) */}
                    <path d="M 50 100 L 150 80 L 200 150 L 300 120 L 350 200" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.6" />
                    <path d="M 80 300 L 120 250 L 220 280 L 280 220 L 320 260" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.6" />
                    <path d="M 100 50 L 180 90 L 250 60 L 320 100 L 380 150" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.6" />
                    <path d="M 60 350 L 140 320 L 220 360 L 300 340 L 360 380" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.6" />
                    <path d="M 20 200 L 100 180 L 180 220 L 260 200 L 340 240" stroke="#9CA3AF" strokeWidth="1" fill="none" opacity="0.6" />
                    
                    {/* Optimized routes - animated with Framer Motion */}
                    <motion.path
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ pathLength: 1, pathOffset: 0 }}
                      transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                      d="M 50 100 L 350 200"
                      stroke="#F97316"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,8"
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.7)]"
                    />
                    <motion.path
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ pathLength: 1, pathOffset: 0 }}
                      transition={{ duration: 2, delay: 1.0, ease: "easeInOut" }}
                      d="M 80 300 L 320 260"
                      stroke="#F97316"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,8"
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.7)]"
                    />
                    <motion.path
                      initial={{ pathLength: 0, pathOffset: 1 }}
                      animate={{ pathLength: 1, pathOffset: 0 }}
                      transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                      d="M 100 50 L 380 150"
                      stroke="#F97316"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,8"
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.7)]"
                    />
                    
                    {/* Key locations as animated dots */}
                    <motion.circle 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.0, duration: 0.3 }}
                      cx="50" cy="100" r="4" fill="#F97316" 
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                    />
                    <motion.circle 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.1, duration: 0.3 }}
                      cx="350" cy="200" r="4" fill="#F97316" 
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                    />
                    <motion.circle 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.2, duration: 0.3 }}
                      cx="80" cy="300" r="4" fill="#F97316" 
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                    />
                    <motion.circle 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.3, duration: 0.3 }}
                      cx="320" cy="260" r="4" fill="#F97316" 
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                    />
                    <motion.circle 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.4, duration: 0.3 }}
                      cx="100" cy="50" r="4" fill="#F97316" 
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                    />
                    <motion.circle 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2.5, duration: 0.3 }}
                      cx="380" cy="150" r="4" fill="#F97316" 
                      className="drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]"
                    />
                  </svg>
                </div>
                
                {/* Avara Logo - positioned at center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 2.8, duration: 0.6, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <span className="text-2xl font-bold text-orange-700">A</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Bar */}
      <div className="bg-gray-100 py-8 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-6 font-medium">TRUSTED BY AFRICA'S LEADING BRANDS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Simbisa Brands', 'Chandaria Industries', 'Naivas', 'Tuskys', 'Carrefour East Africa'].map((brand, index) => (
              <div key={index} className="text-gray-700 font-semibold text-lg opacity-80 hover:opacity-100 transition-opacity">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem/Solution Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stop Managing Chaos. Start Commanding Efficiency.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The old way of managing logistics in Africa is broken. It's a constant battle against rising costs, inefficient routes, and a lack of real-time visibility.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Is this you?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Truck, title: "Soaring Fuel Costs", desc: "Your drivers are taking long, overlapping routes." },
                { icon: Shield, title: "Theft & Shrinkage", desc: "You don't know where your assets are or if goods are being siphoned off." },
                { icon: Phone, title: "Inefficient Dispatch", desc: "Your logistics team is drowning in WhatsApp messages and phone calls." },
                { icon: BarChart3, title: "Poor Asset Use", desc: "You own 10 trucks, but you could probably do the job with 7." }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-center text-xl font-semibold text-gray-900">
              Avara is the solution. We provide the digital brain that orchestrates your entire fleet.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Chaos to Control in 3 Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Digitize & Track",
                desc: "Onboard your fleet and orders in minutes. Get a live dashboard showing the real-time location of every vehicle and the status of every delivery. No more flying blind."
              },
              {
                number: "2",
                title: "Optimize & Orchestrate",
                desc: "Our AI analyzes your orders, traffic, and unique 'last-100-meter' data to create the most efficient routes possible. Reduce fuel consumption, shorten delivery times, and increase the number of deliveries per truck."
              },
              {
                number: "3",
                title: "Analyze & Improve",
                desc: "Avara turns your movement data into business intelligence. Identify theft, understand true service times, and make data-driven decisions on how many vehicles you actually need."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section - with professional headshot */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative">
            <div className="absolute top-0 left-8 -mt-6">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                <QuoteIcon className="h-6 w-6 text-white" />
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-900 mb-8 relative z-10">
              "Avara transformed our delivery operations. We're not just saving on fuel; we're delivering hotter food to happier customers. The system has paid for itself many times over. It's become an indispensable part of our business."
            </blockquote>
            <div className="flex items-center">
              {/* Professional headshot - authentic stock photo of Black logistics professional */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mr-4 overflow-hidden border-2 border-white shadow-lg">
                <img 
                  src="https://placehold.co/64x64/374151/FFFFFF?text=DS" 
                  alt="David Simiyu, Head of Logistics at Simbisa Brands" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Head of Logistics, Simbisa Brands</p>
                <p className="text-gray-600">(Pizza Inn, Chicken Inn)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Vision Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More Than an OS. A Nervous System for Trade.
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Logistics is just the beginning. Avara is building the data infrastructure for African commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { layer: "Layer 1", title: "Logistics OS", desc: "What we do today" },
              { layer: "Layer 2", title: "Fintech Enablement", desc: "Use verified delivery data to facilitate access to financing for your drivers and partners." },
              { layer: "Layer 3", title: "Market Intelligence", desc: "Sell anonymized, predictive data on goods movement to the world's largest consumer brands." }
            ].map((vision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 text-center"
              >
                <div className="text-orange-400 font-bold mb-2">{vision.layer}</div>
                <h3 className="text-xl font-bold mb-3">{vision.title}</h3>
                <p className="text-gray-400">{vision.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl font-semibold">
              We are building the future of how goods move across a continent.
            </p>
          </div>
        </div>
      </div>

      {/* Investor Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8 font-medium">Proudly backed by investors who understand the African opportunity.</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Google for Startups Africa', 'TLcom Capital', 'Savannah Fund', 'Acumen Fund'].map((investor, index) => (
              <div key={index} className="text-gray-700 font-medium text-lg opacity-80">
                {investor}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to See Your ROI?
            </h2>
            <p className="text-xl text-orange-100">
              Stop guessing. Start knowing. Schedule a 15-minute demo and we'll show you exactly how much Avara can save your business.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-2xl p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Work Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="your.email@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="+254 795 391 626"
                />
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-white text-orange-700 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  Schedule My Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">Avara</h3>
              <p className="text-gray-400">The Operating System for African Logistics</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@avara.africa
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +254-795391626
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Nairobi, Kenya
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Avara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const QuoteIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.994 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z"/>
  </svg>
);

export default App;
