import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, MessageSquare, ShieldCheck, 
  Star, Clock, CheckCircle2, Lock, Sparkles, MapPin 
} from 'lucide-react';
import { getWhatsAppUrl } from '../apiConfig';

// Lightweight animated counter component
function AnimatedCounter({ value, suffix = '', duration = 1.0 }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value, 10) || 0;

  useEffect(() => {
    let start = 0;
    const stepTime = 20;
    const totalSteps = (duration * 1000) / stepTime;
    const increment = numericValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return (
    <span>
      {numericValue ? count : value}{suffix}
    </span>
  );
}

export default function HeroSection() {
  const [mockActiveSlot, setMockActiveSlot] = useState('4:30 PM');
  const [mockBooked, setMockBooked] = useState(false);

  const handleMockBook = () => {
    setMockBooked(true);
    setTimeout(() => setMockBooked(false), 3500);
  };

  return (
    <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Soft natural emerald ambient glow for light background */}
      <div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Clean Editorial Copy & CTAs (7 Columns) */}
          <motion.div 
            className="lg:col-span-7 text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Kicker Pill */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-5 shadow-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>For Offline & Local Businesses</span>
            </motion.div>

            {/* Simplified Dominant Display H1 */}
            <motion.h1 
              className="font-display text-4xl sm:text-6xl lg:text-[4.2rem] font-bold text-slate-900 tracking-[-0.035em] leading-[1.08] mb-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              Get More Customers <br />
              <span className="text-emerald-600">Without Ads</span>
            </motion.h1>

            {/* Direct Plain English Subheadline */}
            <motion.p 
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              We build high-converting websites for businesses across all niches — so customers can book you on WhatsApp, discover your services, and find you #1 on Google Maps.
            </motion.p>

            {/* Two-Tier CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              {/* Primary Light Blue CTA */}
              <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/readiness-score" 
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/25 text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Get Free Digital Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Secondary White Button with Dark Border & Dark Text */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/pricing" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Explore 3 Tiers & Pricing</span>
                </Link>
              </motion.div>

              {/* WhatsApp Link */}
              <a 
                href={getWhatsAppUrl("Hi AMP Ventures, I'd like a website for my local business.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 px-3 py-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Or WhatsApp Ankit</span>
              </a>
            </motion.div>

            {/* Human Proof Guarantees in Light Style */}
            <motion.div 
              className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  <AnimatedCounter value="5" suffix="–7 Days" />
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Ready to Launch</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight">
                  <AnimatedCounter value="100" suffix="%" />
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">You Own the Code</div>
              </div>
              <div>
                <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  ₹0
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-medium">Monthly Platform Fees</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Realistic Light Browser Product Mockup (5 Columns) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          >
            {/* The Browser Chrome Container (Clean Light Style) */}
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-300/60 overflow-hidden">
              
              {/* Browser Header Bar */}
              <div className="px-4 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                {/* Real-looking URL address bar */}
                <div className="flex-1 max-w-[280px] px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-600 flex items-center justify-center gap-1.5 truncate shadow-2xs">
                  <Lock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">thevelvetroom-spa.com</span>
                </div>
                <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  LIVE
                </div>
              </div>

              {/* Browser Inner Webpage Demo (Light Theme) */}
              <div className="p-4 sm:p-5 bg-white space-y-4">
                
                {/* Demo Nav */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      VR
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">The Velvet Room</div>
                      <div className="text-[10px] text-slate-500">Luxury Wellness & Spa</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Open until 9 PM
                  </div>
                </div>

                {/* Demo Hero Banner with Real Photo */}
                <div className="relative rounded-xl overflow-hidden h-36 sm:h-44 group border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" 
                    alt="The Velvet Room Salon Interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-end p-3.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300">Featured Service</span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">Aromatherapy Spa & Hair Styling</h3>
                  </div>
                </div>

                {/* Interactive Booking Module Simulation in Light Mode */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-900">Select Appointment Slot</span>
                    <span className="text-[11px] text-emerald-700 font-semibold">Instant Confirmation</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    {['2:00 PM', '4:30 PM', '6:00 PM'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setMockActiveSlot(slot)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                          mockActiveSlot === slot
                            ? 'bg-sky-500 text-white shadow-sm font-bold'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handleMockBook}
                    className="w-full py-2.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-sky-500/25"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{mockBooked ? '✓ Opening WhatsApp...' : `Book ${mockActiveSlot} via WhatsApp`}</span>
                  </button>
                </div>

                {/* Google Maps Real Local Proof Snippet in Light Mode */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">Google Maps Verified</div>
                      <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Rank #1 for "Luxury Spa Near Me"</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-md border border-amber-200">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-bold text-amber-700">4.9</span>
                    <span className="text-[10px] text-slate-500">(184)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Live Incoming Notification Badge in Light Style */}
            <motion.div 
              className="absolute -bottom-5 -left-4 sm:-left-6 p-3 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-xl max-w-[260px] sm:max-w-[290px] flex items-center gap-2.5"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="text-[11px] leading-snug">
                <span className="font-bold text-slate-900 block">New WhatsApp Booking</span>
                <span className="text-slate-600">Priya S. booked Facial Spa · ₹2,400</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
