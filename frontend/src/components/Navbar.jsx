import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Menu, X, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../apiConfig';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group text-decoration-none py-1">
          <img 
            src="/logo-transparent.png" 
            alt="AMP Ventures Logo" 
            className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 list-none p-0 m-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-700 bg-sky-50 border border-sky-200/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-700 bg-sky-50 border border-sky-200/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-700 bg-sky-50 border border-sky-200/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-700 bg-sky-50 border border-sky-200/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-700 bg-sky-50 border border-sky-200/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <Link 
            to="/readiness-score" 
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200"
          >
            <span>Free Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 shadow-md shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button 
            className="md:hidden p-2 rounded-lg transition-colors border text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b px-6 py-6 flex flex-col gap-3 transition-colors bg-white border-slate-200 shadow-lg">
          <Link 
            to="/" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-800 border-slate-100"
          >
            Home <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link 
            to="/about" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-800 border-slate-100"
          >
            About <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link 
            to="/services" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-800 border-slate-100"
          >
            Services <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link 
            to="/pricing" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-800 border-slate-100"
          >
            Pricing & Plans <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link 
            to="/blog" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-800 border-slate-100"
          >
            Blogs <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </Link>
          <Link 
            to="/readiness-score" 
            className="font-medium py-2 border-b flex justify-between items-center text-emerald-700 font-semibold border-slate-100"
          >
            Free Digital Audit Tool <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link 
            to="/admin" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-600 border-slate-100"
          >
            Admin Lead Portal <ArrowUpRight className="w-4 h-4" />
          </Link>
          
          <div className="pt-3 flex flex-col gap-2.5">
            <Link to="/contact" className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-center text-sm shadow-md shadow-sky-500/25">
              Start Your Project
            </Link>
            <a 
              href={getWhatsAppUrl("Hi AMP Ventures, I would like to discuss taking my business online.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3 rounded-xl font-semibold text-center text-sm flex items-center justify-center gap-2 border bg-sky-50 border-sky-200 text-sky-700"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
