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

const RTSLifecareV4 = () => {
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
      image: "/product-images/Adobe Express - file (3).png", 
      bgColor: "bg-[#E6F4F1]" 
    },
    {
      id: 2,
      title: "Women's Health Matters",
      subtitle: "Take control with our accurate diagnostic solutions.",
      image: "/product-images/Adobe Express - file (7).png",
      bgColor: "bg-[#FFF5F5]" 
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
      <div className="bg-[#2A2A2A] text-white text-center py-2.5 text-xs tracking-wide font-medium uppercase px-4">
        Free Shipping on Orders Above ₹499 | Use Code: RTSNEW
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Mobile Menu & Search */}
            <div className="flex items-center lg:hidden gap-4">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-1">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <Search className="w-5 h-5" />
            </div>

            {/* Logo */}
            <div className="shrink-0 flex items-center justify-center lg:justify-start w-full lg:w-auto absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <a href="/" className="flex items-center">
                <Image 
                  src="/rts-logo.png" 
                  alt="RTS LIFECARE" 
                  width={160} 
                  height={50} 
                  className="h-8 lg:h-10 w-auto"
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
            <div className="flex lg:hidden relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg h-screen z-40 overflow-y-auto pb-20">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#" className="text-lg font-semibold py-2 border-b border-gray-50">Shop All</a>
              <a href="#" className="text-lg font-semibold py-2 border-b border-gray-50">Bestsellers</a>
              <a href="#" className="text-lg font-semibold py-2 border-b border-gray-50">New Arrivals</a>
              <a href="#" className="text-lg font-semibold py-2 border-b border-gray-50">Combos</a>
              <a href="#" className="text-lg font-semibold py-2 border-b border-gray-50 text-red-500">Sale</a>
              <div className="pt-4 flex flex-col gap-4">
                <button className="flex items-center gap-2 text-gray-600 font-medium">
                  <User className="w-5 h-5" /> My Account
                </button>
                <button className="flex items-center gap-2 text-gray-600 font-medium">
                  <Heart className="w-5 h-5" /> Wishlist
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Slider */}
      <section className="relative h-[600px] lg:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
            } ${slide.bgColor}`}
          >
            <div className="max-w-7xl mx-auto px-4 h-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between pb-12 lg:pb-0">
              <div className="w-full lg:w-1/2 text-center lg:text-left z-10 pt-8 lg:pt-0">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight px-4 lg:px-0">
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 px-4 lg:px-0">
                  {slide.subtitle}
                </p>
                <button className="bg-gray-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
                  Shop Now
                </button>
              </div>
              <div className="w-full lg:w-1/2 h-[300px] lg:h-full relative flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative w-[280px] h-[280px] lg:w-[500px] lg:h-[500px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md transition-all z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Dots for mobile */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden z-20">
          {heroSlides.map((_, idx) => (
            <div 
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentHeroSlide ? 'bg-gray-900 w-4' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </section>

      {/* Shop by Category (Circular) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Shop by Category</h3>
          <div className="flex overflow-x-auto gap-6 lg:gap-8 pb-4 px-2 justify-start lg:justify-center scrollbar-hide snap-x">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[90px] lg:min-w-[100px] cursor-pointer group snap-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gray-100 mb-3 overflow-hidden border-2 border-transparent group-hover:border-blue-200 transition-all">
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    width={96} 
                    height={96} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs lg:text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center leading-tight">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
          .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Bestsellers Grid */}
      <section className="py-12 lg:py-16 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-8 lg:mb-10">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Top Sellers This Month</h2>
              <p className="text-sm lg:text-base text-gray-500">Most loved by our customers</p>
            </div>
            <a href="#" className="hidden md:flex items-center text-blue-600 font-semibold hover:underline">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 hover:shadow-xl transition-all duration-300 group relative border border-gray-100">
                {product.tag && (
                  <span className="absolute top-3 left-3 lg:top-4 lg:left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10 uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 lg:top-4 lg:right-4 p-1.5 lg:p-2 bg-white rounded-full shadow-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity z-10 hover:text-red-500">
                  <Heart className="w-4 h-4" />
                </button>
                
                <div className="relative h-36 lg:h-48 mb-3 lg:mb-4 bg-gray-50 rounded-lg lg:rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none lg:pointer-events-auto hidden lg:flex">
                    <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                      Quick View
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5 lg:space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-2.5 h-2.5 lg:w-3 lg:h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-[10px] lg:text-xs text-gray-400">({product.reviews})</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 text-xs lg:text-base line-clamp-2 h-8 lg:h-10 leading-tight">
                    {product.shortName}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-1.5 lg:gap-2">
                    <span className="font-bold text-sm lg:text-lg">₹{product.price}</span>
                    <span className="text-xs lg:text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                    <span className="text-[10px] lg:text-xs text-green-600 font-bold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>

                  <button className="w-full bg-white border border-gray-900 text-gray-900 py-1.5 lg:py-2 rounded-full font-bold text-xs lg:text-sm hover:bg-gray-900 hover:text-white transition-colors mt-1 lg:mt-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button className="bg-white border border-gray-300 px-6 py-2.5 rounded-full text-sm font-semibold w-full">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Feature/Story Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-blue-50 rounded-2xl lg:rounded-3xl overflow-hidden">
            <div className="relative h-[250px] md:h-[500px] w-full">
              <Image
                src="/product-images/Adobe Express - file (9).png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 lg:p-16">
              <span className="text-blue-600 font-bold tracking-wider text-xs lg:text-sm uppercase mb-2 block">Our Mission</span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Empowering Health, <br/>One Test at a Time
              </h2>
              <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-lg">
                We believe that accurate diagnostics should be accessible to everyone. 
                Our ISO-certified kits bring the laboratory to your home, ensuring 
                privacy, speed, and clinical precision.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm lg:text-base">
                  Read Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
              Our Certifications
            </h2>
            <div className="w-16 lg:w-24 h-1 lg:h-1.5 bg-blue-600 mx-auto rounded-full opacity-20"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-50 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                 <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-4">FDA Approved</h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Our products stands as a testament to our commitment to quality, safety, and efficacy. 
                This assessment ensures that our products meet the highest standards of safety.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-green-50 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-green-600 transition-colors duration-300">
                 <Check className="w-6 h-6 lg:w-8 lg:h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-4">Dermatologically Tested</h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Our products have undergone rigorous testing by dermatologists to ensure they are safe 
                and suitable for use on skin, helping you feel confident and cared for.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-purple-50 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                 <Award className="w-6 h-6 lg:w-8 lg:h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-4">Certified Plastic Neutral</h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Ensuring every ounce of plastic used is responsibly offset, making a positive impact 
                on the environment by removing or recycling an equivalent amount of plastic waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 lg:py-20 bg-[#2A2A2A] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Join the RTS Family</h2>
          <p className="text-gray-400 mb-6 lg:mb-8 text-sm lg:text-base">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white text-sm lg:text-base"
            />
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm lg:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-12 lg:pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            <div>
              <Image 
                src="/rts-logo.png" 
                alt="RTS LIFECARE" 
                width={140} 
                height={45} 
                className="h-8 lg:h-10 w-auto mb-6"
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

            <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 lg:mb-6">Shop</h4>
                <ul className="space-y-2 lg:space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-blue-600">All Products</a></li>
                  <li><a href="#" className="hover:text-blue-600">Bestsellers</a></li>
                  <li><a href="#" className="hover:text-blue-600">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-blue-600">Combos</a></li>
                </ul>
              </div>
              
              <div className="md:hidden">
                <h4 className="font-bold text-gray-900 mb-4 lg:mb-6">Support</h4>
                <ul className="space-y-2 lg:space-y-3 text-sm text-gray-500">
                  <li><a href="#" className="hover:text-blue-600">Track Order</a></li>
                  <li><a href="#" className="hover:text-blue-600">Shipping Policy</a></li>
                  <li><a href="#" className="hover:text-blue-600">Returns & Refunds</a></li>
                  <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                </ul>
              </div>
            </div>

            <div className="hidden md:block">
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
              <h4 className="font-bold text-gray-900 mb-4 lg:mb-6">Contact</h4>
              <ul className="space-y-2 lg:space-y-3 text-sm text-gray-500">
                <li>Email: info@rtslifecare.com</li>
                <li>Phone: +91-755-4052071</li>
                <li>Address: Mumbai & Bhopal, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">© 2025 RTS Lifecare. All rights reserved.</p>
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

export default RTSLifecareV4;
