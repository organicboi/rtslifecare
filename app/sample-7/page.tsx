'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  Check, 
  Plus,
  Minus,
  Heart,
  Search,
  User
} from 'lucide-react';

const RTSLifecareV7 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('bestsellers');

  const products = [
    {
      id: 1,
      name: "Sampoorna Kit",
      tagline: "Vaginal Inflammation Test",
      price: 120,
      image: "/product-images/Adobe Express - file (3).png",
      color: "bg-rose-50"
    },
    {
      id: 2,
      name: "Sanket Kit",
      tagline: "Urine 14 Parameters",
      price: 90,
      image: "/product-images/Adobe Express - file (4).png",
      color: "bg-amber-50"
    },
    {
      id: 3,
      name: "Aarogyam Kit",
      tagline: "UTI Self-Testing",
      price: 80,
      image: "/product-images/Adobe Express - file (5).png",
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="font-sans text-stone-900 bg-[#FAFAF9]">
      
      {/* Top Banner */}
      <div className="bg-stone-900 text-[#FAFAF9] text-center py-3 text-xs uppercase tracking-widest font-medium">
        Complimentary shipping on orders over ₹499
      </div>

      {/* Navigation - Minimal & Centered */}
      <nav className="sticky top-0 z-40 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Mobile Menu Trigger */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Left Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-stone-600 transition-colors">Shop</a>
            <a href="#" className="text-sm font-medium hover:text-stone-600 transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-stone-600 transition-colors">Science</a>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="font-serif text-2xl font-bold tracking-tight">RTS LIFECARE</span>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6">
            <button className="hidden lg:block hover:text-stone-600"><Search className="w-5 h-5" /></button>
            <button className="hidden lg:block hover:text-stone-600"><User className="w-5 h-5" /></button>
            <button className="relative hover:text-stone-600">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-stone-900 rounded-full"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF9] via-[#FAFAF9]/50 to-transparent z-10"></div>
          <Image
            src="/product-images/Adobe Express - file (9).png"
            alt="Lifestyle"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-xl">
            <span className="inline-block py-1 px-3 border border-stone-900 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              New Standard in Care
            </span>
            <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] mb-8 text-stone-900">
              Healthcare, <br/>
              <span className="italic text-stone-500">Simplified.</span>
            </h1>
            <p className="text-lg text-stone-700 mb-10 leading-relaxed max-w-md">
              Professional-grade diagnostics delivered to your doorstep. 
              Empowering you to take control of your health with privacy and precision.
            </p>
            <div className="flex gap-4">
              <button className="bg-stone-900 text-[#FAFAF9] px-8 py-4 rounded-none hover:bg-stone-800 transition-all text-sm font-medium tracking-wide">
                Shop Collection
              </button>
              <button className="bg-transparent border border-stone-900 text-stone-900 px-8 py-4 rounded-none hover:bg-stone-100 transition-all text-sm font-medium tracking-wide">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-stone-200 py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 text-sm font-medium uppercase tracking-widest text-stone-500 flex items-center gap-4">
              <Star className="w-4 h-4 fill-stone-500" /> FDA Approved
              <Star className="w-4 h-4 fill-stone-500" /> ISO Certified
              <Star className="w-4 h-4 fill-stone-500" /> Clinically Tested
            </span>
          ))}
        </div>
      </div>

      {/* Featured Product - Split Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative bg-[#F5F5F4] aspect-square flex items-center justify-center p-12">
              <div className="absolute inset-0 border border-stone-100 m-4"></div>
              <Image
                src="/product-images/Adobe Express - file (3).png"
                alt="Sampoorna Kit"
                width={600}
                height={600}
                className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-stone-500">Best Seller</h3>
                <h2 className="font-serif text-4xl lg:text-5xl text-stone-900">Sampoorna Kit</h2>
                <p className="text-xl font-medium text-stone-900">₹120.00</p>
              </div>

              <div className="prose prose-stone text-stone-600">
                <p>
                  The Sampoorna Vaginal Inflammation Self-Testing Kit is designed for the modern woman. 
                  Quick, accurate, and discreet, it helps you understand your body better without the 
                  hassle of clinic visits.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-700" />
                  </div>
                  <span className="text-sm font-medium">Results in 15 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-700" />
                  </div>
                  <span className="text-sm font-medium">99% Accuracy Rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-700" />
                  </div>
                  <span className="text-sm font-medium">Easy to use at home</span>
                </div>
              </div>

              <button className="w-full bg-stone-900 text-white py-4 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                Add to Cart <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category - Tabbed Interface */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl mb-4">Curated for You</h2>
            <div className="flex justify-center gap-8 border-b border-stone-200 inline-flex mx-auto">
              {['bestsellers', 'new-arrivals', 'bundles'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-medium uppercase tracking-wider transition-all ${
                    activeTab === tab 
                      ? 'border-b-2 border-stone-900 text-stone-900' 
                      : 'text-stone-400 hover:text-stone-600'
                  }`}
                >
                  {tab.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className={`relative aspect-[4/5] ${product.color} mb-6 overflow-hidden`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                  
                  <button className="absolute bottom-0 left-0 right-0 bg-white py-4 text-stone-900 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-stone-100">
                    Quick Add — ₹{product.price}
                  </button>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl text-stone-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-stone-500">{product.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props - Icon Grid */}
      <section className="py-24 bg-stone-900 text-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-stone-700 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg">Premium Quality</h4>
              <p className="text-sm text-stone-400 leading-relaxed">Manufactured in world-class facilities with strict quality control.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-stone-700 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg">Care First</h4>
              <p className="text-sm text-stone-400 leading-relaxed">Designed with empathy and understanding of patient needs.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-stone-700 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg">Certified Safe</h4>
              <p className="text-sm text-stone-400 leading-relaxed">All products are FDA approved and clinically validated.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 mx-auto border border-stone-700 rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg">Expert Support</h4>
              <p className="text-sm text-stone-400 leading-relaxed">Access to medical professionals for guidance and advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Clean & Simple */}
      <footer className="bg-white pt-20 pb-10 border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
              <span className="font-serif text-2xl font-bold tracking-tight block mb-6">RTS LIFECARE</span>
              <p className="text-stone-500 mb-8 leading-relaxed">
                Redefining the future of personal diagnostics. 
                Join us in our mission to make healthcare accessible to all.
              </p>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-[#FAFAF9] border-b border-stone-300 px-0 py-2 w-full focus:outline-none focus:border-stone-900 transition-colors"
                />
                <button className="text-sm font-bold uppercase tracking-wider hover:text-stone-600">Join</button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h5>
                <ul className="space-y-4 text-sm text-stone-500">
                  <li><a href="#" className="hover:text-stone-900">All Products</a></li>
                  <li><a href="#" className="hover:text-stone-900">Kits</a></li>
                  <li><a href="#" className="hover:text-stone-900">Refills</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h5>
                <ul className="space-y-4 text-sm text-stone-500">
                  <li><a href="#" className="hover:text-stone-900">Our Story</a></li>
                  <li><a href="#" className="hover:text-stone-900">Sustainability</a></li>
                  <li><a href="#" className="hover:text-stone-900">Careers</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-sm uppercase tracking-widest mb-6">Help</h5>
                <ul className="space-y-4 text-sm text-stone-500">
                  <li><a href="#" className="hover:text-stone-900">FAQ</a></li>
                  <li><a href="#" className="hover:text-stone-900">Shipping</a></li>
                  <li><a href="#" className="hover:text-stone-900">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 text-xs text-stone-400 uppercase tracking-wider">
            <p>© 2025 RTS Lifecare. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-stone-600">Privacy</a>
              <a href="#" className="hover:text-stone-600">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RTSLifecareV7;
