import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, MessageSquare, ShieldCheck, 
  CheckCircle2, Lock, Sparkles, Zap, Phone 
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

  return (
    <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-16 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
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
              We build high-converting websites for offline businesses so local customers can book you on WhatsApp and find you #1 on Google Maps.
            </motion.p>

            {/* Two-Tier CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/readiness-score" 
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-sky-500 hover:bg-sky-600 transition-colors shadow-sm text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Get Free Digital Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="/pricing" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-colors shadow-xs text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Explore 3 Tiers & Pricing</span>
                </Link>
              </motion.div>

              <a 
                href={getWhatsAppUrl("Hi AMP Ventures, I'd like a website for my local business.")} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-sky-700 hover:text-sky-800 px-3 py-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Or WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Item 3: Above-the-Fold Services Discovery Quick-Bar */}
            <motion.div
              className="pt-5 border-t border-slate-200/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.22 }}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2">
                <span>Core Capabilities</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Link 
                  to="/services#capabilities" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 text-xs font-semibold transition-all shadow-2xs hover:scale-105"
                >
                  <span>🌐</span> Custom Websites
                </Link>
                <Link 
                  to="/services#capabilities" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 text-xs font-semibold transition-all shadow-2xs hover:scale-105"
                >
                  <span>⚡</span> SaaS & Web Apps
                </Link>
                <Link 
                  to="/services#capabilities" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 text-xs font-semibold transition-all shadow-2xs hover:scale-105"
                >
                  <span>💬</span> WhatsApp Automation
                </Link>
                <Link 
                  to="/services#capabilities" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 text-xs font-semibold transition-all shadow-2xs hover:scale-105"
                >
                  <span>🎯</span> Google & Meta Ads
                </Link>
                <Link 
                  to="/services#capabilities" 
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-900 hover:text-white border border-slate-200 text-slate-700 text-xs font-semibold transition-all shadow-2xs hover:scale-105"
                >
                  <span>📈</span> Advanced SEO
                </Link>
              </div>
            </motion.div>

            {/* Human Proof Guarantees in Light Style */}
            <motion.div 
              className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-4 max-w-lg"
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

          {/* RIGHT COLUMN: Laptop + Smartphone Device Showcase (Option 3) */}
          <motion.div 
            className="lg:col-span-5 relative mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          >
            {/* Ambient Multi-Hue Backlight Glow */}
            <div 
              className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 via-emerald-500/20 to-indigo-500/15 rounded-3xl blur-2xl opacity-75 pointer-events-none" 
              aria-hidden="true"
            />

            {/* Top Floating Badge: 100% Mobile & Desktop */}
            <motion.div
              className="absolute -top-3.5 right-2 sm:right-6 z-30 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md flex items-center gap-1.5 text-xs font-semibold text-slate-800"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% Mobile & Desktop Ready</span>
            </motion.div>

            {/* LAPTOP FRAME CONTAINER */}
            <div className="relative z-10 w-full max-w-[500px] mx-auto lg:max-w-none">
              
              {/* Laptop Screen Bezel */}
              <div className="rounded-t-2xl bg-slate-900 pt-2.5 px-2.5 pb-0 shadow-2xl border border-slate-800">
                {/* Laptop Camera Notch */}
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-auto mb-1.5" />

                {/* Laptop Screen Interior (Website Mockup) */}
                <div className="rounded-t-lg bg-slate-950 overflow-hidden border border-slate-800/80 aspect-[16/10.5] flex flex-col text-left">
                  
                  {/* Browser Bar */}
                  <div className="px-2.5 py-1.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                      <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="px-2.5 py-0.5 rounded-full bg-slate-800/90 border border-slate-700/60 font-mono text-[9px] text-slate-300 flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5 text-emerald-400" />
                      <span>yourbrand.com</span>
                    </div>
                    <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/60">
                      ⚡ 99 Speed
                    </span>
                  </div>

                  {/* Website Canvas inside Laptop */}
                  <div className="p-3.5 sm:p-4 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 flex-1 flex flex-col justify-between">
                    {/* Website Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-sky-500 to-emerald-400 flex items-center justify-center font-black text-[9px] text-slate-950">
                          A
                        </div>
                        <span className="text-[11px] font-bold text-white tracking-tight">Your Business</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 text-[9px] text-slate-400 font-medium">
                        <span className="text-white">Home</span>
                        <span>Services</span>
                        <span>Pricing</span>
                      </div>
                      <span className="text-[9px] font-semibold bg-sky-500 text-white px-2 py-0.5 rounded-md">
                        Contact
                      </span>
                    </div>

                    {/* Website Hero */}
                    <div className="py-2.5 space-y-1.5">
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-semibold text-emerald-400">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Designed to Convert Visitors</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug">
                        Modern Websites That Bring Real Customers
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-relaxed max-w-[280px]">
                        Fast loading, sleek design, and built-in WhatsApp & phone leads for any business.
                      </p>
                      
                      <div className="flex items-center gap-2 pt-1">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white font-bold text-[9px]">
                          Get Free Quote
                        </span>
                        <span className="px-2 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 font-medium text-[9px]">
                          Live Demo
                        </span>
                      </div>
                    </div>

                    {/* Mini 3-Pillar Results Bar */}
                    <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-slate-800/70 text-center">
                      <div className="p-1 rounded bg-slate-900/80 border border-slate-800">
                        <div className="text-[10px] font-bold text-emerald-400 font-mono">0.4s</div>
                        <div className="text-[8px] text-slate-400">Fast Speed</div>
                      </div>
                      <div className="p-1 rounded bg-slate-900/80 border border-slate-800">
                        <div className="text-[10px] font-bold text-sky-400 font-mono">100%</div>
                        <div className="text-[8px] text-slate-400">Custom Code</div>
                      </div>
                      <div className="p-1 rounded bg-slate-900/80 border border-slate-800">
                        <div className="text-[10px] font-bold text-amber-400 font-mono">#1 Rank</div>
                        <div className="text-[8px] text-slate-400">SEO Ready</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Laptop Keyboard Chassis Base */}
              <div className="h-3 sm:h-3.5 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-b-xl border-t border-slate-700/80 relative shadow-xl flex items-center justify-center">
                <div className="w-14 sm:w-16 h-1 rounded-b-md bg-slate-600" />
              </div>
            </div>

            {/* SMARTPHONE FRAME (Overlapping bottom-right) */}
            <motion.div
              className="absolute -bottom-5 sm:-bottom-6 -right-2 sm:-right-4 w-[130px] sm:w-[150px] z-20"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              {/* Phone Shell */}
              <div className="rounded-[24px] bg-slate-900 p-1.5 shadow-2xl border-2 border-slate-700/90">
                {/* Dynamic Island Pill */}
                <div className="w-8 h-2 bg-black rounded-full mx-auto mb-1" />

                {/* Phone Screen Canvas */}
                <div className="rounded-[18px] bg-slate-950 p-2 border border-slate-800/80 space-y-1.5 text-left">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-800 text-[8px]">
                    <span className="font-bold text-white">YourBrand</span>
                    <span className="text-emerald-400 font-semibold">● Live</span>
                  </div>

                  <div className="space-y-1 py-1">
                    <div className="text-[9px] font-bold text-white leading-tight">
                      Mobile First Experience
                    </div>
                    <div className="text-[7.5px] text-slate-400 leading-tight">
                      Tap below to reach customers directly.
                    </div>
                  </div>

                  {/* 1-Tap WhatsApp Lead Button */}
                  <div className="p-1 rounded-md bg-emerald-600 text-white font-bold text-[8px] text-center flex items-center justify-center gap-1 shadow-xs">
                    <MessageSquare className="w-2.5 h-2.5" />
                    <span>WhatsApp Chat</span>
                  </div>

                  {/* Direct Call Button */}
                  <div className="p-1 rounded-md bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-[8px] text-center flex items-center justify-center gap-1">
                    <Phone className="w-2.5 h-2.5 text-sky-400" />
                    <span>Call Directly</span>
                  </div>

                  {/* Home Indicator */}
                  <div className="w-7 h-0.5 bg-slate-600 rounded-full mx-auto mt-1" />
                </div>
              </div>
            </motion.div>

            {/* Bottom-Left Floating Badge: Works for all niches */}
            <motion.div 
              className="absolute -bottom-4 left-0 sm:left-2 p-2.5 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-lg max-w-[220px] flex items-center gap-2 z-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
            >
              <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-[10px] leading-tight text-slate-700">
                <strong className="block text-slate-900 font-bold">Built for Every Niche</strong>
                Stores, clinics, agencies, real estate & more.
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
