'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Search, 
  User, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Activity,
  Heart,
  Truck,
  Clock,
  Microscope,
  PlayCircle
} from 'lucide-react';

const RTSLifecareV5 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "Sampoorna Vaginal Kit",
      description: "Complete care for intimate health.",
      price: 120,
      image: "/product-images/Adobe Express - file (3).png",
      category: "Women's Care",
      rating: 4.9
    },
    {
      id: 2,
      name: "Sanket Urine Analysis",
      description: "14-parameter comprehensive test.",
      price: 90,
      image: "/product-images/Adobe Express - file (4).png",
      category: "Diagnostic",
      rating: 4.7
    },
    {
      id: 3,
      name: "Aarogyam UTI Test",
      description: "Quick & accurate UTI detection.",
      price: 80,
      image: "/product-images/Adobe Express - file (5).png",
      category: "UTI Care",
      rating: 4.8
    },
    {
      id: 4,
      name: "Jeevan Chetna Saliva",
      description: "Non-invasive health monitoring.",
      price: 150,
      image: "/product-images/Adobe Express - file (6).png",
      category: "Wellness",
      rating: 4.6
    }
  ];

  const categories = ['All', "Women's Care", 'Diagnostic', 'UTI Care', 'Wellness'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-teal-100 selection:text-teal-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-teal-200">R</div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>RTS Lifecare</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Shop', 'Science', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:block text-slate-600 hover:text-teal-600"><Search className="w-5 h-5" /></button>
            <button className="relative group">
              <ShoppingBag className="w-5 h-5 text-slate-900 group-hover:text-teal-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-in slide-in-from-top-10 duration-300">
          <div className="flex flex-col space-y-6 text-2xl font-light">
            <a href="#" className="border-b border-slate-100 pb-4">Shop All</a>
            <a href="#" className="border-b border-slate-100 pb-4">Our Science</a>
            <a href="#" className="border-b border-slate-100 pb-4">About Us</a>
            <a href="#" className="text-teal-600">My Account</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F8FAFC]">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-bl from-teal-50 to-transparent -z-10 rounded-bl-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-tr from-blue-50 to-transparent -z-10 rounded-tr-[100px]" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wide uppercase text-slate-500">The Future of Diagnostics</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
              Lab-Grade Accuracy. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-blue-600">Home Comfort.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Experience the new standard in self-care with our clinically validated rapid test kits. Private, precise, and instant.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2">
                Shop Collection <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center gap-2">
                <PlayCircle className="w-4 h-4" /> How it Works
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-slate-200/60">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-500 font-medium">Trusted by 10,000+ Families</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
            <div className="relative w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] z-10">
              <div className="absolute inset-0 bg-teal-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <Image
                src="/product-images/Adobe Express - file (3).png"
                alt="Hero Product"
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Floating Cards */}
              <div className="absolute -right-4 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-bounce duration-3000">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Accuracy Rate</p>
                    <p className="text-sm font-bold text-slate-900">99.9%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-bounce duration-4000">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Result Time</p>
                    <p className="text-sm font-bold text-slate-900">2 Minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-10 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "FDA Approved", desc: "Certified Safety" },
            { icon: Truck, title: "Free Shipping", desc: "On orders over ₹499" },
            { icon: Microscope, title: "Lab Tested", desc: "Clinical Precision" },
            { icon: Activity, title: "24/7 Support", desc: "Expert Guidance" },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 justify-center md:justify-start group cursor-pointer">
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-teal-50 transition-colors">
                <feature.icon className="w-6 h-6 text-slate-900 group-hover:text-teal-600 transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{feature.title}</h3>
                <p className="text-xs text-slate-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Collection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Curated for Your Health</h2>
              <p className="text-slate-500 max-w-lg">Explore our range of scientifically designed self-testing kits that bring the laboratory to your living room.</p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-3xl p-4 hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
                <div className="relative h-64 bg-[#F8FAFC] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:text-red-500">
                    <Heart className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white/90 backdrop-blur text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-slate-900 hover:text-white transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-bold text-teal-600 uppercase tracking-wider">{product.category}</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs font-medium text-slate-400">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">{product.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-bold text-slate-900">₹{product.price}</span>
                    <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Feature Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Why wait for an appointment?
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Traditional diagnostics are slow and inconvenient. RTS Lifecare puts the power back in your hands with technology that simplifies complex medical testing into a 2-minute routine.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Privacy First", desc: "Test in the comfort of your own home." },
                  { title: "Instant Results", desc: "No waiting days for lab reports." },
                  { title: "Clinical Accuracy", desc: "Benchmarked against gold-standard labs." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm p-8">
                 {/* Abstract UI Representation */}
                 <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent"></div>
                 <div className="h-full w-full flex flex-col justify-center items-center text-center">
                    <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-teal-500/50 animate-pulse">
                      <Activity className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Result Ready</h3>
                    <p className="text-teal-300 font-mono text-lg">Negative / Normal</p>
                    <div className="mt-8 w-full max-w-xs bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-teal-500 rounded-full"></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">Analysis Complete</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Footer Minimal */}
      <footer className="bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-teal-50 rounded-[3rem] p-12 lg:p-20 text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Join the Wellness Movement</h2>
            <p className="text-slate-600 mb-10 max-w-2xl mx-auto">Subscribe to our newsletter for health tips, new product launches, and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
              />
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-teal-600 transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-slate-100 pt-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">R</div>
                <span className="font-bold text-lg">RTS Lifecare</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Empowering individuals with accessible, accurate, and affordable diagnostic solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Shop</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-teal-600">All Products</a></li>
                <li><a href="#" className="hover:text-teal-600">Best Sellers</a></li>
                <li><a href="#" className="hover:text-teal-600">New Arrivals</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-teal-600">About Us</a></li>
                <li><a href="#" className="hover:text-teal-600">Careers</a></li>
                <li><a href="#" className="hover:text-teal-600">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-teal-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-teal-600">Shipping Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 text-center text-sm text-slate-400">
            © 2025 RTS Lifecare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RTSLifecareV5;
