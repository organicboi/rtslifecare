'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Search,
  User,
  ChevronRight,
  ChevronLeft,
  Star,
  Shield,
  Check,
  Award,
  Heart,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';

const RTSLifecareV3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "Hygiene is the new Luxury",
      subtitle: "Discover our range of premium self-testing kits.",
      image: "/product-images/Adobe Express - file (3).png", // Placeholder, would ideally be a wide banner
      bgColor: "bg-[#E6F4F1]" // Minty background similar to Pee Safe
    },
    {
      id: 2,
      title: "Women's Health Matters",
      subtitle: "Take control with our accurate diagnostic solutions.",
      image: "/product-images/Adobe Express - file (7).png",
      bgColor: "bg-[#FFF5F5]" // Soft pink
    }
  ];

  const nextSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const products = [
    {
      id: 1,
      name: "Sampoorna - Vaginal Inflammation Self-Testing Kit",
      shortName: "Sampoorna Kit",
      price: 120,
      originalPrice: 150,
      image: "/product-images/Adobe Express - file (3).png",
      rating: 4.8,
      reviews: 124,
      tag: "Bestseller"
    },
    {
      id: 2,
      name: "Sanket - Urine 14 Parameters Self-Testing Kit",
      shortName: "Sanket Kit",
      price: 90,
      originalPrice: 110,
      image: "/product-images/Adobe Express - file (4).png",
      rating: 4.6,
      reviews: 89,
      tag: "New"
    },
    {
      id: 3,
      name: "Aarogyam - UTI Self-Testing Kit",
      shortName: "Aarogyam Kit",
      price: 80,
      originalPrice: 100,
      image: "/product-images/Adobe Express - file (5).png",
      rating: 4.9,
      reviews: 256,
      tag: "Trending"
    },
    {
      id: 4,
      name: "Jeevan Chetna - Saliva Self-Testing Kit",
      shortName: "Jeevan Chetna",
      price: 150,
      originalPrice: 180,
      image: "/product-images/Adobe Express - file (6).png",
      rating: 4.7,
      reviews: 67,
      tag: ""
    }
  ];

  const categories = [
    { name: "Women's Care", image: "/product-images/Adobe Express - file (7).png" },
    { name: "Diagnostic", image: "/product-images/Adobe Express - file (4).png" },
    { name: "UTI Care", image: "/product-images/Adobe Express - file (5).png" },
    { name: "Wellness", image: "/product-images/Adobe Express - file (8).png" },
    { name: "Combos", image: "/product-images/Adobe Express - file (3).png" },
    { name: "New Arrivals", image: "/product-images/Adobe Express - file (6).png" },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#2A2A2A] text-white text-center py-2.5 text-xs tracking-wide font-medium uppercase">
        Free Shipping on Orders Above ₹499 | Use Code: RTSNEW
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu & Search */}
            <div className="flex items-center lg:hidden gap-4">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="w-6 h-6" />
              </button>
              <Search className="w-5 h-5" />
            </div>

            {/* Logo */}
            <div className="shrink-0 flex items-center justify-center lg:justify-start w-full lg:w-auto">
              <a href="/" className="flex items-center">
                <Image 
                  src="/rts-logo.png" 
                  alt="RTS LIFECARE" 
                  width={160} 
                  height={50} 
                  className="h-10 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-sm font-semibold hover:text-blue-600 uppercase tracking-wide">Shop All</a>
              <a href="#" className="text-sm font-semibold hover:text-blue-600 uppercase tracking-wide">Bestsellers</a>
              <a href="#" className="text-sm font-semibold hover:text-blue-600 uppercase tracking-wide">New Arrivals</a>
              <a href="#" className="text-sm font-semibold hover:text-blue-600 uppercase tracking-wide">Combos</a>
              <a href="#" className="text-sm font-semibold hover:text-blue-600 uppercase tracking-wide text-red-500">Sale</a>
            </div>

            {/* Right Icons */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="hover:text-blue-600 transition-colors"><Search className="w-5 h-5" /></button>
              <button className="hover:text-blue-600 transition-colors"><User className="w-5 h-5" /></button>
              <button className="hover:text-blue-600 transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
              </button>
            </div>
            
            {/* Mobile Cart */}
            <div className="flex lg:hidden">
              <ShoppingCart className="w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
            } ${slide.bgColor}`}
          >
            <div className="max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center md:justify-between">
              <div className="md:w-1/2 text-center md:text-left z-10 pt-10 md:pt-0">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                  {slide.subtitle}
                </p>
                <button className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
                  Shop Now
                </button>
              </div>
              <div className="md:w-1/2 h-full relative flex items-center justify-center mt-8 md:mt-0">
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md transition-all z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Shop by Category (Circular) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Shop by Category</h3>
          <div className="flex overflow-x-auto gap-8 pb-4 justify-start md:justify-center scrollbar-hide">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[100px] cursor-pointer group">
                <div className="w-24 h-24 rounded-full bg-gray-100 mb-3 overflow-hidden border-2 border-transparent group-hover:border-blue-200 transition-all">
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    width={96} 
                    height={96} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Sellers This Month</h2>
              <p className="text-gray-500">Most loved by our customers</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-blue-600 font-semibold hover:underline">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300 group relative border border-gray-100">
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10 uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:text-red-500">
                  <Heart className="w-4 h-4" />
                </button>
                
                <div className="relative h-48 mb-4 bg-gray-50 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2 h-10">
                    {product.shortName}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">₹{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                    <span className="text-xs text-green-600 font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>

                  <button className="w-full bg-white border-2 border-gray-900 text-gray-900 py-2 rounded-full font-bold text-sm hover:bg-gray-900 hover:text-white transition-colors mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button className="bg-white border border-gray-300 px-6 py-2 rounded-full text-sm font-semibold">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Feature/Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-blue-50 rounded-3xl overflow-hidden">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image
                src="/product-images/Adobe Express - file (9).png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-16">
              <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Health, <br/>One Test at a Time
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                We believe that accurate diagnostics should be accessible to everyone. 
                Our ISO-certified kits bring the laboratory to your home, ensuring 
                privacy, speed, and clinical precision.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Read Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-2">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900">FDA Approved</h4>
              <p className="text-sm text-gray-500">Highest safety standards</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900">Clinically Tested</h4>
              <p className="text-sm text-gray-500">Proven accuracy</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-2">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900">ISO Certified</h4>
              <p className="text-sm text-gray-500">Quality management</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-2">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-gray-900">Made with Love</h4>
              <p className="text-sm text-gray-500">For your well-being</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#2A2A2A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the RTS Family</h2>
          <p className="text-gray-400 mb-8">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Image 
                src="/rts-logo.png" 
                alt="RTS LIFECARE" 
                width={140} 
                height={45} 
                className="h-10 w-auto mb-6"
              />
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                RTS Lifecare is dedicated to providing high-quality, accessible diagnostic solutions for everyone.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-600"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-600"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-600"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Shop</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-600">All Products</a></li>
                <li><a href="#" className="hover:text-blue-600">Bestsellers</a></li>
                <li><a href="#" className="hover:text-blue-600">New Arrivals</a></li>
                <li><a href="#" className="hover:text-blue-600">Combos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Support</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-blue-600">Track Order</a></li>
                <li><a href="#" className="hover:text-blue-600">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-600">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>Email: info@rtslifecare.com</li>
                <li>Phone: +91-755-4052071</li>
                <li>Address: Mumbai & Bhopal, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 RTS Lifecare. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-600">Privacy Policy</a>
              <a href="#" className="hover:text-gray-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RTSLifecareV3;
