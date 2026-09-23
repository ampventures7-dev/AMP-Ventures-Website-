import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowUpRight, ShieldCheck, CheckCircle2, 
  TrendingUp, MessageSquare, MapPin, Clock, 
  Layers, PhoneCall, QrCode, Globe, Check, Award
} from 'lucide-react';
import MockupGenerator from '../components/MockupGenerator.jsx';
import HeroSection from '../components/HeroSection.jsx';
import { getWhatsAppUrl } from '../apiConfig';

const TRUST_BADGES = [
  { icon: Award, title: 'High-Performance Code', desc: 'Sub-Second Core Web Vitals' },
  { icon: ShieldCheck, title: 'Enterprise Cloud Infra', desc: 'Fast Global CDN & SSL Secured' },
  { icon: Clock, title: '5–7 Days Delivery', desc: 'Rapid Production Turnaround' },
  { icon: TrendingUp, title: 'Zero Platform Lock-In', desc: 'No Recurring Software Fees' },
];

const TRANSFORMATION_ITEMS = [
  {
    icon: MapPin,
    industry: 'Salons & Luxury Spas',
    metric: '+145% Bookings',
    badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    offlinePoints: [
      'Manual Calls',
      'Empty Slots',
      'Zero Reviews'
    ],
    solutionPoints: [
      'WhatsApp Booking',
      'Digital Menu',
      'Auto Reviews'
    ]
  },
  {
    icon: QrCode,
    industry: 'Restaurants & Cafes',
    metric: '+210% Direct Orders',
    badgeClass: 'bg-sky-50 text-sky-700 border border-sky-200',
    offlinePoints: [
      'High Commissions',
      'Paper Menus',
      'Slow Ordering'
    ],
    solutionPoints: [
      'QR Ordering',
      '3D Food',
      'Instant Tables'
    ]
  },
  {
    icon: Globe,
    industry: 'Retail & Boutiques',
    metric: '+180% Repeat Sales',
    badgeClass: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    offlinePoints: [
      'Limited Hours',
      'No Catalog',
      'Zero Reach'
    ],
    solutionPoints: [
      '24/7 Catalog',
      'WhatsApp Checkout',
      'Direct Alerts'
    ]
  }
];

export default function Home() {
  return (
    <div className="home-page pt-20 bg-white text-slate-900">
      {/* 1. New Asymmetric Hero Section */}
      <HeroSection />

      {/* 2. Feature Grid Showcase (Longer Boxes with Clear Readable Typography) */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-3 leading-tight">
              Engineered For <span className="text-emerald-600">High-Conversion Local Growth</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything your website needs to turn visitors into paying customers.
            </p>
          </div>

          {/* 2-Column Balanced Grid with Longer Boxes & Clear Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Feature 01: WhatsApp Booking (Medium Red Themed) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-red-100/70 via-red-50/40 to-white border border-red-300/80 shadow-xs hover:shadow-md hover:border-red-400 transition-all flex flex-col justify-between">
              <div className="mb-5">
                <div className="mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-700 border border-red-300 font-bold text-xs">Feature 01</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 leading-snug">1-Click WhatsApp Booking</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Direct appointment booking and customer inquiries with zero friction.
                </p>
              </div>

              {/* WhatsApp Chat Simulation */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-red-50/80 border border-red-200/80 space-y-2 font-sans">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center text-[10px] font-bold text-red-800 flex-shrink-0">U</div>
                  <div className="px-3 py-1.5 rounded-lg rounded-tl-none bg-white text-slate-800 border border-red-200/80 text-xs leading-normal shadow-2xs">
                    Can I book a slot for tomorrow at 4 PM?
                  </div>
                </div>
                <div className="flex items-start justify-end gap-2">
                  <div className="px-3 py-1.5 rounded-lg rounded-tr-none bg-emerald-600 text-white text-xs leading-normal shadow-2xs font-medium">
                    ✓ Confirmed! Slot booked for 4:00 PM.
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">✓</div>
                </div>
              </div>
            </div>

            {/* Feature 02: Google Maps Search Dominance (Medium Brown / Amber Themed) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-amber-100/70 via-amber-50/40 to-white border border-amber-300/80 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between">
              <div className="mb-5">
                <div className="mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs">Feature 02</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 leading-snug">Google Maps Dominance</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Rank #1 on Google Maps when nearby clients search for your services.
                </p>
              </div>

              {/* Google Maps Ranking Proof */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-200/80 flex items-center justify-center text-amber-900">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">"Best Local Business Near Me"</div>
                    <div className="text-[11px] sm:text-xs text-amber-800 font-semibold mt-0.5">Rank #1 on Google Maps</div>
                  </div>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-amber-700 font-mono">4.9 ★</div>
              </div>
            </div>

            {/* Feature 03: Zero Subscription Lock-In (Purple Themed) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-purple-100/70 via-purple-50/40 to-white border border-purple-300/80 shadow-xs hover:shadow-md hover:border-purple-400 transition-all flex flex-col justify-between">
              <div className="mb-5">
                <div className="mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-300 font-bold text-xs">Feature 03</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 leading-snug">Zero Monthly Lock-In</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  No monthly platform subscriptions or recurring agency software fees.
                </p>
              </div>

              {/* Autonomy Proof Element */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-purple-50/80 border border-purple-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-200/80 flex items-center justify-center text-purple-900">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Direct Cloud Hosting</div>
                    <div className="text-[11px] sm:text-xs text-purple-800 font-medium mt-0.5">Pay only for basic domain & server</div>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 border border-purple-300 font-bold">Zero Lock-In</span>
              </div>
            </div>

            {/* Feature 04: Loads Instantly (Deep Ocean Blue Themed from User) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#08345b]/15 via-[#08345b]/5 to-white border border-[#08345b]/30 shadow-xs hover:shadow-md hover:border-[#08345b]/60 transition-all flex flex-col justify-between">
              <div className="mb-5">
                <div className="mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#08345b]/10 text-[#08345b] border border-[#08345b]/30 font-bold text-xs">Feature 04</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 leading-snug">Loads Instantly</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Ultra-fast page loads so visitors never bounce before exploring.
                </p>
              </div>

              {/* Compressed 3-Stat Horizontal Strip */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#08345b]/5 border border-[#08345b]/20 flex items-center justify-around text-center">
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#08345b] font-mono leading-tight">&lt; 0.4s</div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">Load Time</div>
                </div>
                <div className="h-6 w-px bg-[#08345b]/20" />
                <div>
                  <div className="text-sm sm:text-base font-bold text-sky-600 font-mono leading-tight">100/100</div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">SEO Score</div>
                </div>
                <div className="h-6 w-px bg-[#08345b]/20" />
                <div>
                  <div className="text-sm sm:text-base font-bold text-[#08345b] font-mono leading-tight">99.9%</div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">Uptime SLA</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Instant Website Mockup Generator (Dark Rich Premium Grey Section) */}
      <section className="py-16 sm:py-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden shadow-2xl">
        {/* Dark Rich Premium Ambient Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-emerald-500/10 via-sky-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" 
          aria-hidden="true" 
        />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <MockupGenerator />
        </div>
      </section>

      {/* 5. Offline to Online Transformation Blueprint */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 mb-3 shadow-xs">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Transformation Blueprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              From Manual Struggles to <span className="text-emerald-600">Automated Growth</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              See how going online helps local businesses save time, get more customers, and grow daily revenue.
            </p>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden items-center justify-center gap-1.5 text-[11px] text-slate-500 font-semibold mb-4">
            <span>← Swipe between industries →</span>
          </div>

          <div className="mobile-snap-carousel md:grid md:grid-cols-3 gap-6 no-scrollbar">
            {TRANSFORMATION_ITEMS.map((item, idx) => (
              <div key={idx} className="mobile-snap-card p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">{item.industry}</h3>
                    <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] sm:text-[11px] whitespace-nowrap flex-shrink-0 shadow-xs ${item.badgeClass}`}>
                      {item.metric}
                    </span>
                  </div>

                  {/* Offline Bottleneck */}
                  <div className="mb-4 pb-4 border-b border-slate-100">
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-rose-600 mb-2">
                      ✕ Offline Bottleneck:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {item.offlinePoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-rose-500 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AMP Ventures Solution */}
                  <div className="mb-5">
                    <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-2">
                      ✓ AMP Growth Stack:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-800">
                      {item.solutionPoints.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/services" className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-800 text-center border border-slate-200 transition-all flex items-center justify-center gap-1.5">
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
