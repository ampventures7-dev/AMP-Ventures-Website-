import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowUpRight, ShieldCheck, CheckCircle2, 
  TrendingUp, MessageSquare, MapPin, Clock, 
  Layers, PhoneCall, QrCode, Globe, Check, Award, Cpu, Zap
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

const UNIVERSAL_GROWTH_PILLARS = [
  {
    number: "01",
    icon: MapPin,
    title: "Local Search & Map Dominance",
    tagline: "Be the #1 business locals find on Google Search & Maps",
    deliverables: [
      "Targeted Google Maps #1 Ranking",
      "Local Citation & GEO Schema Markup",
      "Organic Inquiries Without Recurring Ads"
    ],
    metric: "#1 Local Rank",
    colorBadge: "bg-emerald-50 text-emerald-800 border-emerald-200"
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "1-Tap WhatsApp Conversion",
    tagline: "Turn visitors into paying customers in <30 seconds",
    deliverables: [
      "Direct Click-to-WhatsApp Booking",
      "Dynamic Pre-Filled Inquiry Templates",
      "Zero Dead Contact Forms or Lost Leads"
    ],
    metric: "+180% Inquiries",
    colorBadge: "bg-blue-50 text-blue-800 border-blue-200"
  },
  {
    number: "03",
    icon: Cpu,
    title: "Automated Operations & Ledgers",
    tagline: "Cut manual staff phone calls, paperwork & spreadsheets",
    deliverables: [
      "Custom Client Portals & Schedule Grids",
      "Automated WhatsApp Payment Alerts",
      "Digital Catalogs, Menus & Quotations"
    ],
    metric: "15+ Hrs Saved/Wk",
    colorBadge: "bg-indigo-50 text-indigo-800 border-indigo-200"
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "100% Asset Ownership & Speed",
    tagline: "Sub-second speed on global edge CDN with zero rent",
    deliverables: [
      "<0.4s Fast Core Web Vitals",
      "Zero Monthly Shopify or Plugin Rent",
      "Complete Source Code & Data Ownership"
    ],
    metric: "Zero Lock-In",
    colorBadge: "bg-teal-50 text-teal-800 border-teal-200"
  }
];

export default function Home() {
  return (
    <div className="home-page pt-20 bg-[#FDFBF7] text-stone-900">
      {/* 1. New Asymmetric Hero Section */}
      <HeroSection />

      {/* 2. Feature Grid Showcase (Longer Boxes with Clear Readable Typography) */}
      <section className="py-16 sm:py-20 bg-[#FAF7F0] border-t border-[#EAE4D8]">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#983B23] bg-[#FBEBE6] border border-[#F7D6CC] mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#C85A3C]" />
              <span>Full-Stack Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 mb-3 leading-tight">
              Engineered For <span className="text-[#C85A3C]">High-Conversion Local Growth</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Everything your website needs to turn visitors into paying customers.
            </p>
          </div>

          {/* 2-Column Balanced Grid with Longer Boxes & Clear Typography */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Feature 01: WhatsApp Booking (Medium Red / Terracotta Themed) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-rose-100/85 via-[#FFF1F2] to-white border border-rose-300 shadow-sm hover:shadow-md hover:border-rose-400 transition-all flex flex-col justify-between">
              <div className="mb-5">
                <div className="mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 font-bold text-xs">Feature 01</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-1.5 leading-snug">1-Click WhatsApp Booking</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Direct appointment booking and customer inquiries with zero friction.
                </p>
              </div>

              {/* WhatsApp Chat Simulation */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/90 border border-rose-200 space-y-2 font-sans shadow-2xs">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-rose-200 flex items-center justify-center text-[10px] font-bold text-rose-800 flex-shrink-0">U</div>
                  <div className="px-3 py-1.5 rounded-lg rounded-tl-none bg-rose-50/70 text-stone-800 border border-rose-200/80 text-xs leading-normal shadow-2xs">
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

            {/* Feature 02: Google Maps Search Dominance (Warm Amber Themed) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-amber-100/85 via-[#FFFBEB] to-white border border-amber-300 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between">
              <div className="mb-5">
                <div className="mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs">Feature 02</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-1.5 leading-snug">Google Maps Dominance</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Rank #1 on Google Maps when nearby clients search for your services.
                </p>
              </div>

              {/* Google Maps Ranking Proof */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/90 border border-amber-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-200/80 flex items-center justify-center text-amber-900">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">"Best Local Business Near Me"</div>
                    <div className="text-[11px] sm:text-xs text-amber-800 font-semibold mt-0.5">Rank #1 on Google Maps</div>
                  </div>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-amber-700 font-mono">4.9 ★</div>
              </div>
            </div>

            {/* Feature 03: Zero Subscription Lock-In (Purple Themed) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-purple-100/85 via-[#FAF5FF] to-white border border-purple-300 shadow-sm hover:shadow-md hover:border-purple-400 transition-all flex flex-col justify-between">
              <div className="mb-5">
                <div className="mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-300 font-bold text-xs">Feature 03</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-1.5 leading-snug">Zero Monthly Lock-In</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  No monthly platform subscriptions or recurring agency software fees.
                </p>
              </div>

              {/* Autonomy Proof Element */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/90 border border-purple-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-200/80 flex items-center justify-center text-purple-900">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">Direct Cloud Hosting</div>
                    <div className="text-[11px] sm:text-xs text-purple-800 font-medium mt-0.5">Pay only for basic domain & server</div>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-purple-100 text-purple-900 border border-purple-300 font-bold">Zero Lock-In</span>
              </div>
            </div>

            {/* Feature 04: Loads Instantly (Teal / Sage Themed) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-teal-100/85 via-[#F0FDFA] to-white border border-teal-300 shadow-sm hover:shadow-md hover:border-teal-400 transition-all flex flex-col justify-between">
              <div className="mb-5">
                <div className="mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-900 border border-teal-300 font-bold text-xs">Feature 04</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-1.5 leading-snug">Loads Instantly</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Ultra-fast page loads so visitors never bounce before exploring.
                </p>
              </div>

              {/* Compressed 3-Stat Horizontal Strip */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/90 border border-teal-200 flex items-center justify-around text-center shadow-2xs">
                <div>
                  <div className="text-sm sm:text-base font-bold text-teal-800 font-mono leading-tight">&lt; 0.4s</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-0.5">Load Time</div>
                </div>
                <div className="h-6 w-px bg-teal-200" />
                <div>
                  <div className="text-sm sm:text-base font-bold text-teal-700 font-mono leading-tight">100/100</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-0.5">SEO Score</div>
                </div>
                <div className="h-6 w-px bg-teal-200" />
                <div>
                  <div className="text-sm sm:text-base font-bold text-teal-800 font-mono leading-tight">99.9%</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-0.5">Uptime SLA</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Instant Website Mockup Generator (Seamless Elevated Island Studio) */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF7F0] via-white to-[#FDFBF7] relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* Elevated Dark Studio Module with Soft Ambient Glow */}
          <div className="relative rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl shadow-slate-900/20 p-5 sm:p-8 lg:p-10 overflow-hidden">
            {/* Ambient Multi-Hue Glow */}
            <div 
              className="absolute -top-24 -left-24 w-96 h-96 bg-[#C85A3C]/10 blur-[120px] rounded-full pointer-events-none" 
              aria-hidden="true" 
            />
            <div 
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2C4438]/15 blur-[120px] rounded-full pointer-events-none" 
              aria-hidden="true" 
            />
            
            <div className="relative z-10">
              <MockupGenerator />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Universal 4-Pillar Digital Engine (Built for All Niches) */}
      <section className="py-20 bg-[#FDFBF7] border-t border-[#EAE4D8]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#983B23] bg-[#FBEBE6] border border-[#F7D6CC] mb-3 shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-[#C85A3C]" />
              <span>Universal Growth Blueprint • All Industries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 mb-3">
              Every Offline Business Needs <span className="text-[#C85A3C]">4 Digital Engines</span> to Dominate
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether you run a manufacturing unit, hospital, school, construction firm, hotel, or retail showroom — our architecture turns your offline business into an automated revenue generator.
            </p>
          </div>

          {/* 4 Universal Pillars Grid - With Shaded Tints */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {UNIVERSAL_GROWTH_PILLARS.map((pillar, idx) => {
              const IconComp = pillar.icon;
              // Clean shaded color theme per pillar box
              const pillarBoxGradients = [
                'bg-gradient-to-b from-emerald-100/80 via-[#F0FDF4] to-white border-emerald-300 hover:border-emerald-400',
                'bg-gradient-to-b from-sky-100/80 via-[#F0F9FF] to-white border-sky-300 hover:border-sky-400',
                'bg-gradient-to-b from-amber-100/80 via-[#FFFBEB] to-white border-amber-300 hover:border-amber-400',
                'bg-gradient-to-b from-rose-100/80 via-[#FFF1F2] to-white border-rose-300 hover:border-rose-400'
              ];
              const boxGradient = pillarBoxGradients[idx % 4];

              return (
                <div 
                  key={idx}
                  className={`p-6 rounded-2xl ${boxGradient} border shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-mono font-extrabold text-stone-400 group-hover:text-[#C85A3C] transition-colors">
                        Pillar {pillar.number}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${pillar.colorBadge}`}>
                        {pillar.metric}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white/80 border border-stone-200/60 text-stone-800 group-hover:text-[#C85A3C] flex items-center justify-center mb-4 transition-colors shadow-2xs">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-stone-900 leading-snug mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium mb-4 leading-relaxed">
                      {pillar.tagline}
                    </p>

                    <ul className="space-y-2 p-0 m-0 list-none pt-3 border-t border-stone-200/60">
                      {pillar.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-stone-700 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-stone-200/60">
                    <Link 
                      to="/services" 
                      className="w-full py-2.5 rounded-xl bg-white hover:bg-[#2C4438] hover:text-white text-xs font-bold text-stone-700 text-center border border-stone-300/80 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <span>Explore Engineering</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cross-Industry Real Proof Strip */}
          <div className="mt-12 p-6 rounded-2xl bg-[#FAF7F0] border border-[#EAE4D8] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                Verified Across Diverse Industries
              </div>
              <div className="text-xs sm:text-sm font-semibold text-stone-800">
                Civil Infrastructure • Education & Schools • Healthcare & NGOs • Manufacturing • Hospitality & ERP • Luxury Retail
              </div>
            </div>
            <Link
              to="/portfolio"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-[#C85A3C] hover:bg-[#B44C30] text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>Inspect Live Client Systems</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
