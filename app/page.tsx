'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart, Menu, X, Phone, Mail, MapPin, ArrowRight, Check, Play } from 'lucide-react';

const RTSLifecare = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "Sampoorna - Vaginal Inflammation Self-Testing Kit",
      price: 120,
      image: "https://www.rtslifecare.com/uploads/products/845353866UrssSampoorna Front.jpeg"
    },
    {
      id: 2,
      name: "Sanket - Urine 14 Parameters Self-Testing Kit",
      price: 90,
      image: "https://www.rtslifecare.com/uploads/products/193377892UrsSanket Front.jpeg"
    },
    {
      id: 3,
      name: "Aarogyam - Urinary Tract Infection (UTI) Self-Testing Kit",
      price: 80,
      image: "https://www.rtslifecare.com/uploads/products/880120251Aarogyam Front.jpeg"
    },
    {
      id: 4,
      name: "Jeevan Chetna - Saliva Self-Testing Kit",
      price: 150,
      image: "https://www.rtslifecare.com/uploads/products/1817776366Jeevan Chetna Front.jpeg"
    },
    {
      id: 5,
      name: "UrsSakhi - Bacterial Vaginosis Self-Testing Kit",
      price: 120,
      image: "https://www.rtslifecare.com/uploads/products/2000109198Urssakhi Front.jpg"
    }
  ];

  const features = [
    "ISO 9001:2015 Certified Excellence",
    "Advanced Laboratory Development",
    "Research-Backed Testing Solutions",
    "Professional Healthcare Team",
    "State-of-the-Art Technology"
  ];

  const services = [
    {
      title: "Diagnostic Testing",
      description: "Professional-grade self-testing solutions with clinical accuracy for home use.",
      icon: "🔬"
    },
    {
      title: "Women's Health",
      description: "Specialized testing kits for vaginal health and menstrual hygiene management.",
      icon: "🏥"
    },
    {
      title: "Urinary Analysis",
      description: "Comprehensive urine testing for early detection and monitoring of health conditions.",
      icon: "💧"
    },
    {
      title: "Health Education",
      description: "Creating awareness through community programs and professional healthcare guidance.",
      icon: "📚"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Healthcare Professional",
      text: "RTS Lifecare's testing kits meet professional standards. Accurate, reliable, and easy to use.",
      rating: 5
    },
    {
      name: "Kavita Mehta",
      role: "Verified Customer",
      text: "The testing kit was straightforward to use and provided clear results. Highly recommend.",
      rating: 5
    },
    {
      name: "Anusha Vanga",
      role: "Verified Customer",
      text: "Following the instructions gave accurate results. Professional quality product.",
      rating: 5
    }
  ];

  const activities = [
    {
      title: "Partnership with Family Planning Association of India",
      location: "Bhopal Office",
      image: "https://www.rtslifecare.com/assets/img/act1.png"
    },
    {
      title: "Educational Seminars in Schools",
      location: "FPAI Counselors, Bhopal",
      image: "https://www.rtslifecare.com/assets/img/act2.png"
    },
    {
      title: "Women's Health Awareness Program",
      location: "Community Outreach, Bhopal",
      image: "https://www.rtslifecare.com/assets/img/act3.png"
    }
  ];

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/rts-logo.png" 
                  alt="RTS LIFECARE" 
                  width={180} 
                  height={60} 
                  className="h-12 w-auto"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#activities" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Activities</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
              <a href="/sample-2" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">New Design ✨</a>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all">
                Login
              </button>
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#products" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Products</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#activities" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Activities</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <a href="/sample-2" className="block py-2 text-green-600 hover:text-green-700 font-medium">New Design ✨</a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Check className="w-4 h-4 mr-2" />
                ISO 9001:2015 Certified
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Professional Healthcare Testing Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Leading provider of ISO-certified self-testing kits and diagnostic solutions. 
                Committed to advancing healthcare accessibility through innovation and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#products" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all">
                  View Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
                  Contact Us
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Trust Indicators</span>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">ISO Certification</span>
                    <span className="text-2xl font-bold text-blue-600">9001:2015</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Operating Cities</span>
                    <span className="text-2xl font-bold text-blue-600">2+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Product Range</span>
                    <span className="text-2xl font-bold text-blue-600">5+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Quality Assurance</span>
                    <span className="text-2xl font-bold text-blue-600">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">ISO 9001</div>
              <div className="text-gray-600 font-medium">Certified Standards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600 font-medium">Operating Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Testing Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Quality Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Clinical-Grade Testing Kits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional diagnostic solutions designed for accuracy, reliability, and ease of use in home healthcare settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden bg-gray-100 h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight min-h-[3rem]">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About RTS Lifecare
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excellence in Healthcare Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                RTS Lifecare India Pvt. Ltd. is an ISO 9001:2015 certified organization operating from Mumbai and Bhopal. 
                We are committed to advancing healthcare through professional-grade diagnostic solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of healthcare professionals and researchers work diligently to develop testing solutions 
                that meet international quality standards while remaining accessible to communities across India.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="ml-3 text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            
            <div className="relative">
              <img 
                src="https://www.rtslifecare.com/assets/img/online-network.jpg" 
                alt="RTS Lifecare Team"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">ISO 9001</div>
                    <div className="text-sm text-gray-600">Certified Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering professional healthcare services with a focus on quality, accessibility, and patient education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Company Overview
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover RTS Lifecare
            </h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              className="w-full h-64 md:h-96 lg:h-[600px]"
              src="https://www.youtube.com/embed/-B0H4jbNuls" 
              title="RTS Lifecare Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Community Engagement
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Healthcare Outreach Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contributing to community health through education, awareness programs, and partnerships with healthcare organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600">{activity.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Customer Feedback
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real experiences from healthcare professionals and verified customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-6">
              <Mail className="w-8 h-8 text-blue-300" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get In <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Have questions about our products or services? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/20 outline-none transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>
                  <div className="relative group">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/20 outline-none transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/20 outline-none transition-all duration-300 backdrop-blur-sm"
                  />
                </div>
                <div className="relative group">
                  <textarea 
                    rows={5} 
                    placeholder="Your Message" 
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:bg-white/20 outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                      <p className="text-blue-200">+91-755-4052071</p>
                      <p className="text-blue-200">+91-9893789999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                      <p className="text-blue-200">info@rtslifecare.com</p>
                      <p className="text-blue-200">sales@rtslifecare.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                      <p className="text-blue-200 leading-relaxed">
                        Mumbai & Bhopal<br />
                        Maharashtra & Madhya Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-200 text-sm">Support Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-white mb-2">&lt;2hr</div>
                  <div className="text-blue-200 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <Image 
                  src="/rts-logo.png" 
                  alt="RTS LIFECARE" 
                  width={160} 
                  height={53} 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                ISO 9001:2015 Certified Healthcare Solutions
              </p>
              <p className="text-gray-400 text-sm">
                Professional diagnostic testing solutions for better health outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition-colors">Products</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Testing Kits</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Diagnostic Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Healthcare Products</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+91 7049666222</span>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">rtslifecare@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">A-11, First Floor, Adhish Industries, J.K. Road, Govindpura, Bhopal (M.P.) 462023</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 RTS Lifecare India Pvt. Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RTSLifecare;