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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-[#070e24]/95 backdrop-blur-md border-b border-sky-950/80 shadow-lg shadow-[#020617]/50">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-20 relative">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group text-decoration-none py-1 z-10">
          <div className="bg-white/95 rounded-xl px-2.5 py-1 transition-all group-hover:bg-white shadow-sm flex items-center">
            <img 
              src="/logo-transparent.png" 
              alt="AMP Ventures Logo" 
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 list-none p-0 m-0 absolute left-1/2 -translate-x-1/2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-300 bg-sky-950/90 border border-sky-500/40 font-semibold shadow-xs shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-sky-950/40'
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-300 bg-sky-950/90 border border-sky-500/40 font-semibold shadow-xs shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-sky-950/40'
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
                    ? 'text-sky-300 bg-sky-950/90 border border-sky-500/40 font-semibold shadow-xs shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-sky-950/40'
                }`
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-300 bg-sky-950/90 border border-sky-500/40 font-semibold shadow-xs shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-sky-950/40'
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-sky-300 bg-sky-950/90 border border-sky-500/40 font-semibold shadow-xs shadow-sky-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-sky-950/40'
                }`
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3 z-10">
          <Link 
            to="/readiness-score" 
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold transition-all text-sky-200 bg-[#0f1b3d] border border-sky-900/80 hover:bg-[#162758] hover:text-white hover:border-sky-400/50 shadow-xs"
          >
            <span>Free Audit</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <button 
            className="md:hidden p-2 rounded-lg transition-colors border text-slate-300 hover:text-white bg-[#0f1b3d] hover:bg-[#162758] border-sky-900/80"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b px-6 py-6 flex flex-col gap-3 transition-colors bg-[#070e24] border-sky-950 shadow-2xl">
          <Link 
            to="/" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-200 hover:text-white border-[#0f1b3d]"
          >
            Home <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link 
            to="/services" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-200 hover:text-white border-[#0f1b3d]"
          >
            Services <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link 
            to="/pricing" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-200 hover:text-white border-[#0f1b3d]"
          >
            Pricing & Plans <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link 
            to="/about" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-200 hover:text-white border-[#0f1b3d]"
          >
            About Us <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link 
            to="/blog" 
            className="font-medium py-2 border-b flex justify-between items-center text-slate-200 hover:text-white border-[#0f1b3d]"
          >
            Blogs <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </Link>
          <Link 
            to="/readiness-score" 
            className="font-medium py-2 border-b flex justify-between items-center text-emerald-400 font-semibold border-[#0f1b3d]"
          >
            Free Digital Audit Tool <ArrowUpRight className="w-4 h-4" />
          </Link>
          
          <div className="pt-3 flex flex-col gap-2.5">
            <Link to="/contact" className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-center text-sm shadow-md shadow-sky-500/25">
              Start Your Project
            </Link>
            <a 
              href={getWhatsAppUrl("Hi AMP Ventures, I would like to discuss taking my business online.")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-3 rounded-xl font-semibold text-center text-sm flex items-center justify-center gap-2 border bg-[#0f1b3d] border-sky-900/80 text-sky-300 hover:bg-[#162758]"
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
