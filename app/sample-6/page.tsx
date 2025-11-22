'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Search,
  User,
  ArrowRight,
  Star,
  ShieldCheck,
  Activity,
  Truck,
  Clock,
  Menu,
  X,
  CheckCircle2,
  Plus
} from 'lucide-react';

const RTSLifecareV6 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

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
      name: "Sampoorna - Vaginal Inflammation Test",
      description: "Complete peace of mind with our advanced self-testing solution.",
      price: 120,
      originalPrice: 150,
      image: "/product-images/Adobe Express - file (3).png",
      rating: 4.9,
      reviews: 128,
      category: "Women's Care",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Sanket - Urine Analysis Kit",
      description: "Monitor 14 essential health parameters from the comfort of home.",
      price: 90,
      originalPrice: 110,
      image: "/product-images/Adobe Express - file (4).png",
      rating: 4.7,
      reviews: 94,
      category: "Diagnostic",
      tag: "Essential"
    },
    {
      id: 3,
      name: "Aarogyam - UTI Detection",
      description: "Early detection for better health management and quick relief.",
      price: 80,
      originalPrice: 100,
      image: "/product-images/Adobe Express - file (5).png",
      rating: 4.8,
      reviews: 312,
      category: "UTI Care",
      tag: "Popular"
    },
    {
      id: 4,
      name: "Jeevan Chetna - Saliva Test",
      description: "Non-invasive testing for rapid and accurate health insights.",
      price: 150,
      originalPrice: 180,
      image: "/product-images/Adobe Express - file (6).png",
      rating: 4.6,
      reviews: 76,
      category: "Wellness",
      tag: "New"
    }
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Clinically Validated",
      desc: "FDA approved & ISO certified accuracy."
    },
    {
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      title: "Instant Results",
      desc: "Get clear results in under 15 minutes."
    },
    {
      icon: <Truck className="w-6 h-6 text-purple-600" />,
      title: "Discreet Shipping",
      desc: "100% private packaging & delivery."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "24/7 Support",
      desc: "Expert medical guidance anytime."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              R
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              RTS<span className="font-light">Lifecare</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Products', 'Science', 'About', 'Support'].map((item) => (
              <a key={item} href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <Search className="w-5 h-5 text-slate-600" />
            </button>
            <button className="hidden md:flex p-2 hover:bg-slate-100 rounded-full transition-colors">
              <User className="w-5 h-5 text-slate-600" />
            </button>
            <button className="relative p-2 hover:bg-slate-100 rounded-full transition-colors group">
              <ShoppingCart className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent -z-10 rounded-bl-[100px]"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">New Generation Diagnostics</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900">
              Lab Accuracy.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Home Comfort.
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Experience the future of healthcare with our professional-grade self-testing kits. Accurate, private, and instant results when you need them most.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2">
                Shop Collection <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all hover:border-slate-300">
                How it Works
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                    U{i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="font-medium text-slate-900">4.9/5</span> <span className="text-slate-500">from 10k+ reviews</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-50 rounded-full opacity-50 blur-2xl"></div>
              <Image
                src="/product-images/Adobe Express - file (3).png"
                alt="Hero Product"
                fill
                className="object-contain drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Floating Cards */}
              <div className="absolute -right-4 top-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Accuracy Rate</p>
                    <p className="text-sm font-bold text-slate-900">99.9%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20 animate-float animation-delay-1000">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Result Time</p>
                    <p className="text-sm font-bold text-slate-900">15 Mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="p-3 bg-slate-50 rounded-lg shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Scientific Solutions</h2>
              <p className="text-slate-600 max-w-xl">Explore our range of certified self-testing kits designed for accuracy and ease of use.</p>
            </div>
            <div className="flex gap-2 bg-white p-1 rounded-full border border-slate-200 shadow-sm">
              {['All', 'Women\'s Care', 'Diagnostic'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'bg-slate-900 text-white shadow-md' 
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl p-4 border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative aspect-[4/5] bg-slate-50 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  </div>
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:text-white">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <div className="text-xs font-medium text-blue-600 uppercase tracking-wide">{product.category}</div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-2">{product.description}</p>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 line-through">₹{product.originalPrice}</span>
                      <span className="text-lg font-bold text-slate-900">₹{product.price}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {product.rating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid / Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why RTS Lifecare?</h2>
            <p className="text-slate-600 text-lg">We combine medical expertise with consumer convenience to bring you the best in personal diagnostics.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Large Card */}
            <div className="md:col-span-2 bg-blue-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
              <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Empowering Your Health Journey</h3>
                <p className="text-slate-600 mb-8 text-lg">Take control of your wellbeing with tools that were once only available in hospitals. Simple, fast, and reliable.</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                  Read Our Story
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-3/4 opacity-80 translate-x-1/4 translate-y-1/4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700">
                <Image
                  src="/product-images/Adobe Express - file (9).png"
                  alt="Story"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Stacked Cards */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                <ShieldCheck className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Privacy First</h3>
                <p className="text-slate-400 text-sm">Your health data and results are completely confidential. We prioritize your privacy above all.</p>
              </div>
              
              <div className="flex-1 bg-purple-50 rounded-3xl p-8 flex flex-col justify-center hover:bg-purple-100 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Track Progress</h3>
                <p className="text-slate-600 text-sm">Monitor your health trends over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalist Newsletter */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay Healthy, Stay Updated</h2>
          <p className="text-slate-600 mb-8">Join our community for health tips, new product alerts, and exclusive offers.</p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-slate-400 mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">R</div>
                <span className="font-bold text-lg">RTS Lifecare</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Revolutionizing personal healthcare with accessible, accurate, and affordable diagnostic solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Shop</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Bundles</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">© 2025 RTS Lifecare. All rights reserved.</p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-slate-100 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center cursor-pointer">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </div>
              <div className="w-8 h-8 bg-slate-100 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-center cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
};

export default RTSLifecareV6;
