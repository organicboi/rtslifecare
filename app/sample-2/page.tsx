'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Check,
  Search,
  User,
  Shield,
  Award,
  Microscope,
  ArrowRight,
  Star
} from 'lucide-react';

const RTSLifecareV2 = () => {
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
      shortName: "Sampoorna Kit",
      price: 120,
      originalPrice: 150,
      image: "/product-images/Adobe Express - file (3).png",
      category: "Women's Health"
    },
    {
      id: 2,
      name: "Sanket - Urine 14 Parameters Self-Testing Kit",
      shortName: "Sanket Kit",
      price: 90,
      originalPrice: 110,
      image: "/product-images/Adobe Express - file (4).png",
      category: "Diagnostic"
    },
    {
      id: 3,
      name: "Aarogyam - Urinary Tract Infection (UTI) Self-Testing Kit",
      shortName: "Aarogyam Kit",
      price: 80,
      originalPrice: 100,
      image: "/product-images/Adobe Express - file (5).png",
      category: "UTI Care"
    },
    {
      id: 4,
      name: "Jeevan Chetna - Saliva Self-Testing Kit",
      shortName: "Jeevan Chetna Kit",
      price: 150,
      originalPrice: 180,
      image: "/product-images/Adobe Express - file (6).png",
      category: "Diagnostic"
    },
    {
      id: 5,
      name: "UrsSakhi - Bacterial Vaginosis Self-Testing Kit",
      shortName: "UrsSakhi Kit",
      price: 120,
      originalPrice: 140,
      image: "/product-images/Adobe Express - file (7).png",
      category: "Women's Health"
    },
    {
      id: 6,
      name: "Advanced Health Screening Kit",
      shortName: "Health Screening Kit",
      price: 200,
      originalPrice: 250,
      image: "/product-images/Adobe Express - file (8).png",
      category: "Comprehensive"
    }
  ];

  const categories = [
    {
      name: "Women's Health",
      description: "Specialized testing for women's health concerns",
      products: 12
    },
    {
      name: "UTI Testing",
      description: "Urinary tract infection detection kits",
      products: 8
    },
    {
      name: "Diagnostic Kits",
      description: "Comprehensive health screening solutions",
      products: 15
    },
    {
      name: "Saliva Testing",
      description: "Saliva-based diagnostic solutions",
      products: 6
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO 9001:2015 Certified",
      description: "International quality standards compliance"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Laboratory Precision",
      description: "Clinical-grade accuracy in every test"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "FDA Approved",
      description: "Rigorous safety and efficacy standards"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Expert Team",
      description: "Professional healthcare specialists"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Senior Gynecologist",
      hospital: "Apollo Hospitals",
      text: "RTS Lifecare's testing kits meet the highest professional standards. The accuracy and reliability make them invaluable for patient care.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Laboratory Director",
      hospital: "Max Healthcare",
      text: "The precision and ease of use of these testing kits have revolutionized how we approach diagnostic testing in our facility.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Dr. Anita Mehta",
      role: "Women's Health Specialist",
      hospital: "Fortis Healthcare",
      text: "These kits empower women to take control of their health with professional-grade testing at home. Highly recommended.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "99.8%", label: "Accuracy Rate" },
    { number: "15+", label: "Test Categories" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="bg-white">
      {/* Top Announcement Bar */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
        Free shipping on orders above ₹500 | Use code: HEALTH50 for 10% off
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Image 
                  src="/rts-logo.png" 
                  alt="RTS LIFECARE" 
                  width={180} 
                  height={60} 
                  className="h-12 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="#categories" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Account</span>
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#products" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Products</a>
              <a href="#categories" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Categories</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Reviews</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
                  Search Products
                </button>
                <button className="w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium">
                  My Account
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                ISO 9001:2015 Certified Excellence
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                Your Health, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  In Your Hands
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience clinical-grade accuracy from the comfort of your home. 
                Our advanced self-testing kits provide instant, reliable results 
                for a healthier tomorrow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                  How It Works
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">99.8%</div>
                  <div className="text-sm text-gray-500 font-medium">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
                  <div className="text-sm text-gray-500 font-medium">Trusted Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                  <div className="text-sm text-gray-500 font-medium">Expert Support</div>
                </div>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="relative lg:h-[600px] hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Image Card */}
                <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-4 transform rotate-2 hover:rotate-0 transition-all duration-500 border border-gray-100">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50">
                     <Image
                      src="/product-images/Adobe Express - file (3).png"
                      alt="Featured Kit"
                      width={600}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Sampoorna Kit</h3>
                        <p className="text-blue-600 text-sm font-medium">Women's Health</p>
                      </div>
                      <div className="flex items-center bg-green-50 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 text-green-600 fill-current" />
                        <span className="ml-1 text-sm font-bold text-green-700">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-8 -right-12 z-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Safety First</p>
                      <p className="text-sm font-bold text-gray-900">FDA Approved</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-12 z-20 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow animation-delay-1000 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Lab Quality</p>
                      <p className="text-sm font-bold text-gray-900">100% Precise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(5%); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite ease-in-out;
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of professional healthcare testing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">{category.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-semibold">{category.products} Products</span>
                  <ArrowRight className="w-5 h-5 text-blue-600 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional-grade testing kits trusted by healthcare professionals and customers nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2">
                <div className="relative overflow-hidden bg-gray-50 h-64">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{product.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {product.shortName}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                    {product.originalPrice > product.price && (
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RTS Lifecare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Committed to delivering the highest standards of quality, safety, and reliability in diagnostic testing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by healthcare professionals and customers across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 text-sm">{testimonial.role}</div>
                    <div className="text-gray-600 text-sm">{testimonial.hospital}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About RTS Lifecare
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                RTS Lifecare India Pvt. Ltd. is an ISO 9001:2015 certified organization committed to 
                advancing healthcare through professional-grade diagnostic solutions. Operating from 
                Mumbai and Bhopal, we serve customers across India.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our dedicated team of healthcare professionals and researchers work tirelessly to develop 
                testing solutions that meet international quality standards while remaining accessible 
                to communities nationwide.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">ISO 9001</div>
                  <div className="text-gray-600 font-medium">Certified Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-gray-600 font-medium">Satisfied Customers</div>
                </div>
              </div>

              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More About Us
              </button>
            </div>
            
            <div className="relative">
              <Image
                src="/product-images/Adobe Express - file (9).png"
                alt="RTS Lifecare Laboratory"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Committed to the highest standards of quality, safety, and environmental responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                FDA Approved
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our products stands as a testament to our commitment to quality, safety, and efficacy. This assessment ensures that our products meet the highest standards of safety.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Dermatologically Tested
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our products have undergone rigorous testing by dermatologists to ensure they are safe and suitable for use on skin, helping you feel confident and cared for.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Certified Plastic Neutral
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring every ounce of plastic used is responsibly offset, making a positive impact on the environment by removing or recycling an equivalent amount of plastic waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe for healthcare insights and product updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 outline-none text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions about our products? We're here to help you choose the right testing solution.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+91-755-4052071</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@rtslifecare.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Locations</div>
                    <div className="text-gray-300">Mumbai & Bhopal, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                />
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
              <p className="text-gray-500 text-sm">
                Professional diagnostic testing solutions for better health outcomes across India.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#products" className="hover:text-blue-400 transition-colors">Products</a></li>
                <li><a href="#categories" className="hover:text-blue-400 transition-colors">Categories</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Returns</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2024 RTS Lifecare India Pvt. Ltd. All Rights Reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RTSLifecareV2;