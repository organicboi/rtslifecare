'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Search, 
  ShoppingBag, 
  User, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Star, 
  ShieldCheck, 
  Clock, 
  Truck,
  Activity,
  Heart,
  Thermometer,
  Droplets,
  Microscope,
  ArrowRight,
  Leaf,
  Shield
} from 'lucide-react';

const RTSLifecareV8 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextHeroSlide = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % products.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const categories = [
    { name: "Women's Health", icon: <Heart className="w-6 h-6" />, color: "bg-rose-100 text-rose-600" },
    { name: "Sexual Wellness", icon: <Activity className="w-6 h-6" />, color: "bg-purple-100 text-purple-600" },
    { name: "General Health", icon: <Thermometer className="w-6 h-6" />, color: "bg-blue-100 text-blue-600" },
    { name: "Lab Tests", icon: <Microscope className="w-6 h-6" />, color: "bg-teal-100 text-teal-600" },
    { name: "Supplements", icon: <Droplets className="w-6 h-6" />, color: "bg-amber-100 text-amber-600" },
  ];

  const products = [
    {
      id: 1,
      name: "Sampoorna Kit",
      description: "Comprehensive Vaginal Inflammation Test",
      price: 120,
      rating: 4.9,
      reviews: 856,
      image: "/product-images/Adobe Express - file (3).png",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Sanket Analysis",
      description: "14-Parameter Urine Test Strip",
      price: 90,
      rating: 4.7,
      reviews: 432,
      image: "/product-images/Adobe Express - file (4).png",
      badge: "Fast Results"
    },
    {
      id: 3,
      name: "Aarogyam UTI",
      description: "Rapid UTI Detection System",
      price: 80,
      rating: 4.8,
      reviews: 1205,
      image: "/product-images/Adobe Express - file (5).png",
      badge: "Clinically Proven"
    },
    {
      id: 4,
      name: "Jeevan Saliva",
      description: "Non-invasive Saliva Diagnostic",
      price: 150,
      rating: 4.6,
      reviews: 210,
      image: "/product-images/Adobe Express - file (6).png",
      badge: "New"
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* Announcement Bar */}
      <div className="bg-teal-700 text-white text-center py-2 text-xs font-semibold tracking-wide px-4">
        Free Express Shipping on orders over ₹499 • 100% Discreet Packaging
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white border-b border-slate-100 py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 -ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6 text-slate-700" />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Image 
              src="/rts-logo.png" 
              alt="RTS LIFECARE" 
              width={160} 
              height={50} 
              className="h-10 w-auto"
            />
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8 relative">
            <input 
              type="text" 
              placeholder="Search for tests, conditions, or products..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600 px-3 py-2 rounded-full hover:bg-teal-50 transition-colors">
              <User className="w-5 h-5" />
              <span className="hidden lg:inline">Account</span>
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600 px-3 py-2 rounded-full hover:bg-teal-50 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden lg:inline">Cart</span>
              <span className="absolute top-1 right-1 sm:top-0 sm:right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="lg:hidden px-4 pb-2 pt-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-teal-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-slate-900">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}><X className="w-6 h-6 text-slate-500" /></button>
            </div>
            <nav className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Shop By Category</h3>
                {categories.map((cat, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-3 text-slate-700 font-medium py-2">
                    <div className={`p-2 rounded-lg ${cat.color} bg-opacity-20`}>{cat.icon}</div>
                    {cat.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <a href="#" className="block text-slate-600 font-medium">About Us</a>
                <a href="#" className="block text-slate-600 font-medium">Contact Support</a>
                <a href="#" className="block text-slate-600 font-medium">Track Order</a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section - Modern Split with Product Carousel */}
      <section className="bg-[#F0F9F9] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-24 lg:pb-24 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-6 border border-teal-100">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wide">New: Saliva Testing Kit</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
              Healthcare designed for <span className="text-teal-600">real life.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Clinical-grade diagnostics delivered to your door. Get accurate results in minutes, not days. No appointments needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-200 hover:shadow-teal-300 transform hover:-translate-y-1">
                Shop All Tests
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                How it Works <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600" /> FDA Approved
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-teal-600" /> Free Shipping
              </div>
            </div>
          </div>

          {/* Right Content - Product Carousel */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white group">
              
              {/* Carousel Content */}
              <div className="absolute inset-0 transition-all duration-500 ease-in-out">
                <div className="relative h-full w-full p-8 flex flex-col">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">
                      {products[currentHeroIndex].badge}
                    </span>
                  </div>
                  
                  <div className="flex-1 relative my-4">
                    <Image
                      src={products[currentHeroIndex].image}
                      alt={products[currentHeroIndex].name}
                      fill
                      className="object-contain p-4"
                      priority
                    />
                  </div>

                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-bold text-slate-900">{products[currentHeroIndex].name}</h3>
                    <p className="text-slate-500">{products[currentHeroIndex].description}</p>
                    <div className="flex items-center justify-center gap-2 text-amber-400 text-sm font-bold">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-slate-700">{products[currentHeroIndex].rating}</span>
                      <span className="text-slate-400 font-normal">({products[currentHeroIndex].reviews} reviews)</span>
                    </div>
                    <div className="pt-4">
                      <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2">
                        Buy Now - ₹{products[currentHeroIndex].price} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button 
                onClick={prevHeroSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-md flex items-center justify-center text-slate-700 hover:bg-white hover:text-teal-600 transition-all z-20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextHeroSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full shadow-md flex items-center justify-center text-slate-700 hover:bg-white hover:text-teal-600 transition-all z-20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {products.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHeroIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentHeroIndex ? 'bg-teal-600 w-4' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, idx) => (
              <a key={idx} href="#" className="group flex flex-col items-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 border border-slate-100 hover:border-teal-100 transition-all duration-300">
                <div className={`w-14 h-14 rounded-full ${cat.color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <span className="font-semibold text-slate-700 group-hover:text-teal-700 text-center">{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Card Style */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Trending Solutions</h2>
              <p className="text-slate-500">Most popular diagnostic kits this week.</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-teal-600 font-bold hover:text-teal-700">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
                <div className="relative aspect-square bg-[#F8F8F8] rounded-xl mb-4 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-md shadow-sm text-slate-800">
                    {product.badge}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-slate-700">{product.rating}</span>
                    <span className="text-slate-400 font-normal">({product.reviews})</span>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 text-lg">{product.name}</h3>
                  <p className="text-sm text-slate-500 line-clamp-1">{product.description}</p>
                  
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-xl font-bold text-slate-900">₹{product.price}</span>
                    <button className="bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button className="w-full bg-white border border-slate-300 py-3 rounded-xl font-bold text-slate-700">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* How it Works - Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple. Fast. Accurate.</h2>
            <p className="text-slate-600">We've simplified the diagnostic process so you can focus on getting better, faster.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

            {[
              { title: "Order Online", desc: "Choose your test kit and get it delivered discreetly to your doorstep.", icon: "1" },
              { title: "Collect Sample", desc: "Follow the simple instructions to collect your sample in minutes.", icon: "2" },
              { title: "Get Results", desc: "View your accurate, physician-reviewed results online instantly.", icon: "3" }
            ].map((step, idx) => (
              <div key={idx} className="text-center bg-white p-4">
                <div className="w-24 h-24 mx-auto bg-teal-50 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-lg">
                  <span className="text-3xl font-bold text-teal-600">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/Banner Section */}
      <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take control of your health today.</h2>
          <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of customers who trust RTS Lifecare for their diagnostic needs. 
            Professional care, from the comfort of home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-900 px-8 py-4 rounded-xl font-bold hover:bg-teal-50 transition-colors">
              Get Started
            </button>
            <button className="bg-transparent border border-teal-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-800 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* FDA Approved */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-slate-100">
                <ShieldCheck className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">FDA Approved</h3>
              <p className="text-slate-600 leading-relaxed">
                Our products stands as a testament to our commitment to quality, safety, and efficacy. 
                This assessment ensures that our products meet the highest standards of safety.
              </p>
            </div>

            {/* Dermatologically Tested */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-slate-100">
                <Droplets className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Dermatologically Tested</h3>
              <p className="text-slate-600 leading-relaxed">
                Our products have undergone rigorous testing by dermatologists to ensure they are safe 
                and suitable for use on skin, helping you feel confident and cared for.
              </p>
            </div>

            {/* Certified Plastic Neutral */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-slate-100">
                <Leaf className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Certified Plastic Neutral</h3>
              <p className="text-slate-600 leading-relaxed">
                Ensuring every ounce of plastic used is responsibly offset, making a positive impact 
                on the environment by removing or recycling an equivalent amount of plastic waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Image 
                  src="/rts-logo.png" 
                  alt="RTS LIFECARE" 
                  width={160} 
                  height={50} 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                Empowering you with accessible, accurate, and affordable healthcare solutions. 
                Because knowing is the first step to healing.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 hover:text-teal-600 hover:shadow-md transition-all cursor-pointer">
                    <div className="w-4 h-4 bg-current rounded-sm opacity-50"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Shop</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-teal-600">All Tests</a></li>
                <li><a href="#" className="hover:text-teal-600">Women's Health</a></li>
                <li><a href="#" className="hover:text-teal-600">Men's Health</a></li>
                <li><a href="#" className="hover:text-teal-600">Sexual Health</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-teal-600">Help Center</a></li>
                <li><a href="#" className="hover:text-teal-600">Order Status</a></li>
                <li><a href="#" className="hover:text-teal-600">Returns</a></li>
                <li><a href="#" className="hover:text-teal-600">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-teal-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-teal-600">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-teal-600">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">© 2025 RTS Lifecare Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
               <span className="text-xs text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">VISA</span>
               <span className="text-xs text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">Mastercard</span>
               <span className="text-xs text-slate-400 bg-white px-2 py-1 rounded border border-slate-200">UPI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RTSLifecareV8;
