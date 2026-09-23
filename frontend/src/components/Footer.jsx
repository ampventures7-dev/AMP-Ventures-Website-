import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Award, ArrowUp, ArrowUpRight, MessageSquare, Phone, Mail } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, getWhatsAppUrl } from '../apiConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#064e3b] bg-[#022c22] text-emerald-100 pt-16 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Certification */}
          <div>
            <Link to="/" className="inline-block mb-4 group">
              <div className="bg-white/95 rounded-xl px-3 py-1.5 shadow-sm inline-block group-hover:bg-white transition-all">
                <img 
                  src="/logo-transparent.png" 
                  alt="AMP Ventures Logo" 
                  className="h-9 w-auto object-contain" 
                />
              </div>
            </Link>
            <p className="text-xs text-emerald-200/75 leading-relaxed mb-6">
              Specialized web engineering, WhatsApp booking automations, and local Google SEO engineered for offline business growth.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#064e3b]/80 border border-emerald-500/30 text-[11px] font-semibold text-emerald-200 shadow-inner">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Rapid 5-Day Delivery • Zero Monthly Rent</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-300 mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs text-emerald-200/70 list-none p-0">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about#leadership" className="hover:text-white transition-colors">Co-Founders & Leadership</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">3-Tier Solutions</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Transparent Pricing</Link></li>
              <li><Link to="/readiness-score" className="hover:text-white transition-colors">Digital Audit Score</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Studio</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-300 mb-4">Solutions</h4>
            <ul className="space-y-2 text-xs text-emerald-200/70 list-none p-0">
              <li><Link to="/services#tier-1" className="hover:text-white transition-colors">High-Converting Website</Link></li>
              <li><Link to="/services#tier-2" className="hover:text-white transition-colors">WhatsApp Booking Automation</Link></li>
              <li><Link to="/services#tier-3" className="hover:text-white transition-colors">3D & AI Interactive Engine</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Google Maps Local SEO</Link></li>
              <li><Link to="/readiness-score" className="text-emerald-300 font-semibold hover:underline">Free Digital Audit Tool</Link></li>
            </ul>
          </div>

          {/* Column 4: Let's Connect */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-300 mb-4">Direct Contact</h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/70 list-none p-0">
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href="mailto:ampventures7@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ampventures7@gmail.com</span>
                </a>
              </li>
              <li style={{ marginTop: '0.8rem' }} className="flex flex-col gap-2.5 items-start">
                <a 
                  href={getWhatsAppUrl("Hi AMP Ventures, I'd like to consult about a website for my business.")} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#064e3b] border border-emerald-500/40 text-emerald-100 text-xs font-bold hover:bg-emerald-600 hover:text-white transition-all shadow-md shadow-emerald-950/40"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Direct Chat</span>
                </a>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-black/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Follow Up</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px bg-[#064e3b]/80 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/pricing" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>

          <div>
            © {new Date().getFullYear()} AMP Ventures Web Engineering Agency. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-emerald-300/60">Engineering for <strong className="text-emerald-300">Offline Growth</strong></span>
            <button 
              onClick={scrollToTop} 
              className="w-8 h-8 rounded-lg flex items-center justify-center text-emerald-200 bg-[#064e3b] border border-emerald-500/30 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-xs" 
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
